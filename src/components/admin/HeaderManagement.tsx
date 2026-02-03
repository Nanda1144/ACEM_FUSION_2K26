import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Save } from 'lucide-react';
import { headerSettingsApi, uploadImage } from '@/db/api';
import type { HeaderSettings } from '@/types/index';
import { useToast } from '@/hooks/use-toast';

export default function HeaderManagement() {
  const [settings, setSettings] = useState<HeaderSettings | null>(null);
  const [formData, setFormData] = useState({
    college_name: '',
    logo_1_url: '',
    logo_2_url: '',
    logo_3_url: '',
    logo_4_url: ''
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const data = await headerSettingsApi.get();
      setSettings(data);
      setFormData({
        college_name: data?.college_name || '',
        logo_1_url: data?.logo_1_url || '',
        logo_2_url: data?.logo_2_url || '',
        logo_3_url: data?.logo_3_url || '',
        logo_4_url: data?.logo_4_url || ''
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load header settings',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>, logoNumber: number) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const url = await uploadImage(file, 'app-9dfi9jpj51xd_committee_images');
      const logoKey = `logo_${logoNumber}_url` as keyof typeof formData;
      setFormData({ ...formData, [logoKey]: url });
      toast({
        title: 'Success',
        description: `Logo ${logoNumber} uploaded successfully`
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to upload logo',
        variant: 'destructive'
      });
    }
  };

  const handleSave = async () => {
    if (!settings) return;

    setSaving(true);
    try {
      await headerSettingsApi.update(settings.id, formData);
      toast({
        title: 'Success',
        description: 'Header settings updated successfully'
      });
      loadSettings();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update header settings',
        variant: 'destructive'
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Header Settings</h2>

      <Card>
        <CardHeader>
          <CardTitle>College Name & Logos</CardTitle>
          <CardDescription>Update header branding and navigation</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <div>
                <Label htmlFor="college_name">College Name</Label>
                <Input
                  id="college_name"
                  value={formData.college_name}
                  onChange={(e) => setFormData({ ...formData, college_name: e.target.value })}
                  placeholder="Enter college name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((num) => {
                  const logoKey = `logo_${num}_url` as keyof typeof formData;
                  return (
                    <div key={num}>
                      <Label htmlFor={`logo_${num}`}>Logo {num}</Label>
                      <div className="mt-2 space-y-2">
                        <Input
                          id={`logo_${num}`}
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleLogoUpload(e, num)}
                        />
                        {formData[logoKey] && (
                          <div className="flex items-center gap-4">
                            <img
                              src={formData[logoKey]}
                              alt={`Logo ${num}`}
                              className="h-16 w-16 object-cover rounded-full border-2 border-primary/30"
                            />
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => setFormData({ ...formData, [logoKey]: '' })}
                            >
                              Remove
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <Button onClick={handleSave} disabled={saving} className="glow-purple">
                <Save className="mr-2 h-4 w-4" />
                {saving ? 'Saving...' : 'Save Changes'}
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
