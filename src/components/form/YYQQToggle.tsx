import React from 'react';

interface YYQQToggleProps {
  includeYYQQ: boolean;
  onIncludeYYQQChange: (value: boolean) => void;
}

const YYQQToggle: React.FC<YYQQToggleProps> = ({ includeYYQQ, onIncludeYYQQChange }) => {
  return (
    <div className="form-group">
      <div className="yyqq">
        <label>
          <input
            type="checkbox"
            checked={includeYYQQ}
            onChange={(e) => onIncludeYYQQChange(e.target.checked)}
          />
          Add YYQQ
        </label>
      </div>
    </div>
  );
};

export default YYQQToggle;