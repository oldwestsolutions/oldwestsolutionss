import { Providers } from './providers';
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
} 