import React from 'react';
import clsx from 'clsx';
import { AppStoreLink } from '@/components/AppStoreLink';

import styles from './Footer.module.scss';

import AppleStoreIcon from '@/assets/icons/apple.svg?inline';
import GoogleStoreIcon from '@/assets/icons/google-play.svg?inline';
import appConfig from '@/config/appConfig';

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={clsx(styles.root, className)}>
      <div className={styles.appLinks}>
        <AppStoreLink
          icon={<AppleStoreIcon />}
          title="App Store"
          href={appConfig.appStore.appleStore}
        />
        <AppStoreLink
          icon={<GoogleStoreIcon />}
          title="Google Play"
          href={appConfig.appStore.googlePlay}
        />
      </div>
    </footer>
  );
};
