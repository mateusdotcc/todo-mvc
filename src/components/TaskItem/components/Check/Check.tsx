import React from 'react';
import { FiCheck } from 'react-icons/fi';

import { Container } from './Check.styled';

interface Props {
  status?: 'pending' | 'completed';
}

const Check: React.FC<Props> = ({ status = 'pending' }) => {
  return (
    <Container status={status}>
      <FiCheck />
    </Container>
  );
};

export default Check;
