import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

import { Todo } from '~/machines/todos/types';

import Check from './components/Check/Check';

import {
  Container,
  InputLabel,
  ButtonDone,
  ButtonDelete,
} from './TaskItem.styled';

type Status = 'pending' | 'done';

interface Props {
  id: string;
  label: string;
  status: Status;
  onChange: ({ id, label }: Todo) => void;
  onClickDone(): void;
  onClickDelete(): void;
}

const TaskItem: React.FC<Props> = ({
  id,
  label,
  status,
  onChange,
  onClickDone,
  onClickDelete,
}) => {
  return (
    <Container status={status}>
      <ButtonDone onClick={onClickDone}>
        <Check status={status} />
      </ButtonDone>

      <InputLabel
        value={label}
        onChange={event => onChange({ id, label: event.target.value })}
      />

      <ButtonDelete onClick={onClickDelete} icon={FiTrash2} />
    </Container>
  );
};

export default TaskItem;
