'use client';

import { Layout } from '@/components/Layout';
import { Title3 } from '@fluentui/react-components';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Layout>
      <Title3>404 - Page Not Found</Title3>
      <p>The page you are looking for does not exist.</p>
      <Link href="/">Return to Home</Link>
    </Layout>
  );
} 