import React from 'react';
import { makeStyles, tokens } from '@fluentui/react-components';
import { NavLink } from './NavLink';
import { Home24Regular, Cloud24Regular, Settings24Regular, Person24Regular } from '@fluentui/react-icons';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: tokens.colorNeutralBackground1,
  },
  header: {
    padding: '1rem',
    backgroundColor: tokens.colorNeutralBackground2,
    borderBottom: `1px solid ${tokens.colorNeutralStroke1}`,
  },
  nav: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
  },
  main: {
    flex: 1,
    padding: '2rem',
  },
  footer: {
    padding: '1rem',
    backgroundColor: tokens.colorNeutralBackground2,
    borderTop: `1px solid ${tokens.colorNeutralStroke1}`,
    textAlign: 'center',
    color: tokens.colorNeutralForeground2,
  },
});

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <NavLink href="/" icon={<Home24Regular />}>Home</NavLink>
          <NavLink href="/vms" icon={<Cloud24Regular />}>Virtual Machines</NavLink>
          <NavLink href="/settings" icon={<Settings24Regular />}>Settings</NavLink>
          <NavLink href="/profile" icon={<Person24Regular />}>Profile</NavLink>
        </nav>
      </header>
      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>
        <p>© 2024 VMware Rental Service. All rights reserved.</p>
      </footer>
    </div>
  );
}; 