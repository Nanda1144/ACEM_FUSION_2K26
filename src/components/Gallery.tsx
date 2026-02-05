import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { galleryApi } from '@/db/api';
import type { GalleryImage } from '@/types/index';
import { Skeleton } from '@/components/ui/skeleton';

export default function Gallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = async () => {
    try {
      const data = await galleryApi.getAll();
      setImages(data);
    } catch (error) {
      console.error('Error loading gallery images:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="gallery" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Gallery
          </h2>
          <p className="text-muted-foreground text-lg">
            Moments captured from previous editions
          </p>
        </motion.div>

        {loading ? (
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} className="mb-4 h-64 w-full bg-muted" />
            ))}
          </div>
        ) : images.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No images in gallery yet</p>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="mb-4 break-inside-avoid"
              >
                <div 
                  className="relative overflow-hidden rounded-lg group cursor-pointer p-1.5 animate-golden-glow"
                  style={{
                    border: '2px solid #D4AF37',
                    background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.12), rgba(212, 175, 55, 0.04))'
                  }}
                >
                  <div className="relative overflow-hidden rounded">
                    <img
                      src={image.image_url}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      style={{
                        filter: 'brightness(1) contrast(1.05)',
                      }}
                    />
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.3), rgba(0, 217, 255, 0.2))',
                        boxShadow: 'inset 0 0 30px rgba(212, 175, 55, 0.5)'
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
