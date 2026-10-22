import React from 'react';

export const Container = ({
  size = 'lg',
  className = '',
  children,
  ...props
}) => {
  return (
    <div className={`knx-container ${className}`} {...props}>
      {children}
    </div>
  );
};
