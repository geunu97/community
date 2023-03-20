import { fontSize } from '@/styles/constant/fontSize';
import { palette } from '@/styles/constant/palette';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ButtonHTMLAttributes } from 'react';

export interface StyledButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  scale: 'small' | 'medium' | 'large';
  layout: 'background' | 'text';
  color: string;
}

const scale = {
  small: css`
    padding: 0.7rem 2rem;
    font-size: ${fontSize.small};
  `,
  medium: css`
    padding: 1rem 2rem;
    font-size: ${fontSize.medium};
  `,
  large: css`
    padding: 1.5rem 3rem;
    font-size: ${fontSize.large};
  `,
};

const layout = {
  background: (color: string) => css`
    background-color: ${color};
    color: white;
  `,
  text: (color: string) => css`
    background-color: inherit;
    color: ${color};
    padding: 0;
  `,
};

export const StyledButton = styled.button<StyledButtonPropsType>`
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 3px;

  :disabled {
    color: ${palette.gray[200]};
    cursor: not-allowed;
  }

  ${(props) => scale[props.scale]}
  ${(props) => layout[props.layout](props.color)}
`;
