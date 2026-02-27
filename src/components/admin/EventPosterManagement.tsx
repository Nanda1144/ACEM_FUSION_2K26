import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Trash2, Upload, GripVertical } from 'lucide-react';
import { eventPostersApi, uploadImage } from '@/db/api';
import type { EventPoster } from '@/types/index';
import { useToast } from '@/hooks/use-toast';

export default function EventPosterManagement() {
  const [posters, setPosters] = useState<EventPoster[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    loadPosters();
  }, []);

  const loadPosters = async () => {
    try {
      setLoading(true);
      const data = await eventPostersApi.getAll();
      setPosters(data);
    } catch (error) {
      console.error('Error loading posters:', error);
      toast({
        title: 'Error',
        description: 'Failed to load event posters',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file size (20MB limit)
    if (file.size > 20 * 1024 * 1024) {
      toast({
        title: 'Error',
        description: 'File size must be less than 20MB',
        variant: 'destructive',
      });
      return;
    }

    try {
      setUploading(true);

      // Upload image
      const imageUrl = await uploadImage(file, 'app-9dfi9jpj51xd_poster_images');

      // Create poster entry
      const newPoster = await eventPostersApi.create({
        image_url: imageUrl,
        display_order: posters.length + 1,
        scroll_duration: 30000
      });

      setPosters([...posters, newPoster]);
      toast({
        title: 'Success',
        description: 'Event poster uploaded successfully',
      });

      // Reset file input
      e.target.value = '';
    } catch (error) {
      console.error('Error uploading poster:', error);
      toast({
        title: 'Error',
        description: 'Failed to upload event poster',
        variant: 'destructive',
      });
    } finally {
      setUploading(false);
    }
  };

  const updateImageUrl = async (id: string, newUrl: string) => {
    try {
      await eventPostersApi.update(id, { image_url: newUrl });
      setPosters(posters.map((p) => (p.id === id ? { ...p, image_url: newUrl } : p)));
      toast({
        title: 'Success',
        description: 'Poster URL updated',
      });
    } catch (error) {
      console.error('Error updating URL:', error);
      toast({
        title: 'Error',
        description: 'Failed to update poster URL',
        variant: 'destructive',
      });
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this poster?')) return;

    try {
      await eventPostersApi.delete(id);
      setPosters(posters.filter(p => p.id !== id));
      toast({
        title: 'Success',
        description: 'Poster deleted successfully',
      });
    } catch (error) {
      console.error('Error deleting poster:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete poster',
        variant: 'destructive',
      });
    }
  };

  const updateDisplayOrder = async (id: string, newOrder: number) => {
    try {
      await eventPostersApi.update(id, { display_order: newOrder });
      await loadPosters();
      toast({
        title: 'Success',
        description: 'Display order updated',
      });
    } catch (error) {
      console.error('Error updating order:', error);
      toast({
        title: 'Error',
        description: 'Failed to update display order',
        variant: 'destructive',
      });
    }
  };

  const updateScrollDuration = async (id: string, duration: number) => {
    try {
      await eventPostersApi.update(id, { scroll_duration: duration });
      setPosters(posters.map(p => p.id === id ? { ...p, scroll_duration: duration } : p));
      toast({
        title: 'Success',
        description: 'Scroll duration updated',
      });
    } catch (error) {
      console.error('Error updating duration:', error);
      toast({
        title: 'Error',
        description: 'Failed to update scroll duration',
        variant: 'destructive',
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Event Poster Management</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Upload Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <Label htmlFor="poster-upload">Upload Event Poster</Label>
            <div className="flex gap-4">
              <Button
                type="button"
                onClick={() => document.getElementById('poster-upload')?.click()}
                disabled={uploading}
                className="w-full"
              >
                <Upload className="h-4 w-4 mr-2" />
                {uploading ? 'Uploading...' : 'Upload Poster'}
              </Button>
              <input
                id="poster-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
          </div>

          <div className="space-y-4">
            <Label htmlFor="manual-url">Add via Image URL</Label>
            <div className="flex gap-2">
              <Input
                id="manual-url"
                type="url"
                placeholder="https://example.com/poster.jpg"
                onKeyDown={async (e) => {
                  if (e.key === 'Enter') {
                    const url = e.currentTarget.value;
                    if (url) {
                      try {
                        const newPoster = await eventPostersApi.create({
                          image_url: url,
                          display_order: posters.length + 1,
                          scroll_duration: 30000
                        });
                        setPosters([...posters, newPoster]);
                        e.currentTarget.value = '';
                        toast({ title: 'Success', description: 'Poster added via URL' });
                      } catch (error) {
                        toast({ title: 'Error', description: 'Failed to add poster URL', variant: 'destructive' });
                      }
                    }
                  }
                }}
              />
              <Button
                type="button"
                variant="secondary"
                onClick={async () => {
                  const input = document.getElementById('manual-url') as HTMLInputElement;
                  const url = input.value;
                  if (url) {
                    try {
                      const newPoster = await eventPostersApi.create({
                        image_url: url,
                        display_order: posters.length + 1,
                        scroll_duration: 30000
                      });
                      setPosters([...posters, newPoster]);
                      input.value = '';
                      toast({ title: 'Success', description: 'Poster added via URL' });
                    } catch (error) {
                      toast({ title: 'Error', description: 'Failed to add poster URL', variant: 'destructive' });
                    }
                  }
                }}
              >
                Add
              </Button>
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          Recommended size: 1920x1080px (max 20MB for uploads)
        </p>

        {/* Posters Grid */}
        {loading ? (
          <div className="text-center py-8 text-muted-foreground">Loading posters...</div>
        ) : posters.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            No event posters uploaded yet. Upload your first poster above.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {posters.map((poster) => (
              <Card key={poster.id} className="overflow-hidden">
                <div className="relative aspect-video">
                  <img
                    src={poster.image_url}
                    alt={`Event Poster ${poster.display_order}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4 space-y-3">
                  <div className="space-y-2">
                    <Label htmlFor={`url-${poster.id}`} className="text-sm">
                      Poster Image URL
                    </Label>
                    <Input
                      id={`url-${poster.id}`}
                      type="url"
                      value={poster.image_url}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          updateImageUrl(poster.id, e.currentTarget.value);
                        }
                      }}
                      onBlur={(e) => {
                        if (e.target.value !== poster.image_url) {
                          updateImageUrl(poster.id, e.target.value);
                        }
                      }}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <GripVertical className="h-4 w-4 text-muted-foreground" />
                        <Label htmlFor={`order-${poster.id}`} className="text-sm">
                          Order
                        </Label>
                      </div>
                      <Input
                        id={`order-${poster.id}`}
                        type="number"
                        min="1"
                        value={poster.display_order}
                        onChange={(e) => updateDisplayOrder(poster.id, parseInt(e.target.value))}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`duration-${poster.id}`} className="text-sm">
                        Duration
                      </Label>
                      <Input
                        id={`duration-${poster.id}`}
                        type="number"
                        min="5000"
                        step="1000"
                        value={poster.scroll_duration || 30000}
                        onChange={(e) => updateScrollDuration(poster.id, parseInt(e.target.value))}
                      />
                    </div>
                  </div>

                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(poster.id)}
                    className="w-full"
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete Poster
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
