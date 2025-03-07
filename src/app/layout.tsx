import './globals.css';

import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
  title: 'Lakhan Mandloi',
  description: 'Full-stack Developer'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="space-y-5 bg-gray-100 p-2 antialiased selection:bg-violet-300 lg:p-8 print:bg-white print:p-0">
        {children}
      </body>
      <GoogleAnalytics gaId="G-KFECZ9GST5" />
    </html>
  );
}
