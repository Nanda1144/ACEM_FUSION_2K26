import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { aboutApi } from '@/db/api';
import type { AboutUs } from '@/types/index';

export default function About() {
  const [about, setAbout] = useState<AboutUs | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAbout();
  }, []);

  const loadAbout = async () => {
    try {
      const data = await aboutApi.get();
      setAbout(data);
    } catch (error) {
      console.error('Error loading about us:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="about" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Fusion26
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="backdrop-blur-glass border border-primary/20 rounded-lg p-8 md:p-12"
        >
          {loading ? (
            <div className="space-y-4">
              <div className="h-4 bg-muted rounded animate-pulse" />
              <div className="h-4 bg-muted rounded animate-pulse" />
              <div className="h-4 bg-muted rounded animate-pulse w-3/4" />
            </div>
          ) : (
            <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-wrap">
              {about?.content || 'Welcome to Fusion26!'}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
