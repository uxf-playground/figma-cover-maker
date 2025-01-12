import { useState, useEffect } from 'react';
import { validateJiraId } from '../utils/validation';
import { formDefaults } from '../constants/formDefaults';

export const useProjectForm = () => {
  const [formState, setFormState] = useState(formDefaults);

  useEffect(() => {
    const isTitleValid = formState.title.length <= 28;
    const isDescriptionValid = formState.description.length <= 125;
    setFormState((prev) => ({
      ...prev,
      isButtonDisabled: !(isTitleValid && isDescriptionValid),
    }));
  }, [formState.title, formState.description]);

  const handleSubmit = () => {
    if (formState.isButtonDisabled) return;

    const finalTitle = formState.title || 'Untitled';
    const finalDescription = formState.description || 'Describe your project and its key objectives. This helps stakeholders understand what you aim to achieve and the overall scope.';

    if (!validateJiraId(formState.jiraId)) {
      alert('Invalid Jira issue ID. Please use the format PROJ-123.');
      return;
    }

    parent.postMessage(
      {
        pluginMessage: {
          type: 'generate-cover',
          title: finalTitle,
          description: finalDescription,
          jiraId: formState.jiraId,
          includeYYQQ: formState.includeYYQQ,
          status: formState.status,
          theme: formState.theme,
        },
      },
      '*'
    );
  };

  return {
    formState,
    setFormState,
    handleSubmit,
  };
};