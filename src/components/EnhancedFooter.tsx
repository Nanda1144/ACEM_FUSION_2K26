import { useState, useEffect } from 'react';
import { footerSettingsApi } from '@/db/api';
import type { FooterSettings } from '@/types/index';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, Globe } from 'lucide-react';

export default function EnhancedFooter() {
  const [settings, setSettings] = useState<FooterSettings | null>(null);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const data = await footerSettingsApi.get();
      setSettings(data);
    } catch (error) {
      console.error('Error loading footer settings:', error);
    }
  };

  if (!settings) return null;

  const footerStyle = {
    backgroundColor: settings.bg_color,
    color: settings.text_color
  };

  const socialIcons: Record<string, any> = {
    instagram: Instagram,
    facebook: Facebook,
    linkedin: Linkedin,
    twitter: Twitter
  };

  return (
    <footer className="border-t border-primary/20 py-12 px-4" style={footerStyle}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* College Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">{settings.college_name}</h3>
            {settings.address && (
              <div className="flex items-start gap-2 mb-3">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" style={{ color: settings.text_color }} />
                <p className="text-sm">{settings.address}</p>
              </div>
            )}
            {settings.phone && (
              <div className="flex items-center gap-2 mb-3">
                <Phone className="h-5 w-5" style={{ color: settings.text_color }} />
                <a href={`tel:${settings.phone}`} className="text-sm hover:text-primary transition-colors">
                  {settings.phone}
                </a>
              </div>
            )}
            {settings.email && (
              <div className="flex items-center gap-2 mb-3">
                <Mail className="h-5 w-5" style={{ color: settings.text_color }} />
                <a href={`mailto:${settings.email}`} className="text-sm hover:text-primary transition-colors">
                  {settings.email}
                </a>
              </div>
            )}
            {settings.website && (
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5" style={{ color: settings.text_color }} />
                <a href={`https://${settings.website}`} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary transition-colors">
                  {settings.website}
                </a>
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm hover:text-primary transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm hover:text-primary transition-colors">
                  Events
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('committee')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm hover:text-primary transition-colors">
                  Committee
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm hover:text-primary transition-colors">
                  Gallery
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm hover:text-primary transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm hover:text-primary transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              {Object.entries(settings.social_links || {}).map(([platform, url]) => {
                const Icon = socialIcons[platform];
                if (!Icon || !url) return null;
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border-2 border-primary/30 hover:border-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
            {settings.additional_info && (
              <p className="text-sm mt-6 opacity-80">{settings.additional_info}</p>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary/20 pt-6 text-center">
          <p className="text-sm opacity-80">
            © 2026 {settings.college_name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
