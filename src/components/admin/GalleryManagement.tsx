import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Trash2 } from 'lucide-react';
import { galleryApi, uploadImage } from '@/db/api';
import type { GalleryImage } from '@/types/index';
import { useToast } from '@/hooks/use-toast';

export default function GalleryManagement() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = async () => {
    try {
      const data = await galleryApi.getAll();
      setImages(data);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load gallery images',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    try {
      for (const file of Array.from(files)) {
        // Validate file size (20MB limit)
        if (file.size > 20 * 1024 * 1024) {
          toast({
            title: 'Error',
            description: `File "${file.name}" exceeds 20MB and was skipped`,
            variant: 'destructive',
          });
          continue;
        }

        const url = await uploadImage(file, 'app-9dfi9jpj51xd_gallery_images');
        await galleryApi.create(url);
      }
      toast({
        title: 'Success',
        description: `${files.length} image(s) uploaded successfully`
      });
      loadImages();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to upload images',
        variant: 'destructive'
      });
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this image?')) return;

    try {
      await galleryApi.delete(id);
      toast({
        title: 'Success',
        description: 'Image deleted successfully'
      });
      loadImages();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete image',
        variant: 'destructive'
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold">Gallery Management</h2>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto">
          <div className="flex-1 min-w-[300px]">
            <div className="flex gap-2">
              <Input
                id="gallery-url"
                placeholder="Paste image URL and press Add"
                className="flex-1"
                onKeyDown={async (e) => {
                  if (e.key === 'Enter') {
                    const url = e.currentTarget.value;
                    if (url) {
                      try {
                        await galleryApi.create(url);
                        loadImages();
                        e.currentTarget.value = '';
                        toast({ title: 'Success', description: 'Image added to gallery' });
                      } catch (error) {
                        toast({ title: 'Error', description: 'Failed to add image URL', variant: 'destructive' });
                      }
                    }
                  }
                }}
              />
              <Button
                variant="secondary"
                onClick={async () => {
                  const input = document.getElementById('gallery-url') as HTMLInputElement;
                  const url = input.value;
                  if (url) {
                    try {
                      await galleryApi.create(url);
                      loadImages();
                      input.value = '';
                      toast({ title: 'Success', description: 'Image added to gallery' });
                    } catch (error) {
                      toast({ title: 'Error', description: 'Failed to add image URL', variant: 'destructive' });
                    }
                  }
                }}
              >
                Add
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground hidden sm:inline">OR</span>
            <Input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              disabled={uploading}
              className="hidden"
              id="gallery-upload"
            />
            <Button asChild className="glow-cyan w-full sm:w-auto" disabled={uploading}>
              <label htmlFor="gallery-upload" className="cursor-pointer">
                <Plus className="mr-2 h-4 w-4" />
                {uploading ? 'Uploading...' : 'Upload Images (Max 20MB each)'}
              </label>
            </Button>
          </div>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Gallery Images</CardTitle>
          <CardDescription>Manage your gallery images</CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p>Loading...</p>
          ) : images.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">No images yet</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((image) => (
                <div key={image.id} className="relative group">
                  <img
                    src={image.image_url}
                    alt="Gallery"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                    <Button
                      size="icon"
                      variant="destructive"
                      onClick={() => handleDelete(image.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
