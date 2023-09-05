'use client';

import React, { useContext, Children, cloneElement } from 'react';
import cn from 'clsx';

import { DropdownConext } from './Dropdown';

import styles from './DropdownList.module.scss';

interface DropdownListProps {
  className?: string;
  popoverClassName?: string;
  aligment?: 'center' | 'left';
  children: React.ReactElement[];
  variant?: 'top-down';
}

export const DropdownList: React.FC<DropdownListProps> = ({
  className,
  popoverClassName,
  aligment = 'left',
  children,
  variant = 'top-down',
}) => {
  const { isOpen } = useContext(DropdownConext);

  return (
    <div
      className={cn(
        styles.popover,
        styles[variant],
        className,
        popoverClassName,
        {
          [styles.open]: isOpen,
          [styles.close]: !isOpen,
        },
      )}
    >
      <ul className={styles.list}>
        {Children.map(children, (child) =>
          cloneElement(child, {
            aligment: child.props.aligment || aligment,
          }),
        )}
      </ul>
    </div>
  );
};
