'use client';

import React from 'react';
import clsx from 'clsx';
import {
  Dropdown,
  DropdownList,
  DropdownToggle,
  DropdownItem,
} from '@/components/Dropdown';
import appConfig from '@/config/appConfig';

import styles from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: React.FC<LangSwitcherProps> = ({ className }) => {
  return (
    <Dropdown className={clsx(styles.root, className)}>
      <DropdownToggle>
        {(isOpen: boolean) => (isOpen ? 'close' : 'open')}
      </DropdownToggle>
      <DropdownList>
        {appConfig.i18n.locales.map((lang) => (
          <DropdownItem key={lang}>{lang}</DropdownItem>
        ))}
      </DropdownList>
    </Dropdown>
  );
};
