interface AppConfig {
  i18n: {
    locales: string[];
    defaultLocale: string;
  };
}

const appConfig: AppConfig = {
  i18n: {
    locales: ['en', 'uk'],
    defaultLocale: 'uk',
  },
};

export default appConfig;
