import React from 'react';
import clsx from 'clsx';
import { AppStoreLink } from '@/components/AppStoreLink';
import appConfig from '@/config/appConfig';

import styles from './Footer.module.scss';

import AppleStoreIcon from '@/assets/icons/apple.svg?inline';
import GoogleStoreIcon from '@/assets/icons/google-play.svg?inline';

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={clsx(styles.root, className)}>
      <div className={styles.appLinks}>
        <AppStoreLink
          icon={<AppleStoreIcon />}
          title={'App Store'}
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
