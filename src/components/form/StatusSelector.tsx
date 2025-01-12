import React from 'react';
import Select from '../ui/Select';
import { statusOptions } from '../../constants/statusOptions';

interface StatusSelectorProps {
  status: string;
  onStatusChange: (value: string) => void;
}

const StatusSelector: React.FC<StatusSelectorProps> = ({ status, onStatusChange }) => {
  return (
    <Select
      value={status}
      onChange={onStatusChange}
      options={statusOptions}
      label="Project status"
    />
  );
};

export default StatusSelector;