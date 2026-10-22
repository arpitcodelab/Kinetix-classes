import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';

export const Testimonial = ({ review }) => {
  return (
    <article className="review-card">
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <img
              src={review.avatarSvg}
              alt={review.author}
              style={{ width: 44, height: 44, borderRadius: '50%', border: '1px solid rgba(56, 189, 248, 0.4)', flexShrink: 0 }}
              loading="lazy"
              width="80"
              height="80"
            />
            <div>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#F8FAFC', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                {review.author}
                <CheckCircle2 size={14} color="#00E5C8" aria-label="Verified Google Review" />
              </h4>
              <p className="knx-small" style={{ fontSize: '0.75rem' }}>
                {review.studentTag || 'Google Reviewer'}
              </p>
            </div>
          </div>
          <span style={{ fontSize: '0.7rem', color: '#64748B' }}>
            {review.date}
          </span>
        </div>

        <div className="stars" aria-label="5 out of 5 stars" style={{ marginBottom: '0.75rem' }}>
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} size={15} fill="#F59E0B" color="#F59E0B" />
          ))}
        </div>

        <p className="knx-body" style={{ fontSize: '0.9rem', fontStyle: 'italic', lineHeight: 1.6 }}>
          "{review.text}"
        </p>
      </div>

      <div style={{
        marginTop: '1.25rem',
        paddingTop: '0.75rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '0.75rem',
        color: '#94A3B8'
      }}>
        <span>Verified on Google Business</span>
        <span style={{ color: '#00E5C8', fontWeight: 700 }}>5.0 / 5.0</span>
      </div>
    </article>
  );
};
