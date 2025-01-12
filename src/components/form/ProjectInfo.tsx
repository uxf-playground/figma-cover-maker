import React from 'react';
import Input from '../ui/Input';
import TextArea from '../ui/TextArea';

interface ProjectInfoProps {
  title: string;
  description: string;
  onTitleChange: (value: string) => void;
  onDescriptionChange: (value: string) => void;
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({
  title,
  description,
  onTitleChange,
  onDescriptionChange,
}) => {
  return (
    <>
      <Input
        value={title}
        onChange={onTitleChange}
        placeholder="Enter project name"
        maxLength={28}
        label="Project name"
        showCount
      />
      <TextArea
        value={description}
        onChange={onDescriptionChange}
        placeholder="Enter description"
        maxLength={125}
        label="Description"
        showCount
      />
    </>
  );
};

export default ProjectInfo;