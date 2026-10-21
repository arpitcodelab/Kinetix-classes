import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'whatsapp' | 'phone';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  className,
  children,
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5C8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070C14] disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98] cursor-pointer';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2 min-h-[38px] gap-1.5',
    md: 'text-sm px-5 py-2.5 min-h-[46px] gap-2',
    lg: 'text-base px-6 py-3.5 min-h-[52px] gap-2.5 font-bold',
  };

  const variantStyles = {
    primary: 'bg-[#00E5C8] text-[#070C14] hover:bg-[#00C4AA] shadow-[0_0_20px_rgba(0,229,200,0.25)] hover:shadow-[0_0_25px_rgba(0,229,200,0.4)]',
    secondary: 'bg-[#162235] text-[#F8FAFC] hover:bg-[#1E2E48] border border-[#334155]',
    outline: 'border border-[#00E5C8] text-[#00E5C8] hover:bg-[#00E5C8]/10',
    ghost: 'text-[#CBD5E1] hover:text-[#00E5C8] hover:bg-[#1E293B]/40',
    whatsapp: 'bg-[#25D366] text-[#070C14] hover:bg-[#20BA5A] shadow-[0_0_20px_rgba(37,211,102,0.25)]',
    phone: 'bg-[#2563EB] text-[#F8FAFC] hover:bg-[#1D4ED8] shadow-[0_0_20px_rgba(37,99,235,0.25)]',
  };

  const combinedClass = twMerge(
    clsx(
      baseStyles,
      sizeStyles[size],
      variantStyles[variant],
      fullWidth && 'w-full',
      className
    )
  );

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={combinedClass}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClass} disabled={disabled} {...props}>
      {content}
    </button>
  );
};

