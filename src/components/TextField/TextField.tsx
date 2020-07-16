import React, { InputHTMLAttributes } from 'react';

import { Container, Input } from './TextField.styled';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const TextField: React.FC<Props> = ({ className, placeholder, ...rest }) => {
  return (
    <Container className={className}>
      <Input placeholder={placeholder} {...rest} />
    </Container>
  );
};

export default TextField;
