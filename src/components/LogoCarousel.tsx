import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { sponsorLogosApi } from '@/db/api';
import type { SponsorLogo } from '@/types/index';

export default function LogoCarousel() {
  const [logos, setLogos] = useState<SponsorLogo[]>([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

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

  // Only show on homepage
  if (location.pathname !== '/' || loading || logos.length === 0) {
    return null;
  }

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="md:hidden w-full overflow-hidden py-6 relative" style={{ background: 'transparent' }}>
      <div className="logo-scroll-container">
        <div className="logo-scroll-track">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="logo-item relative"
              style={{
                width: '90px',
                height: '90px',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '16px',
                border: '2px solid rgba(212, 175, 55, 0.4)',
                backdropFilter: 'blur(10px)',
                boxShadow: `
                  0 0 20px rgba(212, 175, 55, 0.3),
                  0 0 40px rgba(212, 175, 55, 0.2),
                  inset 0 0 15px rgba(212, 175, 55, 0.1)
                `,
                animation: 'logoGlow 2s ease-in-out infinite alternate',
                animationDelay: `${index * 0.1}s`
              }}
            >
              <img
                src={logo.image_url}
                alt={`Sponsor ${logo.order_number}`}
                className="w-full h-full object-contain"
                loading="lazy"
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.4))'
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes logoGlow {
          0% {
            box-shadow: 
              0 0 15px rgba(212, 175, 55, 0.3),
              0 0 30px rgba(212, 175, 55, 0.2),
              inset 0 0 10px rgba(212, 175, 55, 0.1);
            border-color: rgba(212, 175, 55, 0.4);
          }
          50% {
            box-shadow: 
              0 0 25px rgba(0, 217, 255, 0.4),
              0 0 50px rgba(0, 217, 255, 0.3),
              inset 0 0 20px rgba(0, 217, 255, 0.15);
            border-color: rgba(0, 217, 255, 0.5);
          }
          100% {
            box-shadow: 
              0 0 30px rgba(157, 78, 221, 0.4),
              0 0 60px rgba(157, 78, 221, 0.3),
              inset 0 0 25px rgba(157, 78, 221, 0.15);
            border-color: rgba(157, 78, 221, 0.5);
          }
        }
      `}</style>
    </div>
  );
}
