import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, User, Phone } from 'lucide-react';
import { eventsApi, overallCoordinatorsApi } from '@/db/api';
import type { Event, OverallCoordinator } from '@/types/index';
import { Skeleton } from '@/components/ui/skeleton';

export default function Events() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'Technical' | 'Cultural'>('Technical');
  const [overallCoordinators, setOverallCoordinators] = useState<OverallCoordinator[]>([]);
  const [coordinatorsLoading, setCoordinatorsLoading] = useState(true);

  useEffect(() => {
    loadEvents();
  }, []);

  useEffect(() => {
    loadOverallCoordinators();
  }, [activeTab]);

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

  const loadOverallCoordinators = async () => {
    setCoordinatorsLoading(true);
    try {
      const data = await overallCoordinatorsApi.getByEventType(activeTab);
      setOverallCoordinators(data);
    } catch (error) {
      console.error('Error loading overall coordinators:', error);
    } finally {
      setCoordinatorsLoading(false);
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
            Explore our exciting lineup of technical and cultural events
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

        {/* Overall Coordinator Contact Details Section */}
        {!coordinatorsLoading && overallCoordinators.length > 0 && (
          <motion.div
            key={activeTab} // Re-animate when tab changes
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-16 pt-12 border-t border-primary/20"
          >
            <div className="text-center mb-10">
              <h3 
                className="text-3xl md:text-4xl font-bold mb-3"
                style={{
                  color: '#00D9FF',
                  textShadow: '0 0 20px rgba(0, 217, 255, 0.8), 0 0 40px rgba(138, 43, 226, 0.5)',
                  WebkitTextStroke: '1.5px #000000',
                  paintOrder: 'stroke fill',
                }}
              >
                {activeTab} Events - Contact Details
              </h3>
              <p className="text-muted-foreground text-lg">
                Get in touch with our coordinators for any queries
              </p>
            </div>
            <OverallCoordinatorDetails coordinators={overallCoordinators} eventType={activeTab} />
          </motion.div>
        )}
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
              {event.description_format === 'list' ? (
                <CardDescription className="line-clamp-3">
                  {event.description.split('\n').filter(line => line.trim()).slice(0, 2).map((line, idx) => (
                    <div key={idx} className="text-justify leading-relaxed">
                      • {line.replace(/^[•\-]\s*/, '').trim()}
                    </div>
                  ))}
                </CardDescription>
              ) : (
                <CardDescription 
                  className="line-clamp-3 prose prose-sm dark:prose-invert max-w-none text-justify"
                  dangerouslySetInnerHTML={{ __html: event.description }}
                />
              )}
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              {/* Staff Coordinators - Always show only 1 */}
              {event.staff_coordinators && event.staff_coordinators.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-primary">Staff Coordinator</h4>
                  {event.staff_coordinators.slice(0, 1).map((coord, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                      <User className="h-3 w-3" />
                      <span>{coord.name}</span>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Student Coordinators - Show only 1 */}
              {event.student_coordinators && event.student_coordinators.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-secondary">
                    Student Coordinator
                  </h4>
                  {event.student_coordinators.slice(0, 1).map((coord, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                      <User className="h-3 w-3" />
                      <span>{coord.name}</span>
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

function CoordinatorDetails({ events, eventType }: { events: Event[]; eventType: 'Technical' | 'Cultural' }) {
  // Collect all unique coordinators from events
  const allStaffCoordinators = events.flatMap(event => event.staff_coordinators || []);
  const allStudentCoordinators = events.flatMap(event => event.student_coordinators || []);

  // Remove duplicates based on contact number
  const uniqueStaffCoordinators = Array.from(
    new Map(allStaffCoordinators.map(coord => [coord.contact, coord])).values()
  );
  
  const uniqueStudentCoordinators = Array.from(
    new Map(allStudentCoordinators.map(coord => [coord.contact, coord])).values()
  );

  if (uniqueStaffCoordinators.length === 0 && uniqueStudentCoordinators.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No coordinators assigned yet</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {/* Staff Coordinators */}
      {uniqueStaffCoordinators.length > 0 && (
        <Card className="backdrop-blur-glass border-primary/30 hover:border-primary/50 transition-all duration-300 hover:glow-cyan">
          <CardHeader className="border-b border-primary/20 pb-4">
            <CardTitle 
              className="text-2xl md:text-3xl flex items-center gap-3"
              style={{
                color: '#00D9FF',
                textShadow: '0 0 20px rgba(0, 217, 255, 0.5)',
                WebkitTextStroke: '1px #000000',
                paintOrder: 'stroke fill',
              }}
            >
              <User className="h-7 w-7" />
              Staff Coordinator{uniqueStaffCoordinators.length > 1 ? 's' : ''}
            </CardTitle>
            <CardDescription className="text-base">
              {eventType === 'Technical' 
                ? 'Contact persons for technical events' 
                : 'Contact persons for cultural events'}
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-3">
            {uniqueStaffCoordinators.map((coordinator, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-primary/5 rounded-lg border border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 group"
              >
                <h4 className="font-bold text-lg mb-2 text-primary group-hover:text-primary/90">
                  {coordinator.name}
                </h4>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-primary" />
                  <a 
                    href={`tel:${coordinator.contact}`} 
                    className="text-muted-foreground hover:text-primary transition-colors font-medium"
                  >
                    {coordinator.contact}
                  </a>
                </div>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Student Coordinators */}
      {uniqueStudentCoordinators.length > 0 && (
        <Card className="backdrop-blur-glass border-secondary/30 hover:border-secondary/50 transition-all duration-300 hover:glow-purple">
          <CardHeader className="border-b border-secondary/20 pb-4">
            <CardTitle 
              className="text-2xl md:text-3xl flex items-center gap-3"
              style={{
                color: '#D4AF37',
                textShadow: '0 0 20px rgba(212, 175, 55, 0.5)',
                WebkitTextStroke: '1px #000000',
                paintOrder: 'stroke fill',
              }}
            >
              <User className="h-7 w-7" />
              Student Coordinator{uniqueStudentCoordinators.length > 1 ? 's' : ''}
            </CardTitle>
            <CardDescription className="text-base">
              {eventType === 'Technical'
                ? 'Student contacts for technical events'
                : 'Student contacts for cultural events'}
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-3">
            {uniqueStudentCoordinators.map((coordinator, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-secondary/5 rounded-lg border border-secondary/20 hover:border-secondary/40 hover:bg-secondary/10 transition-all duration-300 group"
              >
                <h4 className="font-bold text-lg mb-2 text-secondary group-hover:text-secondary/90">
                  {coordinator.name}
                </h4>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-secondary" />
                  <a 
                    href={`tel:${coordinator.contact}`} 
                    className="text-muted-foreground hover:text-secondary transition-colors font-medium"
                  >
                    {coordinator.contact}
                  </a>
                </div>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
}

function OverallCoordinatorDetails({ coordinators, eventType }: { coordinators: OverallCoordinator[]; eventType: 'Technical' | 'Cultural' }) {
  const staffCoordinators = coordinators.filter(c => c.type === 'staff');
  const studentCoordinators = coordinators.filter(c => c.type === 'student');

  if (staffCoordinators.length === 0 && studentCoordinators.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No coordinators assigned yet</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {/* Staff Coordinators */}
      {staffCoordinators.length > 0 && (
        <Card className="backdrop-blur-glass border-primary/30 hover:border-primary/50 transition-all duration-300 hover:glow-cyan">
          <CardHeader className="border-b border-primary/20 pb-4">
            <CardTitle 
              className="text-2xl md:text-3xl flex items-center gap-3"
              style={{
                color: '#00D9FF',
                textShadow: '0 0 20px rgba(0, 217, 255, 0.5)',
                WebkitTextStroke: '1px #000000',
                paintOrder: 'stroke fill',
              }}
            >
              <User className="h-7 w-7" />
              Staff Coordinator{staffCoordinators.length > 1 ? 's' : ''}
            </CardTitle>
            <CardDescription className="text-base">
              {eventType === 'Technical' 
                ? 'Contact persons for technical events' 
                : 'Contact persons for cultural events'}
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-3">
            {staffCoordinators.map((coordinator, index) => (
              <motion.div 
                key={coordinator.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-primary/5 rounded-lg border border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  {coordinator.show_photo && coordinator.image_url && (
                    <div className="shrink-0">
                      <img 
                        src={coordinator.image_url} 
                        alt={coordinator.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-primary/30 group-hover:border-primary/60 transition-all"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-lg mb-1 text-primary group-hover:text-primary/90">
                      {coordinator.name}
                    </h4>
                    {coordinator.position && (
                      <p className="text-sm text-muted-foreground mb-2 italic">
                        {coordinator.position}
                      </p>
                    )}
                    {coordinator.contact && (
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="h-4 w-4 text-primary" />
                        <a 
                          href={`tel:${coordinator.contact}`} 
                          className="text-muted-foreground hover:text-primary transition-colors font-medium"
                        >
                          {coordinator.contact}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Student Coordinators */}
      {studentCoordinators.length > 0 && (
        <Card className="backdrop-blur-glass border-secondary/30 hover:border-secondary/50 transition-all duration-300 hover:glow-purple">
          <CardHeader className="border-b border-secondary/20 pb-4">
            <CardTitle 
              className="text-2xl md:text-3xl flex items-center gap-3"
              style={{
                color: '#D4AF37',
                textShadow: '0 0 20px rgba(212, 175, 55, 0.5)',
                WebkitTextStroke: '1px #000000',
                paintOrder: 'stroke fill',
              }}
            >
              <User className="h-7 w-7" />
              Student Coordinator{studentCoordinators.length > 1 ? 's' : ''}
            </CardTitle>
            <CardDescription className="text-base">
              {eventType === 'Technical'
                ? 'Student contacts for technical events'
                : 'Student contacts for cultural events'}
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-3">
            {studentCoordinators.map((coordinator, index) => (
              <motion.div 
                key={coordinator.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-secondary/5 rounded-lg border border-secondary/20 hover:border-secondary/40 hover:bg-secondary/10 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  {coordinator.show_photo && coordinator.image_url && (
                    <div className="shrink-0">
                      <img 
                        src={coordinator.image_url} 
                        alt={coordinator.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-secondary/30 group-hover:border-secondary/60 transition-all"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-lg mb-1 text-secondary group-hover:text-secondary/90">
                      {coordinator.name}
                    </h4>
                    {coordinator.position && (
                      <p className="text-sm text-muted-foreground mb-2 italic">
                        {coordinator.position}
                      </p>
                    )}
                    {coordinator.contact && (
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="h-4 w-4 text-secondary" />
                        <a 
                          href={`tel:${coordinator.contact}`} 
                          className="text-muted-foreground hover:text-secondary transition-colors font-medium"
                        >
                          {coordinator.contact}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
