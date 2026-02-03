import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { headerSettingsApi } from '@/db/api';
import type { HeaderSettings } from '@/types/index';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerSettings, setHeaderSettings] = useState<HeaderSettings | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    loadHeaderSettings();
  }, []);

  const loadHeaderSettings = async () => {
    try {
      const data = await headerSettingsApi.get();
      setHeaderSettings(data);
    } catch (error) {
      console.error('Error loading header settings:', error);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Events', id: 'events' },
    { label: 'Committee', id: 'committee' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'About Us', id: 'about' },
    { label: 'Contact Us', id: 'contact' }
  ];

  const logos = [
    { id: 1, url: headerSettings?.logo_1_url, alt: 'College Logo 1' },
    { id: 2, url: headerSettings?.logo_2_url, alt: 'College Logo 2' },
    { id: 3, url: headerSettings?.logo_3_url, alt: 'College Logo 3' },
    { id: 4, url: headerSettings?.logo_4_url, alt: 'College Logo 4' }
  ].filter(logo => logo.url);

  const collegeName = headerSettings?.college_name || 'FUSION26';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-glass border-b border-primary/20 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* College Logos */}
          <div className="flex items-center gap-3">
            {logos.map((logo) => (
              <div
                key={logo.id}
                className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30 hover:border-primary transition-all duration-300 hover:scale-110"
              >
                <img
                  src={logo.url || ''}
                  alt={logo.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* College Name */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-2xl font-bold gradient-text whitespace-nowrap">
              {collegeName}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden border-primary/50 hover:border-primary"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="backdrop-blur-glass border-primary/20">
              <div className="flex flex-col gap-6 mt-8">
                <h2 className="text-2xl font-bold gradient-text mb-4">{collegeName}</h2>
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-lg text-foreground hover:text-primary transition-colors duration-300 font-medium"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
