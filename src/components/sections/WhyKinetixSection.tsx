import React from 'react';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Reveal } from '../common/Reveal';
import { Users, Award, ShieldCheck, BookOpenCheck, CheckCircle2 } from 'lucide-react';

export const WhyKinetixSection: React.FC = () => {
  const differentiators = [
    {
      icon: <Users className="w-6 h-6 text-[#00E5C8]" />,
      number: "01",
      title: "Guaranteed Small Batch Size",
      tagline: "Personal Attention Over Mass Factory Halls",
      description: "Unlike overcrowded corporate coaching centers with 100+ students per hall, Kinetix Classes maintains strict small cohorts (15–20 students) so faculty can monitor individual homework, weak areas, and question speed."
    },
    {
      icon: <Award className="w-6 h-6 text-[#38BDF8]" />,
      number: "02",
      title: "IITians & Doctors Faculty Team",
      tagline: "8+ Years of Proven Medical & Engineering Guidance",
      description: "Direct classroom instruction by senior educators who have cleared and mastered these competitive exams themselves, delivering rigorous problem-solving shortcuts and conceptual clarity."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#F59E0B]" />,
      number: "03",
      title: "Affordable Fee & Scholarship Test",
      tagline: "Quality Education Without Crushing Financial Burdens",
      description: "Transparent, reasonable fee structure with merit scholarship fee waivers based on our entrance test, accompanied by convenient Easy EMI monthly payment options for parents."
    },
    {
      icon: <BookOpenCheck className="w-6 h-6 text-[#10B981]" />,
      number: "04",
      title: "Integrated Board + Entrance Syllabi",
      tagline: "Zero Friction Between CBSE/ICSE and Competitive Exams",
      description: "Synchronized dual-track curriculum covering school board scoring criteria and NCERT fundamentals while progressively building IIT JEE / NEET numerical dexterity."
    }
  ];

  return (
    <Section id="why-kinetix" variant="surface">
      <Container size="xl">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold text-[#00E5C8] uppercase tracking-wider mb-2 block">
            The Kinetix Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
            Why Students & Parents Choose Kinetix in Alpha 2
          </h2>
          <p className="text-sm text-[#94A3B8] mt-2 leading-relaxed">
            The 3 foundational promises verified by real students from DPS Greater Noida and top schools across the district.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {differentiators.map((item, idx) => (
            <Reveal key={idx} direction="up" delay={idx * 0.1}>
              <div className="relative p-8 rounded-3xl bg-[#070C14] border border-[#1E293B] hover:border-[#00E5C8]/40 transition-all duration-300 group flex flex-col justify-between h-full overflow-hidden">
                {/* Large Background Watermark Number */}
                <span className="absolute -top-4 -right-2 text-7xl font-black text-[#1E293B]/30 select-none pointer-events-none group-hover:text-[#00E5C8]/10 transition-colors">
                  {item.number}
                </span>

                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#0E1624] border border-[#1E293B] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>

                  <span className="text-xs font-bold text-[#00E5C8] uppercase tracking-wider block mb-1">
                    {item.tagline}
                  </span>

                  <h3 className="text-xl font-bold text-[#F8FAFC] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#1E293B]/60 flex items-center gap-2 text-xs text-[#CBD5E1]">
                  <CheckCircle2 className="w-4 h-4 text-[#00E5C8]" />
                  <span>Verified Standard Operating Procedure</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
};
