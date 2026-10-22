import React, { useState } from 'react';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { galleryData } from '../../data/gallery';
import { Maximize2, X, Camera, MapPin } from 'lucide-react';
import { Reveal } from '../common/Reveal';

export const GallerySection = () => {
  const [activePhoto, setActivePhoto] = useState(null);

  return (
    <Section id="gallery" variant="deep">
      <Container size="xl">
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '2.5rem' }}>
          <div>
            <span className="knx-eyebrow" style={{ marginBottom: '0.75rem' }}>
              <Camera size={14} />
              Alpha 2 Campus Evidence
            </span>
            <h2 className="knx-h2">
              Classrooms & Facilities Photo Gallery
            </h2>
            <p className="knx-lead" style={{ marginTop: '0.5rem', maxWidth: '640px' }}>
              10 authentic photographs documenting our study benches, whiteboard lectures, student cohorts, and facility in Greater Noida.
            </p>
          </div>

          <div style={{ fontSize: '0.85rem', color: '#94A3B8', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <MapPin size={16} color="#00E5C8" />
            <span>I-120, Alpha 2, Greater Noida</span>
          </div>
        </div>

        <div className="knx-grid-3">
          {galleryData.map((item, idx) => (
            <Reveal key={item.id} direction="up" delay={(idx % 3) * 0.1}>
              <div
                className="knx-card"
                style={{ padding: 0, overflow: 'hidden', cursor: 'pointer' }}
                onClick={() => setActivePhoto(item)}
              >
                <div style={{ position: 'relative', aspectRatio: '4/3', width: '100%', overflow: 'hidden', background: '#070C14' }}>
                  <picture>
                    <source srcSet={item.srcWebp400} media="(max-width: 640px)" type="image/webp" />
                    <source srcSet={item.srcWebp} type="image/webp" />
                    <img
                      src={item.srcJpg}
                      alt={item.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      loading="lazy"
                      width={item.width}
                      height={item.height}
                    />
                  </picture>

                  <div style={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    padding: 8,
                    borderRadius: '50%',
                    background: 'rgba(7, 12, 20, 0.75)',
                    color: '#00E5C8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Maximize2 size={14} />
                  </div>
                </div>

                <div style={{ padding: '1rem 1.25rem' }}>
                  <h4 className="knx-h4" style={{ fontSize: '0.95rem', marginBottom: '0.25rem' }}>
                    {item.title}
                  </h4>
                  <p className="knx-small" style={{ lineHeight: 1.5 }}>
                    {item.caption}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {activePhoto && (
          <div
            className="knx-modal-backdrop"
            role="dialog"
            aria-modal="true"
            aria-label="Photo Preview Lightbox"
            onClick={() => setActivePhoto(null)}
          >
            <div
              className="knx-modal"
              style={{ maxWidth: 850, padding: 0, overflow: 'hidden' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActivePhoto(null)}
                className="modal-close-btn"
                aria-label="Close photo preview"
                style={{ zIndex: 10 }}
              >
                <X size={18} />
              </button>

              <div style={{ position: 'relative', maxHeight: '65vh', background: '#070C14', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.5rem' }}>
                <picture>
                  <source srcSet={activePhoto.srcWebp} type="image/webp" />
                  <img
                    src={activePhoto.srcJpg}
                    alt={activePhoto.title}
                    style={{ maxHeight: '60vh', width: 'auto', maxWidth: '100%', objectFit: 'contain', borderRadius: 12 }}
                  />
                </picture>
              </div>

              <div style={{ padding: '1.25rem 1.5rem', background: '#0E1624', borderTop: '1px solid #1E293B' }}>
                <h3 className="knx-h3" style={{ fontSize: '1.15rem', marginBottom: 4 }}>{activePhoto.title}</h3>
                <p className="knx-small" style={{ lineHeight: 1.5 }}>{activePhoto.caption}</p>
                <div style={{ marginTop: '0.75rem', display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.8rem', color: '#00E5C8' }}>
                  <MapPin size={14} />
                  <span>Kinetix Classes • I-120 Alpha 2, Greater Noida</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
};
