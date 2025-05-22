'use client';

import { FluentProvider } from '@fluentui/react-components';
import { theme } from '@/styles/theme';

export function Providers({ children }: { children: React.ReactNode }) {
  return <FluentProvider theme={theme}>{children}</FluentProvider>;
} 