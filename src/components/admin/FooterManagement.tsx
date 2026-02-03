import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Save } from 'lucide-react';
import { footerSettingsApi } from '@/db/api';
import type { FooterSettings } from '@/types/index';
import { useToast } from '@/hooks/use-toast';

export default function FooterManagement() {
  const [settings, setSettings] = useState<FooterSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const data = await footerSettingsApi.get();
      setSettings(data);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load footer settings',
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
      await footerSettingsApi.update(settings.id, settings);
      toast({
        title: 'Success',
        description: 'Footer settings updated successfully'
      });
      loadSettings();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update footer settings',
        variant: 'destructive'
      });
    } finally {
      setSaving(false);
    }
  };

  const updateSocialLink = (platform: string, url: string) => {
    if (!settings) return;
    setSettings({
      ...settings,
      social_links: {
        ...settings.social_links,
        [platform]: url
      }
    });
  };

  if (loading) return <div>Loading...</div>;
  if (!settings) return <div>No settings found</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Footer Management</h2>
        <Button onClick={handleSave} disabled={saving} className="glow-purple">
          <Save className="mr-2 h-4 w-4" />
          {saving ? 'Saving...' : 'Save Changes'}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* College Information */}
        <Card>
          <CardHeader>
            <CardTitle>College Information</CardTitle>
            <CardDescription>Update college contact details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>College Name</Label>
              <Input
                value={settings.college_name}
                onChange={(e) => setSettings({ ...settings, college_name: e.target.value })}
                placeholder="Enter college name"
              />
            </div>

            <div>
              <Label>Address</Label>
              <Textarea
                value={settings.address || ''}
                onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                placeholder="Enter full address"
                rows={3}
              />
            </div>

            <div>
              <Label>Phone Number</Label>
              <Input
                value={settings.phone || ''}
                onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                placeholder="+91 1234567890"
              />
            </div>

            <div>
              <Label>Email Address</Label>
              <Input
                type="email"
                value={settings.email || ''}
                onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                placeholder="info@college.edu"
              />
            </div>

            <div>
              <Label>Website</Label>
              <Input
                value={settings.website || ''}
                onChange={(e) => setSettings({ ...settings, website: e.target.value })}
                placeholder="www.college.edu"
              />
            </div>
          </CardContent>
        </Card>

        {/* Social Media Links */}
        <Card>
          <CardHeader>
            <CardTitle>Social Media Links</CardTitle>
            <CardDescription>Update social media profiles</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Instagram</Label>
              <Input
                value={settings.social_links?.instagram || ''}
                onChange={(e) => updateSocialLink('instagram', e.target.value)}
                placeholder="https://instagram.com/college"
              />
            </div>

            <div>
              <Label>Facebook</Label>
              <Input
                value={settings.social_links?.facebook || ''}
                onChange={(e) => updateSocialLink('facebook', e.target.value)}
                placeholder="https://facebook.com/college"
              />
            </div>

            <div>
              <Label>LinkedIn</Label>
              <Input
                value={settings.social_links?.linkedin || ''}
                onChange={(e) => updateSocialLink('linkedin', e.target.value)}
                placeholder="https://linkedin.com/company/college"
              />
            </div>

            <div>
              <Label>Twitter</Label>
              <Input
                value={settings.social_links?.twitter || ''}
                onChange={(e) => updateSocialLink('twitter', e.target.value)}
                placeholder="https://twitter.com/college"
              />
            </div>
          </CardContent>
        </Card>

        {/* Styling */}
        <Card>
          <CardHeader>
            <CardTitle>Footer Styling</CardTitle>
            <CardDescription>Customize footer appearance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Background Color</Label>
              <div className="flex gap-2">
                <Input
                  type="color"
                  value={settings.bg_color}
                  onChange={(e) => setSettings({ ...settings, bg_color: e.target.value })}
                  className="w-20 h-10"
                />
                <Input
                  value={settings.bg_color}
                  onChange={(e) => setSettings({ ...settings, bg_color: e.target.value })}
                  placeholder="#0A0F1E"
                />
              </div>
            </div>

            <div>
              <Label>Text Color</Label>
              <div className="flex gap-2">
                <Input
                  type="color"
                  value={settings.text_color}
                  onChange={(e) => setSettings({ ...settings, text_color: e.target.value })}
                  className="w-20 h-10"
                />
                <Input
                  value={settings.text_color}
                  onChange={(e) => setSettings({ ...settings, text_color: e.target.value })}
                  placeholder="#FFFFFF"
                />
              </div>
            </div>

            <div>
              <Label>Additional Information</Label>
              <Textarea
                value={settings.additional_info || ''}
                onChange={(e) => setSettings({ ...settings, additional_info: e.target.value })}
                placeholder="Copyright text or additional info"
                rows={3}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
