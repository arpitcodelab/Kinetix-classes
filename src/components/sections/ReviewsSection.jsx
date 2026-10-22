import React from 'react';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Testimonial } from '../ui/Testimonial';
import { reviewsData } from '../../data/reviews';
import { instituteData } from '../../data/institute';
import { Star, ExternalLink, ShieldCheck } from 'lucide-react';
import { Reveal } from '../common/Reveal';

export const ReviewsSection = () => {
  return (
    <Section id="reviews" variant="deep">
      <Container size="xl">
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '3rem' }}>
          <div>
            <span className="knx-eyebrow" style={{ marginBottom: '0.75rem' }}>
              <ShieldCheck size={14} />
              100% Authentic Social Proof
            </span>
            <h2 className="knx-h2">
              Student & Parent Experiences
            </h2>
            <p className="knx-lead" style={{ marginTop: '0.5rem', maxWidth: '600px' }}>
              Read all 10 unedited Google reviews from students of DPS Greater Noida, local science aspirants, and parents.
            </p>
          </div>

          <div className="knx-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.25rem' }}>
            <div style={{ fontSize: '2rem', fontWeight: 900, color: '#FFFFFF' }}>5.0</div>
            <div>
              <div style={{ display: 'flex', gap: 2, marginBottom: 4 }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>
              <a
                href={instituteData.maps.viewUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '0.75rem', color: '#38BDF8', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}
              >
                10 Reviews on Google Maps <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>

        <div className="knx-grid-3">
          {reviewsData.map((review, idx) => (
            <Reveal key={review.id} direction="up" delay={(idx % 3) * 0.1}>
              <Testimonial review={review} />
            </Reveal>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a
            href={instituteData.maps.viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="knx-btn btn-outline btn-md"
          >
            <span>Read All Verified Customer Feedback on Google</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </Container>
    </Section>
  );
};
