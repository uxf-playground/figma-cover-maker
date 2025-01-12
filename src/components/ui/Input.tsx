import React from 'react';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  maxLength?: number;
  label?: string;
  showCount?: boolean;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  maxLength,
  label,
  showCount,
}) => (
  <div className="form-group">
    {(label || showCount) && (
      <div className="label-with-count">
        {label && <label>{label}</label>}
        {showCount && maxLength && (
          <span className="character-count">
            {value.length}/{maxLength}
          </span>
        )}
      </div>
    )}
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      maxLength={maxLength}
    />
  </div>
);

export default Input;