import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { instituteData } from '../../data/institute';
import { Sparkles, Phone, MessageCircle, MapPin, ShieldCheck, Star } from 'lucide-react';

interface HeroSectionProps {
  onOpenEnquiry: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenEnquiry }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.85, delay: 0.1 }
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
          { opacity: 1, scale: 1, duration: 0.9, ease: 'power3.out' },
          '-=0.5'
        );
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-[#070C14]"
      aria-label="Hero Section"
    >
      {/* Background Dimensional Plane: SVG Kinetic Engineering Grid */}
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-70">
        <img
          src="/assets/hero/hero-kinetic-field.svg"
          alt="Kinetix classes dynamic physics momentum grid pattern"
          className="w-full h-full object-cover"
          width="1440"
          height="900"
          aria-hidden="true"
        />
      </div>

      {/* Atmospheric Ambient Glows */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-[#00E5C8]/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/10 w-[500px] h-[500px] bg-[#2563EB]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Proof & Action CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Location & Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E1624] border border-[#1E293B] text-xs font-semibold text-[#CBD5E1] mb-6 shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-[#00E5C8]" />
              <span>{instituteData.address.sector}, Greater Noida</span>
              <span className="w-1 h-1 rounded-full bg-[#64748B]" />
              <span className="text-[#00E5C8] font-bold">Admissions Open 2026–27</span>
            </div>

            {/* Main Headline */}
            <h1
              ref={headlineRef}
              className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F8FAFC] tracking-tight leading-[1.08] mb-6"
            >
              The Science of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5C8] via-[#38BDF8] to-[#2563EB]">
                Continuous Momentum.
              </span>
            </h1>

            {/* Verbatim Audited Value Proposition */}
            <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed max-w-2xl mb-8 font-normal">
              Trusted science & competitive exam coaching in Alpha 2, Greater Noida for{' '}
              <strong className="text-white font-semibold">NEET, JEE Main & Advanced</strong>, and{' '}
              <strong className="text-white font-semibold">11th–12th PCMB</strong>. Concept-building, small batch sizes, and experienced IITian & Doctor faculty.
            </p>

            {/* CTAs Group */}
            <div
              ref={ctaGroupRef}
              className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-10"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={onOpenEnquiry}
                icon={<Sparkles className="w-5 h-5" />}
                className="w-full sm:w-auto"
              >
                Book Free Counseling & Scholarship
              </Button>

              <Button
                variant="whatsapp"
                size="lg"
                href={instituteData.contact.whatsappHref}
                external
                icon={<MessageCircle className="w-5 h-5" />}
                className="w-full sm:w-auto"
              >
                WhatsApp Chat
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href={instituteData.contact.phoneHref}
                icon={<Phone className="w-5 h-5 text-[#38BDF8]" />}
                className="w-full sm:w-auto"
              >
                {instituteData.contact.phoneFormatted}
              </Button>
            </div>

            {/* Verified Trust Strip Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-[#1E293B]/80 text-xs text-[#94A3B8]">
              {/* Google Reviews */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                <span className="text-white font-bold">5.0 / 5.0</span>
                <span>(10 Google Reviews)</span>
              </div>

              {/* Batch Guarantee */}
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#00E5C8]" />
                <span className="text-[#CBD5E1] font-semibold">Guaranteed Small Batches</span>
              </div>

              {/* Faculty Experience */}
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#38BDF8]" />
                <span className="text-[#CBD5E1] font-semibold">8+ Yrs Ex-IITian / Doctor Mentors</span>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Classroom Composite (5 cols) */}
          <div ref={visualRef} className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#1E293B] bg-[#0E1624] shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
              {/* Image Frame */}
              <div className="relative aspect-[12/8] w-full overflow-hidden bg-[#070C14]">
                <img
                  src="/assets/hero/hero-classroom-composite.webp"
                  alt="Kinetix Classes authentic classroom study sessions and whiteboard instruction in Greater Noida"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                  width="1200"
                  height="700"
                  fetchPriority="high"
                />
                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1624] via-transparent to-transparent opacity-80" />
              </div>

              {/* Floating Bottom Card Over Composite */}
              <div className="p-5 bg-[#0E1624] border-t border-[#1E293B] flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white">
                    Real Classrooms, Authentic Mentorship
                  </span>
                  <span className="text-[11px] text-[#94A3B8]">
                    I-120 Alpha 2 campus facility • Greater Noida
                  </span>
                </div>
                <span className="text-[11px] font-bold text-[#00E5C8] bg-[#00E5C8]/10 border border-[#00E5C8]/30 px-2.5 py-1 rounded-full flex items-center gap-1">
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
