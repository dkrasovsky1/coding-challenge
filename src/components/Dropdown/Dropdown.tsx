'use client';

import React, { useCallback, useMemo, useRef, useState } from 'react';
import cn from 'clsx';

import { useOnClickOutside } from '@/hooks/useOnClickOutside';

import styles from './Dropdown.module.scss';

interface DropdownProps {
  className?: string;
  trigger?: 'click' | 'hover';
  children: React.ReactNode[];
  onToggle?: (isOpne: boolean) => void;
}

interface DropdownConextProps {
  isOpen: boolean;
  trigger: 'click' | 'hover';
  toggle: (isOpen: boolean) => void;
}

export const DropdownConext = React.createContext<DropdownConextProps>({
  isOpen: false,
  trigger: 'click',
  toggle: () => {
    throw new Error('DropdownConext: method toggle is not implemented!');
  },
});

export const Dropdown: React.FC<DropdownProps> = ({
  className,
  trigger = 'click',
  children,
  onToggle,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = useCallback(
    (newIsOpen: boolean) => {
      setIsOpen(newIsOpen);
      onToggle?.(newIsOpen);
    },
    [onToggle],
  );

  useOnClickOutside([dropdownRef], () => handleToggle(false));

  const value = useMemo(
    () => ({ isOpen, trigger, toggle: handleToggle }),
    [isOpen, trigger, handleToggle],
  );

  const handleMouseLeave = () => {
    if (trigger === 'hover') {
      handleToggle(false);
    }
  };

  return (
    <DropdownConext.Provider value={value}>
      <div
        ref={dropdownRef}
        className={cn(styles.root, className)}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
    </DropdownConext.Provider>
  );
};
