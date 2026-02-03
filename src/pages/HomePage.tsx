import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '@/components/Hero';
import Events from '@/components/Events';
import Committee from '@/components/Committee';
import Gallery from '@/components/Gallery';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import AdminDashboard from '@/components/AdminDashboard';

export default function HomePage() {
  const [showAdmin, setShowAdmin] = useState(false);

  if (showAdmin) {
    return (
      <>
        <Helmet>
          <title>Admin Dashboard - Fusion26</title>
          <meta name="description" content="Fusion26 Admin Dashboard" />
        </Helmet>
        <AdminDashboard onClose={() => setShowAdmin(false)} />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Fusion26 - College Fest 2026</title>
        <meta name="description" content="Welcome to Fusion26, the ultimate college fest experience! Join us for an unforgettable celebration of talent, creativity, and innovation." />
      </Helmet>
      <div className="min-h-screen">
        <Hero />
        <Events />
        <Committee />
        <Gallery />
        <About />
        <Contact />
        <Footer />
        <Chatbot onAuthenticated={() => setShowAdmin(true)} />
      </div>
    </>
  );
}
