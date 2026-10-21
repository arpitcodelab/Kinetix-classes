import React, { useState } from 'react';
import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';
import { CourseCard } from '../components/ui/CourseCard';
import { coursesData } from '../data/courses';
import { Search, Sparkles } from 'lucide-react';
import { CTABand } from '../components/ui/CTABand';

interface CoursesPageProps {
  onOpenEnquiry: (courseTitle?: string) => void;
}

export const CoursesPage: React.FC<CoursesPageProps> = ({ onOpenEnquiry }) => {
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
    <main id="main-content" className="pt-28 pb-20">
      {/* Page Header */}
      <Section variant="deep" className="pt-12 pb-12 border-b border-[#1E293B]">
        <Container size="xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0E1624] border border-[#1E293B] text-xs font-semibold text-[#00E5C8] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Academic Curriculum • 2026–27 Batches</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-[#F8FAFC] tracking-tight mb-4">
              All Courses & Specializations
            </h1>
            <p className="text-base text-[#94A3B8] leading-relaxed">
              Explore our structured science programs for Class 9th, 10th, 11th, 12th, and Dropper batches. NCERT-aligned theory, rigorous problem-solving, and continuous testing in Alpha 2, Greater Noida.
            </p>
          </div>

          {/* Search & Category Filter Bar */}
          <div className="mt-8 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#64748B] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="search"
                placeholder="Search programs (e.g. NEET, Class 12 PCM, Maths)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#0E1624] border border-[#1E293B] text-sm text-[#F8FAFC] placeholder-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#00E5C8]/40 focus:border-[#00E5C8] transition-all"
              />
            </div>

            {/* Exam Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-[#0E1624] border border-[#1E293B] rounded-2xl overflow-x-auto">
              {examCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedExam(cat.id)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-xl transition-all whitespace-nowrap ${
                    selectedExam === cat.id
                      ? 'bg-[#00E5C8] text-[#070C14] font-bold shadow-sm'
                      : 'text-[#CBD5E1] hover:text-white hover:bg-[#1E293B]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Courses Grid */}
      <Section variant="deep">
        <Container size="xl">
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onEnquire={(title) => onOpenEnquiry(title)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 rounded-3xl bg-[#0E1624] border border-[#1E293B] p-8 max-w-lg mx-auto">
              <h3 className="text-lg font-bold text-white mb-2">No matching programs found</h3>
              <p className="text-sm text-[#94A3B8] mb-6">
                Try searching for general terms like "NEET", "Board", "11th" or view all programs.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedExam('ALL');
                }}
                className="text-xs font-bold text-[#00E5C8] hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* CTA Banner */}
          <div className="mt-20">
            <CTABand onOpenEnquiry={() => onOpenEnquiry()} />
          </div>
        </Container>
      </Section>
    </main>
  );
};

