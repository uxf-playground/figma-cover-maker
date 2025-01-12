import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/base.scss';
import ProjectForm from './components/form/ProjectForm';

const App = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [jiraId, setJiraId] = useState('');
  const [includeYYQQ, setIncludeYYQQ] = useState(true);
  const [status, setStatus] = useState('');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    const isTitleValid = title.length <= 28;
    const isDescriptionValid = description.length <= 125;
    setIsButtonDisabled(!(isTitleValid && isDescriptionValid));
  }, [title, description]);

  const handleSubmit = () => {
    if (isButtonDisabled) return;

    const finalTitle = title || "Untitled";
    const finalDescription = description || "Describe your project and its key objectives. This helps stakeholders understand what you aim to achieve and the overall scope.";

    const isJiraIdValid = !jiraId || /^[A-Z][A-Z0-9]+-[0-9]+$/.test(jiraId);
    if (!isJiraIdValid) {
      alert('Invalid Jira issue ID. Please use the format PROJ-123.');
      return;
    }

    parent.postMessage(
      {
        pluginMessage: {
          type: 'generate-cover',
          title: finalTitle,
          description: finalDescription,
          jiraId,
          includeYYQQ,
          status,
          theme,
        },
      },
      '*'
    );
  };

  useEffect(() => {
    window.onmessage = (event) => {
      const message = event.data.pluginMessage;
      console.log('Message received from plugin:', message);

      if (message && message.type === 'cover-generated') {
        console.log('Cover generated successfully!');
      }
    };
  }, []);

  return (
    <ProjectForm
      title={title}
      description={description}
      jiraId={jiraId}
      includeYYQQ={includeYYQQ}
      status={status}
      theme={theme}
      isButtonDisabled={isButtonDisabled}
      onTitleChange={setTitle}
      onDescriptionChange={setDescription}
      onJiraIdChange={setJiraId}
      onIncludeYYQQChange={setIncludeYYQQ}
      onStatusChange={setStatus}
      onThemeChange={setTheme}
      onSubmit={handleSubmit}
    />
  );
};

const container = document.getElementById('root') as HTMLElement;
if (container) {
  const root = createRoot(container);
  root.render(<App />);
} else {
  console.error('Root container not found');
}