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
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next-intl/client';
import { useTransition } from 'react';

import ArrowIcon from '@/assets/icons/arrow.svg?inline';
import UkFlag from '@/assets/flags/uk.svg?inline';
import EnFlag from '@/assets/flags/en.svg?inline';

const flagIcons: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  uk: UkFlag,
  en: EnFlag,
};

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: React.FC<LangSwitcherProps> = ({ className }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(nextLocale: string) {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <Dropdown className={clsx(styles.root, className)}>
      <DropdownToggle className={styles.toggle}>
        {(isOpen: boolean) => {
          const LangIcon = flagIcons[locale];

          return (
            <>
              <LangIcon className={styles.flagIcon} />
              {locale}
              <ArrowIcon
                className={clsx(styles.arrowIcon, { [styles.isOpen]: isOpen })}
              />
            </>
          );
        }}
      </DropdownToggle>
      <DropdownList className={styles.list}>
        {appConfig.i18n.locales.map((lang) => {
          const LangIcon = flagIcons[lang];

          return (
            <DropdownItem
              className={styles.item}
              key={lang}
              leftIcon={<LangIcon className={styles.flagIcon} />}
              onClick={() => onSelectChange(lang)}
            >
              {lang}
            </DropdownItem>
          );
        })}
      </DropdownList>
    </Dropdown>
  );
};
