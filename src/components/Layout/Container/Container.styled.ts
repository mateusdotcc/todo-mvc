import styled from 'styled-components';

import { SIZES, BREAKPOINTS } from '../../../themes/light.theme';

export const Container = styled.div`
  max-width: ${SIZES.appWidth}px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  margin: 0 auto;
  width: 100%;

  @media ${BREAKPOINTS.mobile} {
    padding: 0 2rem;
  }
`;
