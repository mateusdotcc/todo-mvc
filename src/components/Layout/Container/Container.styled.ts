import styled from 'styled-components';

import { SIZES } from '../../../themes/light.theme';

export const Container = styled.div`
  max-width: ${SIZES.appWidth}px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  margin: 0 auto;
  width: 100%;
`;
