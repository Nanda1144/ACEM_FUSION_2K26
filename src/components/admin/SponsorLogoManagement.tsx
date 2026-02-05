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

    // Validate file size (1MB limit)
    if (file.size > 1024 * 1024) {
      toast({
        title: 'Error',
        description: 'File size must be less than 1MB',
        variant: 'destructive',
      });
      return;
    }

    try {
      setUploading(true);

      // Upload to Supabase Storage
      const fileName = `${Date.now()}_${file.name.replace(/[^a-zA-Z0-9._-]/g, '_')}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('app-9dfi9jpj51xd_gallery_images')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('app-9dfi9jpj51xd_gallery_images')
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
        <div className="space-y-2">
          <Label htmlFor="logo-upload">Upload Logo</Label>
          <div className="flex items-center gap-4">
            <Input
              id="logo-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              disabled={uploading}
              className="flex-1"
            />
            <Button disabled={uploading} variant="outline">
              <Upload className="w-4 h-4 mr-2" />
              {uploading ? 'Uploading...' : 'Upload'}
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Recommended: Semi-square logos, max 1MB. Height will be set to 80px.
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
                  <div className="aspect-square mb-2 flex items-center justify-center bg-muted rounded">
                    <img
                      src={logo.image_url}
                      alt={`Logo ${logo.order_number}`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 flex-1">
                      <GripVertical className="w-4 h-4 text-muted-foreground" />
                      <Input
                        type="number"
                        value={logo.order_number}
                        onChange={(e) => handleReorder(logo.id, parseInt(e.target.value))}
                        className="w-16 h-8 text-xs"
                        min={1}
                      />
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(logo.id)}
                      className="h-8 w-8 p-0"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
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
