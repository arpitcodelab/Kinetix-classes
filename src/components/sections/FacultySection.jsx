import React from 'react';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { FacultyCard } from '../ui/FacultyCard';
import { facultyData } from '../../data/faculty';
import { Reveal } from '../common/Reveal';
import { Button } from '../common/Button';
import { Sparkles, Calendar } from 'lucide-react';

export const FacultySection = ({ onOpenEnquiry }) => {
  return (
    <Section id="faculty" variant="surface">
      <Container size="xl">
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '3rem' }}>
          <div style={{ maxWidth: '640px' }}>
            <span className="knx-eyebrow" style={{ marginBottom: '0.75rem' }}>
              Teaching Faculty Team
            </span>
            <h2 className="knx-h2">
              IITians & Doctors Mentorship
            </h2>
            <p className="knx-lead" style={{ marginTop: '0.5rem' }}>
              Our core faculty team consists of Ex-IITians and Doctors with 8+ years of proven teaching experience in competitive NEET and JEE coaching across Physics, Chemistry, Mathematics, and Biology.
            </p>
          </div>

          <Button
            variant="primary"
            size="md"
            onClick={onOpenEnquiry}
            icon={<Calendar size={16} />}
          >
            Meet Faculty in Person
          </Button>
        </div>

        <div className="knx-grid-4">
          {facultyData.map((member, idx) => (
            <Reveal key={member.id} direction="up" delay={idx * 0.1}>
              <FacultyCard member={member} />
            </Reveal>
          ))}
        </div>

        <div style={{
          marginTop: '2.5rem',
          padding: '1rem 1.25rem',
          borderRadius: '16px',
          background: '#070C14',
          border: '1px solid #1E293B',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.8rem',
          color: '#94A3B8',
          gap: '0.75rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sparkles size={16} color="#00E5C8" style={{ flexShrink: 0 }} />
            <span>
              <strong style={{ color: '#FFFFFF' }}>1-on-1 Faculty Interaction:</strong> Students can schedule dedicated doubt hours with individual subject heads every week.
            </span>
          </div>
          <button
            type="button"
            onClick={onOpenEnquiry}
            style={{ color: '#00E5C8', fontWeight: 700, cursor: 'pointer', background: 'none', border: 'none' }}
          >
            Schedule a Doubt Session →
          </button>
        </div>
      </Container>
    </Section>
  );
};
