import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const Reveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.65,
  className = '',
  distance = 30,
}) => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        gsap.set(containerRef.current, { opacity: 1, x: 0, y: 0 });
        return;
      }

      let xOffset = 0;
      let yOffset = 0;

      if (direction === 'up') yOffset = distance;
      if (direction === 'down') yOffset = -distance;
      if (direction === 'left') xOffset = distance;
      if (direction === 'right') xOffset = -distance;

      gsap.fromTo(
        containerRef.current,
        {
          opacity: 0,
          x: xOffset,
          y: yOffset,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 88%',
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );
    },
    { scope: containerRef, dependencies: [direction, delay, duration] }
  );

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};
