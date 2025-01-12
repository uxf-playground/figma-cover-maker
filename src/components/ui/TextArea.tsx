import React from 'react';

interface TextAreaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  maxLength?: number;
  label?: string;
  showCount?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({
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
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      maxLength={maxLength}
    />
  </div>
);

export default TextArea;