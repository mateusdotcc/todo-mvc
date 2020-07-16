import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

import { Container, ButtonDone, ButtonDelete } from './TaskItem.styled';

interface Props {
  label: string;
  onClickDone(): void;
  onClickDelete(): void;
}

const TaskItem: React.FC<Props> = ({ label, onClickDone, onClickDelete }) => {
  return (
    <Container>
      <ButtonDone onClick={onClickDone}>Done</ButtonDone>

      <span>{label}</span>

      <ButtonDelete onClick={onClickDelete} icon={FiTrash2} />
    </Container>
  );
};

export default TaskItem;
