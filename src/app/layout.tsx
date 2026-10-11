import './globals.css';

import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Inter } from 'next/font/google';

import ClickTracker from '@/components/ClickTracker';
import { CAREER_START, yearsSince } from '@/utils/date';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const siteUrl = 'https://lakhanmandloi.in';
const title =
  'Lakhan Mandloi — Co-founder, TAFT AI · Forward Deployed Engineer';
const years = yearsSince(CAREER_START);
const description = `Lakhan Mandloi is co-founder of TAFT AI and a forward deployed engineer in Indore, India: ${years}+ years shipping AI, full-stack and DevOps work to production.`;

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

// ProfilePage + Person graph: helps search engines and LLMs identify who this page is about.
const personId = `${siteUrl}/#person`;
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfilePage',
      '@id': `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: title,
      description,
      inLanguage: 'en',
      mainEntity: { '@id': personId }
    },
    {
      '@type': 'Person',
      '@id': personId,
      name: 'Lakhan Mandloi',
      url: siteUrl,
      image: `${siteUrl}/images/avatar.jpg`,
      email: 'mailto:namaste@lakhanmandloi.in',
      description,
      jobTitle: 'Co-founder and Forward Deployed Engineer',
      worksFor: [
        {
          '@type': 'Organization',
          name: 'TAFT AI Technologies Private Limited',
          alternateName: 'TAFT AI',
          url: 'https://www.tafttech.ai',
          sameAs: ['https://www.linkedin.com/company/taft-ai/']
        },
        {
          '@type': 'Organization',
          name: 'REVIVE Healthcare Group',
          url: 'https://www.revivehealthcaregroup.com/'
        }
      ],
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Malwa Institute of Technology'
      },
      knowsAbout: [
        'Forward deployed engineering',
        'AI engineering',
        'AI agents',
        'Retrieval-augmented generation (RAG)',
        'LLM evaluation',
        'Full-stack development',
        'DevOps',
        'Next.js',
        'React',
        'TypeScript',
        'Node.js',
        'PostgreSQL',
        'Kubernetes',
        'Docker',
        'Terraform',
        'AWS',
        'Microsoft Azure'
      ],
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
    }
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <ClickTracker />
      </body>
      <GoogleAnalytics gaId="G-KFECZ9GST5" />
    </html>
  );
}
