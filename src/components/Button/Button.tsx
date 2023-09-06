import React, { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './Button.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  variant = 'primary',
  size = 'medium',
  leftIcon,
  rightIcon,
  ...restProps
}) => {
  const classNames = clsx(
    styles.root,
    className,
    styles[variant],
    styles[size],
  );

  return (
    <button className={classNames} {...restProps}>
      {leftIcon && React.cloneElement(leftIcon, { className: styles.icon })}
      {children}
      {rightIcon && React.cloneElement(rightIcon, { className: styles.icon })}
    </button>
  );
};
