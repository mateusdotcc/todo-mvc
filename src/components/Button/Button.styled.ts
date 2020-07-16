import styled from 'styled-components';
import { shade } from 'polished';

import { COLORS, FONTS } from '../../themes/light.theme';

export const Container = styled.button`
  background-color: ${COLORS.primary};

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2rem 4rem;
  border-radius: 1rem;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.1, COLORS.primary)};
  }
`;

export const Label = styled.span`
  font-family: ${FONTS.medium};
  font-size: 1.8rem;
  color: ${COLORS.background};
`;
