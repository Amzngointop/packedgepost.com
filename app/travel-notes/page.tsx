import type { Metadata } from 'next'
import Link from 'next/link'
import { guides } from '@/data/guides'
import { articles } from '@/data/articles'

export const metadata: Metadata = {
  title: 'Road Notes — Travel Packing Guides | PackEdgePost',
  description: 'In-depth travel packing guides covering TSA rules, packing cubes, carry-on strategy, business travel, and more.',
}

export default function TravelNotesPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <nav className="flex items-center gap-2 font-body text-xs text-gray-500 mb-6">
        <Link href="/" className="hover:text-[#E8380D]">Home</Link>
        <span>/</span>
        <span>Road Notes</span>
      </nav>

      <span className="block font-heading text-[11px] uppercase tracking-[0.15em] text-[#E8380D] mb-2">Road Notes</span>
      <h1 className="font-heading text-5xl font-bold uppercase text-gray-900 dark:text-gray-100 tracking-tight mb-4">
        Travel Packing Guides
      </h1>
      <p className="font-body text-base text-gray-600 dark:text-gray-500 mb-12 max-w-2xl">
        Long-form guides covering every aspect of travel preparation — from TSA rules and packing systems to business travel and security.
      </p>

      {/* Guides grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {guides.map(guide => (
          <Link key={guide.slug} href={`/guides/${guide.slug}`} className="group block">
            <div className="relative rounded-sm overflow-hidden mb-4">
              <img
                src={guide.coverImage}
                alt={guide.title}
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-[10px] font-heading uppercase tracking-widest text-[#E8380D]">{guide.category}</span>
              </div>
            </div>
            <h2 className="font-heading text-lg font-bold uppercase text-gray-900 dark:text-gray-100 leading-tight mb-2 group-hover:text-[#E8380D] transition-colors">
              {guide.title}
            </h2>
            <p className="font-body text-sm text-gray-500 dark:text-gray-500 leading-relaxed mb-2">{guide.excerpt}</p>
            <div className="flex items-center gap-3 font-body text-xs text-gray-500">
              <span>{guide.readTime} min read</span>
              <span>·</span>
              <span>{guide.updatedDate}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Best Picks cross-links */}
      <div className="border-t border-dashed border-[#d4d4d4] dark:border-gray-700 pt-12">
        <h2 className="font-heading text-3xl font-bold uppercase text-gray-900 dark:text-gray-100 tracking-tight mb-6">
          Best Picks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {articles.map(article => (
            <Link
              key={article.slug}
              href={`/best/${article.slug}`}
              className="block p-4 border border-[#e5e5e5] dark:border-gray-800 rounded-sm hover:border-[#E8380D] transition-colors group"
            >
              <p className="font-heading text-sm font-bold uppercase text-gray-900 dark:text-gray-100 group-hover:text-[#E8380D] transition-colors leading-tight mb-1">
                {article.title}
              </p>
              <p className="font-body text-xs text-gray-500">{article.readTime} min · {article.updatedDate}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
