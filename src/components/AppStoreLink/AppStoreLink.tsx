import React from 'react';
import clsx from 'clsx';

import styles from './AppStoreLink.module.scss';

interface AppStoreLinkProps {
  className?: string;
}

export const AppStoreLink: React.FC<AppStoreLinkProps> = ({ className }) => {
  return <div className={clsx(styles.root, className)}>AppStoreLink</div>;
};
