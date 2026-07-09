import { MetadataRoute } from 'next'
import { articles } from '@/data/articles'
import { guides } from '@/data/guides'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://packedgepost.com'

  const staticPages = [
    '', '/travel-notes', '/pack-vocab', '/our-story', '/reach-us',
    '/privacy-policy', '/terms', '/affiliate-disclosure',
  ].map(path => ({
    url: `${base}${path}`,
    lastModified: new Date('2026-01-01'),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.7,
  }))

  const articlePages = articles.map(a => ({
    url: `${base}/best/${a.slug}`,
    lastModified: new Date('2026-01-01'),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  const guidePages = guides.map(g => ({
    url: `${base}/guides/${g.slug}`,
    lastModified: new Date('2026-01-01'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...articlePages, ...guidePages]
}
