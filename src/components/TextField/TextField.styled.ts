import styled from 'styled-components';

import { COLORS } from '../../themes/light.theme';

export const Container = styled.span`
  background-color: ${COLORS.secondary};

  border-radius: 1rem;
`;

export const Input = styled.input`
  padding: 2rem 1.8rem;
  width: 100%;
  background-color: transparent;
  outline: none;
  border: 0;

  transition: box-shadow 0.3s;
`;
