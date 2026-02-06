import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { committeesApi } from '@/db/api';
import type { Committee, CommitteePersonDetail } from '@/types/index';
import { Skeleton } from '@/components/ui/skeleton';
import { Users, Briefcase, Phone, User } from 'lucide-react';

export default function CommitteeComponent() {
  const [committees, setCommittees] = useState<Committee[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCommittee, setSelectedCommittee] = useState<Committee | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    loadCommittees();
  }, []);

  const loadCommittees = async () => {
    try {
      const data = await committeesApi.getAll();
      setCommittees(data);
    } catch (error) {
      console.error('Error loading committees:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCommitteeClick = (committee: Committee) => {
    setSelectedCommittee(committee);
    setDialogOpen(true);
  };

  return (
    <section id="committee" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Our Committees
          </h2>
          <p className="text-muted-foreground text-lg">
            Meet the teams behind Fusion26
          </p>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="h-48 w-full bg-muted" />
                <CardContent className="p-4">
                  <Skeleton className="h-6 w-3/4 mb-2 bg-muted" />
                  <Skeleton className="h-4 w-1/2 bg-muted" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : committees.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No committees added yet</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {committees.map((committee, index) => (
              <motion.div
                key={committee.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onClick={() => handleCommitteeClick(committee)}
                className="cursor-pointer"
              >
                <Card className="overflow-hidden backdrop-blur-glass border-primary/20 hover:border-primary/50 transition-all duration-300 hover:glow-cyan group h-full">
                  {committee.image_url && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={committee.image_url}
                        alt={committee.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  )}
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 gradient-text">{committee.title}</h3>
                    {committee.role && (
                      <p className="text-sm text-primary mb-2 font-medium">{committee.role}</p>
                    )}
                    {committee.description && (
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {committee.description}
                      </p>
                    )}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{committee.staff_details?.length || 0} Staff</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{committee.student_details?.length || 0} Students</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Committee Details Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedCommittee && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold gradient-text">
                  {selectedCommittee.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                {/* Committee Image */}
                {selectedCommittee.image_url && (
                  <div className="relative w-full h-48 rounded-lg overflow-hidden">
                    <img
                      src={selectedCommittee.image_url}
                      alt={selectedCommittee.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Role Badge */}
                {selectedCommittee.role && (
                  <div className="flex justify-center">
                    <Badge variant="outline" className="border-primary text-primary text-sm px-4 py-2">
                      <Briefcase className="w-4 h-4 mr-2" />
                      {selectedCommittee.role}
                    </Badge>
                  </div>
                )}

                {/* Description */}
                {selectedCommittee.description && (
                  <div className="p-4 rounded-lg bg-card/50 border border-border">
                    <p className="text-base leading-relaxed">{selectedCommittee.description}</p>
                  </div>
                )}

                {/* Staff Details */}
                {selectedCommittee.staff_details && selectedCommittee.staff_details.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      Staff Members
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedCommittee.staff_details.map((staff: CommitteePersonDetail, idx: number) => (
                        <Card key={idx} className="p-4 bg-card/50 border-primary/20">
                          <div className="space-y-2">
                            <div className="flex items-start gap-2">
                              <User className="w-4 h-4 text-primary mt-1 shrink-0" />
                              <div>
                                <p className="font-semibold">{staff.name}</p>
                                {staff.role && (
                                  <p className="text-xs text-muted-foreground">{staff.role}</p>
                                )}
                              </div>
                            </div>
                            {staff.contact && (
                              <div className="flex items-center gap-2 text-sm">
                                <Phone className="w-3 h-3 text-muted-foreground" />
                                <span className="text-muted-foreground">{staff.contact}</span>
                              </div>
                            )}
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {/* Student Details */}
                {selectedCommittee.student_details && selectedCommittee.student_details.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      Student Members
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedCommittee.student_details.map((student: CommitteePersonDetail, idx: number) => (
                        <Card key={idx} className="p-4 bg-card/50 border-primary/20">
                          <div className="space-y-2">
                            <div className="flex items-start gap-2">
                              <User className="w-4 h-4 text-primary mt-1 shrink-0" />
                              <div>
                                <p className="font-semibold">{student.name}</p>
                                {student.role && (
                                  <p className="text-xs text-muted-foreground">{student.role}</p>
                                )}
                              </div>
                            </div>
                            {student.contact && (
                              <div className="flex items-center gap-2 text-sm">
                                <Phone className="w-3 h-3 text-muted-foreground" />
                                <span className="text-muted-foreground">{student.contact}</span>
                              </div>
                            )}
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
