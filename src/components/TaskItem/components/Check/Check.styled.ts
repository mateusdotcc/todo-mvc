import styled, { css } from 'styled-components';
import { shade } from 'polished';

import { Status } from '~/machines/todos/types';

import { COLORS } from '~/themes/light.theme';

export const Container = styled.div<{ status?: Status }>`
  background-color: ${COLORS.background};
  border: 0.2rem solid ${COLORS.primary};

  display: flex;
  align-items: center;
  justify-content: center;

  width: 3rem;
  height: 3rem;
  border-radius: 50%;

  transition: opacity 0.2s ease-in-out, background-color 0.2s ease-in-out,
    border 0.25s;

  svg {
    opacity: 0;
  }

  ${props =>
    props.status === 'done' &&
    css`
      background-color: ${shade(0.2, COLORS.secondary)};
      border-color: ${shade(0.2, COLORS.secondary)};

      svg {
        opacity: 1;
      }
    `}
`;
