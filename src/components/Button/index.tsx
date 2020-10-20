import React, { ButtonHTMLAttributes } from 'react';

import { ButtonStyle } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <ButtonStyle type="button" {...rest}>
    {loading ? 'Enviando...' : children}
  </ButtonStyle>
);

export default Button;
