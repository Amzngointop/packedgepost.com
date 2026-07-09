import Link from 'next/link'

const articles = [
  { slug: 'hanging-toiletry-bags', title: 'Hanging Toiletry Bags' },
  { slug: 'travel-neck-pillows', title: 'Travel Neck Pillows' },
  { slug: 'garment-bags', title: 'Garment Bags' },
  { slug: 'travel-bottles', title: 'Travel Bottles' },
  { slug: 'passport-holders', title: 'Passport Holders' },
  { slug: 'travel-backpacks', title: 'Travel Backpacks' },
]

const guideLinks = [
  { slug: 'pack-carry-on-two-weeks', title: 'Pack a Carry-On for 2 Weeks' },
  { slug: 'tsa-311-liquids-rule-guide', title: 'TSA 3-1-1 Liquids Rule' },
  { slug: 'how-to-use-packing-cubes', title: 'How to Use Packing Cubes' },
  { slug: 'how-to-choose-travel-neck-pillow', title: 'Choose a Neck Pillow' },
  { slug: 'travel-security-guide', title: 'Travel Security Guide' },
  { slug: 'business-traveler-packing-list', title: 'Business Traveler List' },
]

export function Footer() {
  return (
    <footer className="bg-[#0B1929] border-t border-gray-700 mt-0">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Col 1: Brand */}
        <div>
          <Link href="/" className="font-heading text-2xl font-bold uppercase text-white">
            Pack<strong className="text-[#E8380D]">Edge</strong>Post
          </Link>
          <p className="font-body text-gray-400 text-sm mt-3 leading-relaxed">
            Pack smarter. Travel lighter.
          </p>
          <p className="font-body text-gray-500 text-xs mt-4">
            info@packedgepost.com
          </p>
          <p className="font-body text-gray-600 text-xs mt-1">
            © 2026 PackEdgePost.com
          </p>
        </div>

        {/* Col 2: Best Picks */}
        <div>
          <p className="font-heading text-[11px] uppercase tracking-[0.15em] text-[#E8380D] mb-4">Best Picks</p>
          <ul className="space-y-2">
            {articles.map(a => (
              <li key={a.slug}>
                <Link
                  href={`/best/${a.slug}`}
                  className="font-body text-sm text-gray-400 hover:text-[#E8380D] transition-colors"
                >
                  {a.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Road Notes */}
        <div>
          <p className="font-heading text-[11px] uppercase tracking-[0.15em] text-[#E8380D] mb-4">Road Notes</p>
          <ul className="space-y-2">
            {guideLinks.map(g => (
              <li key={g.slug}>
                <Link
                  href={`/guides/${g.slug}`}
                  className="font-body text-sm text-gray-400 hover:text-[#E8380D] transition-colors"
                >
                  {g.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Company */}
        <div>
          <p className="font-heading text-[11px] uppercase tracking-[0.15em] text-[#E8380D] mb-4">Company</p>
          <ul className="space-y-2">
            {[
              { href: '/our-story', label: 'Our Story' },
              { href: '/reach-us', label: 'Reach Us' },
              { href: '/pack-vocab', label: 'Pack Vocab' },
              { href: '/privacy-policy', label: 'Privacy Policy' },
              { href: '/terms', label: 'Terms of Use' },
              { href: '/affiliate-disclosure', label: 'Affiliate Disclosure' },
            ].map(item => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-body text-sm text-gray-400 hover:text-[#E8380D] transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 px-6 py-4">
        <p className="font-body text-xs text-gray-600 max-w-7xl mx-auto">
          PackEdgePost.com is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
        </p>
      </div>
    </footer>
  )
}
