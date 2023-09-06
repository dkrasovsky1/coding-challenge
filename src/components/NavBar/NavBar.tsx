'use client';

import React from 'react';
import clsx from 'clsx';

import { NavLink } from '@/components/NavLink';

import styles from './NavBar.module.scss';
import { useTranslations } from 'next-intl';

interface NavBarProps {
  className?: string;
}

export const NavBar: React.FC<NavBarProps> = ({ className }) => {
  const t = useTranslations('Navigation');

  return (
    <nav className={clsx(styles.root, className)}>
      <NavLink href="https://nextjs.org/docs" external>
        {t('docs')}
      </NavLink>
      <NavLink href="/">{t('more')}</NavLink>
    </nav>
  );
};
