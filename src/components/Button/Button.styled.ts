import styled from 'styled-components';
import { darken, lighten } from 'polished';

import { COLORS, FONTS } from '~/themes/light.theme';

export const Container = styled.button`
  background-color: ${COLORS.primary};

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2rem 4rem;
  border-radius: 1rem;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${lighten(0.2, COLORS.primary)};
  }

  &:disabled {
    background-color: transparent;
    cursor: auto;

    svg {
      color: ${darken(0.1, COLORS.secondary)};
    }
  }
`;

export const Label = styled.span`
  font-family: ${FONTS.medium};
  color: ${COLORS.background};

  font-size: 1.8rem;
`;
