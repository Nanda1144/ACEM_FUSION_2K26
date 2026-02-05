import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { committeeApi } from '@/db/api';
import type { CommitteeMember } from '@/types/index';
import { Skeleton } from '@/components/ui/skeleton';
import { Mail, Phone, User, Briefcase } from 'lucide-react';

export default function Committee() {
  const [members, setMembers] = useState<CommitteeMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMember, setSelectedMember] = useState<CommitteeMember | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    loadMembers();
  }, []);

  const loadMembers = async () => {
    try {
      const data = await committeeApi.getAll();
      setMembers(data);
    } catch (error) {
      console.error('Error loading committee members:', error);
    } finally {
      setLoading(false);
    }
  };

  // Separate members by special roles
  const specialRoleMembers = members.filter(m => m.special_role);
  const regularMembers = members.filter(m => !m.special_role);

  // Group special role members by role
  const chiefPatrons = specialRoleMembers.filter(m => m.special_role === 'Chief Patron');
  const patrons = specialRoleMembers.filter(m => m.special_role === 'Patron');
  const conveners = specialRoleMembers.filter(m => m.special_role === 'Convener');
  const coConveners = specialRoleMembers.filter(m => m.special_role === 'Co-Convener');

  const handleMemberClick = (member: CommitteeMember) => {
    setSelectedMember(member);
    setDialogOpen(true);
  };

  const renderMemberCard = (member: CommitteeMember, index: number) => (
    <motion.div
      key={member.id}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onClick={() => handleMemberClick(member)}
      className="cursor-pointer"
    >
      <Card className="overflow-hidden backdrop-blur-glass border-primary/20 hover:border-primary/50 transition-all duration-300 hover:glow-cyan group h-full">
        <div className="relative h-64 overflow-hidden">
          {member.image_url ? (
            <img
              src={member.image_url}
              alt={member.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <span className="text-6xl font-bold text-primary/50">
                {member.name.charAt(0)}
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <CardContent className="p-4 text-center">
          {member.special_role && (
            <p className="text-xs font-bold text-primary mb-1 uppercase tracking-wider">
              {member.special_role}
            </p>
          )}
          <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
          <p className="text-sm text-primary mb-2">{member.role}</p>
          {member.info && (
            <p className="text-xs text-muted-foreground line-clamp-3">
              {member.info}
            </p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );

  const renderSpecialRoleSection = (title: string, members: CommitteeMember[]) => {
    if (members.length === 0) return null;
    
    return (
      <div className="mb-12">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-primary">
          {title}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {members.map((member, index) => renderMemberCard(member, index))}
        </div>
      </div>
    );
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
            Our Committee
          </h2>
          <p className="text-muted-foreground text-lg">
            Meet the team behind Fusion26
          </p>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="h-64 w-full bg-muted" />
                <CardContent className="p-4">
                  <Skeleton className="h-6 w-3/4 mb-2 bg-muted" />
                  <Skeleton className="h-4 w-1/2 bg-muted" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : members.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No committee members added yet</p>
          </div>
        ) : (
          <>
            {/* Special Role Sections */}
            {renderSpecialRoleSection('Chief Patrons', chiefPatrons)}
            {renderSpecialRoleSection('Patrons', patrons)}
            {renderSpecialRoleSection('Conveners', conveners)}
            {renderSpecialRoleSection('Co-Conveners', coConveners)}

            {/* Regular Committee Members */}
            {regularMembers.length > 0 && (
              <div>
                {specialRoleMembers.length > 0 && (
                  <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-primary">
                    Committee Members
                  </h3>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {regularMembers.map((member, index) => renderMemberCard(member, index))}
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Member Details Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedMember && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold gradient-text">
                  {selectedMember.name}
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                {/* Member Image */}
                <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                  {selectedMember.image_url ? (
                    <img
                      src={selectedMember.image_url}
                      alt={selectedMember.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <span className="text-9xl font-bold text-primary/50">
                        {selectedMember.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Special Role Badge */}
                {selectedMember.special_role && (
                  <div className="flex justify-center">
                    <Badge variant="outline" className="border-primary text-primary text-sm px-4 py-2">
                      {selectedMember.special_role}
                    </Badge>
                  </div>
                )}

                {/* Member Details */}
                <div className="space-y-4">
                  {/* Name */}
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border">
                    <User className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">Full Name</p>
                      <p className="text-base font-semibold">{selectedMember.name}</p>
                    </div>
                  </div>

                  {/* Role */}
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border">
                    <Briefcase className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">Role / Position</p>
                      <p className="text-base font-semibold">{selectedMember.role}</p>
                    </div>
                  </div>

                  {/* Info / Bio */}
                  {selectedMember.info && (
                    <div className="p-4 rounded-lg bg-card/50 border border-border">
                      <p className="text-sm text-muted-foreground mb-2">About</p>
                      <p className="text-base leading-relaxed whitespace-pre-wrap">
                        {selectedMember.info}
                      </p>
                    </div>
                  )}

                  {/* Display Order (for admin reference) */}
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-border">
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">Display Order</p>
                      <p className="text-base font-semibold">{selectedMember.display_order}</p>
                    </div>
                  </div>

                  {/* Member Since */}
                  <div className="p-4 rounded-lg bg-card/50 border border-border">
                    <p className="text-sm text-muted-foreground mb-1">Member Since</p>
                    <p className="text-base font-semibold">
                      {new Date(selectedMember.created_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
