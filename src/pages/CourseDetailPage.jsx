import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';
import { Button } from '../components/common/Button';
import { coursesData } from '../data/courses';
import { instituteData } from '../data/institute';
import { ArrowLeft, CheckCircle2, Clock, Users, ShieldCheck, Sparkles, MessageCircle, Phone } from 'lucide-react';

export const CourseDetailPage = ({ onOpenEnquiry }) => {
  const { slug } = useParams();
  const course = coursesData.find((c) => c.slug === slug);

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  return (
    <main id="main-content" style={{ paddingTop: '72px' }}>
      <Section variant="deep" style={{ borderBottom: '1px solid #1E293B', padding: '2.5rem 0' }}>
        <Container size="xl">
          <Link
            to="/courses"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: '#94A3B8', marginBottom: '1.5rem', fontWeight: 600 }}
          >
            <ArrowLeft size={16} />
            <span>Back to All Courses</span>
          </Link>

          <div className="knx-grid-2" style={{ alignItems: 'center', gap: '2.5rem' }}>
            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span className="knx-badge badge-cyan">
                  VERIFIED CURRICULUM
                </span>
                <span className="knx-badge badge-blue">
                  {course.targetExam} Specialized
                </span>
                {course.stream && (
                  <span className="knx-badge badge-blue">
                    Stream: {course.stream}
                  </span>
                )}
                <span className="knx-small">
                  • Eligible: {course.classes}
                </span>
              </div>

              <h1 className="knx-h1" style={{ marginBottom: '1rem' }}>
                {course.title}
              </h1>

              <p style={{ fontSize: '1.15rem', color: '#CBD5E1', fontWeight: 600, marginBottom: '1rem' }}>
                {course.tagline}
              </p>

              <p className="knx-body" style={{ marginBottom: '2rem' }}>
                {course.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => onOpenEnquiry(course.title)}
                  icon={<Sparkles size={18} />}
                >
                  Enquire for Current Batch
                </Button>

                <Button
                  variant="whatsapp"
                  size="lg"
                  href={instituteData.contact.whatsappHref}
                  external
                  icon={<MessageCircle size={18} />}
                >
                  WhatsApp Counselor
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  href={instituteData.contact.phoneHref}
                  icon={<Phone size={18} color="#38BDF8" />}
                >
                  {instituteData.contact.phoneFormatted}
                </Button>
              </div>
            </div>

            <div className="knx-card" style={{ padding: '1.5rem' }}>
              <div style={{ width: '100%', aspectRatio: '4/3', borderRadius: '12px', background: '#070C14', border: '1px solid #1E293B', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <img
                  src={course.svgGraphic}
                  alt={course.title}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  width="480"
                  height="120"
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid #1E293B' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#94A3B8' }}>
                    <Clock size={16} color="#38BDF8" /> Duration
                  </span>
                  <span style={{ fontWeight: 700, color: '#FFFFFF' }}>{course.duration}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid #1E293B' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#94A3B8' }}>
                    <Users size={16} color="#00E5C8" /> Batch Strength
                  </span>
                  <span style={{ fontWeight: 700, color: '#00E5C8' }}>15-20 Students</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#94A3B8' }}>
                    <ShieldCheck size={16} color="#F59E0B" /> Testing Pattern
                  </span>
                  <span style={{ fontWeight: 700, color: '#FFFFFF' }}>Weekly + Full Mocks</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="surface">
        <Container size="xl">
          <div style={{ maxWidth: '640px', marginBottom: '2rem' }}>
            <h2 className="knx-h2" style={{ marginBottom: '0.5rem' }}>
              What This Program Delivers
            </h2>
            <p className="knx-lead">
              Every topic is broken down into intuitive physical principles before formula derivations and numerical drill exercises begin.
            </p>
          </div>

          <div className="knx-grid-2">
            {course.features.map((feat, idx) => (
              <div
                key={idx}
                className="knx-card"
                style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '1.25rem' }}
              >
                <CheckCircle2 size={18} color="#00E5C8" style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF', marginBottom: 2 }}>Key Learning Milestone {idx + 1}</h4>
                  <p className="knx-small" style={{ lineHeight: 1.5 }}>{feat}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
};
