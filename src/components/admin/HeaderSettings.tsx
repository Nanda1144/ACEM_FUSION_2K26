import { useState, useEffect } from 'react';
import { Save, Upload, X, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { themeSettingsApi } from '@/db/api';
import type { ThemeSettings, Logo } from '@/types/index';
import { useToast } from '@/hooks/use-toast';

export default function HeaderSettings() {
  const { toast } = useToast();
  const [settings, setSettings] = useState<ThemeSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      setLoading(true);
      const data = await themeSettingsApi.get();
      setSettings(data);
    } catch (error) {
      console.error('Error loading settings:', error);
      toast({
        title: 'Error',
        description: 'Failed to load header settings',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!settings) return;

    try {
      setSaving(true);
      await themeSettingsApi.update(settings.id, settings);
      toast({
        title: 'Success',
        description: 'Header settings saved successfully'
      });
    } catch (error) {
      console.error('Error saving settings:', error);
      toast({
        title: 'Error',
        description: 'Failed to save header settings',
        variant: 'destructive'
      });
    } finally {
      setSaving(false);
    }
  };

  const handleAddLogo = () => {
    if (!settings) return;
    
    const newLogo: Logo = {
      id: Date.now(),
      url: '',
      position: 'left',
      order: settings.logos.length,
      shape: 'circle'
    };

    setSettings({
      ...settings,
      logos: [...settings.logos, newLogo]
    });
  };

  const handleRemoveLogo = (logoId: number) => {
    if (!settings) return;
    
    setSettings({
      ...settings,
      logos: settings.logos.filter(logo => logo.id !== logoId)
    });
  };

  const handleLogoChange = (logoId: number, field: keyof Logo, value: string | number) => {
    if (!settings) return;
    
    setSettings({
      ...settings,
      logos: settings.logos.map(logo =>
        logo.id === logoId ? { ...logo, [field]: value } : logo
      )
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-muted-foreground">Loading header settings...</div>
      </div>
    );
  }

  if (!settings) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-muted-foreground">No settings found</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header Text Content */}
      <Card>
        <CardHeader>
          <CardTitle>Header Text Content</CardTitle>
          <CardDescription>
            Configure the main title, subtitle, and tagline displayed in the header
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="header_title">Header Title *</Label>
            <Input
              id="header_title"
              value={settings.header_title}
              onChange={(e) => setSettings({ ...settings, header_title: e.target.value })}
              placeholder="e.g., ACEM FUSION 2k26"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="header_subtitle">Header Subtitle</Label>
            <Input
              id="header_subtitle"
              value={settings.header_subtitle || ''}
              onChange={(e) => setSettings({ ...settings, header_subtitle: e.target.value })}
              placeholder="e.g., Aditya College of Engineering"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="header_tagline">Header Tagline</Label>
            <Input
              id="header_tagline"
              value={settings.header_tagline || ''}
              onChange={(e) => setSettings({ ...settings, header_tagline: e.target.value })}
              placeholder="e.g., (UGC - Autonomous Institution)"
            />
          </div>
        </CardContent>
      </Card>

      {/* Header Styling */}
      <Card>
        <CardHeader>
          <CardTitle>Header Styling</CardTitle>
          <CardDescription>
            Customize colors, fonts, and background
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="header_text_color">Text Color</Label>
              <div className="flex gap-2">
                <Input
                  id="header_text_color"
                  type="color"
                  value={settings.header_text_color}
                  onChange={(e) => setSettings({ ...settings, header_text_color: e.target.value })}
                  className="w-20 h-10"
                />
                <Input
                  value={settings.header_text_color}
                  onChange={(e) => setSettings({ ...settings, header_text_color: e.target.value })}
                  placeholder="#D4AF37"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="header_bg_color">Background Color</Label>
              <div className="flex gap-2">
                <Input
                  id="header_bg_color"
                  type="color"
                  value={settings.header_bg_color}
                  onChange={(e) => setSettings({ ...settings, header_bg_color: e.target.value })}
                  className="w-20 h-10"
                />
                <Input
                  value={settings.header_bg_color}
                  onChange={(e) => setSettings({ ...settings, header_bg_color: e.target.value })}
                  placeholder="transparent"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="header_font_family">Font Family</Label>
              <Select
                value={settings.header_font_family}
                onValueChange={(value) => setSettings({ ...settings, header_font_family: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Inter">Inter</SelectItem>
                  <SelectItem value="Poppins">Poppins</SelectItem>
                  <SelectItem value="Roboto">Roboto</SelectItem>
                  <SelectItem value="Montserrat">Montserrat</SelectItem>
                  <SelectItem value="Playfair Display">Playfair Display</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="header_font_size">Font Size</Label>
              <Select
                value={settings.header_font_size}
                onValueChange={(value) => setSettings({ ...settings, header_font_size: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="xl">XL</SelectItem>
                  <SelectItem value="2xl">2XL</SelectItem>
                  <SelectItem value="3xl">3XL</SelectItem>
                  <SelectItem value="4xl">4XL</SelectItem>
                  <SelectItem value="5xl">5XL</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="header_bg_image">Background Image URL</Label>
            <Input
              id="header_bg_image"
              value={settings.header_bg_image || ''}
              onChange={(e) => setSettings({ ...settings, header_bg_image: e.target.value })}
              placeholder="https://example.com/header-bg.jpg"
            />
          </div>
        </CardContent>
      </Card>

      {/* Navigation Styling */}
      <Card>
        <CardHeader>
          <CardTitle>Navigation Styling</CardTitle>
          <CardDescription>
            Customize navigation menu appearance
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nav_text_color">Nav Text Color</Label>
              <div className="flex gap-2">
                <Input
                  id="nav_text_color"
                  type="color"
                  value={settings.nav_text_color}
                  onChange={(e) => setSettings({ ...settings, nav_text_color: e.target.value })}
                  className="w-20 h-10"
                />
                <Input
                  value={settings.nav_text_color}
                  onChange={(e) => setSettings({ ...settings, nav_text_color: e.target.value })}
                  placeholder="#FFFFFF"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="nav_hover_color">Nav Hover Color</Label>
              <div className="flex gap-2">
                <Input
                  id="nav_hover_color"
                  type="color"
                  value={settings.nav_hover_color}
                  onChange={(e) => setSettings({ ...settings, nav_hover_color: e.target.value })}
                  className="w-20 h-10"
                />
                <Input
                  value={settings.nav_hover_color}
                  onChange={(e) => setSettings({ ...settings, nav_hover_color: e.target.value })}
                  placeholder="#00D9FF"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="nav_font_size">Nav Font Size</Label>
              <Select
                value={settings.nav_font_size}
                onValueChange={(value) => setSettings({ ...settings, nav_font_size: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sm">Small</SelectItem>
                  <SelectItem value="base">Base</SelectItem>
                  <SelectItem value="lg">Large</SelectItem>
                  <SelectItem value="xl">XL</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Logos Management */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Header Logos</CardTitle>
              <CardDescription>
                Add logos to display on left or right side of header
              </CardDescription>
            </div>
            <Button onClick={handleAddLogo} size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add Logo
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {settings.logos.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No logos added yet. Click "Add Logo" to get started.
            </div>
          ) : (
            settings.logos.map((logo, index) => (
              <div key={logo.id} className="flex items-center gap-4 p-4 border rounded-lg">
                <div className="flex-shrink-0">
                  {logo.url ? (
                    <img
                      src={logo.url}
                      alt={`Logo ${index + 1}`}
                      className={`w-12 h-12 object-cover border-2 border-primary/30 ${
                        logo.shape === 'semi-square' ? 'rounded-lg' : 'rounded-full'
                      }`}
                    />
                  ) : (
                    <div className={`w-12 h-12 bg-muted flex items-center justify-center border-2 border-primary/30 ${
                      logo.shape === 'semi-square' ? 'rounded-lg' : 'rounded-full'
                    }`}>
                      <Upload className="h-5 w-5 text-muted-foreground" />
                    </div>
                  )}
                </div>

                <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <Label>Logo URL</Label>
                    <Input
                      value={logo.url}
                      onChange={(e) => handleLogoChange(logo.id, 'url', e.target.value)}
                      placeholder="https://example.com/logo.png"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Shape</Label>
                    <Select
                      value={logo.shape || 'circle'}
                      onValueChange={(value) => handleLogoChange(logo.id, 'shape', value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="circle">Circle</SelectItem>
                        <SelectItem value="semi-square">Semi-Square</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Position</Label>
                    <Select
                      value={logo.position}
                      onValueChange={(value) => handleLogoChange(logo.id, 'position', value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="left">Left</SelectItem>
                        <SelectItem value="right">Right</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Order</Label>
                    <Input
                      type="number"
                      value={logo.order}
                      onChange={(e) => handleLogoChange(logo.id, 'order', parseInt(e.target.value) || 0)}
                      min={0}
                    />
                  </div>
                </div>

                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => handleRemoveLogo(logo.id)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))
          )}
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button onClick={handleSave} disabled={saving} size="lg">
          <Save className="h-4 w-4 mr-2" />
          {saving ? 'Saving...' : 'Save Header Settings'}
        </Button>
      </div>
    </div>
  );
}
