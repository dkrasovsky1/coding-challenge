interface AppConfig {
  i18n: {
    locales: string[];
    defaultLocale: string;
  };
  appStore: {
    googlePlay: string;
    appleStore: string;
  };
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
};

export default appConfig;
