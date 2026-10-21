import React from 'react';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { FacultyCard } from '../ui/FacultyCard';
import { facultyData } from '../../data/faculty';
import { Reveal } from '../common/Reveal';
import { Button } from '../common/Button';
import { Sparkles, Calendar } from 'lucide-react';

interface FacultySectionProps {
  onOpenEnquiry: () => void;
}

export const FacultySection: React.FC<FacultySectionProps> = ({ onOpenEnquiry }) => {
  return (
    <Section id="faculty" variant="surface">
      <Container size="xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-[#00E5C8] uppercase tracking-wider mb-2 block">
              Teaching Faculty Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
              IITians & Doctors Mentorship
            </h2>
            <p className="text-sm text-[#94A3B8] mt-2 leading-relaxed">
              Our core faculty team consists of Ex-IITians and Doctors with 8+ years of proven teaching experience in competitive NEET and JEE coaching across Physics, Chemistry, Mathematics, and Biology.
            </p>
          </div>

          <Button
            variant="primary"
            size="md"
            onClick={onOpenEnquiry}
            icon={<Calendar className="w-4 h-4" />}
            className="shrink-0 self-start md:self-auto"
          >
            Meet Faculty in Person
          </Button>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facultyData.map((member, idx) => (
            <Reveal key={member.id} direction="up" delay={idx * 0.1}>
              <FacultyCard member={member} />
            </Reveal>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-10 p-4 rounded-2xl bg-[#070C14] border border-[#1E293B] flex flex-col sm:flex-row items-center justify-between text-xs text-[#94A3B8] gap-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#00E5C8] shrink-0" />
            <span>
              <strong>1-on-1 Faculty Interaction:</strong> Students can schedule dedicated doubt hours with individual subject heads every week.
            </span>
          </div>
          <button
            type="button"
            onClick={onOpenEnquiry}
            className="text-[#00E5C8] font-bold hover:underline shrink-0"
          >
            Schedule a Doubt Session →
          </button>
        </div>
      </Container>
    </Section>
  );
};

