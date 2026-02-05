import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToEvents = () => {
    const eventsSection = document.getElementById('events');
    eventsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-end overflow-hidden pt-20 pb-32">
      {/* Animated Background Image */}
      <div className="absolute inset-0">
        <motion.img 
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80"
          alt="Fusion26 College Fest Background"
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          animate={{ 
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        />
        {/* Gradient overlay from transparent to dark at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80" />
      </div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>
      </div>
      
      {/* Content - Positioned at Bottom */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 
            className="font-bold mb-6 text-center tracking-wider whitespace-nowrap overflow-hidden" 
            style={{
              color: '#D4AF37',
              textShadow: '0 0 30px rgba(212, 175, 55, 0.8), 0 0 60px rgba(212, 175, 55, 0.5)',
              WebkitTextStroke: '3px #000000',
              paintOrder: 'stroke fill',
              letterSpacing: '0.1em',
              fontSize: 'clamp(2.5rem, 12vw, 10rem)',
            }}
          >
            FUSION 2K26
          </h1>
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl mb-8 text-center font-medium"
            style={{
              color: '#FFFFFF',
              textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 2px 2px 4px rgba(0, 0, 0, 0.8)',
              letterSpacing: '0.05em'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Integrate Modern Technology With Traditional Culture
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button
              size="lg"
              onClick={scrollToEvents}
              className="glow-cyan hover:scale-105 transition-transform duration-300 text-base md:text-lg px-8 py-6"
            >
              Explore Events
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
      >
        <ArrowDown className="h-8 w-8 text-primary" />
      </motion.div>
    </section>
  );
}
