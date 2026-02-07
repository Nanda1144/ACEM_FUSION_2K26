import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { backgroundImagesApi } from '@/db/api';
import type { BackgroundImage } from '@/types/index';
import { useRefresh } from '@/contexts/RefreshContext';

export default function BackgroundCarousel() {
  const [images, setImages] = useState<BackgroundImage[]>([]);
  const { refreshKey } = useRefresh();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    loadImages();
  }, [refreshKey]);

  const loadImages = async () => {
    try {
      const data = await backgroundImagesApi.getAll();
      setImages(data);
    } catch (error) {
      console.error('Error loading background images:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (images.length === 0) return;

    const currentImage = images[currentIndex];
    const duration = currentImage?.display_duration || 5000;

    const timer = setTimeout(() => {
      setIsTransitioning(true);
      const next = (currentIndex + 1) % images.length;
      setNextIndex(next);

      // After dissolve transition completes, update current index
      setTimeout(() => {
        setCurrentIndex(next);
        setIsTransitioning(false);
      }, 1500); // Match dissolve duration
    }, duration);

    return () => clearTimeout(timer);
  }, [currentIndex, images]);

  if (loading || images.length === 0) {
    return null;
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Current Image Layer */}
      <motion.div
        key={`current-${currentIndex}`}
        className="absolute inset-0"
        initial={{ opacity: 1 }}
        animate={{ opacity: isTransitioning ? 0 : 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        style={{
          backgroundImage: `url(${images[currentIndex]?.image_url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      />

      {/* Next Image Layer (for dissolve effect) */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            key={`next-${nextIndex}`}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            style={{
              backgroundImage: `url(${images[nextIndex]?.image_url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed'
            }}
          />
        )}
      </AnimatePresence>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />
    </div>
  );
}
