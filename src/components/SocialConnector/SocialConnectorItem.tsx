import React from 'react';
import clsx from 'clsx';

import styles from './SocialConnectorItem.module.scss';

interface SocialConnectorItemProps {
  className?: string;
  icon: React.ReactElement;
  title: string;
  connectionLink: string;
  account?: string;
  accountLink?: string;
}

export const SocialConnectorItem: React.FC<SocialConnectorItemProps> = ({
  className,
  icon,
  title,
  connectionLink,
  account,
  accountLink,
}) => {
  return (
    <div className={clsx(styles.root, className)}>
      {React.cloneElement(icon, {
        className: clsx(styles.icon, icon.props.className),
      })}
      <span className={styles.title}>{title}</span>
      {!account && (
        <a href={connectionLink} className={styles.link} target="_blank">
          Connect
        </a>
      )}
      {account && (
        <a href={accountLink} className={styles.link} target="_blank">
          {account}
        </a>
      )}
    </div>
  );
};
