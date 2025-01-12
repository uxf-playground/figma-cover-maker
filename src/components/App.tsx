import React from 'react';
import ProjectForm from './form/ProjectForm';
import { useProjectForm } from '../hooks/useProjectForm';

const App = () => {
  const { formState, setFormState, handleSubmit } = useProjectForm();

  return (
    <div className="plugin-container">
      <ProjectForm
        title={formState.title}
        description={formState.description}
        jiraId={formState.jiraId}
        includeYYQQ={formState.includeYYQQ}
        status={formState.status}
        theme={formState.theme}
        isButtonDisabled={formState.isButtonDisabled}
        onTitleChange={(value) => setFormState((prev) => ({ ...prev, title: value }))}
        onDescriptionChange={(value) => setFormState((prev) => ({ ...prev, description: value }))}
        onJiraIdChange={(value) => setFormState((prev) => ({ ...prev, jiraId: value }))}
        onIncludeYYQQChange={(value) => setFormState((prev) => ({ ...prev, includeYYQQ: value }))}
        onStatusChange={(value) => setFormState((prev) => ({ ...prev, status: value }))}
        onThemeChange={(value) => setFormState((prev) => ({ ...prev, theme: value }))}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;