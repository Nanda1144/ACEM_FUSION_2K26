import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Upload, ExternalLink, Eye } from 'lucide-react';
import { popupSettingsApi, uploadImage } from '@/db/api';
import type { PopupSettings } from '@/types/index';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export default function PopupManagement() {
  const [settings, setSettings] = useState<PopupSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const data = await popupSettingsApi.get();
      setSettings(data);
    } catch (error) {
      console.error('Error loading popup settings:', error);
      toast({
        title: 'Error',
        description: 'Failed to load popup settings',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !settings) return;

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
      const url = await uploadImage(file, 'app-9dfi9jpj51xd_theme_images');
      setSettings({ ...settings, image_url: url });
      toast({
        title: 'Success',
        description: 'Popup image uploaded successfully'
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

  const handleSave = async () => {
    if (!settings) return;

    try {
      setSaving(true);
      await popupSettingsApi.update(settings.id, {
        enabled: settings.enabled,
        image_url: settings.image_url,
        link_url: settings.link_url,
        show_once_per_session: settings.show_once_per_session,
        display_delay: settings.display_delay
      });
      
      toast({
        title: 'Success',
        description: 'Popup settings saved successfully'
      });
    } catch (error) {
      console.error('Error saving settings:', error);
      toast({
        title: 'Error',
        description: 'Failed to save popup settings',
        variant: 'destructive'
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Popup Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-muted-foreground">Loading...</div>
        </CardContent>
      </Card>
    );
  }

  if (!settings) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Popup Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-muted-foreground">No settings found</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome Popup Management</CardTitle>
        <CardDescription>
          Configure the welcome/announcement popup that appears when users visit your site
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Enable/Disable Popup */}
        <div className="flex items-center justify-between p-4 border rounded-lg">
          <div className="space-y-0.5">
            <Label htmlFor="enabled" className="text-base font-medium">
              Enable Popup
            </Label>
            <p className="text-sm text-muted-foreground">
              Show the popup to visitors
            </p>
          </div>
          <Switch
            id="enabled"
            checked={settings.enabled}
            onCheckedChange={(checked) => setSettings({ ...settings, enabled: checked })}
          />
        </div>

        {/* Popup Image Upload */}
        <div className="space-y-4">
          <Label htmlFor="popup-image">Popup Image</Label>
          <div className="space-y-2">
            <div className="flex gap-2">
              <Input
                id="popup-image-url"
                placeholder="Enter image URL or upload"
                value={settings.image_url || ''}
                onChange={(e) => setSettings({ ...settings, image_url: e.target.value })}
                className="flex-1"
              />
              <Button
                type="button"
                variant="outline"
                onClick={() => document.getElementById('popup-image-upload')?.click()}
                disabled={uploading}
              >
                <Upload className="h-4 w-4 mr-2" />
                {uploading ? 'Uploading...' : 'Upload'}
              </Button>
            </div>
            <input
              id="popup-image-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <p className="text-sm text-muted-foreground">
              Recommended size: 1200x800px or 1920x1080px (max 1MB)
            </p>
          </div>

          {/* Image Preview */}
          {settings.image_url && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Preview</Label>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      Full Preview
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <DialogHeader>
                      <DialogTitle>Popup Preview</DialogTitle>
                    </DialogHeader>
                    <img
                      src={settings.image_url}
                      alt="Popup Preview"
                      className="w-full h-auto max-h-[70vh] object-contain rounded-md"
                    />
                  </DialogContent>
                </Dialog>
              </div>
              <img
                src={settings.image_url}
                alt="Popup Preview"
                className="w-full max-w-md h-auto rounded-md border"
              />
            </div>
          )}
        </div>

        {/* Link URL */}
        <div className="space-y-2">
          <Label htmlFor="link-url">Link URL (Optional)</Label>
          <div className="relative">
            <ExternalLink className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="link-url"
              placeholder="https://example.com (opens when popup is clicked)"
              value={settings.link_url || ''}
              onChange={(e) => setSettings({ ...settings, link_url: e.target.value })}
              className="pl-10"
            />
          </div>
          <p className="text-sm text-muted-foreground">
            If provided, clicking the popup will open this URL in a new tab
          </p>
        </div>

        {/* Display Settings */}
        <div className="space-y-4 p-4 border rounded-lg">
          <h3 className="font-medium">Display Settings</h3>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="show-once" className="text-sm font-medium">
                Show Once Per Session
              </Label>
              <p className="text-xs text-muted-foreground">
                Only show popup once per browser session
              </p>
            </div>
            <Switch
              id="show-once"
              checked={settings.show_once_per_session}
              onCheckedChange={(checked) => setSettings({ ...settings, show_once_per_session: checked })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="delay">Display Delay (milliseconds)</Label>
            <Input
              id="delay"
              type="number"
              min="0"
              step="100"
              value={settings.display_delay}
              onChange={(e) => setSettings({ ...settings, display_delay: parseInt(e.target.value) || 0 })}
            />
            <p className="text-xs text-muted-foreground">
              Delay before showing popup (1000ms = 1 second)
            </p>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end gap-2">
          <Button
            variant="outline"
            onClick={loadSettings}
            disabled={saving}
          >
            Reset
          </Button>
          <Button
            onClick={handleSave}
            disabled={saving || !settings.image_url}
          >
            {saving ? 'Saving...' : 'Save Settings'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
