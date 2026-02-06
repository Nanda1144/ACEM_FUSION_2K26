import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Trash2, Upload, GripVertical, AlertCircle } from 'lucide-react';
import { backgroundImagesApi, uploadImage } from '@/db/api';
import type { BackgroundImage } from '@/types/index';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function BackgroundImageManagement() {
  const [images, setImages] = useState<BackgroundImage[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = async () => {
    try {
      setLoading(true);
      const data = await backgroundImagesApi.getAll();
      setImages(data);
    } catch (error) {
      console.error('Error loading background images:', error);
      toast({
        title: 'Error',
        description: 'Failed to load background images',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check if limit reached
    if (images.length >= 5) {
      toast({
        title: 'Limit Reached',
        description: 'Maximum 5 background images allowed',
        variant: 'destructive',
      });
      return;
    }

    // Validate file size (50MB limit)
    if (file.size > 50 * 1024 * 1024) {
      toast({
        title: 'Error',
        description: 'File size must be less than 50MB',
        variant: 'destructive',
      });
      return;
    }

    try {
      setUploading(true);

      // Upload image
      const imageUrl = await uploadImage(file, 'app-9dfi9jpj51xd_background_images');

      // Create image entry
      const newImage = await backgroundImagesApi.create({
        image_url: imageUrl,
        display_order: images.length + 1,
        display_duration: 5000
      });

      setImages([...images, newImage]);
      toast({
        title: 'Success',
        description: 'Background image uploaded successfully',
      });

      // Reset file input
      e.target.value = '';
    } catch (error) {
      console.error('Error uploading image:', error);
      toast({
        title: 'Error',
        description: 'Failed to upload background image',
        variant: 'destructive',
      });
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this background image?')) return;

    try {
      await backgroundImagesApi.delete(id);
      setImages(images.filter(img => img.id !== id));
      toast({
        title: 'Success',
        description: 'Background image deleted successfully',
      });
    } catch (error) {
      console.error('Error deleting image:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete background image',
        variant: 'destructive',
      });
    }
  };

  const updateDisplayOrder = async (id: string, newOrder: number) => {
    try {
      await backgroundImagesApi.update(id, { display_order: newOrder });
      await loadImages();
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

  const updateDisplayDuration = async (id: string, duration: number) => {
    try {
      await backgroundImagesApi.update(id, { display_duration: duration });
      setImages(images.map(img => img.id === id ? { ...img, display_duration: duration } : img));
      toast({
        title: 'Success',
        description: 'Display duration updated',
      });
    } catch (error) {
      console.error('Error updating duration:', error);
      toast({
        title: 'Error',
        description: 'Failed to update display duration',
        variant: 'destructive',
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Background Image Carousel</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Upload up to 5 background images for the homepage carousel. Images will dissolve/fade between each other with configurable display duration (default 5 seconds).
          </AlertDescription>
        </Alert>

        {/* Upload Section */}
        <div className="space-y-4">
          <Label htmlFor="bg-upload">Upload Background Image ({images.length}/5)</Label>
          <div className="flex gap-4">
            <Button
              type="button"
              onClick={() => document.getElementById('bg-upload')?.click()}
              disabled={uploading || images.length >= 5}
              className="w-full sm:w-auto"
            >
              <Upload className="h-4 w-4 mr-2" />
              {uploading ? 'Uploading...' : 'Upload Image'}
            </Button>
            <input
              id="bg-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              disabled={images.length >= 5}
            />
          </div>
          <p className="text-sm text-muted-foreground">
            Upload background images (max 50MB). Recommended size: 1920x1080px or higher for best quality.
          </p>
        </div>

        {/* Images Grid */}
        {loading ? (
          <div className="text-center py-8 text-muted-foreground">Loading images...</div>
        ) : images.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            No background images uploaded yet. Upload your first image above.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {images.map((image) => (
              <Card key={image.id} className="overflow-hidden">
                <div className="relative aspect-video">
                  <img
                    src={image.image_url}
                    alt={`Background ${image.display_order}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4 space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <GripVertical className="h-4 w-4 text-muted-foreground" />
                      <Label htmlFor={`order-${image.id}`} className="text-sm">
                        Display Order
                      </Label>
                    </div>
                    <Input
                      id={`order-${image.id}`}
                      type="number"
                      min="1"
                      max="5"
                      value={image.display_order}
                      onChange={(e) => updateDisplayOrder(image.id, parseInt(e.target.value))}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor={`duration-${image.id}`} className="text-sm">
                      Display Duration (ms)
                    </Label>
                    <Input
                      id={`duration-${image.id}`}
                      type="number"
                      min="3000"
                      step="1000"
                      value={image.display_duration || 5000}
                      onChange={(e) => updateDisplayDuration(image.id, parseInt(e.target.value))}
                    />
                    <p className="text-xs text-muted-foreground">
                      Time to display before dissolving to next (5000ms = 5 seconds)
                    </p>
                  </div>

                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(image.id)}
                    className="w-full"
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete Image
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
