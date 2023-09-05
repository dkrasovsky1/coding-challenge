import React from 'react';
import clsx from 'clsx';

import styles from './ConnectWallet.module.scss';

interface ConnectWalletProps {
  className?: string;
}

export const ConnectWallet: React.FC<ConnectWalletProps> = ({ className }) => {
  return <div className={clsx(styles.root, className)}>ConnectWallet</div>;
};
