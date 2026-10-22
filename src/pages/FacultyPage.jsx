import React from 'react';
import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';
import { FacultySection } from '../components/sections/FacultySection';
import { CTABand } from '../components/ui/CTABand';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const FacultyPage = ({ onOpenEnquiry }) => {
  return (
    <main id="main-content" style={{ paddingTop: '72px' }}>
      <Section variant="deep" style={{ borderBottom: '1px solid #1E293B', padding: '3.5rem 0' }}>
        <Container size="xl">
          <div style={{ maxWidth: '720px' }}>
            <span className="knx-eyebrow" style={{ marginBottom: '0.75rem' }}>
              <Sparkles size={14} />
              Academic Mentors & Subject Leads
            </span>
            <h1 className="knx-h1" style={{ marginBottom: '1rem' }}>
              Our Faculty & Mentorship Team
            </h1>
            <p className="knx-lead" style={{ marginBottom: '1.5rem' }}>
              At Kinetix Classes, teachers are not rotating temporary contractors. Our senior faculty members possess 8+ years of dedicated NEET and JEE experience, bringing real-world competitive exam mastery into every lesson.
            </p>

            <div className="knx-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '1rem' }}>
              <CheckCircle2 size={18} color="#00E5C8" style={{ flexShrink: 0, marginTop: 2 }} />
              <p className="knx-small" style={{ color: '#CBD5E1' }}>
                <strong style={{ color: '#FFFFFF' }}>Authentic Teaching Standards:</strong> Our faculty actively conducts regular assessments, chapter doubt clinics, and individual student performance reviews every week.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <FacultySection onOpenEnquiry={onOpenEnquiry} />

      <div style={{ padding: '3.5rem 0', background: '#070C14' }}>
        <Container size="xl">
          <CTABand onOpenEnquiry={onOpenEnquiry} />
        </Container>
      </div>
    </main>
  );
};
