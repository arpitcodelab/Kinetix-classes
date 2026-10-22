import React from 'react';

export const FormField = ({
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
  const inputClass = `knx-input ${error ? 'has-error' : ''}`;

  return (
    <div className={`knx-form-group ${className}`}>
      <label htmlFor={id} className="knx-label">
        <span>
          {label} {required && <span style={{ color: '#00E5C8' }}>*</span>}
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
          className={`knx-textarea ${error ? 'has-error' : ''}`}
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
          className={`knx-select ${error ? 'has-error' : ''}`}
        >
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
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
          className={inputClass}
        />
      )}

      {error ? (
        <span id={`${id}-error`} className="knx-error-msg">
          {error}
        </span>
      ) : helperText ? (
        <span id={`${id}-helper`} className="knx-small">
          {helperText}
        </span>
      ) : null}
    </div>
  );
};
