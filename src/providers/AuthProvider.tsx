'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useRef,
} from 'react';
import { useAccount, useSignMessage, useNetwork, useDisconnect } from 'wagmi';
import { SiweMessage } from 'siwe';
import { AuthService } from '@/services/auth';
import { User } from '@/types/user';

type AuthContextValue = {
  isLoading: boolean;
  isAuth: boolean;
  user: User | null;
  login: () => Promise<void>;
  logout: () => Promise<void>;
};

const initialContextValue: AuthContextValue = {
  isLoading: false,
  isAuth: false,
  user: null,
  login: () => {
    throw new Error('Method login is not implemented!');
  },
  logout: () => {
    throw new Error('Method login is not implemented!');
  },
};

const AuthContext = createContext<AuthContextValue>(initialContextValue);

type AuthContextProviderProps = {
  children: React.ReactNode;
};

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const { error: signError, signMessageAsync } = useSignMessage();
  const { disconnect } = useDisconnect();
  const { address } = useAccount();
  const { chain } = useNetwork();

  const [isLoading, setIsLoading] = useState(true);

  const previousAddress = useRef(address);

  const fetchCurrentUser = useCallback(async () => {
    try {
      setCurrentUser(null);
    } catch (err) {
      console.error(err);
      setCurrentUser(null);
    } finally {
      setIsLoading(false);
    }
  }, [setCurrentUser]);

  const handleLogin = useCallback(async () => {
    try {
      const authService = new AuthService();
      const nonce = await authService.getNonce();

      const message = new SiweMessage({
        domain: window.location.host,
        address,
        statement: 'Sign in with Ethereum to the app.',
        uri: window.location.origin,
        version: '1',
        chainId: chain?.id,
        nonce,
      }).prepareMessage();

      const signature = await signMessageAsync({ message });

      const credentials = await authService.login(message, signature);

      console.log(credentials);

      await fetchCurrentUser();
    } catch (err) {
      disconnect();
      setCurrentUser(null);
      console.error(err);
    }
  }, [address, chain?.id, disconnect, fetchCurrentUser, signMessageAsync]);

  const handleLogout = useCallback(async () => {
    setCurrentUser(null);
  }, [setCurrentUser]);

  useEffect(() => {
    if (previousAddress.current !== address) {
      previousAddress.current = address;

      if (address) {
        handleLogin();
      }
    }
  }, [address, handleLogin]);

  useEffect(() => {
    if (signError) {
      disconnect();
    }
  }, [disconnect, signError]);

  const value = React.useMemo(
    (): AuthContextValue => ({
      isLoading,
      user: currentUser,
      isAuth: !!currentUser,
      login: handleLogin,
      logout: handleLogout,
    }),
    [currentUser, handleLogin, handleLogout, isLoading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuthContext = (): AuthContextValue => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuthContext must be used within a AuthContextProvider');
  }

  return context;
};
