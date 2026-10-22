import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { instituteData } from '../../data/institute';
import { Sparkles, Phone, MessageCircle, MapPin, ShieldCheck, Star } from 'lucide-react';

export const HeroSection = ({ onOpenEnquiry }) => {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const ctaGroupRef = useRef(null);
  const visualRef = useRef(null);
  const bgFieldRef = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.fromTo(
        bgFieldRef.current,
        { opacity: 0, scale: 1.05 },
        { opacity: 0.7, scale: 1, duration: 1.2 }
      )
      .fromTo(
        headlineRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.8'
      )
      .fromTo(
        ctaGroupRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.4'
      )
      .fromTo(
        visualRef.current,
        { opacity: 0, scale: 0.96 },
        { opacity: 1, scale: 1, duration: 0.85, ease: 'power3.out' },
        '-=0.5'
      );
    },
    { scope: heroRef }
  );

  return (
    <section ref={heroRef} className="hero-viewport" aria-label="Hero Section">
      {/* Plane 1: Background Vector Momentum Field */}
      <div ref={bgFieldRef} className="hero-plane-bg">
        <div className="kinetic-orbit-ring" />
        <img
          src="/assets/hero/hero-kinetic-field.svg"
          alt="Kinetix classes dynamic physics momentum grid pattern"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          width="1440"
          height="900"
          aria-hidden="true"
        />
      </div>

      {/* Plane 2: Atmospheric Luminous Glow */}
      <div className="hero-plane-atmosphere" />

      {/* Plane 3: Subject & Core Content */}
      <Container size="xl" style={{ position: 'relative', zIndex: 5, width: '100%' }}>
        <div className="knx-grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            {/* Pill */}
            <div className="knx-eyebrow" style={{ marginBottom: '1.25rem' }}>
              <MapPin size={14} />
              <span>{instituteData.address.sector}, Greater Noida • Admissions Open</span>
            </div>

            {/* Headline */}
            <h1 ref={headlineRef} className="knx-display" style={{ marginBottom: '1.25rem' }}>
              The Science of <br />
              <span className="text-gradient-cyan">
                Continuous Momentum.
              </span>
            </h1>

            {/* Verbatim Audited Copy */}
            <p className="knx-lead" style={{ marginBottom: '2rem' }}>
              Trusted science & competitive exam coaching in Alpha 2, Greater Noida for{' '}
              <strong style={{ color: '#FFFFFF' }}>NEET, JEE Main & Advanced</strong>, and{' '}
              <strong style={{ color: '#FFFFFF' }}>11th–12th PCMB</strong>. Concept-building, small batch sizes, and experienced IITian & Doctor faculty.
            </p>

            {/* CTAs */}
            <div ref={ctaGroupRef} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
              <Button
                variant="primary"
                size="lg"
                onClick={onOpenEnquiry}
                icon={<Sparkles size={18} />}
              >
                Book Free Counseling & Scholarship
              </Button>

              <Button
                variant="whatsapp"
                size="lg"
                href={instituteData.contact.whatsappHref}
                external
                icon={<MessageCircle size={18} />}
              >
                WhatsApp Chat
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

            {/* Trust Proof */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)', fontSize: '0.8rem', color: '#94A3B8' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <div style={{ display: 'flex', gap: 2 }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>
                <span style={{ color: '#FFFFFF', fontWeight: 700 }}>5.0 / 5.0</span>
                <span>(10 Google Reviews)</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <ShieldCheck size={16} color="#00E5C8" />
                <span style={{ color: '#CBD5E1', fontWeight: 600 }}>Guaranteed Small Batches</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Sparkles size={16} color="#38BDF8" />
                <span style={{ color: '#CBD5E1', fontWeight: 600 }}>8+ Yrs Ex-IITian / Doctor Mentors</span>
              </div>
            </div>
          </div>

          {/* Plane 4: Authentic Classroom Composite Frame */}
          <div ref={visualRef}>
            <div className="knx-card" style={{ padding: 0, overflow: 'hidden', border: '1px solid #1E293B', boxShadow: '0 20px 50px rgba(0,0,0,0.8)' }}>
              <div style={{ position: 'relative', aspectRatio: '12/8', width: '100%', overflow: 'hidden', background: '#070C14' }}>
                <img
                  src="/assets/hero/hero-classroom-composite.webp"
                  alt="Kinetix Classes authentic classroom study sessions and whiteboard instruction in Greater Noida"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  width="1200"
                  height="700"
                  fetchPriority="high"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0E1624 0%, transparent 40%)' }} />
              </div>

              <div style={{ padding: '1rem 1.25rem', background: '#0E1624', borderTop: '1px solid #1E293B', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF' }}>
                    Real Classrooms, Authentic Mentorship
                  </div>
                  <div className="knx-small" style={{ fontSize: '0.75rem' }}>
                    I-120 Alpha 2 campus facility • Greater Noida
                  </div>
                </div>
                <span className="knx-badge badge-cyan">
                  Verified Local Proof
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
