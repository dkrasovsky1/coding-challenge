'use client';

import React from 'react';
import clsx from 'clsx';

import { useTranslations } from 'next-intl';

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
  const t = useTranslations('AppStore');

  return (
    <a
      className={clsx(styles.root, className)}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {React.cloneElement(icon, { className: styles.icon })}
      <div className={styles.left}>
        <span className={styles.caption}>{t('download')}</span>
        <span className={styles.title}>{title}</span>
      </div>
    </a>
  );
};
