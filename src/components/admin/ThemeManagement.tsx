import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Save, Plus, Trash2, MoveUp, MoveDown } from 'lucide-react';
import { themeSettingsApi, uploadImage } from '@/db/api';
import type { ThemeSettings, Logo } from '@/types/index';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function ThemeManagement() {
  const [settings, setSettings] = useState<ThemeSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const data = await themeSettingsApi.get();
      setSettings(data);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load theme settings',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!settings) return;

    setSaving(true);
    try {
      await themeSettingsApi.update(settings.id, settings);
      toast({
        title: 'Success',
        description: 'Theme settings updated successfully'
      });
      loadSettings();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update theme settings',
        variant: 'destructive'
      });
    } finally {
      setSaving(false);
    }
  };

  const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>, logoId: number) => {
    const file = e.target.files?.[0];
    if (!file || !settings) return;

    try {
      const url = await uploadImage(file, 'app-9dfi9jpj51xd_theme_images');
      const updatedLogos = settings.logos.map(logo =>
        logo.id === logoId ? { ...logo, url } : logo
      );
      setSettings({ ...settings, logos: updatedLogos });
      toast({
        title: 'Success',
        description: 'Logo uploaded successfully'
      });
    } catch (error: any) {
      toast({
        title: 'Upload Failed',
        description: error?.message || 'Failed to upload logo. Please ensure storage buckets are configured for public access.',
        variant: 'destructive'
      });
    }
  };

  const handleBackgroundUpload = async (e: React.ChangeEvent<HTMLInputElement>, type: 'header' | 'page') => {
    const file = e.target.files?.[0];
    if (!file || !settings) return;

    try {
      const url = await uploadImage(file, 'app-9dfi9jpj51xd_theme_images');
      if (type === 'header') {
        setSettings({ ...settings, header_bg_image: url });
      } else {
        setSettings({ ...settings, page_bg_image: url });
      }
      toast({
        title: 'Success',
        description: 'Background image uploaded successfully'
      });
    } catch (error: any) {
      toast({
        title: 'Upload Failed',
        description: error?.message || 'Failed to upload background image. Please ensure storage buckets are configured for public access.',
        variant: 'destructive'
      });
    }
  };

  const addLogo = () => {
    if (!settings) return;
    const newId = Math.max(...settings.logos.map(l => l.id), 0) + 1;
    const newLogo: Logo = {
      id: newId,
      url: 'https://via.placeholder.com/60x60/00D9FF/FFFFFF?text=New',
      position: 'left',
      order: settings.logos.filter(l => l.position === 'left').length + 1
    };
    setSettings({ ...settings, logos: [...settings.logos, newLogo] });
  };

  const deleteLogo = (logoId: number) => {
    if (!settings) return;
    setSettings({ ...settings, logos: settings.logos.filter(l => l.id !== logoId) });
  };

  const updateLogoPosition = (logoId: number, position: 'left' | 'right') => {
    if (!settings) return;
    const updatedLogos = settings.logos.map(logo =>
      logo.id === logoId ? { ...logo, position } : logo
    );
    setSettings({ ...settings, logos: updatedLogos });
  };

  const moveLogoOrder = (logoId: number, direction: 'up' | 'down') => {
    if (!settings) return;
    const logo = settings.logos.find(l => l.id === logoId);
    if (!logo) return;

    const samePosLogos = settings.logos.filter(l => l.position === logo.position).sort((a, b) => a.order - b.order);
    const currentIndex = samePosLogos.findIndex(l => l.id === logoId);

    if (direction === 'up' && currentIndex > 0) {
      const temp = samePosLogos[currentIndex - 1].order;
      samePosLogos[currentIndex - 1].order = samePosLogos[currentIndex].order;
      samePosLogos[currentIndex].order = temp;
    } else if (direction === 'down' && currentIndex < samePosLogos.length - 1) {
      const temp = samePosLogos[currentIndex + 1].order;
      samePosLogos[currentIndex + 1].order = samePosLogos[currentIndex].order;
      samePosLogos[currentIndex].order = temp;
    }

    setSettings({ ...settings, logos: [...settings.logos] });
  };

  if (loading) return <div>Loading...</div>;
  if (!settings) return <div>No settings found</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Theme & Style Management</h2>
        <Button onClick={handleSave} disabled={saving} className="glow-purple">
          <Save className="mr-2 h-4 w-4" />
          {saving ? 'Saving...' : 'Save All Changes'}
        </Button>
      </div>

      <Tabs defaultValue="header" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="header">Header Style</TabsTrigger>
          <TabsTrigger value="logos">Logos</TabsTrigger>
          <TabsTrigger value="navigation">Navigation</TabsTrigger>
          <TabsTrigger value="background">Background</TabsTrigger>
        </TabsList>

        <TabsContent value="header" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Header Styling</CardTitle>
              <CardDescription>Customize header appearance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Header Title</Label>
                <Input
                  value={settings.header_title}
                  onChange={(e) => setSettings({ ...settings, header_title: e.target.value })}
                  placeholder="Enter header title"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Font Family</Label>
                  <Select
                    value={settings.header_font_family}
                    onValueChange={(value) => setSettings({ ...settings, header_font_family: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Inter">Inter</SelectItem>
                      <SelectItem value="Arial">Arial</SelectItem>
                      <SelectItem value="Georgia">Georgia</SelectItem>
                      <SelectItem value="Times New Roman">Times New Roman</SelectItem>
                      <SelectItem value="Courier New">Courier New</SelectItem>
                      <SelectItem value="Verdana">Verdana</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Font Size</Label>
                  <Select
                    value={settings.header_font_size}
                    onValueChange={(value) => setSettings({ ...settings, header_font_size: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="xl">XL</SelectItem>
                      <SelectItem value="2xl">2XL</SelectItem>
                      <SelectItem value="3xl">3XL</SelectItem>
                      <SelectItem value="4xl">4XL</SelectItem>
                      <SelectItem value="5xl">5XL</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Text Color</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={settings.header_text_color}
                      onChange={(e) => setSettings({ ...settings, header_text_color: e.target.value })}
                      className="w-20 h-10"
                    />
                    <Input
                      value={settings.header_text_color}
                      onChange={(e) => setSettings({ ...settings, header_text_color: e.target.value })}
                      placeholder="#00D9FF"
                    />
                  </div>
                </div>

                <div>
                  <Label>Background Color</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={settings.header_bg_color}
                      onChange={(e) => setSettings({ ...settings, header_bg_color: e.target.value })}
                      className="w-20 h-10"
                    />
                    <Input
                      value={settings.header_bg_color}
                      onChange={(e) => setSettings({ ...settings, header_bg_color: e.target.value })}
                      placeholder="transparent"
                    />
                  </div>
                </div>
              </div>

              <div>
                <Label>Header Background Image</Label>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleBackgroundUpload(e, 'header')}
                />
                {settings.header_bg_image && (
                  <div className="mt-2 flex items-center gap-4">
                    <img src={settings.header_bg_image} alt="Header BG" className="h-20 w-40 object-cover rounded" />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSettings({ ...settings, header_bg_image: null })}
                    >
                      Remove
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="logos" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Logo Management</CardTitle>
              <CardDescription>Add, remove, and position logos</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button onClick={addLogo} variant="outline">
                <Plus className="mr-2 h-4 w-4" />
                Add New Logo
              </Button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Left Side Logos</h3>
                  {settings.logos
                    .filter(logo => logo.position === 'left')
                    .sort((a, b) => a.order - b.order)
                    .map((logo) => (
                      <LogoItem
                        key={logo.id}
                        logo={logo}
                        onUpload={handleLogoUpload}
                        onDelete={deleteLogo}
                        onPositionChange={updateLogoPosition}
                        onMoveOrder={moveLogoOrder}
                      />
                    ))}
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Right Side Logos</h3>
                  {settings.logos
                    .filter(logo => logo.position === 'right')
                    .sort((a, b) => a.order - b.order)
                    .map((logo) => (
                      <LogoItem
                        key={logo.id}
                        logo={logo}
                        onUpload={handleLogoUpload}
                        onDelete={deleteLogo}
                        onPositionChange={updateLogoPosition}
                        onMoveOrder={moveLogoOrder}
                      />
                    ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="navigation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Navigation Styling</CardTitle>
              <CardDescription>Customize navigation menu appearance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Font Size</Label>
                <Select
                  value={settings.nav_font_size}
                  onValueChange={(value) => setSettings({ ...settings, nav_font_size: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sm">Small</SelectItem>
                    <SelectItem value="base">Base</SelectItem>
                    <SelectItem value="lg">Large</SelectItem>
                    <SelectItem value="xl">XL</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Text Color</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={settings.nav_text_color}
                      onChange={(e) => setSettings({ ...settings, nav_text_color: e.target.value })}
                      className="w-20 h-10"
                    />
                    <Input
                      value={settings.nav_text_color}
                      onChange={(e) => setSettings({ ...settings, nav_text_color: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <Label>Hover Color</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={settings.nav_hover_color}
                      onChange={(e) => setSettings({ ...settings, nav_hover_color: e.target.value })}
                      className="w-20 h-10"
                    />
                    <Input
                      value={settings.nav_hover_color}
                      onChange={(e) => setSettings({ ...settings, nav_hover_color: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="background" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Page Background</CardTitle>
              <CardDescription>Customize page background</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Background Color</Label>
                <div className="flex gap-2">
                  <Input
                    type="color"
                    value={settings.page_bg_color}
                    onChange={(e) => setSettings({ ...settings, page_bg_color: e.target.value })}
                    className="w-20 h-10"
                  />
                  <Input
                    value={settings.page_bg_color}
                    onChange={(e) => setSettings({ ...settings, page_bg_color: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <Label>Background Image</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-xs text-muted-foreground">Upload Local Image</Label>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleBackgroundUpload(e, 'page')}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs text-muted-foreground">External Image URL</Label>
                    <Input
                      type="url"
                      placeholder="https://example.com/image.jpg"
                      value={settings.page_bg_image || ''}
                      onChange={(e) => setSettings({ ...settings, page_bg_image: e.target.value })}
                    />
                  </div>
                </div>
                {settings.page_bg_image && (
                  <div className="mt-2 flex items-center gap-4">
                    <div className="relative group h-20 w-40 overflow-hidden rounded">
                      <img src={settings.page_bg_image} alt="Page BG" className="h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <p className="text-[10px] text-white break-all p-1">{settings.page_bg_image}</p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSettings({ ...settings, page_bg_image: null })}
                    >
                      Remove
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function LogoItem({
  logo,
  onUpload,
  onDelete,
  onPositionChange,
  onMoveOrder
}: {
  logo: Logo;
  onUpload: (e: React.ChangeEvent<HTMLInputElement>, logoId: number) => void;
  onDelete: (logoId: number) => void;
  onPositionChange: (logoId: number, position: 'left' | 'right') => void;
  onMoveOrder: (logoId: number, direction: 'up' | 'down') => void;
}) {
  return (
    <div className="border border-border rounded-lg p-4 mb-3">
      <div className="flex items-center gap-4 mb-3">
        <img src={logo.url} alt={`Logo ${logo.id}`} className="h-12 w-12 rounded-full object-cover" />
        <div className="flex-1">
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => onUpload(e, logo.id)}
            className="text-sm"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Select
          value={logo.position}
          onValueChange={(value: 'left' | 'right') => onPositionChange(logo.id, value)}
        >
          <SelectTrigger className="w-24">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="left">Left</SelectItem>
            <SelectItem value="right">Right</SelectItem>
          </SelectContent>
        </Select>
        <Button size="icon" variant="outline" onClick={() => onMoveOrder(logo.id, 'up')}>
          <MoveUp className="h-4 w-4" />
        </Button>
        <Button size="icon" variant="outline" onClick={() => onMoveOrder(logo.id, 'down')}>
          <MoveDown className="h-4 w-4" />
        </Button>
        <Button size="icon" variant="destructive" onClick={() => onDelete(logo.id)}>
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
