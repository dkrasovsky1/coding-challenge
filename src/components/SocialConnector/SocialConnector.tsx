import React from 'react';
import clsx from 'clsx';
import { Card } from '@/components/Card';
import { buildInstagramAuthUrl } from '@/utils';

import { SocialConnectorItem } from './SocialConnectorItem';

import styles from './SocialConnector.module.scss';

import InstagramRoundedIcon from '@/assets/icons/instagram-rounded.svg?inline';
import appConfig from '@/config/appConfig';

interface SocialConnectorProps {
  className?: string;
}

export const SocialConnector: React.FC<SocialConnectorProps> = ({
  className,
}) => {
  return (
    <Card className={clsx(styles.root, className)}>
      <SocialConnectorItem
        className={styles.item}
        icon={<InstagramRoundedIcon />}
        connectionLink={buildInstagramAuthUrl(
          appConfig.instagramClientId,
          appConfig.instagramRedirectUri,
        )}
        title="Instagram"
      />
    </Card>
  );
};
