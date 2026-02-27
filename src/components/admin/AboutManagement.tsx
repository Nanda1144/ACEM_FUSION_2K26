import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Save } from 'lucide-react';
import { aboutUsApi } from '@/db/api';
import type { AboutUs } from '@/types/index';
import { useToast } from '@/hooks/use-toast';

export default function AboutManagement() {
  const [about, setAbout] = useState<AboutUs | null>(null);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    loadAbout();
  }, []);

  const loadAbout = async () => {
    try {
      const data = await aboutUsApi.get();
      setAbout(data);
      setContent(data?.content || '');
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load about us content',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!about) return;

    setSaving(true);
    try {
      await aboutUsApi.update(about.id, content);
      toast({
        title: 'Success',
        description: 'About us content updated successfully'
      });
      loadAbout();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update content',
        variant: 'destructive'
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">About Us Management</h2>

      <Card>
        <CardHeader>
          <CardTitle>About Us Content</CardTitle>
          <CardDescription>Edit the about us section content</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <Textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={10}
                placeholder="Enter about us content..."
                className="resize-none"
              />
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
