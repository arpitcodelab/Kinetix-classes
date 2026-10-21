import React from 'react';
import { Container } from '../common/Container';
import { instituteData } from '../../data/institute';
import { Reveal } from '../common/Reveal';

export const TrustStrip: React.FC = () => {
  return (
    <div className="border-y border-[#1E293B] bg-[#0A101A] py-10 relative overflow-hidden">
      <Container size="xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instituteData.pillars.map((pillar, idx) => (
            <Reveal key={idx} direction="up" delay={idx * 0.1}>
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#0E1624]/60 border border-[#1E293B]/60 hover:border-[#00E5C8]/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#00E5C8]/10 border border-[#00E5C8]/30 flex items-center justify-center shrink-0 p-2.5">
                  <img
                    src={pillar.icon}
                    alt={`${pillar.title} Icon`}
                    className="w-full h-full object-contain"
                    width="24"
                    height="24"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#F8FAFC] mb-1 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
};

