import React from 'react';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Reveal } from '../common/Reveal';
import { Users, Award, ShieldCheck, BookOpenCheck, CheckCircle2 } from 'lucide-react';

export const WhyKinetixSection = () => {
  const differentiators = [
    {
      icon: <Users size={22} color="#00E5C8" />,
      number: "01",
      title: "Guaranteed Small Batch Size",
      tagline: "Personal Attention Over Mass Factory Halls",
      description: "Unlike overcrowded corporate coaching centers with 100+ students per hall, Kinetix Classes maintains strict small cohorts (15–20 students) so faculty can monitor individual homework, weak areas, and question speed."
    },
    {
      icon: <Award size={22} color="#38BDF8" />,
      number: "02",
      title: "IITians & Doctors Faculty Team",
      tagline: "8+ Years of Proven Medical & Engineering Guidance",
      description: "Direct classroom instruction by senior educators who have cleared and mastered these competitive exams themselves, delivering rigorous problem-solving shortcuts and conceptual clarity."
    },
    {
      icon: <ShieldCheck size={22} color="#F59E0B" />,
      number: "03",
      title: "Affordable Fee & Scholarship Test",
      tagline: "Quality Education Without Crushing Financial Burdens",
      description: "Transparent, reasonable fee structure with merit scholarship fee waivers based on our entrance test, accompanied by convenient Easy EMI monthly payment options for parents."
    },
    {
      icon: <BookOpenCheck size={22} color="#10B981" />,
      number: "04",
      title: "Integrated Board + Entrance Syllabi",
      tagline: "Zero Friction Between CBSE/ICSE and Competitive Exams",
      description: "Synchronized dual-track curriculum covering school board scoring criteria and NCERT fundamentals while progressively building IIT JEE / NEET numerical dexterity."
    }
  ];

  return (
    <Section id="why-kinetix" variant="surface">
      <Container size="xl">
        <div style={{ maxWidth: '720px', marginBottom: '3rem' }}>
          <span className="knx-eyebrow" style={{ marginBottom: '0.75rem' }}>
            The Kinetix Advantage
          </span>
          <h2 className="knx-h2">
            Why Students & Parents Choose Kinetix in Alpha 2
          </h2>
          <p className="knx-lead" style={{ marginTop: '0.5rem' }}>
            The 4 foundational promises verified by real students from DPS Greater Noida and top schools across the district.
          </p>
        </div>

        <div className="knx-grid-2">
          {differentiators.map((item, idx) => (
            <Reveal key={idx} direction="up" delay={idx * 0.1}>
              <div className="knx-card" style={{ position: 'relative', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '2rem' }}>
                <span style={{
                  position: 'absolute',
                  top: -10,
                  right: 10,
                  fontSize: '4.5rem',
                  fontWeight: 900,
                  color: 'rgba(255, 255, 255, 0.03)',
                  userSelect: 'none',
                  pointerEvents: 'none'
                }}>
                  {item.number}
                </span>

                <div>
                  <div style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: '#070C14',
                    border: '1px solid #1E293B',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem'
                  }}>
                    {item.icon}
                  </div>

                  <span className="knx-small" style={{ color: '#00E5C8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.25rem' }}>
                    {item.tagline}
                  </span>

                  <h3 className="knx-h3" style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                    {item.title}
                  </h3>

                  <p className="knx-small" style={{ lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                </div>

                <div style={{
                  paddingTop: '1.25rem',
                  marginTop: '1.5rem',
                  borderTop: '1px solid #1E293B',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.8rem',
                  color: '#CBD5E1'
                }}>
                  <CheckCircle2 size={16} color="#00E5C8" />
                  <span>Verified Standard Operating Procedure</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
};
