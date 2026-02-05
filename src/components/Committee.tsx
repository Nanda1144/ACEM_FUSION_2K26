import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';
import { committeeApi } from '@/db/api';
import type { CommitteeMember } from '@/types/index';
import { Skeleton } from '@/components/ui/skeleton';

export default function Committee() {
  const [members, setMembers] = useState<CommitteeMember[]>([]);
  const [loading, setLoading] = useState(true);

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

  const renderMemberCard = (member: CommitteeMember, index: number) => (
    <motion.div
      key={member.id}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Card className="overflow-hidden backdrop-blur-glass border-primary/20 hover:border-primary/50 transition-all duration-300 hover:glow-cyan group">
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
    </section>
  );
}
