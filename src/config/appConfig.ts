interface AppConfig {
  i18n: {
    locales: string[];
    defaultLocale: string;
  };
  appStore: {
    googlePlay: string;
    appleStore: string;
  };
  walletConnectProjectId: string;
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
  walletConnectProjectId: '363afc2d92992f000c29e4845068eecc',
  networkChainId: 1,
  instagramClientId: process.env.INSTAGRAM_CLIENT_ID as string,
  instagramClientSecret: process.env.INSTAGRAM_CLIENT_SECRET as string,
};

export default appConfig;
