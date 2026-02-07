import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { popupImageApi } from '@/db/api';
import type { PopupImage as PopupImageType } from '@/types/index';
import { useRefresh } from '@/contexts/RefreshContext';

export default function PopupImage() {
  const [popup, setPopup] = useState<PopupImageType | null>(null);
  const { refreshKey } = useRefresh();
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<any>(null);
  const startTimeRef = useRef<number>(0);
  const remainingTimeRef = useRef<number>(0);

  useEffect(() => {
    loadPopup();
  }, [refreshKey]);

  const loadPopup = async () => {
    try {
      const data = await popupImageApi.get();
      if (data && data.is_enabled) {
        setPopup(data);
        const duration = (data.duration || 10) * 1000;
        remainingTimeRef.current = duration;
        setIsVisible(true);
        startTimer(duration);
      }
    } catch (error) {
      console.error('Error loading popup:', error);
    }
  };

  const startTimer = (duration: number) => {
    startTimeRef.current = Date.now();
    timerRef.current = setTimeout(() => {
      handleClose();
    }, duration);
  };

  const handleClose = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setIsVisible(false);
  };

  const handleMouseDown = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      // Calculate remaining time
      const elapsed = Date.now() - startTimeRef.current;
      remainingTimeRef.current = remainingTimeRef.current - elapsed;
      setIsPaused(true);
    }
  };

  const handleMouseUp = () => {
    if (isPaused) {
      setIsPaused(false);
      handleClose();
    }
  };

  const handleTouchStart = () => {
    handleMouseDown();
  };

  const handleTouchEnd = () => {
    handleMouseUp();
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  if (!popup) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{ pointerEvents: 'auto' }}
        >
          {/* Background overlay with glow effects */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={handleClose}
          >
            {/* Animated glow effects */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(255, 215, 0, 0.3) 0%, transparent 70%)',
                  filter: 'blur(60px)',
                }}
                animate={isPaused ? {} : {
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(255, 215, 0, 0.25) 0%, transparent 70%)',
                  filter: 'blur(60px)',
                }}
                animate={isPaused ? {} : {
                  scale: [1.2, 1, 1.2],
                  opacity: [0.25, 0.4, 0.25],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1.5,
                }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(255, 237, 78, 0.2) 0%, transparent 70%)',
                  filter: 'blur(80px)',
                }}
                animate={isPaused ? {} : {
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.35, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </motion.div>

          {/* Popup image container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="relative max-w-4xl w-full z-10"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onClick={handleClose}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute -top-4 -right-4 z-20 bg-primary text-primary-foreground rounded-full p-2 hover:bg-primary/90 transition-colors shadow-lg"
              aria-label="Close popup"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image with golden frame and glow */}
            <div
              className="relative overflow-hidden rounded-lg"
              style={{
                border: '4px solid #FFD700',
                boxShadow: `
                  0 0 30px rgba(255, 215, 0, 0.6),
                  0 0 60px rgba(255, 215, 0, 0.4),
                  0 0 90px rgba(255, 215, 0, 0.2),
                  inset 0 0 20px rgba(255, 215, 0, 0.3)
                `,
                background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 215, 0, 0.05))',
              }}
            >
              {/* Animated border shine */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, transparent 0%, rgba(255, 215, 0, 0.4) 45%, rgba(255, 237, 78, 0.6) 50%, rgba(255, 215, 0, 0.4) 55%, transparent 100%)',
                }}
                animate={isPaused ? {} : {
                  x: ['-200%', '200%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              {/* Image */}
              <img
                src={popup.image_url}
                alt="Popup"
                className="w-full h-auto max-h-[80vh] object-contain select-none"
                draggable={false}
                style={{
                  filter: 'brightness(1.05) contrast(1.05)',
                }}
              />

              {/* Pause indicator */}
              <AnimatePresence>
                {isPaused && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm"
                  >
                    ⏸ Paused
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Hold instruction (shows briefly at start) */}
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm pointer-events-none"
              >
                Hold to read • Release to close
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
