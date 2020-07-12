import styled from 'styled-components';

import { TextField } from '../../components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 300px;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  padding: 20px 0;
  max-width: inherit;
  width: inherit;
  background-color: #fff;
`;

export const Input = styled(TextField)`
  flex: 1;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;

  margin-top: 50px;
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
