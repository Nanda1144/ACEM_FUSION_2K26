import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import FlexibleHeader from '@/components/FlexibleHeader';
import Hero from '@/components/Hero';
import LogoCarousel from '@/components/LogoCarousel';
import EventPosters from '@/components/EventPosters';
import Events from '@/components/Events';
import OverallCoordinators from '@/components/OverallCoordinators';
import Committee from '@/components/Committee';
import Gallery from '@/components/Gallery';
import About from '@/components/About';
import Contact from '@/components/Contact';
import EnhancedFooter from '@/components/EnhancedFooter';
import Chatbot from '@/components/Chatbot';
import AdminDashboard from '@/components/AdminDashboard';
import WelcomePopup from '@/components/WelcomePopup';
import BackgroundCarousel from '@/components/BackgroundCarousel';
export default function HomePage() {
  const [showAdmin, setShowAdmin] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Popup logic could go here if needed
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };


  if (showAdmin) {
    return (
      <>
        <Helmet>
          <title>Admin Dashboard - ACEM</title>
          <meta name="description" content="ACEM Admin Dashboard" />
        </Helmet>
        <AdminDashboard onClose={() => setShowAdmin(false)} />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>ACEM - College Fest 2026</title>
        <meta name="description" content="Welcome to ACEM, the ultimate college fest experience! Join us for an unforgettable celebration of talent, creativity, and innovation." />
      </Helmet>
      <BackgroundCarousel />
      <div className="relative">
        <FlexibleHeader />
        <Hero onExploreEvents={handleClosePopup} />
        <LogoCarousel />
        <Events />
        <OverallCoordinators />
        <Committee />
        <Gallery />
        <EventPosters />
        <About />
        <Contact />
        <EnhancedFooter />
        <Chatbot onAuthenticated={() => setShowAdmin(true)} />
        <WelcomePopup open={showPopup} onOpenChange={setShowPopup} />
      </div>
    </>
  );
}
