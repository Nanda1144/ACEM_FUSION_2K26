import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import FlexibleHeader from '@/components/FlexibleHeader';
import Hero from '@/components/Hero';
import Events from '@/components/Events';
import Committee from '@/components/Committee';
import Gallery from '@/components/Gallery';
import About from '@/components/About';
import Contact from '@/components/Contact';
import EnhancedFooter from '@/components/EnhancedFooter';
import Chatbot from '@/components/Chatbot';
import AdminDashboard from '@/components/AdminDashboard';
import { themeSettingsApi } from '@/db/api';
import type { ThemeSettings } from '@/types/index';

export default function HomePage() {
  const [showAdmin, setShowAdmin] = useState(false);
  const [themeSettings, setThemeSettings] = useState<ThemeSettings | null>(null);

  useEffect(() => {
    loadThemeSettings();
  }, []);

  const loadThemeSettings = async () => {
    try {
      const data = await themeSettingsApi.get();
      setThemeSettings(data);
    } catch (error) {
      console.error('Error loading theme settings:', error);
    }
  };

  const pageStyle = {
    backgroundColor: themeSettings?.page_bg_color || '#0A0F1E',
    backgroundImage: themeSettings?.page_bg_image ? `url(${themeSettings.page_bg_image})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
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
      <div className="min-h-screen" style={pageStyle}>
        <FlexibleHeader />
        <Hero />
        <Events />
        <Committee />
        <Gallery />
        <About />
        <Contact />
        <EnhancedFooter />
        <Chatbot onAuthenticated={() => setShowAdmin(true)} />
      </div>
    </>
  );
}
