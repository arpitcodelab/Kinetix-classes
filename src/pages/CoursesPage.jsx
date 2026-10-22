import React, { useState } from 'react';
import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';
import { CourseCard } from '../components/ui/CourseCard';
import { coursesData } from '../data/courses';
import { Search, Sparkles } from 'lucide-react';
import { CTABand } from '../components/ui/CTABand';

export const CoursesPage = ({ onOpenEnquiry }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedExam, setSelectedExam] = useState('ALL');

  const examCategories = [
    { id: 'ALL', label: 'All Programs' },
    { id: 'NEET', label: 'NEET Medical' },
    { id: 'JEE', label: 'IIT JEE' },
    { id: 'BOARDS', label: 'Board Exams (10 & 12)' },
    { id: 'FOUNDATION', label: 'Foundation (9 & 11)' },
    { id: 'DEFENCE', label: 'NDA Defence' },
  ];

  const filteredCourses = coursesData.filter((c) => {
    const matchesSearch =
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.classes.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesExam =
      selectedExam === 'ALL' ||
      c.targetExam === selectedExam ||
      (selectedExam === 'BOARDS' && c.targetExam === 'BOARDS') ||
      (selectedExam === 'FOUNDATION' && c.targetExam === 'FOUNDATION');

    return matchesSearch && matchesExam;
  });

  return (
    <main id="main-content" style={{ paddingTop: '72px' }}>
      <Section variant="deep" style={{ borderBottom: '1px solid #1E293B', padding: '3.5rem 0' }}>
        <Container size="xl">
          <div style={{ maxWidth: '720px' }}>
            <span className="knx-eyebrow" style={{ marginBottom: '0.75rem' }}>
              <Sparkles size={14} />
              Full Academic Curriculum • 2026–27 Batches
            </span>
            <h1 className="knx-h1" style={{ marginBottom: '1rem' }}>
              All Courses & Specializations
            </h1>
            <p className="knx-lead">
              Explore our structured science programs for Class 9th, 10th, 11th, 12th, and Dropper batches. NCERT-aligned theory, rigorous problem-solving, and continuous testing in Alpha 2, Greater Noida.
            </p>
          </div>

          <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ position: 'relative', flex: '1 1 300px', maxWidth: '420px' }}>
              <Search size={16} color="#64748B" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="search"
                placeholder="Search programs (e.g. NEET, Class 12, PCM)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="knx-input"
                style={{ paddingLeft: '2.5rem' }}
              />
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', padding: '0.35rem', background: '#0E1624', border: '1px solid #1E293B', borderRadius: '16px' }}>
              {examCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedExam(cat.id)}
                  style={{
                    padding: '0.35rem 0.75rem',
                    borderRadius: '10px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: selectedExam === cat.id ? '#070C14' : '#CBD5E1',
                    background: selectedExam === cat.id ? '#00E5C8' : 'transparent',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="deep">
        <Container size="xl">
          {filteredCourses.length > 0 ? (
            <div className="knx-grid-3">
              {filteredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onEnquire={(title) => onOpenEnquiry(title)}
                />
              ))}
            </div>
          ) : (
            <div className="knx-card" style={{ textAlign: 'center', padding: '3.5rem', maxWidth: '500px', margin: '0 auto' }}>
              <h3 className="knx-h3" style={{ marginBottom: '0.5rem' }}>No matching programs found</h3>
              <p className="knx-small" style={{ marginBottom: '1.5rem' }}>
                Try searching for general terms like "NEET", "Board", "11th" or view all programs.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedExam('ALL');
                }}
                style={{ color: '#00E5C8', fontWeight: 700, fontSize: '0.85rem' }}
              >
                Clear all filters
              </button>
            </div>
          )}

          <div style={{ marginTop: '4rem' }}>
            <CTABand onOpenEnquiry={() => onOpenEnquiry()} />
          </div>
        </Container>
      </Section>
    </main>
  );
};
