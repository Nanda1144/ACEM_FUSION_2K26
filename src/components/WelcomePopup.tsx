import { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { popupSettingsApi } from '@/db/api';
import type { PopupSettings } from '@/types/index';
import { useRefresh } from '@/contexts/RefreshContext';

const DEFAULT_POPUP_IMAGE = '/main.jpeg';

interface WelcomePopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function WelcomePopup({ open, onOpenChange }: WelcomePopupProps) {
  const [settings, setSettings] = useState<PopupSettings | null>(null);
  const { refreshKey } = useRefresh();
  const [loading, setLoading] = useState(true);
  const [isHolding, setIsHolding] = useState(false);
  const timerRef = useRef<any>(null);
  const startTimeRef = useRef<number>(0);
  const remainingTimeRef = useRef<number>(0);

  const defaultPopupSettings: PopupSettings = {
    id: 'default-popup',
    enabled: true,
    image_url: DEFAULT_POPUP_IMAGE,
    link_url: null,
    show_once_per_session: true,
    display_delay: 1000,
    display_duration: 10000,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  useEffect(() => {
    loadPopupSettings();
  }, [refreshKey]);

  useEffect(() => {
    // Start timer when popup opens
    if (open) {
      startTimer(settings?.display_duration || 10000);
    }

    // Cleanup timer when popup closes
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [open, settings?.display_duration]);

  const startTimer = (duration: number) => {
    startTimeRef.current = Date.now();
    remainingTimeRef.current = duration;

    timerRef.current = setTimeout(() => {
      onOpenChange(false);
    }, duration);
  };

  const pauseTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;

      // Calculate remaining time
      const elapsed = Date.now() - startTimeRef.current;
      remainingTimeRef.current = Math.max(0, remainingTimeRef.current - elapsed);
    }
  };


  const loadPopupSettings = async () => {
    try {
      const data = await popupSettingsApi.get();
      const effectiveSettings =
        data && data.enabled && data.image_url
          ? data
          : defaultPopupSettings;
      setSettings(effectiveSettings);

      // Check if popup should be shown
      const hasSeenPopup = sessionStorage.getItem('hasSeenWelcomePopup');

      if (!effectiveSettings.show_once_per_session || !hasSeenPopup) {
        // Show popup after delay
        setTimeout(() => {
          onOpenChange(true);
          sessionStorage.setItem('hasSeenWelcomePopup', 'true');
        }, effectiveSettings.display_delay || 1000);
      }
    } catch (error) {
      console.error('Error loading popup settings:', error);
      setSettings(defaultPopupSettings);
      const hasSeenPopup = sessionStorage.getItem('hasSeenWelcomePopup');
      if (!hasSeenPopup) {
        setTimeout(() => {
          onOpenChange(true);
          sessionStorage.setItem('hasSeenWelcomePopup', 'true');
        }, defaultPopupSettings.display_delay);
      }
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

  const handleMouseDown = () => {
    setIsHolding(true);
    pauseTimer();
  };

  const handleMouseUp = () => {
    if (isHolding) {
      setIsHolding(false);
      // Close popup immediately when user releases
      onOpenChange(false);
    }
  };

  const handleTouchStart = () => {
    setIsHolding(true);
    pauseTimer();
  };

  const handleTouchEnd = () => {
    if (isHolding) {
      setIsHolding(false);
      // Close popup immediately when user releases
      onOpenChange(false);
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
          className={`relative w-full ${settings.link_url && !isHolding ? 'cursor-pointer' : ''} select-none`}
          onClick={!isHolding ? handleImageClick : undefined}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
        >
          <img
            src={settings.image_url}
            alt="Welcome Announcement"
            className="w-full h-auto max-h-[80vh] object-contain"
            loading="eager"
            draggable={false}
          />
          {settings.link_url && !isHolding && (
            <div className="absolute bottom-4 right-4 bg-primary/90 text-primary-foreground px-4 py-2 rounded-md text-sm font-medium">
              Click to learn more →
            </div>
          )}
          {isHolding && (
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="bg-background/90 text-foreground px-6 py-3 rounded-lg text-lg font-medium border-2 border-primary">
                Release to close
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
