import React from 'react';

interface ThemeSelectorProps {
  theme: 'light' | 'dark';
  onThemeChange: (theme: 'light' | 'dark') => void;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ theme, onThemeChange }) => {
  return (
    <div className="form-group">
      <div className="theme-options">
        <label>
          <input
            type="radio"
            value="light"
            checked={theme === 'light'}
            onChange={() => onThemeChange('light')}
          />
          Light
        </label>
        <label>
          <input
            type="radio"
            value="dark"
            checked={theme === 'dark'}
            onChange={() => onThemeChange('dark')}
          />
          Dark
        </label>
      </div>
    </div>
  );
};

export default ThemeSelector;