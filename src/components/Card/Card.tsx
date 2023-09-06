import React from 'react';
import clsx from 'clsx';

import styles from './Card.module.scss';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className, children }) => {
  return <div className={clsx(styles.root, className)}>{children}</div>;
};
