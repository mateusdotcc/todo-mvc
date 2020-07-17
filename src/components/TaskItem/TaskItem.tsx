import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

import Check from './components/Check/Check';

import { Container, Label, ButtonDone, ButtonDelete } from './TaskItem.styled';

type Status = 'pending' | 'completed';

interface Props {
  label: string;
  status: Status;
  onClickDone(): void;
  onClickDelete(): void;
}

const TaskItem: React.FC<Props> = ({
  label,
  status,
  onClickDone,
  onClickDelete,
}) => {
  return (
    <Container status={status}>
      <ButtonDone onClick={onClickDone}>
        <Check status={status} />
      </ButtonDone>

      <Label>{label}</Label>

      <ButtonDelete onClick={onClickDelete} icon={FiTrash2} />
    </Container>
  );
};

export default TaskItem;
