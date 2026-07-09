'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'

const categories = [
  { slug: 'hanging-toiletry-bags', name: 'Hanging Toiletry Bags' },
  { slug: 'travel-neck-pillows', name: 'Travel Neck Pillows' },
  { slug: 'garment-bags', name: 'Garment Bags' },
  { slug: 'travel-bottles', name: 'Travel Bottles' },
  { slug: 'passport-holders', name: 'Passport Holders' },
  { slug: 'travel-backpacks', name: 'Travel Backpacks' },
]

export function Header() {
  const [gearOpen, setGearOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center gap-4">
        {/* Logo */}
        <Link href="/" className="font-heading text-xl font-bold uppercase tracking-tight text-gray-900 dark:text-gray-100 flex-shrink-0">
          Pack<strong className="text-[#E8380D]">Edge</strong>Post
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1 ml-auto">
          {/* GEAR dropdown */}
          <div className="relative">
            <button
              onClick={() => setGearOpen(!gearOpen)}
              className="flex items-center gap-1 font-heading font-semibold uppercase tracking-[0.1em] text-[13px] text-gray-700 dark:text-gray-300 hover:text-[#E8380D] dark:hover:text-orange-400 px-3 py-2 transition-colors"
            >
              Gear <ChevronDown size={14} className={`transition-transform ${gearOpen ? 'rotate-180' : ''}`} />
            </button>
            {gearOpen && (
              <div
                className="absolute left-0 top-full mt-1 w-56 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg z-50 py-1"
                onMouseLeave={() => setGearOpen(false)}
              >
                {categories.map(cat => (
                  <Link
                    key={cat.slug}
                    href={`/best/${cat.slug}`}
                    className="block px-4 py-2 font-heading text-[12px] uppercase tracking-[0.08em] text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-[#E8380D] transition-colors"
                    onClick={() => setGearOpen(false)}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {[
            { label: 'Road Notes', href: '/travel-notes' },
            { label: 'Pack Vocab', href: '/pack-vocab' },
            { label: 'Our Story', href: '/our-story' },
            { label: 'Reach Us', href: '/reach-us' },
          ].map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="font-heading font-semibold uppercase tracking-[0.1em] text-[13px] text-gray-700 dark:text-gray-300 hover:text-[#E8380D] dark:hover:text-orange-400 px-3 py-2 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden ml-auto text-gray-700 dark:text-gray-300"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-4 px-4">
          <p className="font-heading text-[11px] uppercase tracking-widest text-gray-500 mb-2">Categories</p>
          {categories.map(cat => (
            <Link
              key={cat.slug}
              href={`/best/${cat.slug}`}
              className="block py-2 font-heading uppercase tracking-[0.08em] text-[13px] text-gray-700 dark:text-gray-300 hover:text-[#E8380D]"
              onClick={() => setMobileOpen(false)}
            >
              {cat.name}
            </Link>
          ))}
          <div className="border-t border-gray-200 dark:border-gray-800 mt-3 pt-3 space-y-2">
            {[
              { label: 'Road Notes', href: '/travel-notes' },
              { label: 'Pack Vocab', href: '/pack-vocab' },
              { label: 'Our Story', href: '/our-story' },
              { label: 'Reach Us', href: '/reach-us' },
            ].map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 font-heading uppercase tracking-[0.08em] text-[13px] text-gray-700 dark:text-gray-300 hover:text-[#E8380D]"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
