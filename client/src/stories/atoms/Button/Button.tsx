import React from 'react';
import styles from './button.module.scss';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={[
        styles['storybook-button'],
        styles[`storybook-button--${size}`],
        styles[primary ? 'storybook-button--primary' : 'storybook-button--secondary'],
      ].join(' ')}
      style={{ backgroundColor: `${backgroundColor}` }}
      {...props}
    >
      {label}
    </button>
  );
};
