import React from 'react';
import clsx from 'clsx';

import styles from './Header.module.scss';
import { LangSwitcher } from '../LangSwitcher';
import { ConnectWallet } from '../ConnectWallet';

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={clsx(styles.root, className)}>
      <LangSwitcher />
      <ConnectWallet />
    </header>
  );
};
