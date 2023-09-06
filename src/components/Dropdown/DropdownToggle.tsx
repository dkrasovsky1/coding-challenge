'use client';

import React, { useContext } from 'react';
import { DropdownConext } from './Dropdown';
import { Button, ButtonProps } from '@/components/Button';

interface DropdownToggleProps
  extends Omit<
    ButtonProps,
    'children' | 'onClick' | 'onKeyDown' | 'onMouseEnter'
  > {
  children: (isOpen: boolean) => React.ReactNode;
}

export const DropdownToggle = ({
  children,
  ...restProps
}: DropdownToggleProps) => {
  const { trigger, isOpen, toggle } = useContext(DropdownConext);

  const handleClick = () => {
    if (trigger === 'click') {
      toggle(!isOpen);
    }
  };

  const handleMouseEnter = () => {
    if (trigger === 'hover') {
      toggle(true);
    }
  };

  return (
    <Button
      onKeyDown={handleClick}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      {...restProps}
    >
      {children(isOpen)}
    </Button>
  );
};
