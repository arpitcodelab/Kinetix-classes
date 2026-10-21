import React, { useState } from 'react';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { galleryData } from '../../data/gallery';
import { GalleryItem } from '../../types';
import { Maximize2, X, Camera, MapPin } from 'lucide-react';
import { Reveal } from '../common/Reveal';

export const GallerySection: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  return (
    <Section id="gallery" variant="deep">
      <Container size="xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0E1624] border border-[#1E293B] text-xs font-semibold text-[#CBD5E1] mb-2">
              <Camera className="w-3.5 h-3.5 text-[#00E5C8]" />
              <span>Alpha 2 Campus Evidence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
              Classrooms & Facilities Photo Gallery
            </h2>
            <p className="text-sm text-[#94A3B8] mt-2 max-w-xl leading-relaxed">
              10 authentic photographs documenting our study benches, whiteboard lectures, student cohorts, and facility in Greater Noida.
            </p>
          </div>

          <div className="text-xs text-[#94A3B8] font-medium flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#00E5C8]" />
            <span>I-120, Alpha 2, Greater Noida</span>
          </div>
        </div>

        {/* Gallery Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryData.map((item, idx) => (
            <Reveal key={item.id} direction="up" delay={(idx % 3) * 0.1}>
              <div
                className="group relative rounded-2xl overflow-hidden bg-[#0E1624] border border-[#1E293B] hover:border-[#00E5C8] transition-all duration-300 cursor-pointer shadow-lg"
                onClick={() => setActivePhoto(item)}
              >
                {/* Image Container with explicit aspect-ratio and responsive srcset */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#070C14]">
                  <picture>
                    <source srcSet={item.srcWebp400} media="(max-width: 640px)" type="image/webp" />
                    <source srcSet={item.srcWebp} type="image/webp" />
                    <img
                      src={item.srcJpg}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      width={item.width}
                      height={item.height}
                    />
                  </picture>

                  {/* Hover Overlay with Zoom Icon */}
                  <div className="absolute inset-0 bg-[#070C14]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4">
                    <div className="p-3 rounded-full bg-[#00E5C8] text-[#070C14] shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Caption Footer */}
                <div className="p-4 bg-[#0E1624] border-t border-[#1E293B]">
                  <h4 className="text-sm font-bold text-[#F8FAFC] group-hover:text-[#00E5C8] transition-colors line-clamp-1 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#94A3B8] line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activePhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
            role="dialog"
            aria-modal="true"
            aria-label="Photo Preview Lightbox"
            onClick={() => setActivePhoto(null)}
          >
            <div
              className="relative max-w-4xl w-full rounded-3xl bg-[#0E1624] border border-[#1E293B] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#070C14]/80 text-white hover:text-[#00E5C8] hover:bg-[#1E293B] transition-colors"
                aria-label="Close photo preview"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Photo View */}
              <div className="relative max-h-[70vh] bg-[#070C14] flex items-center justify-center p-2">
                <picture>
                  <source srcSet={activePhoto.srcWebp} type="image/webp" />
                  <img
                    src={activePhoto.srcJpg}
                    alt={activePhoto.title}
                    className="max-h-[65vh] w-auto max-w-full object-contain rounded-xl"
                  />
                </picture>
              </div>

              {/* Caption */}
              <div className="p-6 bg-[#0E1624] border-t border-[#1E293B]">
                <h3 className="text-lg font-bold text-white mb-1">{activePhoto.title}</h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">{activePhoto.caption}</p>
                <div className="mt-3 flex items-center gap-2 text-xs text-[#00E5C8]">
                  <MapPin className="w-3.5 h-3.5" />
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

