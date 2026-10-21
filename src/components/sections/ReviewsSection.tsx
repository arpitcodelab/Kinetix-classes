import React from 'react';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Testimonial } from '../ui/Testimonial';
import { reviewsData } from '../../data/reviews';
import { instituteData } from '../../data/institute';
import { Star, ExternalLink, ShieldCheck } from 'lucide-react';
import { Reveal } from '../common/Reveal';

export const ReviewsSection: React.FC = () => {
  return (
    <Section id="reviews" variant="deep">
      <Container size="xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0E1624] border border-[#1E293B] text-xs font-semibold text-[#CBD5E1] mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00E5C8]" />
              <span>100% Authentic Social Proof</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
              Student & Parent Experiences
            </h2>
            <p className="text-sm text-[#94A3B8] mt-2 max-w-xl leading-relaxed">
              Read all 10 unedited Google reviews from students of DPS Greater Noida, local science aspirants, and parents.
            </p>
          </div>

          {/* Aggregate Rating Badge */}
          <div className="p-4 rounded-2xl bg-[#0E1624] border border-[#1E293B] flex items-center gap-4 shrink-0">
            <div className="text-3xl font-black text-white">5.0</div>
            <div>
              <div className="flex items-center gap-0.5 mb-1" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>
              <a
                href={instituteData.maps.viewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#38BDF8] hover:text-[#00E5C8] font-semibold flex items-center gap-1"
              >
                10 Reviews on Google Maps <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsData.map((review, idx) => (
            <Reveal key={review.id} direction="up" delay={(idx % 3) * 0.1}>
              <Testimonial review={review} />
            </Reveal>
          ))}
        </div>

        {/* Google Maps Callout Banner */}
        <div className="mt-12 text-center">
          <a
            href={instituteData.maps.viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#00E5C8] hover:text-white bg-[#0E1624] border border-[#1E293B] hover:border-[#00E5C8] px-5 py-3 rounded-full transition-all shadow-md"
          >
            <span>Read All Verified Customer Feedback on Google</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </Container>
    </Section>
  );
};

