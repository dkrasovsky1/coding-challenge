import React from 'react';
import clsx from 'clsx';

import styles from './AppStoreLink.module.scss';

interface AppStoreLinkProps {
  className?: string;
  title: string;
  href: string;
  icon: React.ReactElement;
}

export const AppStoreLink: React.FC<AppStoreLinkProps> = ({
  className,
  title,
  href,
  icon,
}) => {
  return (
    <a
      className={clsx(styles.root, className)}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {React.cloneElement(icon, { className: styles.icon })}
      <div className={styles.left}>
        <span className={styles.caption}>Завантажити в</span>
        <span className={styles.title}>{title}</span>
      </div>
    </a>
  );
};
