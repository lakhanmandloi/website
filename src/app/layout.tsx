import './globals.css';

import type { Metadata } from 'next';

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
      <body className="space-y-5 bg-gray-100 p-8 antialiased selection:bg-violet-300 print:bg-white">
        {children}
      </body>
    </html>
  );
}
