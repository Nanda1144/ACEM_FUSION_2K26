import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { sponsorLogosApi } from '@/db/api';
import type { SponsorLogo } from '@/types/index';

export default function LogoCarousel() {
  const [logos, setLogos] = useState<SponsorLogo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadLogos();
  }, []);

  const loadLogos = async () => {
    try {
      const data = await sponsorLogosApi.getAll();
      setLogos(data);
    } catch (error) {
      console.error('Error loading sponsor logos:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading || logos.length === 0) {
    return null;
  }

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="w-full overflow-hidden py-6 relative z-20 pointer-events-none">
      {/* Subtle background glow for the track */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent blur-3xl -z-10" />

      <div className="flex w-fit">
        <motion.div
          animate={{
            x: ['-50%', '0%'], // Clean rightward scroll
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30, // Slower, more cinematic speed
              ease: "linear",
            },
          }}
          className="flex items-center gap-10"
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="relative flex items-center justify-center shrink-0 group"
              style={{
                width: '75px',
                height: '75px',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(16px)',
                borderRadius: logo.shape === 'round' ? '50%' : logo.shape === 'semi-square' ? '18px' : (index % 2 === 0 ? '18px' : '50%'),
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: `
                  0 8px 32px 0 rgba(0, 0, 0, 0.3),
                  inset 0 0 0 1px rgba(255, 255, 255, 0.05)
                `,
                padding: '14px' // Ensures logos are well-contained "inside"
              }}
            >
              {/* Inner glow for the shape */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background: 'radial-gradient(circle at center, white, transparent)',
                  borderRadius: 'inherit'
                }}
              />

              <img
                src={logo.image_url}
                alt="Sponsor"
                className="w-full h-full object-contain relative z-10 transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                style={{
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))'
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
