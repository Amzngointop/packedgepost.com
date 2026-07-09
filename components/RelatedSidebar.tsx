import Link from 'next/link'
import { guides } from '@/data/guides'

interface RelatedSidebarProps {
  currentSlug?: string
}

export function RelatedSidebar({ currentSlug }: RelatedSidebarProps) {
  const others = guides.filter(g => g.slug !== currentSlug)

  return (
    <aside className="hidden xl:block w-56 flex-shrink-0">
      <div className="sticky top-20">
        <p className="font-heading text-[11px] uppercase tracking-[0.15em] text-[#E8380D] mb-4">
          More Guides
        </p>
        <ul className="space-y-3">
          {others.map(g => (
            <li key={g.slug}>
              <Link
                href={`/guides/${g.slug}`}
                className="font-body text-sm text-gray-600 dark:text-gray-400 hover:text-[#E8380D] dark:hover:text-orange-400 leading-snug block transition-colors"
              >
                {g.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-6 pt-6 border-t border-dashed border-[#d4d4d4] dark:border-gray-700">
          <Link
            href="/travel-notes"
            className="font-heading text-[11px] uppercase tracking-wider text-[#E8380D] hover:underline"
          >
            All Road Notes →
          </Link>
        </div>
      </div>
    </aside>
  )
}
