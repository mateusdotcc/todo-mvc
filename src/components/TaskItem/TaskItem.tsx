import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

import { Status } from '~/machines/todos/types';

import { Todo } from '~/machines/todos/types';

import Check from './components/Check/Check';

import {
  Container,
  ContainerInputLabel,
  InputLabel,
  ButtonDone,
  ButtonDelete,
} from './TaskItem.styled';

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

      <ContainerInputLabel>
        <InputLabel
          value={label}
          onChange={event => onChange({ id, label: event.target.value })}
          disabled={status === 'done'}
        />
      </ContainerInputLabel>

      <ButtonDelete onClick={onClickDelete} icon={FiTrash2} />
    </Container>
  );
};

export default TaskItem;
