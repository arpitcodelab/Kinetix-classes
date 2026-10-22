import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../common/Button';
import { ArrowRight, BookOpen, CheckCircle2, Clock, Users } from 'lucide-react';

export const CourseCard = ({
  course,
  onEnquire,
  featured = false,
}) => {
  return (
    <article className={`course-card ${featured ? 'card-featured' : ''}`}>
      <Link
        to={`/courses/${course.slug}`}
        style={{
          display: 'block',
          width: '100%',
          height: 140,
          background: '#0B131F',
          borderBottom: '1px solid #1E293B',
          padding: '1rem',
          position: 'relative'
        }}
        aria-label={`View full syllabus for ${course.title}`}
      >
        <img
          src={course.svgGraphic}
          alt={course.title}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          loading="lazy"
          width="480"
          height="120"
        />
        <div style={{ position: 'absolute', top: 12, left: 12, display: 'flex', gap: 6 }}>
          <span className="knx-badge badge-cyan">
            {course.targetExam}
          </span>
          {course.stream && (
            <span className="knx-badge badge-blue">
              {course.stream}
            </span>
          )}
        </div>
      </Link>

      <div className="course-card-body">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: '#94A3B8' }}>
          <Users size={14} color="#00E5C8" />
          <span>{course.classes}</span>
        </div>

        <Link to={`/courses/${course.slug}`}>
          <h3 className="knx-h3" style={{ fontSize: '1.2rem', marginBottom: '0.35rem' }}>
            {course.title}
          </h3>
        </Link>

        <p className="knx-small" style={{ lineHeight: 1.5 }}>
          {course.description}
        </p>

        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid #1E293B' }}>
          {course.features.slice(0, 3).map((feat, idx) => (
            <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem', fontSize: '0.8rem', color: '#CBD5E1' }}>
              <CheckCircle2 size={14} color="#00E5C8" style={{ flexShrink: 0, marginTop: 2 }} />
              <span>{feat}</span>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem', color: '#94A3B8', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Clock size={14} color="#38BDF8" />
            <span>{course.duration}</span>
          </div>
          <span className="knx-badge badge-cyan" style={{ fontSize: '0.7rem' }}>
            Batch: 15–20
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginTop: '0.5rem' }}>
          <Link
            to={`/courses/${course.slug}`}
            className="knx-btn btn-outline btn-sm"
          >
            <BookOpen size={14} color="#38BDF8" />
            <span>Details</span>
          </Link>
          <Button
            variant="primary"
            size="sm"
            onClick={() => onEnquire && onEnquire(course.title)}
            icon={<ArrowRight size={14} />}
            iconPosition="right"
          >
            Enquire
          </Button>
        </div>
      </div>
    </article>
  );
};
