import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  className?: string;
  children: React.ReactNode;
  variant?: 'deep' | 'surface' | 'gradient';
  bleed?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  id,
  className,
  children,
  variant = 'deep',
  bleed = false,
  ...props
}) => {
  const variantClasses = {
    deep: 'bg-[#070C14]',
    surface: 'bg-[#0E1624] border-y border-[#1E293B]/60',
    gradient: 'bg-gradient-to-b from-[#070C14] via-[#0E1624] to-[#070C14]',
  };

  return (
    <section
      id={id}
      className={twMerge(
        clsx(
          'relative overflow-hidden',
          !bleed && 'py-16 sm:py-20 lg:py-28',
          variantClasses[variant],
          className
        )
      )}
      {...props}
    >
      {children}
    </section>
  );
};

