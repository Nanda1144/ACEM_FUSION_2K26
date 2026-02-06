import { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { popupSettingsApi } from '@/db/api';
import type { PopupSettings } from '@/types/index';

interface WelcomePopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function WelcomePopup({ open, onOpenChange }: WelcomePopupProps) {
  const [settings, setSettings] = useState<PopupSettings | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPopupSettings();
  }, []);

  const loadPopupSettings = async () => {
    try {
      const data = await popupSettingsApi.get();
      setSettings(data);

      if (data && data.enabled && data.image_url) {
        // Check if popup should be shown
        const hasSeenPopup = sessionStorage.getItem('hasSeenWelcomePopup');
        
        if (!data.show_once_per_session || !hasSeenPopup) {
          // Show popup after delay
          setTimeout(() => {
            onOpenChange(true);
            sessionStorage.setItem('hasSeenWelcomePopup', 'true');
          }, data.display_delay || 1000);
        }
      }
    } catch (error) {
      console.error('Error loading popup settings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    onOpenChange(false);
  };

  const handleImageClick = () => {
    if (settings?.link_url) {
      window.open(settings.link_url, '_blank', 'noopener,noreferrer');
    }
  };

  if (loading || !settings || !settings.enabled || !settings.image_url) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden border-2 border-primary/50 bg-background/95 backdrop-blur-sm">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 z-50 rounded-full bg-background/80 hover:bg-background"
          onClick={handleClose}
        >
          <X className="h-5 w-5" />
        </Button>
        
        <div 
          className={`relative w-full ${settings.link_url ? 'cursor-pointer' : ''}`}
          onClick={handleImageClick}
        >
          <img
            src={settings.image_url}
            alt="Welcome Announcement"
            className="w-full h-auto max-h-[80vh] object-contain"
            loading="eager"
          />
          {settings.link_url && (
            <div className="absolute bottom-4 right-4 bg-primary/90 text-primary-foreground px-4 py-2 rounded-md text-sm font-medium">
              Click to learn more →
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
