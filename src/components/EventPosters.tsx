import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { eventPostersApi } from '@/db/api';
import type { EventPoster } from '@/types/index';
import { Skeleton } from '@/components/ui/skeleton';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function EventPosters() {
  const [posters, setPosters] = useState<EventPoster[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPoster, setSelectedPoster] = useState<EventPoster | null>(null);
  const [isHolding, setIsHolding] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const scrollSpeedRef = useRef<number>(1);

  useEffect(() => {
    loadPosters();
  }, []);

  useEffect(() => {
    if (posters.length === 0 || !scrollRef.current) return;

    const scrollContainer = scrollRef.current;
    let scrollPosition = 0;
    
    // Calculate scroll speed based on duration (default 30 seconds for full scroll)
    const avgDuration = posters.length > 0 
      ? posters.reduce((sum, p) => sum + (p.scroll_duration || 30000), 0) / posters.length 
      : 30000;
    scrollSpeedRef.current = (scrollContainer.scrollWidth / 2) / (avgDuration / 16.67); // 60fps

    const scroll = () => {
      if (!isHolding) {
        scrollPosition += scrollSpeedRef.current;
        
        // Reset scroll position when reaching the end of first set
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [posters, isHolding]);

  const loadPosters = async () => {
    try {
      const data = await eventPostersApi.getAll() as EventPoster[];
      setPosters(data.sort((a: EventPoster, b: EventPoster) => a.display_order - b.display_order));
    } catch (error) {
      console.error('Error loading event posters:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePosterMouseDown = (poster: EventPoster) => {
    setIsHolding(true);
    setSelectedPoster(poster);
  };

  const handlePosterMouseUp = () => {
    setIsHolding(false);
    setSelectedPoster(null);
  };

  const handlePosterTouchStart = (poster: EventPoster) => {
    setIsHolding(true);
    setSelectedPoster(poster);
  };

  const handlePosterTouchEnd = () => {
    setIsHolding(false);
    setSelectedPoster(null);
  };

  if (loading) {
    return (
      <section className="py-12 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4">
          <div className="flex gap-6 overflow-hidden">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-64 w-96 shrink-0 bg-muted" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (posters.length === 0) {
    return null;
  }

  // Duplicate posters for seamless infinite scroll
  const duplicatedPosters = [...posters, ...posters];

  return (
    <>
      <section className="py-12 bg-gradient-to-b from-background to-card/30 overflow-hidden">
        <div className="container mx-auto px-4 mb-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center gradient-text mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Event Highlights
          </motion.h2>
          <motion.p
            className="text-center text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hold any poster to view in detail
          </motion.p>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden"
          style={{
            scrollBehavior: 'auto',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {duplicatedPosters.map((poster, index) => (
            <motion.div
              key={`${poster.id}-${index}`}
              className="shrink-0 w-80 md:w-96 h-64 rounded-lg overflow-hidden border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:glow-cyan group relative cursor-pointer select-none"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              onMouseDown={() => handlePosterMouseDown(poster)}
              onMouseUp={handlePosterMouseUp}
              onMouseLeave={handlePosterMouseUp}
              onTouchStart={() => handlePosterTouchStart(poster)}
              onTouchEnd={handlePosterTouchEnd}
              onTouchCancel={handlePosterTouchEnd}
            >
              <img
                src={poster.image_url}
                alt={`Event Poster ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-2 right-2 bg-primary/80 text-primary-foreground px-3 py-1 rounded-md text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Hold to view
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Popup Dialog for Held Poster */}
      <AnimatePresence>
        {selectedPoster && isHolding && (
          <Dialog open={true} onOpenChange={() => {}}>
            <DialogContent className="max-w-5xl p-0 overflow-hidden border-2 border-primary/50 bg-background/95 backdrop-blur-sm">
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-2 z-50 rounded-full bg-background/80 hover:bg-background"
                onMouseDown={(e) => {
                  e.stopPropagation();
                  handlePosterMouseUp();
                }}
                onTouchStart={(e) => {
                  e.stopPropagation();
                  handlePosterTouchEnd();
                }}
              >
                <X className="h-5 w-5" />
              </Button>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="relative w-full"
              >
                <img
                  src={selectedPoster.image_url}
                  alt="Event Poster Detail"
                  className="w-full h-auto max-h-[85vh] object-contain"
                  draggable={false}
                />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/90 text-foreground px-6 py-3 rounded-lg text-sm font-medium border-2 border-primary">
                  Release to continue scrolling
                </div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}
