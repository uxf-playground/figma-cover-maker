import React from 'react';
import ThemeSelector from './ThemeSelector';
import ProjectInfo from './ProjectInfo';
import StatusSelector from './StatusSelector';
import JiraInput from './JiraInput';
import YYQQToggle from './YYQQToggle';
import Button from '../ui/Button';

interface ProjectFormProps {
  title: string;
  description: string;
  jiraId: string;
  includeYYQQ: boolean;
  status: string;
  theme: 'light' | 'dark';
  isButtonDisabled: boolean;
  onTitleChange: (value: string) => void;
  onDescriptionChange: (value: string) => void;
  onJiraIdChange: (value: string) => void;
  onIncludeYYQQChange: (value: boolean) => void;
  onStatusChange: (value: string) => void;
  onThemeChange: (theme: 'light' | 'dark') => void;
  onSubmit: () => void;
}

const ProjectForm: React.FC<ProjectFormProps> = ({
  title,
  description,
  jiraId,
  includeYYQQ,
  status,
  theme,
  isButtonDisabled,
  onTitleChange,
  onDescriptionChange,
  onJiraIdChange,
  onIncludeYYQQChange,
  onStatusChange,
  onThemeChange,
  onSubmit,
}) => {
  return (
    <div className="plugin-container">
      <ThemeSelector theme={theme} onThemeChange={onThemeChange} />
      <ProjectInfo
        title={title}
        description={description}
        onTitleChange={onTitleChange}
        onDescriptionChange={onDescriptionChange}
      />
      <StatusSelector status={status} onStatusChange={onStatusChange} />
      <JiraInput jiraId={jiraId} onJiraIdChange={onJiraIdChange} />
      <YYQQToggle includeYYQQ={includeYYQQ} onIncludeYYQQChange={onIncludeYYQQChange} />
      <Button onClick={onSubmit} disabled={isButtonDisabled}>
        Generate Cover
      </Button>
    </div>
  );
};

export default ProjectForm;