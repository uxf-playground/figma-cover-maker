export const validateJiraId = (jiraId: string): boolean => {
    if (!jiraId) return true;
    return /^[A-Z][A-Z0-9]+-[0-9]+$/.test(jiraId);
  };
  
  export const validateTitle = (title: string): boolean => {
    return title.length <= 28;
  };
  
  export const validateDescription = (description: string): boolean => {
    return description.length <= 125;
  };