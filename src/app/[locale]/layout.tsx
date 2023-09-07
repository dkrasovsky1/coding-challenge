import '@/styles/globals.scss';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { montserrat } from '@/fonts';
import appConfig from '@/config/appConfig';

import { MainLayout } from '@/components/MainLayout';
import { WagmiProvider } from '@/providers/WagmiProvider';
import { AuthContextProvider } from '@/providers/AuthProvider';

export const metadata: Metadata = {
  title: 'Coding Callenge',
  description: 'Coding Callenge',
};

export function generateStaticParams() {
  return appConfig.i18n.locales.map((locale) => ({ locale }));
}

async function getMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  const messages = await getMessages(locale);

  return (
    <html lang={locale} className={montserrat.variable}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body>
          <WagmiProvider>
            <AuthContextProvider>
              <MainLayout>{children}</MainLayout>
            </AuthContextProvider>
          </WagmiProvider>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
