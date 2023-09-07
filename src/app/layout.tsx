import '@/styles/globals.scss';
import type { Metadata } from 'next';
import { montserrat } from '@/fonts';

export const metadata: Metadata = {
  title: 'Coding Callenge',
  description: 'Coding Callenge',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className={montserrat.variable}>
      <body>{children}</body>
    </html>
  );
}
