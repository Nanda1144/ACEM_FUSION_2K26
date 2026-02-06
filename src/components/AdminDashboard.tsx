import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import EventManagement from './admin/EventManagement';
import CommitteeManagement from './admin/CommitteeManagement';
import GalleryManagement from './admin/GalleryManagement';
import AboutManagement from './admin/AboutManagement';
import ContactManagement from './admin/ContactManagement';
import PasskeyManagement from './admin/PasskeyManagement';
import ThemeManagement from './admin/ThemeManagement';
import PageManagement from './admin/PageManagement';
import FooterManagement from './admin/FooterManagement';
import HeaderSettings from './admin/HeaderSettings';
import SponsorLogoManagement from './admin/SponsorLogoManagement';
import EventPosterManagement from './admin/EventPosterManagement';
import PopupManagement from './admin/PopupManagement';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface AdminDashboardProps {
  onClose: () => void;
}

export default function AdminDashboard({ onClose }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState('header');

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold gradient-text">Admin Dashboard</h1>
          <Button
            variant="outline"
            size="icon"
            onClick={onClose}
            className="border-primary/50 hover:border-primary"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-13 mb-8">
            <TabsTrigger value="header">Header</TabsTrigger>
            <TabsTrigger value="theme">Theme</TabsTrigger>
            <TabsTrigger value="popup">Popup</TabsTrigger>
            <TabsTrigger value="pages">Pages</TabsTrigger>
            <TabsTrigger value="footer">Footer</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="posters">Event Posters</TabsTrigger>
            <TabsTrigger value="committee">Committee</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
            <TabsTrigger value="logos">Mobile Logos</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
            <TabsTrigger value="passkey">Passkey</TabsTrigger>
          </TabsList>

          <TabsContent value="header">
            <HeaderSettings />
          </TabsContent>

          <TabsContent value="theme">
            <ThemeManagement />
          </TabsContent>

          <TabsContent value="popup">
            <PopupManagement />
          </TabsContent>

          <TabsContent value="pages">
            <PageManagement />
          </TabsContent>

          <TabsContent value="footer">
            <FooterManagement />
          </TabsContent>

          <TabsContent value="events">
            <EventManagement />
          </TabsContent>

          <TabsContent value="posters">
            <EventPosterManagement />
          </TabsContent>

          <TabsContent value="committee">
            <CommitteeManagement />
          </TabsContent>

          <TabsContent value="gallery">
            <GalleryManagement />
          </TabsContent>

          <TabsContent value="logos">
            <SponsorLogoManagement />
          </TabsContent>

          <TabsContent value="about">
            <AboutManagement />
          </TabsContent>

          <TabsContent value="contact">
            <ContactManagement />
          </TabsContent>

          <TabsContent value="passkey">
            <PasskeyManagement />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
