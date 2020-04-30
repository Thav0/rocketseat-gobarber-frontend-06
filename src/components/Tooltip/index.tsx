import React from 'react';
import { Container } from './styles';

interface TooltipPro {
  title: string;
  className?: string;
}

const Tooltip: React.FC<TooltipPro> = ({ title, className, children }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
