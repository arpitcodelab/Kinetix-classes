import React from 'react';
import { Container } from '../common/Container';
import { instituteData } from '../../data/institute';
import { Reveal } from '../common/Reveal';

export const TrustStrip = () => {
  return (
    <div style={{ borderTop: '1px solid #1E293B', borderBottom: '1px solid #1E293B', background: '#090F19', padding: '2.5rem 0', position: 'relative' }}>
      <Container size="xl">
        <div className="knx-grid-4">
          {instituteData.pillars.map((pillar, idx) => (
            <Reveal key={idx} direction="up" delay={idx * 0.1}>
              <div className="knx-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem', height: '100%' }}>
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: 'rgba(0, 229, 200, 0.1)',
                  border: '1px solid rgba(0, 229, 200, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  padding: 8
                }}>
                  <img
                    src={pillar.icon}
                    alt={`${pillar.title} Icon`}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    width="24"
                    height="24"
                  />
                </div>
                <div>
                  <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#F8FAFC', marginBottom: '0.25rem' }}>
                    {pillar.title}
                  </h3>
                  <p className="knx-small" style={{ lineHeight: 1.5 }}>
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
