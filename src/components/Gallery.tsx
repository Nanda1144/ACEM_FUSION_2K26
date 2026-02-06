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
                  className="relative overflow-hidden rounded-lg group cursor-pointer p-2 gallery-frame-gold"
                  style={{
                    border: '3px solid #FFD700',
                    background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.15), rgba(255, 215, 0, 0.05))',
                    animation: `goldenGlow 2.5s ease-in-out infinite`,
                    animationDelay: `${index * 0.15}s`
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
                        background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.4), rgba(255, 215, 0, 0.1))',
                        boxShadow: 'inset 0 0 40px rgba(255, 215, 0, 0.6)'
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @keyframes goldenGlow {
          0%, 100% {
            box-shadow: 
              -6px -6px 25px rgba(255, 215, 0, 0.5),
              6px 6px 25px rgba(255, 215, 0, 0.3),
              0 0 30px rgba(255, 215, 0, 0.4);
            border-color: #FFD700;
          }
          25% {
            box-shadow: 
              -4px -4px 30px rgba(255, 215, 0, 0.6),
              4px 4px 20px rgba(255, 215, 0, 0.4),
              0 0 40px rgba(255, 215, 0, 0.5);
            border-color: #FFED4E;
          }
          50% {
            box-shadow: 
              -6px -6px 20px rgba(255, 215, 0, 0.3),
              6px 6px 30px rgba(255, 215, 0, 0.6),
              0 0 50px rgba(255, 215, 0, 0.6);
            border-color: #FFC700;
          }
          75% {
            box-shadow: 
              -4px -4px 35px rgba(255, 215, 0, 0.7),
              4px 4px 25px rgba(255, 215, 0, 0.5),
              0 0 45px rgba(255, 215, 0, 0.55);
            border-color: #FFED4E;
          }
        }

        .gallery-frame-gold::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            135deg,
            transparent 0%,
            rgba(255, 215, 0, 0.4) 45%,
            rgba(255, 237, 78, 0.5) 50%,
            rgba(255, 215, 0, 0.4) 55%,
            transparent 100%
          );
          animation: diagonalWave 3.5s linear infinite;
          pointer-events: none;
          opacity: 0.6;
        }

        .gallery-frame-gold::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 0.5rem;
          padding: 3px;
          background: linear-gradient(
            135deg,
            rgba(255, 215, 0, 0.8),
            rgba(255, 237, 78, 0.6),
            rgba(255, 199, 0, 0.8)
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          animation: borderShine 3s linear infinite;
        }

        @keyframes diagonalWave {
          0% {
            transform: translate(-100%, -100%) rotate(45deg);
          }
          100% {
            transform: translate(100%, 100%) rotate(45deg);
          }
        }

        @keyframes borderShine {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
