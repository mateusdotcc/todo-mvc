import styled from 'styled-components';
import { shade } from 'polished';

import Button from '../Button/Button';

import { COLORS, SHADOWS } from '../../themes/light.theme';

export const Container = styled.li`
  background-color: ${COLORS.secondary};
  box-shadow: ${SHADOWS.input};

  display: flex;
  flex-direction: row;
  align-items: center;

  position: relative;
  margin-bottom: 1rem;
  padding: 3rem 2rem;
  border-radius: 1rem;
`;

export const ButtonDone = styled(Button)`
  display: none;
`;

export const ButtonDelete = styled(Button)`
  position: absolute;
  right: 8px;
  padding: 1rem 2rem;
  background-color: transparent;
  border-radius: 0;

  svg {
    color: ${COLORS.primary};
    transition: color 0.2s;
  }

  &:hover {
    background-color: transparent;

    svg {
      color: ${shade(0.3, COLORS.primary)};
    }
  }
`;
