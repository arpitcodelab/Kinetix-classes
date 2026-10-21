import React from 'react';
import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';
import { FacultySection } from '../components/sections/FacultySection';
import { CTABand } from '../components/ui/CTABand';
import { Sparkles, CheckCircle2 } from 'lucide-react';

interface FacultyPageProps {
  onOpenEnquiry: () => void;
}

export const FacultyPage: React.FC<FacultyPageProps> = ({ onOpenEnquiry }) => {
  return (
    <main id="main-content" className="pt-28 pb-20">
      {/* Header */}
      <Section variant="deep" className="pt-12 pb-16 border-b border-[#1E293B]">
        <Container size="xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0E1624] border border-[#1E293B] text-xs font-semibold text-[#00E5C8] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Academic Mentors & Subject Leads</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-[#F8FAFC] tracking-tight mb-4">
              Our Faculty & Mentorship Team
            </h1>
            <p className="text-base text-[#94A3B8] leading-relaxed mb-6">
              At Kinetix Classes, teachers are not rotating temporary contractors. Our senior faculty members possess 8+ years of dedicated NEET and JEE experience, bringing real-world competitive exam mastery into every lesson.
            </p>

            <div className="p-4 rounded-2xl bg-[#0E1624] border border-[#1E293B] flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#00E5C8] shrink-0 mt-0.5" />
              <p className="text-xs text-[#CBD5E1] leading-relaxed">
                <strong>Authentic Teaching Standards:</strong> Our faculty actively conducts regular assessments, chapter doubt clinics, and individual student performance reviews every week.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Faculty Cards Grid */}
      <FacultySection onOpenEnquiry={onOpenEnquiry} />

      {/* CTA */}
      <div className="pt-16 pb-12 bg-[#070C14]">
        <Container size="xl">
          <CTABand onOpenEnquiry={onOpenEnquiry} />
        </Container>
      </div>
    </main>
  );
};

