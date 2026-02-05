import { useState, useEffect } from 'react';
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
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="md:hidden w-full overflow-hidden py-4 bg-card/20">
      <div className="logo-scroll-container">
        <div className="logo-scroll-track">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="logo-item"
              style={{
                width: '80px',
                height: '80px',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <img
                src={logo.image_url}
                alt={`Sponsor ${logo.order_number}`}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
