import { Montserrat } from 'next/font/google';

export const montserrat = Montserrat({
  subsets: ['cyrillic', 'latin'],
  weight: ['500', '600', '900'],
  display: 'swap',
  variable: '--font-montserrat',
});
