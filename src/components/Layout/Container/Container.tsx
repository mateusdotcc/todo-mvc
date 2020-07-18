import React from 'react';

import { Container as Wrapper } from './Container.styled';

const Container: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;
