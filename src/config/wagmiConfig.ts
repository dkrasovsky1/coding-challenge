import { configureChains, createConfig } from 'wagmi';
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from '@web3modal/ethereum';
import { mainnet } from 'wagmi/chains';
import appConfig from './appConfig';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [w3mProvider({ projectId: appConfig.walletConnectProjectId })],
);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({
    projectId: appConfig.walletConnectProjectId,
    chains,
  }),
  publicClient,
  webSocketPublicClient,
});

export const ethereumClient = new EthereumClient(wagmiConfig, chains);

export default wagmiConfig;
