import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, User, Phone } from 'lucide-react';
import { eventsApi } from '@/db/api';
import type { Event } from '@/types/index';
import { Skeleton } from '@/components/ui/skeleton';

export default function Events() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'Technical' | 'Cultural'>('Technical');

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      const data = await eventsApi.getAll();
      setEvents(data);
    } catch (error) {
      console.error('Error loading events:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredEvents = events.filter(event => event.type === activeTab);

  return (
    <section id="events" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Events
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover amazing technical and cultural events
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'Technical' | 'Cultural')} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="Technical" className="text-base">
              Technical
            </TabsTrigger>
            <TabsTrigger value="Cultural" className="text-base">
              Cultural
            </TabsTrigger>
          </TabsList>

          <TabsContent value="Technical">
            <EventGrid events={filteredEvents} loading={loading} />
          </TabsContent>

          <TabsContent value="Cultural">
            <EventGrid events={filteredEvents} loading={loading} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function EventGrid({ events, loading }: { events: Event[]; loading: boolean }) {
  const navigate = useNavigate();
  
  const handleNavigate = (eventId: string) => {
    navigate(`/event/${eventId}`);
  };
  
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="overflow-hidden">
            <Skeleton className="h-48 w-full bg-muted" />
            <CardHeader>
              <Skeleton className="h-6 w-3/4 bg-muted" />
              <Skeleton className="h-4 w-1/2 bg-muted" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-20 w-full bg-muted" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">No events available yet</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event, index) => (
        <motion.div
          key={event.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <Card className="overflow-hidden backdrop-blur-glass border-primary/20 hover:border-primary/50 transition-all duration-300 hover:glow-cyan group h-full flex flex-col cursor-pointer">
            {event.image_url && (
              <div 
                className="relative h-48 overflow-hidden"
                onClick={() => handleNavigate(event.id)}
              >
                <img
                  src={event.image_url}
                  alt={event.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>
            )}
            <CardHeader onClick={() => handleNavigate(event.id)}>
              <div className="flex items-start justify-between gap-2">
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{event.name}</CardTitle>
                <Badge variant="outline" className="border-primary text-primary">
                  {event.type}
                </Badge>
              </div>
              <CardDescription className="line-clamp-3">
                {event.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              {event.staff_coordinators && event.staff_coordinators.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-primary">Staff Coordinators</h4>
                  {event.staff_coordinators.slice(0, 1).map((coord, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                      <User className="h-3 w-3" />
                      <span>{coord.name}</span>
                      <Phone className="h-3 w-3 ml-2" />
                      <span>{coord.contact}</span>
                    </div>
                  ))}
                </div>
              )}
              {event.student_coordinators && event.student_coordinators.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-secondary">Student Coordinators</h4>
                  {event.student_coordinators.slice(0, 1).map((coord, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                      <User className="h-3 w-3" />
                      <span>{coord.name}</span>
                      <Phone className="h-3 w-3 ml-2" />
                      <span>{coord.contact}</span>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button
                className="flex-1"
                onClick={() => handleNavigate(event.id)}
              >
                View Details
              </Button>
              {event.registration_link && (
                <Button
                  variant="outline"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(event.registration_link!, '_blank');
                  }}
                >
                  <ExternalLink className="h-4 w-4" />
                </Button>
              )}
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
