'use client';

import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

import { NavBar } from '@/components/NavBar';

import styles from './MobileMenu.module.scss';

interface MobileMenuProps {
  className?: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={clsx(styles.root, className)}>
      <button
        className={clsx(styles.toggleBtn, { [styles.open]: isOpen })}
        onClick={handleToggleMenu}
      >
        <span className={styles.line} />
        <span className={styles.line} />
        <span className={styles.line} />
      </button>
      <div className={clsx(styles.popup, { [styles.open]: isOpen })}>
        <button className={styles.closeBtn} onClick={handleCloseMenu}>
          <span className={styles.line} />
          <span className={styles.line} />
        </button>
        <NavBar className={styles.navBar} />
      </div>
    </div>
  );
};
