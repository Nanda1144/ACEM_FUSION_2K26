import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Save } from 'lucide-react';
import { contactApi } from '@/db/api';
import type { Contact } from '@/types/index';
import { useToast } from '@/hooks/use-toast';

export default function ContactManagement() {
  const [contact, setContact] = useState<Contact | null>(null);
  const [formData, setFormData] = useState({
    instagram: '',
    linkedin: '',
    whatsapp: '',
    email: ''
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    loadContact();
  }, []);

  const loadContact = async () => {
    try {
      const data = await contactApi.get();
      setContact(data);
      setFormData({
        instagram: data?.instagram || '',
        linkedin: data?.linkedin || '',
        whatsapp: data?.whatsapp || '',
        email: data?.email || ''
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load contact information',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!contact) return;

    setSaving(true);
    try {
      await contactApi.update(contact.id, formData);
      toast({
        title: 'Success',
        description: 'Contact information updated successfully'
      });
      loadContact();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update contact information',
        variant: 'destructive'
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Contact Management</h2>

      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
          <CardDescription>Update social media links and contact details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <div>
                <Label htmlFor="instagram">Instagram URL</Label>
                <Input
                  id="instagram"
                  value={formData.instagram}
                  onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                  placeholder="https://instagram.com/fusion26"
                />
              </div>

              <div>
                <Label htmlFor="linkedin">LinkedIn URL</Label>
                <Input
                  id="linkedin"
                  value={formData.linkedin}
                  onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                  placeholder="https://linkedin.com/company/fusion26"
                />
              </div>

              <div>
                <Label htmlFor="whatsapp">WhatsApp URL</Label>
                <Input
                  id="whatsapp"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  placeholder="https://wa.me/1234567890"
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="contact@fusion26.com"
                />
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
