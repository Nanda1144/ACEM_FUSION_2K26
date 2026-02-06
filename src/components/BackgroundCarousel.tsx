import { useState, useEffect } from 'react';
import { backgroundImagesApi } from '@/db/api';
import type { BackgroundImage } from '@/types/index';

export default function BackgroundCarousel() {
  const [images, setImages] = useState<BackgroundImage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadImages();
  }, []);

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
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, duration);

    return () => clearTimeout(timer);
  }, [currentIndex, images]);

  if (loading || images.length === 0) {
    return null;
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {images.map((image, index) => (
        <div
          key={image.id}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            opacity: index === currentIndex ? 1 : 0,
            backgroundImage: `url(${image.image_url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
          }}
        />
      ))}
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
}
