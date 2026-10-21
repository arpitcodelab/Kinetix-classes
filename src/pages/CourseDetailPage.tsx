import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';
import { Button } from '../components/common/Button';
import { coursesData } from '../data/courses';
import { instituteData } from '../data/institute';
import { ArrowLeft, CheckCircle2, Clock, Users, ShieldCheck, Sparkles, MessageCircle, Phone } from 'lucide-react';

interface CourseDetailPageProps {
  onOpenEnquiry: (courseTitle?: string) => void;
}

export const CourseDetailPage: React.FC<CourseDetailPageProps> = ({ onOpenEnquiry }) => {
  const { slug } = useParams<{ slug: string }>();
  const course = coursesData.find((c) => c.slug === slug);

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  return (
    <main id="main-content" className="pt-28 pb-20">
      {/* Breadcrumbs & Header */}
      <Section variant="deep" className="pt-8 pb-12 border-b border-[#1E293B]">
        <Container size="xl">
          <Link
            to="/courses"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#94A3B8] hover:text-[#00E5C8] mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Courses</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-xs font-bold text-[#00E5C8] bg-[#00E5C8]/10 border border-[#00E5C8]/30 px-3 py-1 rounded-full uppercase tracking-wider">
                  {course.targetExam} Specialized
                </span>
                {course.stream && (
                  <span className="text-xs font-bold text-[#CBD5E1] bg-[#162235] px-2.5 py-1 rounded-full border border-[#334155]">
                    Stream: {course.stream}
                  </span>
                )}
                <span className="text-xs text-[#94A3B8]">
                  • Eligible: {course.classes}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-[#F8FAFC] tracking-tight mb-4">
                {course.title}
              </h1>

              <p className="text-lg text-[#CBD5E1] font-medium mb-4">
                {course.tagline}
              </p>

              <p className="text-sm text-[#94A3B8] leading-relaxed max-w-3xl mb-8">
                {course.description}
              </p>

              <div className="flex flex-wrap gap-3">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => onOpenEnquiry(course.title)}
                  icon={<Sparkles className="w-5 h-5" />}
                >
                  Enquire for Current Batch
                </Button>

                <Button
                  variant="whatsapp"
                  size="lg"
                  href={instituteData.contact.whatsappHref}
                  external
                  icon={<MessageCircle className="w-5 h-5" />}
                >
                  WhatsApp Counselor
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  href={instituteData.contact.phoneHref}
                  icon={<Phone className="w-5 h-5 text-[#38BDF8]" />}
                >
                  {instituteData.contact.phoneFormatted}
                </Button>
              </div>
            </div>

            {/* Right Course Graphic Card */}
            <div className="lg:col-span-4 rounded-3xl bg-[#0E1624] border border-[#1E293B] p-6 shadow-2xl">
              <div className="w-full aspect-[4/3] rounded-2xl bg-[#070C14] border border-[#1E293B] p-4 flex items-center justify-center mb-6">
                <img
                  src={course.svgGraphic}
                  alt={course.title}
                  className="w-full h-full object-contain"
                  width="480"
                  height="120"
                />
              </div>

              <div className="space-y-3 text-xs text-[#CBD5E1]">
                <div className="flex items-center justify-between pb-2 border-b border-[#1E293B]">
                  <span className="flex items-center gap-1.5 text-[#94A3B8]">
                    <Clock className="w-4 h-4 text-[#38BDF8]" /> Duration
                  </span>
                  <span className="font-bold text-white">{course.duration}</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-[#1E293B]">
                  <span className="flex items-center gap-1.5 text-[#94A3B8]">
                    <Users className="w-4 h-4 text-[#00E5C8]" /> Batch Strength
                  </span>
                  <span className="font-bold text-[#00E5C8]">15–20 Students</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-[#1E293B]">
                  <span className="flex items-center gap-1.5 text-[#94A3B8]">
                    <ShieldCheck className="w-4 h-4 text-[#F59E0B]" /> Testing Pattern
                  </span>
                  <span className="font-bold text-white">Weekly + Full Mocks</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Course Detailed Modules & Features */}
      <Section variant="surface">
        <Container size="xl">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight mb-3">
              What This Program Delivers
            </h2>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              Every topic is broken down into intuitive physical principles before formula derivations and numerical drill exercises begin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {course.features.map((feat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#070C14] border border-[#1E293B] flex items-start gap-3.5"
              >
                <CheckCircle2 className="w-5 h-5 text-[#00E5C8] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Key Learning Milestone {idx + 1}</h4>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">{feat}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
};

