import React from 'react';
import styles from './button.module.scss';

interface ButtonProps {
  type?: 'button' | 'submit';
  color?: 'primary' | 'secondary' | 'black' | 'success' | 'warning' | 'danger';
  style?: 'outlined' | 'inline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  shape?: 'squre' | 'circle';
  disabled?: boolean;
  label?: string;
  onClick?: () => void;
}

export const Button = ({
  type = 'button',
  color = 'primary',
  style = 'inline',
  size = 'small',
  shape = 'circle',
  disabled = false,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={[
        styles['button'],
        styles[`button-color--${color}`],
        styles[`button-style--${style}`],
        styles[`button-size--${size}`],
        styles[`button-shape--${shape}`],
      ].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};
