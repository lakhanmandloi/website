import './globals.css';

import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Lakhan Mandloi',
  description: 'Co-Founder at TAFT AI Technologies · Full Stack Developer'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={inter.className}
    >
      <body className="space-y-5 bg-gray-100 p-2 antialiased selection:bg-violet-300 lg:p-8 print:bg-white print:p-0">
        {children}
      </body>
      <GoogleAnalytics gaId="G-KFECZ9GST5" />
    </html>
  );
}
