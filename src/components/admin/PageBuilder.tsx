import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Eye, Code, Save } from 'lucide-react';
import { pagesApi, pageSectionsApi, componentTemplatesApi } from '@/db/api';
import type { Page, PageSection, ComponentTemplate, PageComponent } from '@/types/index';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export default function PageBuilder() {
  const [pages, setPages] = useState<Page[]>([]);
  const [selectedPage, setSelectedPage] = useState<Page | null>(null);
  const [sections, setSections] = useState<PageSection[]>([]);
  const [templates, setTemplates] = useState<ComponentTemplate[]>([]);
  const [previewMode, setPreviewMode] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState<PageComponent | null>(null);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    loadPages();
    loadTemplates();
  }, []);

  useEffect(() => {
    if (selectedPage) {
      loadSections(selectedPage.id);
    }
  }, [selectedPage]);

  const loadPages = async () => {
    try {
      const data = await pagesApi.getAll();
      setPages(data);
      if (data.length > 0 && !selectedPage) {
        setSelectedPage(data[0]);
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load pages',
        variant: 'destructive'
      });
    }
  };

  const loadSections = async (pageId: string) => {
    try {
      const data = await pageSectionsApi.getByPageId(pageId);
      setSections(data);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load page sections',
        variant: 'destructive'
      });
    }
  };

  const loadTemplates = async () => {
    try {
      const data = await componentTemplatesApi.getAll();
      setTemplates(data);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load component templates',
        variant: 'destructive'
      });
    }
  };

  const addComponent = async (template: ComponentTemplate, sectionId: string) => {
    const section = sections.find(s => s.id === sectionId);
    if (!section) return;

    const newComponent: PageComponent = {
      id: `comp_${Date.now()}`,
      type: template.type,
      props: { ...template.default_props },
      position: { x: 0, y: section.components.length * 100 },
      size: { width: '100%', height: 'auto' }
    };

    const updatedComponents = [...section.components, newComponent];

    try {
      await pageSectionsApi.update(sectionId, {
        components: updatedComponents
      });
      loadSections(selectedPage!.id);
      toast({
        title: 'Success',
        description: 'Component added successfully'
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to add component',
        variant: 'destructive'
      });
    }
  };

  const updateComponent = async (sectionId: string, componentId: string, updates: Partial<PageComponent>) => {
    const section = sections.find(s => s.id === sectionId);
    if (!section) return;

    const updatedComponents = section.components.map(comp =>
      comp.id === componentId ? { ...comp, ...updates } : comp
    );

    try {
      await pageSectionsApi.update(sectionId, {
        components: updatedComponents
      });
      loadSections(selectedPage!.id);
      toast({
        title: 'Success',
        description: 'Component updated successfully'
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update component',
        variant: 'destructive'
      });
    }
  };

  const deleteComponent = async (sectionId: string, componentId: string) => {
    const section = sections.find(s => s.id === sectionId);
    if (!section) return;

    const updatedComponents = section.components.filter(comp => comp.id !== componentId);

    try {
      await pageSectionsApi.update(sectionId, {
        components: updatedComponents
      });
      loadSections(selectedPage!.id);
      toast({
        title: 'Success',
        description: 'Component deleted successfully'
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete component',
        variant: 'destructive'
      });
    }
  };

  const createSection = async (sectionType: 'header' | 'body' | 'footer') => {
    if (!selectedPage) return;

    try {
      await pageSectionsApi.create({
        page_id: selectedPage.id,
        section_type: sectionType,
        section_name: `${sectionType}_${Date.now()}`,
        components: [],
        styles: {},
        display_order: sections.length,
        is_visible: true
      });
      loadSections(selectedPage.id);
      toast({
        title: 'Success',
        description: 'Section created successfully'
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to create section',
        variant: 'destructive'
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Live Page Builder</h2>
        <div className="flex gap-2">
          <Button
            variant={previewMode ? 'default' : 'outline'}
            onClick={() => setPreviewMode(!previewMode)}
          >
            <Eye className="mr-2 h-4 w-4" />
            {previewMode ? 'Edit Mode' : 'Preview Mode'}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar - Component Library */}
        {!previewMode && (
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Components</CardTitle>
              <CardDescription>Drag or click to add</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {templates.map((template) => (
                  <Button
                    key={template.id}
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => {
                      if (sections.length > 0) {
                        addComponent(template, sections[0].id);
                      } else {
                        toast({
                          title: 'Info',
                          description: 'Please create a section first',
                        });
                      }
                    }}
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    {template.name}
                  </Button>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t">
                <Label>Create Section</Label>
                <div className="space-y-2 mt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => createSection('header')}
                  >
                    + Header Section
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => createSection('body')}
                  >
                    + Body Section
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => createSection('footer')}
                  >
                    + Footer Section
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Main Canvas */}
        <Card className={previewMode ? 'lg:col-span-4' : 'lg:col-span-3'}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Page: {selectedPage?.title}</CardTitle>
                <CardDescription>Build your page layout</CardDescription>
              </div>
              <Select
                value={selectedPage?.id}
                onValueChange={(value) => {
                  const page = pages.find(p => p.id === value);
                  setSelectedPage(page || null);
                }}
              >
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {pages.map((page) => (
                    <SelectItem key={page.id} value={page.id}>
                      {page.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <div className="min-h-[600px] border-2 border-dashed border-border rounded-lg p-4 space-y-4">
              {sections.length === 0 ? (
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  <div className="text-center">
                    <p className="mb-4">No sections yet. Create a section to get started.</p>
                    <Button onClick={() => createSection('body')}>
                      <Plus className="mr-2 h-4 w-4" />
                      Create First Section
                    </Button>
                  </div>
                </div>
              ) : (
                sections.map((section) => (
                  <div
                    key={section.id}
                    className="border border-primary/30 rounded-lg p-4 space-y-2"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold uppercase text-primary">
                        {section.section_type} Section
                      </span>
                      {!previewMode && (
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => pageSectionsApi.delete(section.id).then(() => loadSections(selectedPage!.id))}
                        >
                          Delete Section
                        </Button>
                      )}
                    </div>

                    {section.components.length === 0 ? (
                      <div className="text-center py-8 text-muted-foreground text-sm">
                        No components. Add components from the sidebar.
                      </div>
                    ) : (
                      <div className="space-y-2">
                        {section.components.map((component) => (
                          <ComponentRenderer
                            key={component.id}
                            component={component}
                            previewMode={previewMode}
                            onEdit={() => {
                              setSelectedComponent(component);
                              setEditDialogOpen(true);
                            }}
                            onDelete={() => deleteComponent(section.id, component.id)}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Edit Component Dialog */}
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Component</DialogTitle>
            <DialogDescription>Customize component properties</DialogDescription>
          </DialogHeader>
          {selectedComponent && (
            <div className="space-y-4">
              {Object.entries(selectedComponent.props).map(([key, value]) => (
                <div key={key}>
                  <Label>{key}</Label>
                  {typeof value === 'string' && value.length > 50 ? (
                    <Textarea
                      value={value}
                      onChange={(e) => {
                        setSelectedComponent({
                          ...selectedComponent,
                          props: { ...selectedComponent.props, [key]: e.target.value }
                        });
                      }}
                    />
                  ) : (
                    <Input
                      value={String(value)}
                      onChange={(e) => {
                        setSelectedComponent({
                          ...selectedComponent,
                          props: { ...selectedComponent.props, [key]: e.target.value }
                        });
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          )}
          <DialogFooter>
            <Button
              onClick={() => {
                if (selectedComponent) {
                  const section = sections.find(s =>
                    s.components.some(c => c.id === selectedComponent.id)
                  );
                  if (section) {
                    updateComponent(section.id, selectedComponent.id, selectedComponent);
                  }
                }
                setEditDialogOpen(false);
              }}
            >
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function ComponentRenderer({
  component,
  previewMode,
  onEdit,
  onDelete
}: {
  component: PageComponent;
  previewMode: boolean;
  onEdit: () => void;
  onDelete: () => void;
}) {
  const renderComponent = () => {
    switch (component.type) {
      case 'text':
        return (
          <p
            style={{
              fontSize: component.props.fontSize,
              fontWeight: component.props.fontWeight,
              color: component.props.color,
              textAlign: component.props.align
            }}
          >
            {component.props.content}
          </p>
        );
      case 'heading':
        const level = component.props.level || 'h2';
        const headingStyle = {
          fontSize: component.props.fontSize,
          fontWeight: component.props.fontWeight,
          color: component.props.color,
          textAlign: component.props.align
        };
        
        if (level === 'h1') return <h1 style={headingStyle}>{component.props.content}</h1>;
        if (level === 'h2') return <h2 style={headingStyle}>{component.props.content}</h2>;
        if (level === 'h3') return <h3 style={headingStyle}>{component.props.content}</h3>;
        if (level === 'h4') return <h4 style={headingStyle}>{component.props.content}</h4>;
        if (level === 'h5') return <h5 style={headingStyle}>{component.props.content}</h5>;
        return <h6 style={headingStyle}>{component.props.content}</h6>;
      case 'image':
        return (
          <img
            src={component.props.src || 'https://via.placeholder.com/400x300'}
            alt={component.props.alt}
            style={{
              width: component.props.width,
              height: component.props.height,
              objectFit: component.props.objectFit
            }}
          />
        );
      case 'button':
        return (
          <Button variant={component.props.variant} size={component.props.size}>
            {component.props.text}
          </Button>
        );
      case 'spacer':
        return <div style={{ height: component.props.height }} />;
      case 'divider':
        return (
          <hr
            style={{
              borderColor: component.props.color,
              borderWidth: component.props.thickness,
              borderStyle: component.props.style
            }}
          />
        );
      default:
        return <div>Unknown component type</div>;
    }
  };

  return (
    <div className="group relative border border-border rounded p-4 hover:border-primary transition-colors">
      {renderComponent()}
      {!previewMode && (
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
          <Button size="sm" variant="outline" onClick={onEdit}>
            Edit
          </Button>
          <Button size="sm" variant="destructive" onClick={onDelete}>
            Delete
          </Button>
        </div>
      )}
    </div>
  );
}
