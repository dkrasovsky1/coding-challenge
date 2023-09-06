import React from 'react';
import clsx from 'clsx';
import { Button } from '@/components/Button';

import styles from './ConnectWallet.module.scss';

import MetamaskIcon from '@/assets/icons/metamask.svg?inline';

interface ConnectWalletProps {
  className?: string;
}

export const ConnectWallet: React.FC<ConnectWalletProps> = ({ className }) => {
  return (
    <div className={clsx(styles.root, className)}>
      <Button className={styles.connectBtn}>
        <MetamaskIcon />
      </Button>
    </div>
  );
};
