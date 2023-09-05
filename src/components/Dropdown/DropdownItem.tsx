import React from 'react';
import clsx from 'clsx';

import styles from './DropdownItem.module.scss';

interface DropdownItemProps {
  className?: string;
  children: React.ReactNode;
  href?: string;
  aligment?: 'center' | 'left';
  external?: boolean;
  icon?: React.ReactElement;
  onClick?: () => void;
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
  className,
  children,
  aligment = 'center',
  onClick,
  href,
  icon,
}) => {
  const handleClick = () => {
    onClick?.();
  };

  const classNames = clsx(styles.link, styles[aligment]);
  const content = (
    <>
      {icon && React.cloneElement(icon, { className: styles.icon })}
      {children}
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
