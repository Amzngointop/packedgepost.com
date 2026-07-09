import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { guides } from '@/data/guides'
import { RelatedSidebar } from '@/components/RelatedSidebar'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return guides.map(g => ({ slug: g.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const guide = guides.find(g => g.slug === slug)
  if (!guide) return {}
  return {
    title: `${guide.title} | PackEdgePost`,
    description: guide.excerpt,
    openGraph: {
      title: guide.title,
      description: guide.excerpt,
      images: [guide.coverImage],
    },
  }
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params
  const guide = guides.find(g => g.slug === slug)
  if (!guide) notFound()

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex gap-8">
      {/* Main content */}
      <article className="flex-1 min-w-0">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 font-body text-xs text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#E8380D] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/travel-notes" className="hover:text-[#E8380D] transition-colors">Road Notes</Link>
          <span>/</span>
          <span className="text-gray-600 dark:text-gray-400 truncate">{guide.title}</span>
        </nav>

        {/* Cover image */}
        <div className="relative rounded-sm overflow-hidden mb-8">
          <img
            src={guide.coverImage}
            alt={guide.title}
            className="w-full h-auto block"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 p-6">
            <span className="inline-block font-heading text-[11px] uppercase tracking-widest text-white bg-[#E8380D] px-3 py-1 mb-3">
              {guide.category}
            </span>
          </div>
        </div>

        <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase text-gray-900 dark:text-gray-100 tracking-tight leading-tight mb-4">
          {guide.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 font-body text-xs text-gray-500 mb-6">
          <span>Updated {guide.updatedDate}</span>
          <span>·</span>
          <span>{guide.readTime} min read</span>
          <span>·</span>
          <span>{guide.content.length} sections</span>
        </div>

        <p className="font-body text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-10 border-l-4 border-[#E8380D] pl-5">
          {guide.excerpt}
        </p>

        {/* In-page TOC */}
        <div className="bg-gray-50 dark:bg-gray-900 border border-[#e5e5e5] dark:border-gray-800 rounded-sm p-5 mb-10">
          <p className="font-heading text-[11px] uppercase tracking-wider text-gray-500 dark:text-gray-500 mb-3">In This Guide</p>
          <ol className="space-y-1.5">
            {guide.content.map((section, i) => (
              <li key={i}>
                <a
                  href={`#section-${i}`}
                  className="font-body text-sm text-gray-600 dark:text-gray-400 hover:text-[#E8380D] transition-colors"
                >
                  {i + 1}. {section.heading}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Article body */}
        <div className="space-y-10">
          {guide.content.map((section, i) => (
            <div key={i} id={`section-${i}`}>
              <h2 className="font-heading text-2xl font-bold uppercase text-gray-900 dark:text-gray-100 tracking-tight mb-4">
                {section.heading}
              </h2>
              <p className="font-body text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                {section.body}
              </p>
              {i === Math.floor(guide.content.length / 2) && (
                <div className="my-8 border-l-4 border-[#E8380D] bg-red-50 dark:bg-gray-900 pl-4 py-3 pr-4">
                  <p className="font-heading text-[11px] uppercase tracking-wider text-[#E8380D] mb-1">Pack Smart</p>
                  <p className="font-body text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    The difference between a good trip and a great one often comes down to how organized your gear is before departure. The right accessories remove friction at every stage of travel — from security to hotel check-in to unpacking.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Related articles */}
        <div className="mt-12 bg-gray-50 dark:bg-gray-900 border border-[#e5e5e5] dark:border-gray-800 rounded-sm p-6">
          <h3 className="font-heading text-base font-bold uppercase text-gray-900 dark:text-gray-100 tracking-wide mb-4">Related Reviews</h3>
          <ul className="space-y-2">
            {[
              { slug: 'travel-bottles', title: 'Best Travel Bottles for Toiletries — TSA-Approved Picks (2026)' },
              { slug: 'hanging-toiletry-bags', title: 'Best Hanging Toiletry Bags for Travel (2026)' },
              { slug: 'travel-backpacks', title: 'Best Travel Backpacks — Airline Approved & Carry-On Ready (2026)' },
            ].map(item => (
              <li key={item.slug}>
                <Link href={`/best/${item.slug}`} className="font-body text-sm text-[#E8380D] hover:underline">
                  {item.title} →
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex gap-4 flex-wrap">
          <Link
            href="/travel-notes"
            className="font-heading text-[12px] uppercase tracking-wider text-gray-500 hover:text-[#E8380D] transition-colors"
          >
            ← All Road Notes
          </Link>
        </div>
      </article>

      {/* Right sidebar */}
      <RelatedSidebar currentSlug={slug} />
    </div>
  )
}
