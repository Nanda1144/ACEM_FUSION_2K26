import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Save } from 'lucide-react';
import { passkeyApi } from '@/db/api';
import type { AdminPasskey } from '@/types/index';
import { useToast } from '@/hooks/use-toast';

export default function PasskeyManagement() {
  const [passkey, setPasskey] = useState<AdminPasskey | null>(null);
  const [formData, setFormData] = useState({
    oldPasskey: '',
    newPasskey: '',
    confirmPasskey: ''
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    loadPasskey();
  }, []);

  const loadPasskey = async () => {
    try {
      const data = await passkeyApi.get();
      setPasskey(data);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load passkey',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!passkey) return;

    // Validation
    if (!formData.oldPasskey || !formData.newPasskey || !formData.confirmPasskey) {
      toast({
        title: 'Error',
        description: 'All fields are required',
        variant: 'destructive'
      });
      return;
    }

    if (formData.oldPasskey !== passkey.passkey) {
      toast({
        title: 'Error',
        description: 'Old passkey is incorrect',
        variant: 'destructive'
      });
      return;
    }

    if (formData.newPasskey !== formData.confirmPasskey) {
      toast({
        title: 'Error',
        description: 'New passkey and confirm passkey do not match',
        variant: 'destructive'
      });
      return;
    }

    setSaving(true);
    try {
      await passkeyApi.update(passkey.id, formData.newPasskey);
      toast({
        title: 'Success',
        description: 'Passkey updated successfully'
      });
      setFormData({
        oldPasskey: '',
        newPasskey: '',
        confirmPasskey: ''
      });
      loadPasskey();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update passkey',
        variant: 'destructive'
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Passkey Management</h2>

      <Card>
        <CardHeader>
          <CardTitle>Change Admin Passkey</CardTitle>
          <CardDescription>Update your admin access passkey</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <div>
                <Label htmlFor="oldPasskey">Old Passkey</Label>
                <Input
                  id="oldPasskey"
                  type="password"
                  value={formData.oldPasskey}
                  onChange={(e) => setFormData({ ...formData, oldPasskey: e.target.value })}
                  placeholder="Enter old passkey"
                />
              </div>

              <div>
                <Label htmlFor="newPasskey">New Passkey</Label>
                <Input
                  id="newPasskey"
                  type="password"
                  value={formData.newPasskey}
                  onChange={(e) => setFormData({ ...formData, newPasskey: e.target.value })}
                  placeholder="Enter new passkey"
                />
              </div>

              <div>
                <Label htmlFor="confirmPasskey">Confirm New Passkey</Label>
                <Input
                  id="confirmPasskey"
                  type="password"
                  value={formData.confirmPasskey}
                  onChange={(e) => setFormData({ ...formData, confirmPasskey: e.target.value })}
                  placeholder="Confirm new passkey"
                />
              </div>

              <Button onClick={handleSave} disabled={saving} className="glow-purple">
                <Save className="mr-2 h-4 w-4" />
                {saving ? 'Updating...' : 'Update Passkey'}
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
