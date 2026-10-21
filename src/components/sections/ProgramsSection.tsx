import React, { useState } from 'react';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { CourseCard } from '../ui/CourseCard';
import { coursesData } from '../../data/courses';
import { Reveal } from '../common/Reveal';

interface ProgramsSectionProps {
  onEnquireCourse: (courseTitle: string) => void;
  limit?: number;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  onEnquireCourse,
  limit,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

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
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-xs font-bold text-[#00E5C8] uppercase tracking-wider mb-2 block">
              Curriculum & Batches
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
              Science & Competitive Exam Programs
            </h2>
            <p className="text-sm text-[#94A3B8] mt-2 max-w-xl leading-relaxed">
              Targeted coaching designed for CBSE & ICSE schools, NEET medical entrance, and IIT JEE engineering aspirants with small batch sizes.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-[#0E1624] border border-[#1E293B] rounded-2xl shrink-0 self-start md:self-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-xl transition-all ${
                  activeFilter === tab.id
                    ? 'bg-[#00E5C8] text-[#070C14] font-bold shadow-sm'
                    : 'text-[#CBD5E1] hover:text-white hover:bg-[#1E293B]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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

