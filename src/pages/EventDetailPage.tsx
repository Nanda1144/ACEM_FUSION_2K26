import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Clock, MapPin, Users, Trophy, Phone, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { eventsApi } from '@/db/api';
import type { Event } from '@/types/index';
import FlexibleHeader from '@/components/FlexibleHeader';
import EnhancedFooter from '@/components/EnhancedFooter';

export default function EventDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      loadEvent(id);
    }
  }, [id]);

  const loadEvent = async (eventId: string) => {
    try {
      const data = await eventsApi.getById(eventId);
      setEvent(data);
    } catch (error) {
      console.error('Error loading event:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading event details...</p>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Event Not Found</h2>
          <Button onClick={() => navigate('/')}>Go Back Home</Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{event.name} - ACEM</title>
        <meta name="description" content={event.description} />
      </Helmet>

      <div className="min-h-screen">
        <FlexibleHeader />

        <main className="pt-24 pb-12 px-4">
          <div className="container mx-auto max-w-6xl">
            {/* Back Button */}
            <Button
              variant="outline"
              onClick={() => navigate('/')}
              className="mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>

            {/* Event Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Main Image */}
                <div className="relative h-[400px] rounded-2xl overflow-hidden">
                  <img
                    src={event.image_url || 'https://via.placeholder.com/800x600'}
                    alt={event.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${event.type === 'Technical'
                      ? 'bg-primary/90 text-primary-foreground'
                      : 'bg-secondary/90 text-secondary-foreground'
                      }`}>
                      {event.type}
                    </span>
                  </div>
                </div>

                {/* Event Info */}
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                    {event.name}
                  </h1>

                  {/* Description with format support */}
                  {event.description_format === 'list' ? (
                    <ul className="text-lg text-muted-foreground mb-6 space-y-2 list-disc list-inside">
                      {event.description.split('\n').filter(line => line.trim()).map((line, index) => (
                        <li key={index} className="text-justify leading-relaxed">
                          {line.replace(/^[•\-]\s*/, '').trim()}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div
                      className="text-lg text-muted-foreground mb-6 text-justify leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: event.description }}
                    />
                  )}

                  {/* Quick Info */}
                  <div className="space-y-3 mb-6">
                    {event.venue && (
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span>{event.venue}</span>
                      </div>
                    )}
                    {event.event_date && (
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-primary" />
                        <span>{new Date(event.event_date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}</span>
                      </div>
                    )}
                    {event.duration && (
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-primary" />
                        <span>{event.duration}</span>
                      </div>
                    )}
                    {event.team_size && (
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-primary" />
                        <span>Team Size: {event.team_size}</span>
                      </div>
                    )}
                    {event.prize_details && (
                      <div className="flex items-center gap-3">
                        <Trophy className="h-5 w-5 text-primary" />
                        <span>{event.prize_details}</span>
                      </div>
                    )}
                  </div>

                  {/* Registration Button */}
                  {event.registration_link && (
                    <Button
                      size="lg"
                      className="w-full glow-cyan"
                      onClick={() => window.open(event.registration_link!, '_blank')}
                    >
                      Register Now
                      <ExternalLink className="ml-2 h-5 w-5" />
                    </Button>
                  )}
                </div>
              </div>

              {/* Additional Images */}
              {event.additional_images && event.additional_images.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Event Gallery</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {event.additional_images.map((img, index) => (
                      <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                        <img
                          src={img}
                          alt={`${event.name} image ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Rules and Instructions */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {event.rules && (
                  <Card>
                    <CardContent className="pt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <span className="text-primary">📋</span>
                        Rules
                      </h2>
                      <div className="prose prose-invert max-w-none">
                        <p className="whitespace-pre-wrap">{event.rules}</p>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {event.instructions && (
                  <Card>
                    <CardContent className="pt-6">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <span className="text-primary">📝</span>
                        Instructions
                      </h2>
                      <div className="prose prose-invert max-w-none">
                        <p className="whitespace-pre-wrap">{event.instructions}</p>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Coordinators */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Staff Coordinators */}
                {event.staff_coordinators && event.staff_coordinators.length > 0 && (
                  <Card>
                    <CardContent className="pt-6">
                      <h2 className="text-2xl font-bold mb-4">
                        Staff Coordinator{event.staff_coordinators.length > 1 ? 's' : ''}
                      </h2>
                      <div className="space-y-4">
                        {event.staff_coordinators.map((coordinator, index) => (
                          <div key={index} className="p-4 bg-muted rounded-lg">
                            <h3 className="font-semibold text-lg mb-2">{coordinator.name}</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Phone className="h-4 w-4" />
                              <a href={`tel:${coordinator.contact}`} className="hover:text-primary transition-colors">
                                {coordinator.contact}
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Student Coordinators */}
                {event.student_coordinators && event.student_coordinators.length > 0 && (
                  <Card>
                    <CardContent className="pt-6">
                      <h2 className="text-2xl font-bold mb-4">
                        Student Coordinator{event.student_coordinators.length > 1 ? 's' : ''}
                      </h2>
                      <div className="space-y-4">
                        {event.student_coordinators.map((coordinator, index) => (
                          <div key={index} className="p-4 bg-muted rounded-lg">
                            <h3 className="font-semibold text-lg mb-2">{coordinator.name}</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Phone className="h-4 w-4" />
                              <a href={`tel:${coordinator.contact}`} className="hover:text-primary transition-colors">
                                {coordinator.contact}
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Bottom Registration CTA */}
              {event.registration_link && (
                <div className="mt-12 text-center">
                  <Separator className="mb-8" />
                  <h3 className="text-2xl font-bold mb-4">Ready to Participate?</h3>
                  <Button
                    size="lg"
                    className="glow-purple"
                    onClick={() => window.open(event.registration_link!, '_blank')}
                  >
                    Register for {event.name}
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              )}
            </motion.div>
          </div>
        </main>

        <EnhancedFooter />
      </div>
    </>
  );
}
