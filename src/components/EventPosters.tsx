import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { eventPostersApi } from '@/db/api';
import type { EventPoster } from '@/types/index';
import { Skeleton } from '@/components/ui/skeleton';

export default function EventPosters() {
  const [posters, setPosters] = useState<EventPoster[]>([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadPosters();
  }, []);

  useEffect(() => {
    if (posters.length === 0 || !scrollRef.current) return;

    const scrollContainer = scrollRef.current;
    let scrollPosition = 0;
    const scrollSpeed = 1; // pixels per frame
    let animationFrameId: number;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      
      // Reset scroll position when reaching the end of first set
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationFrameId);
    };

    const handleMouseLeave = () => {
      animationFrameId = requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [posters]);

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
          Explore our exciting events
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
            className="shrink-0 w-80 md:w-96 h-64 rounded-lg overflow-hidden border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:glow-cyan group relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
          >
            <img
              src={poster.image_url}
              alt={`Event Poster ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
