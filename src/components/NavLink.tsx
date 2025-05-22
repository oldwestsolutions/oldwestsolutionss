'use client';

import React from 'react';
import { makeStyles, tokens } from '@fluentui/react-components';
import Link from 'next/link';
import { ReactNode } from 'react';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    color: tokens.colorNeutralForeground1,
    textDecoration: 'none',
    borderRadius: tokens.borderRadiusMedium,
    transition: 'background-color 0.2s',
    ':hover': {
      backgroundColor: tokens.colorNeutralBackground3,
    },
  },
  active: {
    backgroundColor: tokens.colorBrandBackground,
    ':hover': {
      backgroundColor: tokens.colorBrandBackgroundHover,
    },
  },
});

interface NavLinkProps {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
}

export const NavLink = ({ href, children, icon }: NavLinkProps) => {
  const styles = useStyles();

  return (
    <Link href={href} className={styles.root}>
      {icon}
      {children}
    </Link>
  );
}; 