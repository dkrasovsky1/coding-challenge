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
  return (
    <Card className={clsx(styles.root, className)}>
      <SocialConnectorItem
        className={styles.item}
        icon={<InstagramRoundedIcon />}
        connectionLink="https://www.instagram.com/"
        title="Instagram"
      />
    </Card>
  );
};
