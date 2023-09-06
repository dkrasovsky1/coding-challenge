import React from 'react';
import clsx from 'clsx';

import styles from './Container.module.scss';

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  className,
  children,
}) => {
  return <div className={clsx(styles.root, className)}>{children}</div>;
};
