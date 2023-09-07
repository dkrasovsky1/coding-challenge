'use client';

import React from 'react';
import clsx from 'clsx';
import { useConnect } from 'wagmi';
import { useWeb3Modal } from '@web3modal/react';
import { Button } from '@/components/Button';
import appConfig from '@/config/appConfig';

import styles from './ConnectWallet.module.scss';

import MetamaskIcon from '@/assets/icons/metamask.svg?inline';

interface ConnectWalletProps {
  className?: string;
}

export const ConnectWallet: React.FC<ConnectWalletProps> = ({ className }) => {
  const { open: connect } = useWeb3Modal();
  const { connectors } = useConnect();

  const handleConnect = () => {
    connect({
      connector: connectors[0],
      chainId: appConfig.networkChainId,
    });
  };

  return (
    <div className={clsx(styles.root, className)}>
      <Button className={styles.connectBtn} onClick={handleConnect}>
        <MetamaskIcon />
        <span className={styles.connectBtnLabel}>METAMASK</span>
      </Button>
    </div>
  );
};
