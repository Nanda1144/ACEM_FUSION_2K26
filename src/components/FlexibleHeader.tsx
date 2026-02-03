import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { themeSettingsApi, pagesApi } from '@/db/api';
import type { ThemeSettings, Page } from '@/types/index';

export default function FlexibleHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeSettings, setThemeSettings] = useState<ThemeSettings | null>(null);
  const [pages, setPages] = useState<Page[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    loadThemeSettings();
    loadPages();
  }, []);

  const loadThemeSettings = async () => {
    try {
      const data = await themeSettingsApi.get();
      setThemeSettings(data);
    } catch (error) {
      console.error('Error loading theme settings:', error);
    }
  };

  const loadPages = async () => {
    try {
      const data = await pagesApi.getAll();
      setPages(data.filter(page => page.show_in_menu && page.is_published));
    } catch (error) {
      console.error('Error loading pages:', error);
    }
  };

  const scrollToSection = (slug: string) => {
    const section = document.getElementById(slug);
    section?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const leftLogos = themeSettings?.logos?.filter(logo => logo.position === 'left').sort((a, b) => a.order - b.order) || [];
  const rightLogos = themeSettings?.logos?.filter(logo => logo.position === 'right').sort((a, b) => a.order - b.order) || [];

  const headerStyle = {
    backgroundColor: themeSettings?.header_bg_color || 'transparent',
    backgroundImage: themeSettings?.header_bg_image ? `url(${themeSettings.header_bg_image})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  const titleStyle = {
    fontFamily: themeSettings?.header_font_family || 'Inter',
    fontSize: getFontSize(themeSettings?.header_font_size || '2xl'),
    color: themeSettings?.header_text_color || '#00D9FF'
  };

  const navStyle = {
    fontSize: getFontSize(themeSettings?.nav_font_size || 'base'),
    color: themeSettings?.nav_text_color || '#FFFFFF'
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled && !themeSettings?.header_bg_color
          ? 'backdrop-blur-glass border-b border-primary/20 shadow-lg'
          : ''
      }`}
      style={headerStyle}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Left Logos */}
          <div className="flex items-center gap-3">
            {leftLogos.map((logo) => (
              <div
                key={logo.id}
                className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30 hover:border-primary transition-all duration-300 hover:scale-110"
              >
                <img
                  src={logo.url}
                  alt={`Logo ${logo.id}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* College Name */}
          <div className="hidden md:block">
            <h1 className="font-bold whitespace-nowrap" style={titleStyle}>
              {themeSettings?.header_title || 'ACEM'}
            </h1>
          </div>

          {/* Desktop Navigation and Right Logos */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Navigation Menu */}
            <nav className="flex items-center gap-6">
              {pages.map((page) => (
                <button
                  key={page.id}
                  onClick={() => scrollToSection(page.slug)}
                  className="transition-colors duration-300 font-medium relative group"
                  style={navStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = themeSettings?.nav_hover_color || '#00D9FF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = themeSettings?.nav_text_color || '#FFFFFF';
                  }}
                >
                  {page.title}
                  <span 
                    className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                    style={{ backgroundColor: themeSettings?.nav_hover_color || '#00D9FF' }}
                  />
                </button>
              ))}
            </nav>

            {/* Right Logos */}
            <div className="flex items-center gap-3 ml-4">
              {rightLogos.map((logo) => (
                <div
                  key={logo.id}
                  className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30 hover:border-primary transition-all duration-300 hover:scale-110"
                >
                  <img
                    src={logo.url}
                    alt={`Logo ${logo.id}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

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
                <h2 className="text-2xl font-bold mb-4" style={titleStyle}>
                  {themeSettings?.header_title || 'ACEM'}
                </h2>
                {pages.map((page) => (
                  <button
                    key={page.id}
                    onClick={() => scrollToSection(page.slug)}
                    className="text-left text-lg transition-colors duration-300 font-medium"
                    style={navStyle}
                  >
                    {page.title}
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

function getFontSize(size: string): string {
  const sizeMap: Record<string, string> = {
    'xs': '0.75rem',
    'sm': '0.875rem',
    'base': '1rem',
    'lg': '1.125rem',
    'xl': '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem'
  };
  return sizeMap[size] || '1rem';
}
