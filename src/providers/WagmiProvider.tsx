'use client';

import React from 'react';
import { WagmiConfig } from 'wagmi';
import wagmiConfig, { ethereumClient } from '@/config/wagmiConfig';
import appConfig from '@/config/appConfig';
import { Web3Modal } from '@web3modal/react';
import { WEB3_MODAL_VARIABLES } from '@/constants/web3-wallet';

interface WagmiProviderProps {
  children: React.ReactNode;
}

export const WagmiProvider: React.FC<WagmiProviderProps> = ({ children }) => (
  <>
    <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
    <Web3Modal
      projectId={appConfig.walletConnectProjectId}
      ethereumClient={ethereumClient}
      themeVariables={WEB3_MODAL_VARIABLES}
      themeMode="dark"
      explorerRecommendedWalletIds={[
        'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96',
      ]}
      explorerExcludedWalletIds="ALL"
    />
  </>
);
