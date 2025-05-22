'use client';

import { FluentProvider } from '@fluentui/react-components';
import { theme } from '@/styles/theme';
import './globals.css';

export const metadata = {
  title: 'VMware Rental Service',
  description: 'Rent high-performance virtual machines instantly',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <FluentProvider theme={theme}>
          {children}
        </FluentProvider>
      </body>
    </html>
  );
} 