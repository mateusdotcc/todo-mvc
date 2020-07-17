import styled, { css } from 'styled-components';
import { shade } from 'polished';

import { COLORS } from '../../../../themes/light.theme';

type Container = 'pending' | 'completed';

export const Container = styled.div<{ status?: Container }>`
  border: 0.2rem solid ${COLORS.primary};

  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 2rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;

  transition: opacity 0.2s ease-in-out, background-color 0.2s ease-in-out;

  svg {
    opacity: 0;
  }

  ${props =>
    props.status === 'completed' &&
    css`
      background-color: ${shade(0.2, COLORS.secondary)};
      border-color: ${shade(0.2, COLORS.secondary)};

      svg {
        opacity: 1;
      }
    `}
`;
