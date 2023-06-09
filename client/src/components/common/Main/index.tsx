import type { ReactNode } from 'react';
import { StyledMain, StyledMainPropsType } from './styles';

interface MainPropsType extends StyledMainPropsType {
  children: ReactNode;
}

export default function Main({ children, ...props }: MainPropsType) {
  return <StyledMain {...props}>{children}</StyledMain>;
}
