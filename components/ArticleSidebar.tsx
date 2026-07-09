import Link from 'next/link'
import { articles } from '@/data/articles'

interface ArticleSidebarProps {
  currentSlug?: string
  label?: string
}

export function ArticleSidebar({ currentSlug, label = 'More Buying Guides' }: ArticleSidebarProps) {
  const others = articles.filter(a => a.slug !== currentSlug)

  return (
    <aside className="hidden xl:block w-56 flex-shrink-0">
      <div className="sticky top-20">
        <p className="font-heading text-[11px] uppercase tracking-[0.15em] text-[#E8380D] mb-4">
          {label}
        </p>
        <ul className="space-y-3">
          {others.map(a => (
            <li key={a.slug}>
              <Link
                href={`/best/${a.slug}`}
                className="font-body text-sm text-gray-600 dark:text-gray-400 hover:text-[#E8380D] dark:hover:text-orange-400 leading-snug block transition-colors"
              >
                {a.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-6 pt-6 border-t border-dashed border-[#d4d4d4] dark:border-gray-700">
          <Link
            href="/best"
            className="font-heading text-[11px] uppercase tracking-wider text-[#E8380D] hover:underline"
          >
            All Reviews →
          </Link>
        </div>
      </div>
    </aside>
  )
}
