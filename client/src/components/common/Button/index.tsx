import type { ReactNode } from 'react';
import { StyledButton, StyledButtonPropsType } from './styles';

interface ButtonPropsType extends StyledButtonPropsType {
  children: ReactNode;
}

export function Button({ children, ...props }: ButtonPropsType) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

export default Button;
