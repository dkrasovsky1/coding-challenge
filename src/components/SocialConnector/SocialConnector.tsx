import React from 'react';
import clsx from 'clsx';
import { Card } from '@/components/Card';

import { SocialConnectorItem } from './SocialConnectorItem';

import styles from './SocialConnector.module.scss';

import InstagramRoundedIcon from '@/assets/icons/instagram-rounded.svg?inline';

interface SocialConnectorProps {
  className?: string;
}

export const SocialConnector: React.FC<SocialConnectorProps> = ({
  className,
}) => {
  // TODO: move to utils and use env variables
  const authUrl = `https://api.instagram.com/oauth/authorize?client_id=816083850029682&redirect_uri=https://9d2b-46-33-39-37.ngrok-free.app/code&scope=user_profile,user_media,instagram_basic,instagram_content_publish&response_type=code`;

  return (
    <Card className={clsx(styles.root, className)}>
      <SocialConnectorItem
        className={styles.item}
        icon={<InstagramRoundedIcon />}
        connectionLink={authUrl}
        title="Instagram"
      />
    </Card>
  );
};
