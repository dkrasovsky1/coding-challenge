import React from 'react';
import clsx from 'clsx';

import styles from './DropdownItem.module.scss';

interface DropdownItemProps {
  className?: string;
  children: React.ReactNode;
  href?: string;
  aligment?: 'center' | 'left';
  external?: boolean;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  onClick?: () => void;
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
  className,
  children,
  aligment = 'center',
  onClick,
  href,
  leftIcon,
  rightIcon,
}) => {
  const handleClick = () => {
    onClick?.();
  };

  const classNames = clsx(styles.btn, styles[aligment]);
  const content = (
    <>
      {leftIcon && React.cloneElement(leftIcon, { className: styles.icon })}
      {children}
      {rightIcon && React.cloneElement(rightIcon, { className: styles.icon })}
    </>
  );

  return (
    <li className={clsx(styles.root, className)}>
      {href ? (
        <a className={classNames} href={href} onClick={handleClick}>
          {content}
        </a>
      ) : (
        <button className={classNames} onClick={handleClick}>
          {content}
        </button>
      )}
    </li>
  );
};
