import './globals.css';

import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Inter } from 'next/font/google';

import { CAREER_START, yearsSince } from '@/utils/date';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const siteUrl = 'https://lakhanmandloi.in';
const title = 'Lakhan Mandloi — Co-founder, TAFT AI · Forward Deployed Engineer';
const description = `Co-founder of TAFT AI Technologies Private Limited · Forward Deployed Engineer with ${yearsSince(CAREER_START)}+ years shipping products to production across frontend, backend, and DevOps.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
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
    title,
    description,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: title
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title,
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
  jobTitle: 'Co-founder and Forward Deployed Engineer',
  worksFor: {
    '@type': 'Organization',
    name: 'TAFT AI Technologies Private Limited',
    alternateName: 'TAFT AI',
    url: 'https://www.tafttech.ai',
    sameAs: ['https://www.linkedin.com/company/taft-ai/']
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
