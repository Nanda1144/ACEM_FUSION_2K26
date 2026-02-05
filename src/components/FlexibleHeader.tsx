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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled && !themeSettings?.header_bg_color
            ? 'backdrop-blur-glass border-b border-primary/20 shadow-lg'
            : ''
        }`}
        style={headerStyle}
      >
        <div className="container mx-auto px-3 sm:px-4 md:px-6">
          {/* Responsive Row: Logos + College Name + Navigation */}
          <div className="flex items-center justify-between h-16 sm:h-18 md:h-20 gap-2 sm:gap-4 md:gap-6">
            {/* Left Logos - Responsive Size */}
            {leftLogos.length > 0 && (
              <div className="flex items-center shrink-0" style={{ gap: '6px' }}>
                {leftLogos.map((logo) => (
                  <div
                    key={logo.id}
                    className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 overflow-hidden border border-primary/30 sm:border-2 hover:border-primary transition-all duration-300 hover:scale-110 ${
                      logo.shape === 'semi-square' ? 'rounded-md sm:rounded-lg' : 'rounded-full'
                    }`}
                  >
                    <img
                      src={logo.url}
                      alt={`Logo ${logo.id}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* College Name with Subtitle and Tagline - Responsive Typography */}
            <div className="flex-1 px-2 sm:px-4 md:px-6 min-w-0">
              <h1 
                className="font-bold truncate text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl" 
                style={{
                  ...titleStyle,
                  color: themeSettings?.header_text_color || '#D4AF37',
                  textShadow: '0 0 20px rgba(212, 175, 55, 0.5)',
                  WebkitTextStroke: '0.5px #000000',
                  paintOrder: 'stroke fill'
                }}
              >
                {themeSettings?.header_title || 'ACEM FUSION 2k26'}
              </h1>
              <p 
                className="hidden sm:block text-[10px] sm:text-xs md:text-sm mt-0.5 sm:mt-1 opacity-90 font-semibold truncate" 
                style={{ 
                  color: themeSettings?.header_text_color || '#D4AF37',
                  textShadow: '0 0 10px rgba(212, 175, 55, 0.4)',
                  WebkitTextStroke: '0.3px #000000',
                  paintOrder: 'stroke fill',
                  letterSpacing: '0.05em'
                }}
              >
                {themeSettings?.header_subtitle || 'Aditya College of Engineering'}
              </p>
              <p 
                className="hidden md:block text-[9px] md:text-xs mt-0.5 opacity-85 font-medium truncate" 
                style={{ 
                  color: themeSettings?.header_text_color || '#D4AF37',
                  textShadow: '0 0 10px rgba(212, 175, 55, 0.4)',
                  WebkitTextStroke: '0.3px #000000',
                  paintOrder: 'stroke fill',
                  letterSpacing: '0.1em'
                }}
              >
                Madanapalle
              </p>
              <p 
                className="hidden lg:block text-[8px] lg:text-xs mt-0.5 opacity-75 italic font-medium truncate" 
                style={{ 
                  color: themeSettings?.header_text_color || '#D4AF37',
                  textShadow: '0 0 10px rgba(212, 175, 55, 0.4)',
                  WebkitTextStroke: '0.3px #000000',
                  paintOrder: 'stroke fill'
                }}
              >
                {themeSettings?.header_tagline || '(UGC - Autonomous Institution)'}
              </p>
            </div>

            {/* Right: Navigation + Right Logos */}
            <div className="flex items-center gap-2 sm:gap-4 md:gap-6 ml-auto shrink-0">
              {/* Desktop Navigation - Responsive Font */}
              <nav className="hidden lg:flex items-center gap-4 xl:gap-8 relative z-50">
                {pages.map((page) => (
                  <button
                    key={page.id}
                    onClick={() => scrollToSection(page.slug)}
                    className="transition-colors duration-300 font-medium relative group text-xs xl:text-sm"
                    style={navStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = themeSettings?.nav_hover_color || '#D4AF37';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = themeSettings?.nav_text_color || '#FFFFFF';
                    }}
                  >
                    {page.title}
                    <span 
                      className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                      style={{ backgroundColor: themeSettings?.nav_hover_color || '#D4AF37' }}
                    />
                  </button>
                ))}
              </nav>

              {/* Right Logos - Responsive Size */}
              {rightLogos.length > 0 && (
                <div className="hidden sm:flex items-center shrink-0" style={{ gap: '6px' }}>
                  {rightLogos.map((logo) => (
                    <div
                      key={logo.id}
                      className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 overflow-hidden border border-primary/30 sm:border-2 hover:border-primary transition-all duration-300 hover:scale-110 ${
                        logo.shape === 'semi-square' ? 'rounded-md sm:rounded-lg' : 'rounded-full'
                      }`}
                    >
                      <img
                        src={logo.url}
                        alt={`Logo ${logo.id}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}

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
                    <div className="mb-4">
                      <h2 className="text-2xl font-bold" style={titleStyle}>
                        {themeSettings?.header_title || 'ACEM FUSION 2k26'}
                      </h2>
                      <p 
                        className="text-sm mt-2 opacity-90" 
                        style={{ color: themeSettings?.header_text_color || '#D4AF37' }}
                      >
                        {themeSettings?.header_subtitle || 'Aditya College of Engineering'}
                      </p>
                      <p 
                        className="text-xs mt-1 opacity-85" 
                        style={{ color: themeSettings?.header_text_color || '#D4AF37' }}
                      >
                        Madanapalle
                      </p>
                      <p 
                        className="text-xs mt-1 opacity-75 italic" 
                        style={{ color: themeSettings?.header_text_color || '#D4AF37' }}
                      >
                        {themeSettings?.header_tagline || '(UGC - Autonomous Institution)'}
                      </p>
                    </div>
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
        </div>
      </header>
    </>
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
