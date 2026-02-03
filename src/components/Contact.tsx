import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { contactApi } from '@/db/api';
import type { Contact as ContactType } from '@/types/index';

export default function Contact() {
  const [contact, setContact] = useState<ContactType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadContact();
  }, []);

  const loadContact = async () => {
    try {
      const data = await contactApi.get();
      setContact(data);
    } catch (error) {
      console.error('Error loading contact:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg">
            Connect with us on social media
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-16 h-16 bg-muted rounded-full animate-pulse" />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {contact?.instagram && (
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-cyan hover:scale-110 transition-transform duration-300">
                  <Instagram className="h-8 w-8 text-primary-foreground" />
                </div>
              </a>
            )}
            {contact?.linkedin && (
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-cyan hover:scale-110 transition-transform duration-300">
                  <Linkedin className="h-8 w-8 text-primary-foreground" />
                </div>
              </a>
            )}
            {contact?.whatsapp && (
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-cyan hover:scale-110 transition-transform duration-300">
                  <Phone className="h-8 w-8 text-primary-foreground" />
                </div>
              </a>
            )}
            {contact?.email && (
              <a
                href={`mailto:${contact.email}`}
                className="group"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-cyan hover:scale-110 transition-transform duration-300">
                  <Mail className="h-8 w-8 text-primary-foreground" />
                </div>
              </a>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
