import React from 'react';
import clsx from 'clsx';
import { AppStoreLink } from '@/components/AppStoreLink';

import styles from './Footer.module.scss';

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={clsx(styles.root, className)}>
      <div className={styles.appLinks}>
        <AppStoreLink />
        <AppStoreLink />
      </div>
    </footer>
  );
};
