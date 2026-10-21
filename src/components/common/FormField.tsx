import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface FormFieldProps {
  id: string;
  label: string;
  type?: 'text' | 'tel' | 'email' | 'textarea' | 'select';
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  error?: string;
  helperText?: string;
  options?: Array<{ value: string; label: string }>;
  disabled?: boolean;
  rows?: number;
  className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  type = 'text',
  placeholder,
  required = false,
  value,
  onChange,
  error,
  helperText,
  options = [],
  disabled = false,
  rows = 4,
  className = '',
}) => {
  const inputBaseClasses = twMerge(
    clsx(
      'w-full rounded-xl bg-[#070C14] border px-4 py-3 text-sm text-[#F8FAFC] placeholder-[#64748B] transition-all duration-150',
      'focus:outline-none focus:ring-2 focus:ring-[#00E5C8]/40 focus:border-[#00E5C8]',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      error ? 'border-[#EF4444] focus:ring-[#EF4444]/40 focus:border-[#EF4444]' : 'border-[#1E293B] hover:border-[#334155]'
    )
  );

  return (
    <div className={clsx('flex flex-col gap-1.5', className)}>
      <label htmlFor={id} className="text-xs font-semibold text-[#CBD5E1] tracking-wide flex items-center justify-between">
        <span>
          {label} {required && <span className="text-[#00E5C8]">*</span>}
        </span>
      </label>

      {type === 'textarea' ? (
        <textarea
          id={id}
          name={id}
          rows={rows}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
          className={inputBaseClasses}
        />
      ) : type === 'select' ? (
        <select
          id={id}
          name={id}
          required={required}
          value={value}
          onChange={onChange}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
          className={inputBaseClasses}
        >
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-[#0E1624] text-white">
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
          className={inputBaseClasses}
        />
      )}

      {error ? (
        <span id={`${id}-error`} className="text-xs font-medium text-[#EF4444] mt-0.5">
          {error}
        </span>
      ) : helperText ? (
        <span id={`${id}-helper`} className="text-xs text-[#94A3B8] mt-0.5">
          {helperText}
        </span>
      ) : null}
    </div>
  );
};

