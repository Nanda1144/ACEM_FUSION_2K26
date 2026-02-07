import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Trash2, Upload, GripVertical } from 'lucide-react';
import { sponsorLogosApi } from '@/db/api';
import { supabase } from '@/db/supabase';
import type { SponsorLogo } from '@/types/index';
import { useToast } from '@/hooks/use-toast';

export default function SponsorLogoManagement() {
  const [logos, setLogos] = useState<SponsorLogo[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    loadLogos();
  }, []);

  const loadLogos = async () => {
    try {
      setLoading(true);
      const data = await sponsorLogosApi.getAll();
      setLogos(data);
    } catch (error) {
      console.error('Error loading logos:', error);
      toast({
        title: 'Error',
        description: 'Failed to load sponsor logos',
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

      // Upload to Supabase Storage
      const fileName = `${Date.now()}_${file.name.replace(/[^a-zA-Z0-9._-]/g, '_')}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('app-9dfi9jpj51xd_theme_images')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('app-9dfi9jpj51xd_theme_images')
        .getPublicUrl(uploadData.path);

      // Create logo entry
      const newLogo = await sponsorLogosApi.create({
        image_url: publicUrl,
        order_number: logos.length + 1
      });

      setLogos([...logos, newLogo]);
      toast({
        title: 'Success',
        description: 'Logo uploaded successfully',
      });
    } catch (error) {
      console.error('Error uploading logo:', error);
      toast({
        title: 'Error',
        description: 'Failed to upload logo',
        variant: 'destructive',
      });
    } finally {
      setUploading(false);
      e.target.value = '';
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this logo?')) return;

    try {
      await sponsorLogosApi.delete(id);
      setLogos(logos.filter(logo => logo.id !== id));
      toast({
        title: 'Success',
        description: 'Logo deleted successfully',
      });
    } catch (error) {
      console.error('Error deleting logo:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete logo',
        variant: 'destructive',
      });
    }
  };

  const updateLogoUrl = async (id: string, newUrl: string) => {
    try {
      await sponsorLogosApi.update(id, { image_url: newUrl });
      setLogos(logos.map((logo) => (logo.id === id ? { ...logo, image_url: newUrl } : logo)));
      toast({
        title: 'Success',
        description: 'Logo URL updated',
      });
    } catch (error) {
      console.error('Error updating URL:', error);
      toast({
        title: 'Error',
        description: 'Failed to update logo URL',
        variant: 'destructive',
      });
    }
  };

  const handleReorder = async (id: string, newOrder: number) => {
    try {
      await sponsorLogosApi.update(id, { order_number: newOrder });
      await loadLogos();
      toast({
        title: 'Success',
        description: 'Logo order updated',
      });
    } catch (error) {
      console.error('Error updating order:', error);
      toast({
        title: 'Error',
        description: 'Failed to update order',
        variant: 'destructive',
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Mobile Logo Carousel</CardTitle>
        <p className="text-sm text-muted-foreground">
          Manage sponsor logos that appear in the mobile carousel (visible only on mobile devices)
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Upload Section */}
        <div className="space-y-4">
          <Label>Add Sponsor Logo</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-xs text-muted-foreground">Upload Local Image</Label>
              <div className="flex gap-2">
                <Button
                  disabled={uploading}
                  variant="outline"
                  className="w-full"
                  onClick={() => document.getElementById('logo-upload')?.click()}
                >
                  <Upload className="w-4 h-4 mr-2" />
                  {uploading ? 'Uploading...' : 'Upload Image'}
                </Button>
                <input
                  id="logo-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={uploading}
                  className="hidden"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-xs text-muted-foreground">External Image URL</Label>
              <div className="flex gap-2">
                <Input
                  id="logo-url"
                  placeholder="https://example.com/logo.png"
                  onKeyDown={async (e) => {
                    if (e.key === 'Enter') {
                      const url = (e.currentTarget as HTMLInputElement).value;
                      if (url) {
                        try {
                          await sponsorLogosApi.create({
                            image_url: url,
                            order_number: logos.length + 1
                          });
                          await loadLogos();
                          (e.currentTarget as HTMLInputElement).value = '';
                          toast({ title: 'Success', description: 'Logo added via URL' });
                        } catch (error) {
                          toast({ title: 'Error', description: 'Failed to add logo URL', variant: 'destructive' });
                        }
                      }
                    }
                  }}
                />
                <Button
                  variant="secondary"
                  onClick={async () => {
                    const input = document.getElementById('logo-url') as HTMLInputElement;
                    const url = input.value;
                    if (url) {
                      try {
                        await sponsorLogosApi.create({
                          image_url: url,
                          order_number: logos.length + 1
                        });
                        await loadLogos();
                        input.value = '';
                        toast({ title: 'Success', description: 'Logo added via URL' });
                      } catch (error) {
                        toast({ title: 'Error', description: 'Failed to add logo URL', variant: 'destructive' });
                      }
                    }
                  }}
                >
                  Add
                </Button>
              </div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            Recommended: Semi-square logos, max 20MB. Height will be set to 80px.
          </p>
        </div>

        {/* Logos List */}
        {loading ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground">Loading logos...</p>
          </div>
        ) : logos.length === 0 ? (
          <div className="text-center py-8 border-2 border-dashed border-border rounded-lg">
            <p className="text-muted-foreground">No logos uploaded yet</p>
          </div>
        ) : (
          <div className="space-y-4">
            <h3 className="font-semibold">Current Logos ({logos.length})</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {logos.map((logo) => (
                <div
                  key={logo.id}
                  className="relative group border border-border rounded-lg p-4 bg-card hover:border-primary/50 transition-colors"
                >
                  <div className="space-y-3">
                    <div className="aspect-square flex items-center justify-center bg-muted rounded overflow-hidden p-2">
                      <img
                        src={logo.image_url}
                        alt={`Logo ${logo.order_number}`}
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://placehold.co/200x200?text=Invalid';
                        }}
                      />
                    </div>

                    <div className="space-y-1">
                      <Label className="text-[10px] uppercase text-muted-foreground">Logo URL</Label>
                      <Input
                        type="url"
                        value={logo.image_url}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            updateLogoUrl(logo.id, e.currentTarget.value);
                          }
                        }}
                        onBlur={(e) => {
                          if (e.target.value !== logo.image_url) {
                            updateLogoUrl(logo.id, e.target.value);
                          }
                        }}
                        className="h-7 text-xs"
                      />
                    </div>

                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1 flex-1">
                        <GripVertical className="w-3 h-3 text-muted-foreground" />
                        <Input
                          type="number"
                          value={logo.order_number}
                          onChange={(e) => handleReorder(logo.id, parseInt(e.target.value))}
                          className="w-12 h-7 text-xs px-1"
                          min={1}
                        />
                      </div>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDelete(logo.id)}
                        className="h-7 w-7 p-0"
                      >
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
