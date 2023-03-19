import { fontSize } from '@/styles/constant/fontSize';
import { palette } from '@/styles/constant/palette';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { InputHTMLAttributes } from 'react';

export interface StyledInputPropsType extends InputHTMLAttributes<HTMLInputElement> {
  scale: 'micro' | 'small' | 'medium' | 'large';
  color: string;
  width: string;
}

const scale = {
  micro: css`
    padding: 12px 10px;
    font-size: ${fontSize.micro};
  `,
  small: css`
    padding: 14px 12px;
    font-size: ${fontSize.small};
  `,
  medium: css`
    padding: 18px 16px;
    font-size: ${fontSize.medium};
  `,
  large: css`
    padding: 22px 20px;
    font-size: ${fontSize.large};
  `,
};

export const StyledInput = styled.input<StyledInputPropsType>`
  color: ${palette.gray[700]};
  outline: none;
  border-radius: 3px;

  width: ${(props) => `${props.width}`};
  border: ${(props) => `1px solid ${props.color}`};
  ${(props) => scale[props.scale]};
`;
