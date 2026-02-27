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
      <section className="py-16 bg-gradient-to-b from-background via-background/95 to-card/30 overflow-hidden relative">
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-[10%] left-[20%] w-[30vw] h-[30vw] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[10%] right-[20%] w-[30vw] h-[30vw] bg-secondary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-4 mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold cinematic-serif gradient-text mb-4 tracking-wider">
              Event Highlights
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
              Experience the pulse of FUSION 2K26. <span className="text-primary font-medium">Hold any poster</span> to immerse in the details.
            </p>
          </motion.div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-hidden py-10"
          style={{
            scrollBehavior: 'auto',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {duplicatedPosters.map((poster, index) => (
            <motion.div
              key={`${poster.id}-${index}`}
              className={`shrink-0 w-85 md:w-96 h-64 rounded-xl overflow-hidden border-[3px] transition-all duration-500 group relative cursor-pointer select-none
                ${isHolding && selectedPoster?.id === poster.id
                  ? 'border-primary scale-[1.05] shadow-[0_0_45px_rgba(0,217,255,0.8)] z-30'
                  : 'border-white/5 hover:border-primary/60 hover:shadow-[0_0_25px_rgba(0,217,255,0.4)]'
                }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % posters.length) * 0.1, duration: 0.6 }}
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
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                draggable={false}
              />

              {/* Glossy overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/40 pointer-events-none" />

              {/* Content overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />

              {/* Bottom tag */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-widest text-white font-semibold">
                  Preview
                </div>
                <div className="bg-primary px-3 py-1.5 rounded-full text-[10px] uppercase tracking-widest text-black font-extrabold shadow-[0_0_15px_rgba(0,217,255,0.8)]">
                  Hold
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Popup Dialog for Held Poster */}
      <AnimatePresence>
        {selectedPoster && isHolding && (
          <Dialog open={true} onOpenChange={() => { }}>
            <DialogContent className="max-w-5xl p-2 overflow-hidden border-4 border-primary bg-black/90 backdrop-blur-xl shadow-[0_0_50px_rgba(0,217,255,0.5)]">
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4 z-50 rounded-full bg-black/50 hover:bg-black border border-white/20 text-white"
                onMouseDown={(e) => {
                  e.stopPropagation();
                  handlePosterMouseUp();
                }}
                onTouchStart={(e) => {
                  e.stopPropagation();
                  handlePosterTouchEnd();
                }}
              >
                <X className="h-6 w-6" />
              </Button>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full rounded-lg overflow-hidden"
              >
                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,217,255,0.2)] pointer-events-none z-10" />
                <img
                  src={selectedPoster.image_url}
                  alt="Event Poster Detail"
                  className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                  draggable={false}
                />

                {/* Hold to exit indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="bg-primary/20 backdrop-blur-xl border-2 border-primary text-primary px-8 py-4 rounded-2xl text-base font-bold tracking-widest uppercase shadow-[0_0_30px_rgba(0,217,255,0.2)]"
                  >
                    Release to Exit
                  </motion.div>
                  <div className="w-1 h-8 bg-gradient-to-b from-primary to-transparent" />
                </div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}
