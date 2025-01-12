import React from 'react';
import Input from '../ui/Input';

interface JiraInputProps {
  jiraId: string;
  onJiraIdChange: (value: string) => void;
}

const JiraInput: React.FC<JiraInputProps> = ({ jiraId, onJiraIdChange }) => {
  return (
    <Input
      value={jiraId}
      onChange={onJiraIdChange}
      placeholder="Enter Jira ID (e.g. PROJ-123)"
      label="Jira ID"
    />
  );
};

export default JiraInput;