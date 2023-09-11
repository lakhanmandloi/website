import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lakhan Mandloi',
  description: 'Full-stack Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 antialiased selection:bg-violet-300 print:bg-white">
        {children}
      </body>
    </html>
  );
}
