import React from 'react';
import { Review } from '../../types';
import { Star, CheckCircle2 } from 'lucide-react';

interface TestimonialProps {
  review: Review;
}

export const Testimonial: React.FC<TestimonialProps> = ({ review }) => {
  return (
    <article className="flex flex-col justify-between h-full p-6 rounded-2xl bg-[#0E1624] border border-[#1E293B] hover:border-[#334155] transition-all duration-300">
      {/* Top Header: Avatar, Author, Star Rating */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <img
              src={review.avatarSvg}
              alt={review.author}
              className="w-11 h-11 rounded-full border border-[#38BDF8]/40 shrink-0"
              loading="lazy"
              width="80"
              height="80"
            />
            <div>
              <h4 className="text-sm font-bold text-[#F8FAFC] flex items-center gap-1.5">
                {review.author}
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5C8]" aria-label="Verified Google Review" />
              </h4>
              <p className="text-[11px] text-[#94A3B8]">
                {review.studentTag || 'Google Reviewer'}
              </p>
            </div>
          </div>
          <span className="text-[10px] text-[#64748B] font-medium shrink-0">
            {review.date}
          </span>
        </div>

        {/* 5-Star Rating */}
        <div className="flex items-center gap-1 mb-3" aria-label="5 out of 5 stars">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
          ))}
        </div>

        {/* Review Body */}
        <p className="text-sm text-[#CBD5E1] leading-relaxed italic">
          "{review.text}"
        </p>
      </div>

      {/* Verified Google Footnote */}
      <div className="mt-6 pt-3 border-t border-[#1E293B]/60 flex items-center justify-between text-[11px] text-[#94A3B8]">
        <span className="flex items-center gap-1">
          <span className="font-bold text-[#38BDF8]">G</span> Verified on Google Maps
        </span>
        <span className="text-[#00E5C8] font-semibold">5.0 / 5.0</span>
      </div>
    </article>
  );
};

