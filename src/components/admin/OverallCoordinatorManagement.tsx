import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Plus, Pencil, Trash2, User, Phone, Briefcase, Image as ImageIcon, Upload } from 'lucide-react';
import { overallCoordinatorsApi, uploadImage } from '@/db/api';
import type { OverallCoordinator } from '@/types/index';
import { useToast } from '@/hooks/use-toast';

export default function OverallCoordinatorManagement() {
  const [coordinators, setCoordinators] = useState<OverallCoordinator[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingCoordinator, setEditingCoordinator] = useState<OverallCoordinator | null>(null);
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    type: 'staff' as 'staff' | 'student',
    name: '',
    position: '',
    contact: '',
    image_url: '',
    event_type: 'Both' as 'Technical' | 'Cultural' | 'Both',
    display_order: 0,
    show_photo: true
  });

  useEffect(() => {
    loadCoordinators();
  }, []);

  const loadCoordinators = async () => {
    try {
      const data = await overallCoordinatorsApi.getAll();
      setCoordinators(data);
    } catch (error) {
      console.error('Error loading coordinators:', error);
      toast({
        title: 'Error',
        description: 'Failed to load coordinators',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file size (1MB limit)
    if (file.size > 1024 * 1024) {
      toast({
        title: 'Error',
        description: 'File size must be less than 1MB',
        variant: 'destructive'
      });
      return;
    }

    try {
      setUploading(true);
      const url = await uploadImage(file, 'app-9dfi9jpj51xd_coordinator_images');
      setFormData({ ...formData, image_url: url });
      toast({
        title: 'Success',
        description: 'Image uploaded successfully'
      });
    } catch (error) {
      console.error('Error uploading image:', error);
      toast({
        title: 'Error',
        description: 'Failed to upload image',
        variant: 'destructive'
      });
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      toast({
        title: 'Validation Error',
        description: 'Name is required',
        variant: 'destructive'
      });
      return;
    }

    try {
      if (editingCoordinator) {
        await overallCoordinatorsApi.update(editingCoordinator.id, formData);
        toast({
          title: 'Success',
          description: 'Coordinator updated successfully'
        });
      } else {
        await overallCoordinatorsApi.create(formData);
        toast({
          title: 'Success',
          description: 'Coordinator added successfully'
        });
      }
      
      setDialogOpen(false);
      resetForm();
      loadCoordinators();
    } catch (error) {
      console.error('Error saving coordinator:', error);
      toast({
        title: 'Error',
        description: 'Failed to save coordinator',
        variant: 'destructive'
      });
    }
  };

  const handleEdit = (coordinator: OverallCoordinator) => {
    setEditingCoordinator(coordinator);
    setFormData({
      type: coordinator.type,
      name: coordinator.name,
      position: coordinator.position || '',
      contact: coordinator.contact || '',
      image_url: coordinator.image_url || '',
      event_type: coordinator.event_type || 'Both',
      display_order: coordinator.display_order,
      show_photo: coordinator.show_photo
    });
    setDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this coordinator?')) return;

    try {
      await overallCoordinatorsApi.delete(id);
      toast({
        title: 'Success',
        description: 'Coordinator deleted successfully'
      });
      loadCoordinators();
    } catch (error) {
      console.error('Error deleting coordinator:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete coordinator',
        variant: 'destructive'
      });
    }
  };

  const resetForm = () => {
    setFormData({
      type: 'staff',
      name: '',
      position: '',
      contact: '',
      image_url: '',
      event_type: 'Both',
      display_order: 0,
      show_photo: true
    });
    setEditingCoordinator(null);
  };

  const handleDialogClose = (open: boolean) => {
    setDialogOpen(open);
    if (!open) {
      resetForm();
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl">Overall Coordinators</CardTitle>
            <CardDescription>
              Manage staff and student coordinators for Technical and Cultural events
            </CardDescription>
          </div>
          <Dialog open={dialogOpen} onOpenChange={handleDialogClose}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Coordinator
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <form onSubmit={handleSubmit}>
                <DialogHeader>
                  <DialogTitle>
                    {editingCoordinator ? 'Edit Coordinator' : 'Add New Coordinator'}
                  </DialogTitle>
                  <DialogDescription>
                    Fill in the coordinator details below
                  </DialogDescription>
                </DialogHeader>

                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="type">Type *</Label>
                      <Select
                        value={formData.type}
                        onValueChange={(value: 'staff' | 'student') => 
                          setFormData({ ...formData, type: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="staff">Staff</SelectItem>
                          <SelectItem value="student">Student</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="event_type">Event Type *</Label>
                      <Select
                        value={formData.event_type}
                        onValueChange={(value: 'Technical' | 'Cultural' | 'Both') => 
                          setFormData({ ...formData, event_type: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Technical">Technical</SelectItem>
                          <SelectItem value="Cultural">Cultural</SelectItem>
                          <SelectItem value="Both">Both</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="name"
                        placeholder="Enter coordinator name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="position">Position / Role</Label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="position"
                        placeholder="e.g., Professor, HOD, Final Year CSE"
                        value={formData.position}
                        onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact">Contact Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="contact"
                        placeholder="Enter contact number"
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="image_url">Photo (Optional)</Label>
                    <div className="space-y-2">
                      <div className="flex gap-2">
                        <Input
                          id="image_url"
                          placeholder="Enter image URL or upload"
                          value={formData.image_url}
                          onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                          className="flex-1"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => document.getElementById('coordinator-image-upload')?.click()}
                          disabled={uploading}
                        >
                          <Upload className="h-4 w-4 mr-2" />
                          {uploading ? 'Uploading...' : 'Upload'}
                        </Button>
                      </div>
                      <input
                        id="coordinator-image-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                      {formData.image_url && (
                        <img
                          src={formData.image_url}
                          alt="Preview"
                          className="w-24 h-24 object-cover rounded-md border"
                        />
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="display_order">Display Order</Label>
                      <Input
                        id="display_order"
                        type="number"
                        placeholder="0"
                        value={formData.display_order}
                        onChange={(e) => setFormData({ ...formData, display_order: parseInt(e.target.value) || 0 })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="show_photo">Show Photo</Label>
                      <div className="flex items-center space-x-2 pt-2">
                        <Switch
                          id="show_photo"
                          checked={formData.show_photo}
                          onCheckedChange={(checked) => setFormData({ ...formData, show_photo: checked })}
                        />
                        <Label htmlFor="show_photo" className="text-sm text-muted-foreground">
                          {formData.show_photo ? 'Visible' : 'Hidden'}
                        </Label>
                      </div>
                    </div>
                  </div>
                </div>

                <DialogFooter>
                  <Button type="button" variant="outline" onClick={() => handleDialogClose(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">
                    {editingCoordinator ? 'Update' : 'Add'} Coordinator
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>

      <CardContent>
        {loading ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground">Loading coordinators...</p>
          </div>
        ) : coordinators.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground">No coordinators added yet</p>
          </div>
        ) : (
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Event Type</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Photo</TableHead>
                  <TableHead>Order</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {coordinators.map((coordinator) => (
                  <TableRow key={coordinator.id}>
                    <TableCell className="font-medium">{coordinator.name}</TableCell>
                    <TableCell>
                      <Badge variant={coordinator.type === 'staff' ? 'default' : 'secondary'}>
                        {coordinator.type}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant="outline"
                        className={
                          coordinator.event_type === 'Technical' 
                            ? 'border-primary text-primary' 
                            : coordinator.event_type === 'Cultural'
                            ? 'border-secondary text-secondary'
                            : 'border-accent text-accent'
                        }
                      >
                        {coordinator.event_type || 'Both'}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {coordinator.position || '-'}
                    </TableCell>
                    <TableCell className="text-sm">{coordinator.contact || '-'}</TableCell>
                    <TableCell>
                      {coordinator.show_photo && coordinator.image_url ? (
                        <img 
                          src={coordinator.image_url} 
                          alt={coordinator.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      ) : (
                        <span className="text-xs text-muted-foreground">No photo</span>
                      )}
                    </TableCell>
                    <TableCell>{coordinator.display_order}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleEdit(coordinator)}
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleDelete(coordinator.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
