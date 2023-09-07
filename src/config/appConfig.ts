interface AppConfig {
  i18n: {
    locales: string[];
    defaultLocale: string;
  };
  appStore: {
    googlePlay: string;
    appleStore: string;
  };
  host: string;
  walletConnectProjectId: string;
  instagramRedirectUri: string;
  networkChainId: number;
  instagramClientId: string;
  instagramClientSecret: string;
}

const appConfig: AppConfig = {
  i18n: {
    locales: ['en', 'uk'],
    defaultLocale: 'uk',
  },
  appStore: {
    googlePlay: 'https://play.google.com',
    appleStore: 'https://www.apple.com',
  },
  host: process.env.NEXT_PUBLIC_HOST as string,
  walletConnectProjectId: process.env
    .NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID as string,
  networkChainId: 1,
  instagramRedirectUri: '/api/auth/callback',
  instagramClientId: process.env.NEXT_PUBLIC_INSTAGRAM_CLIENT_ID as string,
  instagramClientSecret: process.env.INSTAGRAM_CLIENT_SECRET as string,
};

export default appConfig;
