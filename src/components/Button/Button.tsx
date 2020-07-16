import React, { ButtonHTMLAttributes, ComponentType } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container, Label } from './Button.styled';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ComponentType<IconBaseProps>;
}

const Button: React.FC<Props> = ({ icon: Icon, children, ...rest }) => {
  return (
    <Container {...rest}>
      {Icon && <Icon size={22} />}
      <Label>{children}</Label>
    </Container>
  );
};

export default Button;
