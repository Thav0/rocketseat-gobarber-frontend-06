import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { InputStyle } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => (
  <InputStyle>
    {Icon && <Icon size={20} />}
    <input {...rest} />
  </InputStyle>
);

export default Input;
