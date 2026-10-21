import React from 'react';
import { Link } from 'react-router-dom';
import { Course } from '../../types';
import { Button } from '../common/Button';
import { ArrowRight, BookOpen, CheckCircle2, Clock, Users } from 'lucide-react';

interface CourseCardProps {
  course: Course;
  onEnquire?: (courseTitle: string) => void;
  featured?: boolean;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  course,
  onEnquire,
  featured = false,
}) => {
  const examColors: Record<string, { bg: string; text: string; border: string }> = {
    NEET: { bg: 'bg-[#10B981]/15', text: 'text-[#34D399]', border: 'border-[#10B981]/40' },
    JEE: { bg: 'bg-[#2563EB]/15', text: 'text-[#60A5FA]', border: 'border-[#2563EB]/40' },
    BOARDS: { bg: 'bg-[#F59E0B]/15', text: 'text-[#FBBF24]', border: 'border-[#F59E0B]/40' },
    FOUNDATION: { bg: 'bg-[#00E5C8]/15', text: 'text-[#00E5C8]', border: 'border-[#00E5C8]/40' },
    DEFENCE: { bg: 'bg-[#EAB308]/15', text: 'text-[#FACC15]', border: 'border-[#EAB308]/40' },
    CUET: { bg: 'bg-[#8B5CF6]/15', text: 'text-[#C084FC]', border: 'border-[#8B5CF6]/40' },
  };

  const badge = examColors[course.targetExam] || examColors.BOARDS;

  return (
    <article
      className={`group relative flex flex-col justify-between rounded-2xl bg-[#0E1624] border transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
        featured
          ? 'border-[#00E5C8] shadow-[0_0_30px_rgba(0,229,200,0.15)]'
          : 'border-[#1E293B] hover:border-[#334155] hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)]'
      }`}
    >
      {/* Top Banner / Vector Illustration */}
      <Link
        to={`/courses/${course.slug}`}
        className="relative block w-full h-36 bg-[#0B131F] border-b border-[#1E293B]/60 overflow-hidden p-4 group/img focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5C8]"
        aria-label={`View full syllabus for ${course.title}`}
      >
        <img
          src={course.svgGraphic}
          alt={course.title}
          className="w-full h-full object-contain transition-transform duration-300 group-hover/img:scale-105"
          loading="lazy"
          width="480"
          height="120"
        />
        {/* Floating Exam Badge */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border uppercase tracking-wider ${badge.bg} ${badge.text} ${badge.border}`}>
            {course.targetExam}
          </span>
          {course.stream && (
            <span className="text-[11px] font-semibold px-2 py-1 rounded-full bg-[#1E293B] text-[#CBD5E1] border border-[#334155]">
              {course.stream}
            </span>
          )}
        </div>
      </Link>

      {/* Content Body */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-2 text-xs text-[#94A3B8] font-medium mb-1.5">
          <Users className="w-3.5 h-3.5 text-[#00E5C8]" />
          <span>{course.classes}</span>
        </div>

        <Link
          to={`/courses/${course.slug}`}
          className="group/title block mb-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5C8] rounded"
        >
          <h3 className="text-xl font-bold text-[#F8FAFC] group-hover/title:text-[#00E5C8] transition-colors line-clamp-1">
            {course.title}
          </h3>
        </Link>

        <p className="text-sm text-[#94A3B8] line-clamp-3 mb-4 leading-relaxed">
          {course.description}
        </p>

        {/* Feature Highlights */}
        <ul className="space-y-2 mb-6 border-t border-[#1E293B] pt-4 mt-auto">
          {course.features.slice(0, 3).map((feat, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-[#CBD5E1]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5C8] shrink-0 mt-0.5" />
              <span className="line-clamp-1">{feat}</span>
            </li>
          ))}
        </ul>

        {/* Batch Timing Info */}
        <div className="flex items-center justify-between text-xs text-[#94A3B8] pt-2 pb-4 border-t border-[#1E293B]/60">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>{course.duration}</span>
          </div>
          <span className="text-[11px] font-medium text-[#00E5C8] bg-[#00E5C8]/10 px-2 py-0.5 rounded">
            Small Batch (15-20)
          </span>
        </div>

        {/* Actions: Dual CTA (Details + Enquiry) */}
        <div className="grid grid-cols-2 gap-2 pt-2">
          <Link
            to={`/courses/${course.slug}`}
            className="flex items-center justify-center gap-1.5 text-xs font-semibold px-3 py-2.5 rounded-xl border border-[#1E293B] bg-[#070C14] text-[#CBD5E1] hover:text-white hover:border-[#38BDF8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>Details</span>
          </Link>
          <Button
            variant="primary"
            size="sm"
            onClick={() => onEnquire && onEnquire(course.title)}
            icon={<ArrowRight className="w-3.5 h-3.5" />}
            iconPosition="right"
          >
            Enquire
          </Button>
        </div>
      </div>
    </article>
  );
};

