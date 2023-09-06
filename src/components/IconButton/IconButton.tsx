import React from 'react';
import clsx from 'clsx';

import styles from './IconButton.module.scss';

interface IconButtonProps {
  className?: string;
  icon: React.ReactElement;
  href?: string;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  external?: boolean;
  onClick?: () => void;
}

export const IconButton: React.FC<IconButtonProps> = ({
  className,
  icon,
  href,
  external,
  onClick,
}) => {
  const content = React.cloneElement(icon, {
    className: clsx(styles.icon, icon.props.className),
  });

  if (href) {
    return (
      <a
        className={clsx(styles.root, className)}
        href={href}
        target={external ? '_blank' : '_self'}
        rel={external ? 'noopener noreferrer' : ''}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={clsx(styles.root, className)} onClick={onClick}>
      {content}
    </button>
  );
};
