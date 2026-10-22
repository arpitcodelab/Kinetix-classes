import React, { useState } from 'react';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { CourseCard } from '../ui/CourseCard';
import { coursesData } from '../../data/courses';
import { Reveal } from '../common/Reveal';

export const ProgramsSection = ({ onEnquireCourse, limit }) => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filterTabs = [
    { id: 'ALL', label: 'All Courses' },
    { id: 'NEET', label: 'NEET Medical' },
    { id: 'JEE', label: 'IIT JEE' },
    { id: 'BOARDS', label: 'Class 10 & 12 Boards' },
    { id: 'FOUNDATION', label: 'Class 9 & 11 Foundation' },
  ];

  const filteredCourses = coursesData.filter((c) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'NEET') return c.targetExam === 'NEET' || c.stream === 'PCB';
    if (activeFilter === 'JEE') return c.targetExam === 'JEE' || c.stream === 'PCM';
    if (activeFilter === 'BOARDS') return c.targetExam === 'BOARDS';
    if (activeFilter === 'FOUNDATION') return c.targetExam === 'FOUNDATION';
    return true;
  });

  const displayedCourses = limit ? filteredCourses.slice(0, limit) : filteredCourses;

  return (
    <Section id="courses" variant="deep">
      <Container size="xl">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem' }}>
            <div>
              <span className="knx-eyebrow" style={{ marginBottom: '0.75rem' }}>
                Curriculum & Batches
              </span>
              <h2 className="knx-h2">
                Science & Competitive Exam Programs
              </h2>
              <p className="knx-lead" style={{ marginTop: '0.5rem', maxWidth: '600px' }}>
                Targeted coaching designed for CBSE & ICSE schools, NEET medical entrance, and IIT JEE engineering aspirants with small batch sizes.
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', padding: '0.35rem', background: '#0E1624', border: '1px solid #1E293B', borderRadius: '16px' }}>
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id)}
                  style={{
                    padding: '0.4rem 0.85rem',
                    borderRadius: '10px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: activeFilter === tab.id ? '#070C14' : '#CBD5E1',
                    background: activeFilter === tab.id ? '#00E5C8' : 'transparent',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="knx-grid-3">
          {displayedCourses.map((course, idx) => (
            <Reveal key={course.id} direction="up" delay={(idx % 3) * 0.1}>
              <CourseCard
                course={course}
                onEnquire={onEnquireCourse}
                featured={idx === 0}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
};
