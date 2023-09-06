import React from 'react';
import clsx from 'clsx';

import { LangSwitcher } from '@/components/LangSwitcher';
import { ConnectWallet } from '@/components/ConnectWallet';
import { NavBar } from '@/components/NavBar';
import { Container } from '@/components/Container';
import { MobileMenu } from '@/components/MobileMenu';

import styles from './Header.module.scss';

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={clsx(styles.root, className)}>
      <Container className={styles.container}>
        <NavBar className={styles.desktopNavBar} />
        <LangSwitcher className={styles.langSwitcher} />
        <ConnectWallet className={styles.connectWallet} />
        <MobileMenu className={styles.mobileMenu} />
      </Container>
    </header>
  );
};
