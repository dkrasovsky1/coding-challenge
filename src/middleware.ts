import createMiddleware from 'next-intl/middleware';
import appConfig from '@/config/appConfig';

export default createMiddleware({
  locales: appConfig.i18n.locales,
  defaultLocale: appConfig.i18n.defaultLocale,
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ['/((?!api|_next|code|.*\\..*).*)'],
};
