'use client';

import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './NavLink.module.scss';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  className,
  external = false,
}) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  if (external) {
    return (
      <Link
        href={href}
        className={clsx(styles.root, className)}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={clsx(styles.root, { [styles.active]: isActive }, className)}
    >
      {children}
    </Link>
  );
};
