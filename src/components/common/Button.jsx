import React from 'react';

export const Button = ({
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  className = '',
  children,
  disabled,
  ...props
}) => {
  const classNames = [
    'knx-btn',
    `btn-${variant}`,
    `btn-${size}`,
    fullWidth ? 'w-full' : '',
    className
  ].filter(Boolean).join(' ');

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="btn-icon">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="btn-icon">{icon}</span>}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classNames}
          {...props}
        >
          {content}
        </a>
      );
    }
    return (
      <a href={href} className={classNames} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classNames}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
};
