import styled from 'styled-components';
import { shade } from 'polished';

import {
  COLORS,
  SHADOWS,
  SIZES,
  FONTS,
  BREAKPOINTS,
} from '../../themes/light.theme';

import { TextField, Button } from '../../components';

export const Header = styled.header`
  background-color: ${COLORS.secondary};
  border-bottom: 0.2em solid ${COLORS.tertiary};

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  padding: 2rem 0 3rem;
  width: 100%;

  h1 {
    color: ${COLORS.tertiary};
    font-family: ${FONTS.medium};

    margin: 2rem 0 3rem;
    text-align: center;
  }

  @media ${BREAKPOINTS.mobile} {
    padding-right: 2rem;
    padding-left: 2rem;
  }
`;

export const HeaderContainer = styled.div`
  max-width: ${SIZES.appWidth}px;
  margin: 0 auto;
`;

export const Center = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding-top: 19.7rem;
  width: 100%;
`;

export const Form = styled.form`
  background: ${COLORS.background};
  box-shadow: ${SHADOWS.input};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: relative;
  border-radius: 1rem;
`;

export const Input = styled(TextField)`
  flex: 1;
  max-width: calc(100% - 9rem);
  background-color: transparent;
`;

export const SubmitButton = styled(Button)`
  position: absolute;
  right: 8px;
  padding: 1.2rem 2rem;

  svg {
    color: ${COLORS.background};
  }
`;

export const Counter = styled.p`
  color: ${COLORS.onSecondary};
  font-family: ${FONTS.medium};

  font-size: 1.3rem;
  text-align: right;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;

  width: 100%;
  list-style: none;

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin: 2rem 0;
    padding: 0 2rem;

    h2 {
      font-family: ${FONTS.medium};
      color: ${COLORS.tertiary};
    }
  }
`;

export const Empty = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 5rem;

  svg {
    width: 30rem;
  }

  h2 {
    color: ${shade(0.5, COLORS.secondary)};
    font-family: ${FONTS.light};

    margin-top: 3rem;
    max-width: 30rem;
    text-align: center;
    font-size: 1.8rem;
    line-height: 1.6;
  }
`;
