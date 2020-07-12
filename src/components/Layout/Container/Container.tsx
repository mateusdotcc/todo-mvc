import React from 'react';

import { Container as Wrapper } from './Container.styled';

interface Props {}

const Container: React.FC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;
