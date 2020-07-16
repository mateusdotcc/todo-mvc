import styled from 'styled-components';

import { COLORS, SHADOWS, SIZES } from '../../themes/light.theme';

import { TextField, Button } from '../../components';

export const Header = styled.header`
  background-color: ${COLORS.secondary};

  position: fixed;
  top: 0;
  left: 0;

  padding: 2rem 0;
  width: 100%;
`;

export const HeaderContainer = styled.div`
  max-width: ${SIZES.appWidth}px;
  margin: 0 auto;
`;

export const Center = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding-top: 5rem;
  width: 100%;
`;

export const Form = styled.form`
  background: ${COLORS.background};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: relative;
  border-radius: 1rem;
  box-shadow: ${SHADOWS.input};
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

export const List = styled.ul`
  display: flex;
  flex-direction: column;

  margin-top: 10rem;
  width: 100%;
  list-style: none;
`;

export const ListItem = styled.li<{ status: 'pending' | 'completed' }>`
  opacity: ${props => (props.status === 'completed' ? 0.5 : 1)};

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
`;
