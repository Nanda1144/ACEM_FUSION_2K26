import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { galleryApi } from '@/db/api';
import type { GalleryImage } from '@/types/index';
import { Skeleton } from '@/components/ui/skeleton';

const frameColors = [
  { name: 'gold', color: '#FFD700', glow: 'rgba(255, 215, 0, 0.6)' },
  { name: 'blue', color: '#0066FF', glow: 'rgba(0, 102, 255, 0.6)' },
  { name: 'skyblue', color: '#87CEEB', glow: 'rgba(135, 206, 235, 0.6)' },
  { name: 'purple', color: '#9D4EDD', glow: 'rgba(157, 78, 221, 0.6)' },
  { name: 'pink', color: '#FF69B4', glow: 'rgba(255, 105, 180, 0.6)' }
];

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

  const getFrameColor = (index: number) => {
    return frameColors[index % frameColors.length];
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
            {images.map((image, index) => {
              const frameColor = getFrameColor(index);
              return (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className="mb-4 break-inside-avoid"
                >
                  <div 
                    className="relative overflow-hidden rounded-lg group cursor-pointer p-1.5 gallery-frame"
                    style={{
                      border: `3px solid ${frameColor.color}`,
                      background: `linear-gradient(135deg, ${frameColor.color}20, ${frameColor.color}08)`,
                      '--frame-color': frameColor.color,
                      '--frame-glow': frameColor.glow,
                      animation: `diagonalGlow 3s ease-in-out infinite`,
                      animationDelay: `${index * 0.2}s`
                    } as React.CSSProperties}
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
                          background: `linear-gradient(135deg, ${frameColor.glow}, transparent)`,
                          boxShadow: `inset 0 0 30px ${frameColor.glow}`
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      <style>{`
        @keyframes diagonalGlow {
          0%, 100% {
            box-shadow: 
              -4px -4px 20px var(--frame-glow),
              4px 4px 20px transparent;
          }
          25% {
            box-shadow: 
              -2px -2px 25px var(--frame-glow),
              2px 2px 15px var(--frame-glow);
          }
          50% {
            box-shadow: 
              -4px -4px 15px transparent,
              4px 4px 25px var(--frame-glow);
          }
          75% {
            box-shadow: 
              -2px -2px 15px var(--frame-glow),
              2px 2px 25px var(--frame-glow);
          }
        }

        .gallery-frame::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            135deg,
            transparent 0%,
            var(--frame-glow) 45%,
            transparent 50%,
            transparent 100%
          );
          animation: diagonalWave 4s linear infinite;
          pointer-events: none;
          opacity: 0.3;
        }

        @keyframes diagonalWave {
          0% {
            transform: translate(-100%, -100%) rotate(45deg);
          }
          100% {
            transform: translate(100%, 100%) rotate(45deg);
          }
        }
      `}</style>
    </section>
  );
}
