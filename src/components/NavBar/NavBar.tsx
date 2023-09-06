import React from 'react';
import clsx from 'clsx';

import { NavLink } from '@/components/NavLink';

import styles from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

export const NavBar: React.FC<NavBarProps> = ({ className }) => {
  return (
    <nav className={clsx(styles.root, className)}>
      <NavLink href="https://nextjs.org/docs" external>
        Документація
      </NavLink>
      <NavLink href="/">Більше</NavLink>
    </nav>
  );
};
