import type { ReactNode } from 'react';
import { StyledButton, StyledButtonPropsType } from './styles';

interface ButtonPropsType extends StyledButtonPropsType {
  children: ReactNode;
}

export function Button({ children, size, layout, color, ...props }: ButtonPropsType) {
  return (
    <StyledButton size={size} layout={layout} color={color} {...props}>
      {children}
    </StyledButton>
  );
}

export default Button;
