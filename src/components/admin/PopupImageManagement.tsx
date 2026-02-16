import { useState, useEffect } from 'react';
import { Trash2, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { popupImageApi, uploadImage } from '@/db/api';
// Removed: import { supabase } from '@/db/supabase';
import type { PopupImage } from '@/types/index';
import { useToast } from '@/hooks/use-toast';

export default function PopupImageManagement() {
  const [popup, setPopup] = useState<PopupImage | null>(null);
  const [duration, setDuration] = useState(10);
  const [isEnabled, setIsEnabled] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    loadPopup();
  }, []);

  const loadPopup = async () => {
    try {
      const data = await popupImageApi.getForAdmin();
      if (data) {
        setPopup(data);
        setDuration(data.duration);
        setIsEnabled(data.is_enabled);
      }
    } catch (error) {
      console.error('Error loading popup:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file size (20MB)
    if (file.size > 20 * 1024 * 1024) {
      toast({
        title: 'Error',
        description: 'Image size must be less than 20MB',
        variant: 'destructive',
      });
      return;
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast({
        title: 'Error',
        description: 'Please upload an image file',
        variant: 'destructive',
      });
      return;
    }

    setUploading(true);
    try {
      // Upload using the utility
      const imageUrl = await uploadImage(file, 'popup-images');

      // Save to database
      await popupImageApi.upsert({
        image_url: imageUrl,
        duration: duration,
        is_enabled: isEnabled,
      });

      toast({
        title: 'Success',
        description: 'Popup image uploaded successfully',
      });

      loadPopup();
    } catch (error) {
      console.error('Error uploading image:', error);
      toast({
        title: 'Error',
        description: 'Failed to upload image',
        variant: 'destructive',
      });
    } finally {
      setUploading(false);
    }
  };

  const handleSaveSettings = async () => {
    if (!popup) {
      toast({
        title: 'Error',
        description: 'Please upload an image first',
        variant: 'destructive',
      });
      return;
    }

    try {
      await popupImageApi.upsert({
        image_url: popup.image_url,
        duration: duration,
        is_enabled: isEnabled,
      });

      toast({
        title: 'Success',
        description: 'Settings saved successfully',
      });

      loadPopup();
    } catch (error) {
      console.error('Error saving settings:', error);
      toast({
        title: 'Error',
        description: 'Failed to save settings',
        variant: 'destructive',
      });
    }
  };

  const handleAddFromUrl = async (url: string) => {
    if (!url) return;
    try {
      await popupImageApi.upsert({
        image_url: url,
        duration: duration,
        is_enabled: isEnabled,
      });
      toast({
        title: 'Success',
        description: 'Popup image added via URL',
      });
      loadPopup();
    } catch (error) {
      console.error('Error adding image from URL:', error);
      toast({
        title: 'Error',
        description: 'Failed to add image',
        variant: 'destructive'
      });
    }
  };

  const handleDelete = async () => {
    if (!popup) return;

    if (!confirm('Are you sure you want to delete the popup image?')) return;

    try {
      // Delete from database
      await popupImageApi.delete();

      toast({
        title: 'Success',
        description: 'Popup image deleted successfully',
      });

      setPopup(null);
      setDuration(10);
      setIsEnabled(true);
    } catch (error) {
      console.error('Error deleting popup:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete popup image',
        variant: 'destructive',
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Popup Image Settings</CardTitle>
          <CardDescription>
            Manage the promotional popup that appears when users visit the site.
            Users can hold the image to pause the timer, or click to close it.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Current Image */}
          {popup && (
            <div className="space-y-4">
              <Label>Current Popup Image</Label>
              <div className="relative w-full max-w-2xl">
                <img
                  src={popup.image_url}
                  alt="Popup"
                  className="w-full h-auto rounded-lg border-2 border-primary"
                />
                <Button
                  variant="destructive"
                  size="sm"
                  className="absolute top-2 right-2"
                  onClick={handleDelete}
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </Button>
              </div>
            </div>
          )}

          {/* Upload New Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-xs text-muted-foreground">Upload Local Image</Label>
              <div className="flex items-center gap-4">
                <Input
                  id="popup-image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={uploading}
                  className="flex-1"
                />
                {uploading && (
                  <div className="text-sm text-muted-foreground">Uploading...</div>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-xs text-muted-foreground">External Image URL</Label>
              <div className="flex gap-2">
                <Input
                  id="manual-url"
                  placeholder="https://example.com/image.jpg"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleAddFromUrl(e.currentTarget.value);
                      e.currentTarget.value = '';
                    }
                  }}
                />
                <Button
                  variant="secondary"
                  onClick={() => {
                    const input = document.getElementById('manual-url') as HTMLInputElement;
                    handleAddFromUrl(input.value);
                    input.value = '';
                  }}
                >
                  Add
                </Button>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Maximum file size: 20MB. Recommended: 1920x1080px.
          </p>

          {/* Duration Setting */}
          <div className="space-y-2">
            <Label htmlFor="duration">Display Duration (seconds)</Label>
            <Input
              id="duration"
              type="number"
              min="1"
              max="60"
              value={duration}
              onChange={(e) => setDuration(parseInt(e.target.value) || 10)}
              className="max-w-xs"
            />
            <p className="text-sm text-muted-foreground">
              How long the popup will display before auto-closing (1-60 seconds)
            </p>
          </div>

          {/* Enable/Disable Toggle */}
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="enabled">Enable Popup</Label>
              <p className="text-sm text-muted-foreground">
                Show popup to visitors when they load the site
              </p>
            </div>
            <Switch
              id="enabled"
              checked={isEnabled}
              onCheckedChange={setIsEnabled}
            />
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <Button onClick={handleSaveSettings} disabled={!popup}>
              <Save className="w-4 h-4 mr-2" />
              Save Settings
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Preview Card */}
      <Card>
        <CardHeader>
          <CardTitle>How It Works</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>• Popup appears automatically when users visit the site</p>
          <p>• Displays for the configured duration (default: 10 seconds)</p>
          <p>• Users can <strong>hold/touch</strong> the image to freeze the animation and read</p>
          <p>• Popup <strong>dissolves (closes)</strong> as soon as the user releases the hold</p>
          <p>• Users can <strong>click</strong> the image or close button to dismiss</p>
          <p>• Background features animated golden glow effects</p>
        </CardContent>
      </Card>
    </div>
  );
}
