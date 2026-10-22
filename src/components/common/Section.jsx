import React from 'react';

export const Section = ({
  id,
  className = '',
  children,
  variant = 'deep',
  bleed = false,
  ...props
}) => {
  const variantClass = variant === 'surface' ? 'knx-section-surface' : '';
  return (
    <section
      id={id}
      className={`knx-section ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};
