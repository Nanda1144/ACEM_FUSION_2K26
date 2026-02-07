import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if splash has been shown in this session
    const splashShown = sessionStorage.getItem('splashShown');

    if (splashShown) {
      setIsVisible(false);
      return;
    }

    // Hide splash after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('splashShown', 'true');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <img
              src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_f7f8b99e-d294-478a-bad4-7fce2f8d3e90.jpg"
              alt="Fusion26 Splash"
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg glow-cyan"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-lg" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
