import type { MetadataRoute } from 'next';

// Update when page content changes; the page itself rebuilds daily.
const CONTENT_UPDATED = '2026-10-11';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://lakhanmandloi.in',
      lastModified: CONTENT_UPDATED,
      changeFrequency: 'monthly',
      priority: 1
    }
  ];
}
