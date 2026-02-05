import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { overallCoordinatorsApi } from '@/db/api';
import type { OverallCoordinator } from '@/types/index';
import { Skeleton } from '@/components/ui/skeleton';
import { User, Phone, Briefcase } from 'lucide-react';

export default function OverallCoordinators() {
  const [coordinators, setCoordinators] = useState<OverallCoordinator[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCoordinators();
  }, []);

  const loadCoordinators = async () => {
    try {
      const data = await overallCoordinatorsApi.getAll() as OverallCoordinator[];
      setCoordinators(data.sort((a: OverallCoordinator, b: OverallCoordinator) => a.display_order - b.display_order));
    } catch (error) {
      console.error('Error loading overall coordinators:', error);
    } finally {
      setLoading(false);
    }
  };

  const staffCoordinators = coordinators.filter(c => c.type === 'staff');
  const studentCoordinators = coordinators.filter(c => c.type === 'student');

  if (loading) {
    return (
      <section className="py-12 bg-card/30">
        <div className="container mx-auto px-4">
          <Skeleton className="h-10 w-64 mx-auto mb-8 bg-muted" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-8 w-48 bg-muted" />
                <div className="space-y-3">
                  {[1, 2, 3].map((j) => (
                    <Skeleton key={j} className="h-24 w-full bg-muted" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (coordinators.length === 0) {
    return null;
  }

  const renderCoordinator = (coordinator: OverallCoordinator, index: number) => (
    <motion.div
      key={coordinator.id}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Card className="backdrop-blur-glass border-primary/20 hover:border-primary/50 transition-all duration-300 hover:glow-cyan">
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            {/* Photo - Round or Semi-circle */}
            {coordinator.show_photo && coordinator.image_url ? (
              <div className="shrink-0">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/50">
                  <img
                    src={coordinator.image_url}
                    alt={coordinator.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ) : (
              <div className="shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border-2 border-primary/30">
                  <User className="w-8 h-8 text-primary/70" />
                </div>
              </div>
            )}

            {/* Details */}
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-base mb-1 truncate">{coordinator.name}</h4>
              {coordinator.position && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                  <Briefcase className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{coordinator.position}</span>
                </div>
              )}
              {coordinator.contact && (
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{coordinator.contact}</span>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <section className="py-12 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center gradient-text mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Overall Coordinators
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Staff Coordinators */}
          {staffCoordinators.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="outline" className="border-primary text-primary text-base px-4 py-2">
                  Staff Coordinators
                </Badge>
              </div>
              <div className="space-y-4">
                {staffCoordinators.map((coordinator, index) => renderCoordinator(coordinator, index))}
              </div>
            </div>
          )}

          {/* Student Coordinators */}
          {studentCoordinators.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="outline" className="border-secondary text-secondary text-base px-4 py-2">
                  Student Coordinators
                </Badge>
              </div>
              <div className="space-y-4">
                {studentCoordinators.map((coordinator, index) => renderCoordinator(coordinator, index))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
