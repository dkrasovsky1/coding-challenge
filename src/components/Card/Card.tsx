import React from 'react';
import clsx from 'clsx';

import styles from './Card.module.scss';

interface CardProps {
  className?: string;
}

export const Card: React.FC<CardProps> = ({ className }) => {
  return <div className={clsx(styles.root, className)}>Card</div>;
};
