import React from 'react';
import { FiCheck } from 'react-icons/fi';

import { Status } from '~/machines/todos/types';

import { Container } from './Check.styled';

interface Props {
  status?: Status;
}

const Check: React.FC<Props> = ({ status = 'pending' }) => {
  return (
    <Container status={status}>
      <FiCheck />
    </Container>
  );
};

export default Check;
