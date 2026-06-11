import './globals.css';

import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const siteUrl = 'https://lakhanmandloi.in';
const description =
  'Co-Founder at TAFT AI Technologies · Full Stack Developer with 10+ years of experience across frontend, backend, and DevOps.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Lakhan Mandloi — Full Stack Developer',
    template: '%s · Lakhan Mandloi'
  },
  description,
  alternates: {
    canonical: '/'
  },
  authors: [{ name: 'Lakhan Mandloi', url: siteUrl }],
  creator: 'Lakhan Mandloi',
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Lakhan Mandloi',
    title: 'Lakhan Mandloi — Full Stack Developer',
    description,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lakhan Mandloi — Full Stack Developer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lakhan Mandloi — Full Stack Developer',
    description,
    images: ['/images/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true
  }
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Lakhan Mandloi',
  url: siteUrl,
  image: `${siteUrl}/images/avatar.jpg`,
  jobTitle: 'Full Stack Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'TAFT AI Technologies',
    url: 'https://tafttech.ai'
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Indore',
    addressRegion: 'Madhya Pradesh',
    addressCountry: 'IN'
  },
  sameAs: [
    'https://github.com/lakhanmandloi',
    'https://www.linkedin.com/in/lakhanmandloi'
  ]
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
      <GoogleAnalytics gaId="G-KFECZ9GST5" />
    </html>
  );
}
