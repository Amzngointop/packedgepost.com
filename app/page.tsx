import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Briefcase, Moon, Shirt, FlaskConical, BookOpen, Backpack,
  ExternalLink
} from 'lucide-react'
import { products } from '@/data/products'
import { articles } from '@/data/articles'
import { guides } from '@/data/guides'
import { ProductCard } from '@/components/ProductCard'
import { NicheCalculator } from '@/components/NicheCalculator'
import { CTAButton } from '@/components/CTAButton'
import { NewsletterForm } from '@/components/NewsletterForm'

export const metadata: Metadata = {
  title: 'PackEdgePost — Pack Smarter. Travel Lighter.',
  description: 'Independent reviews of travel organizers, bags & accessories — so your next trip starts before you leave home.',
  openGraph: {
    title: 'PackEdgePost — Pack Smarter. Travel Lighter.',
    description: 'Independent reviews of travel organizers, bags & accessories.',
    images: ['https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80'],
  },
}

const categoryIcons: Record<string, React.ElementType> = {
  'hanging-toiletry-bags': Briefcase,
  'travel-neck-pillows': Moon,
  'garment-bags': Shirt,
  'travel-bottles': FlaskConical,
  'passport-holders': BookOpen,
  'travel-backpacks': Backpack,
}

const categoriesData = [
  { slug: 'hanging-toiletry-bags', name: 'Hanging Toiletry Bags', count: 6 },
  { slug: 'travel-neck-pillows', name: 'Travel Neck Pillows', count: 6 },
  { slug: 'garment-bags', name: 'Garment Bags', count: 6 },
  { slug: 'travel-bottles', name: 'Travel Bottles', count: 6 },
  { slug: 'passport-holders', name: 'Passport Holders', count: 6 },
  { slug: 'travel-backpacks', name: 'Travel Backpacks', count: 6 },
]

const glossaryTerms = [
  { term: 'TSA 3-1-1 Rule', def: 'Liquids in containers ≤3.4oz, all fitting in one quart-size clear bag.' },
  { term: 'Compression Packing', def: 'Using dual-zipper cubes to reduce clothing volume by 20–35%.' },
  { term: 'RFID Blocking', def: 'Faraday-cage shielding that prevents contactless card skimming.' },
  { term: 'Carry-On Compliance', def: 'Airline-specific size and weight limits for cabin bags.' },
  { term: 'Dead Weight', def: 'Items packed and never used — the enemy of every carry-on traveler.' },
  { term: 'Travel Capsule Wardrobe', def: 'A minimal clothing set designed to mix-and-match across multiple days.' },
]

// Get rank:1 product for each article
const topProducts = articles.map(article => {
  return products.find(p => p.articleSlug === article.slug && p.rank === 1)!
}).filter(Boolean)

// Editor's choice: rank:2 from first article
const editorsChoice = products.find(p => p.articleSlug === 'hanging-toiletry-bags' && p.rank === 2)!

const testimonials = [
  {
    quote: 'Good packing cubes are the single biggest upgrade you can make to how you travel. Once you switch, there\'s no going back.',
    name: 'Sarah Chen',
    title: 'Travel Writer & Digital Nomad',
    flightCount: '200+ flights/year',
  },
  {
    quote: 'A hanging toiletry bag changed my hotel routine completely. No more digging through a duffel at 6am in a dim bathroom.',
    name: 'Marcus Webb',
    title: 'Business Travel Consultant',
    flightCount: '150+ flights/year',
  },
  {
    quote: 'The right luggage scale has saved me from overweight fees more times than I can count. It\'s a $10 tool that pays for itself on the first trip.',
    name: 'Priya Nair',
    title: 'International Conference Speaker',
    flightCount: '120+ flights/year',
  },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative w-full min-h-[560px] flex items-end bg-[#0B1929] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&q=80"
          alt="Travel accessories laid out for packing"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1929] via-[#0B1929]/60 to-transparent" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16">
          <span className="inline-block text-[11px] font-heading font-bold uppercase tracking-[0.15em] text-white bg-[#E8380D] px-3 py-1 mb-4">
            Travel Accessories & Luggage Organizers
          </span>
          <h1 className="font-heading text-6xl md:text-7xl font-bold uppercase text-white leading-none tracking-tight mb-4 max-w-2xl">
            Pack Smarter.<br />
            <span className="text-[#E8380D]">Travel Lighter.</span>
          </h1>
          <p className="font-body text-gray-300 text-base max-w-xl mb-8 leading-relaxed">
            Independent reviews of travel organizers, bags & accessories — so your next trip starts before you leave home.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {['TSA-Approved Picks', 'Carry-On Tested', '5k+ Monthly Sellers', 'Updated 2026'].map(tag => (
              <span key={tag} className="text-[11px] font-body font-medium text-gray-300 border border-gray-600 px-3 py-1.5 rounded-sm uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
          <CTAButton href="#top-rated">See Top Picks →</CTAButton>
        </div>
      </section>

      {/* ZONE A: Three columns below hero */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Road Notes preview */}
        <div>
          <span className="block font-heading text-[11px] uppercase tracking-[0.15em] text-[#E8380D] mb-4">Road Notes</span>
          {/* Featured guide card */}
          <Link href={`/guides/${guides[0].slug}`} className="block group mb-6">
            <div className="relative h-44 overflow-hidden rounded-sm">
              <img src={guides[0].coverImage} alt={guides[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-heading text-sm font-bold uppercase text-white leading-tight">{guides[0].title}</h3>
                <span className="text-[11px] text-gray-400 mt-1 block">Read Guide →</span>
              </div>
            </div>
          </Link>
          <div className="border-t border-dashed border-[#d4d4d4] dark:border-gray-700 my-4" />
          <div className="grid grid-cols-2 gap-3">
            {guides.slice(1, 3).map(g => (
              <Link key={g.slug} href={`/guides/${g.slug}`} className="block group">
                <div className="relative h-28 overflow-hidden rounded-sm">
                  <img src={g.coverImage} alt={g.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 p-2">
                    <p className="font-heading text-[11px] font-bold uppercase text-white leading-tight">{g.title}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <Link href="/travel-notes" className="block mt-4 font-heading text-[12px] uppercase tracking-wider text-[#E8380D] hover:underline">
            → Browse All Road Notes
          </Link>
        </div>

        {/* Center: Editor's Choice */}
        <div>
          <span className="block font-heading text-[11px] uppercase tracking-[0.15em] text-[#E8380D] mb-4">Editor&apos;s Choice</span>
          <div className="border border-[#e5e5e5] dark:border-gray-800 rounded-sm p-5 bg-white dark:bg-gray-900">
            <div className="bg-gray-50 dark:bg-gray-800 flex items-center justify-center h-44 mb-4 rounded-sm">
              <img
                src={editorsChoice.imageUrl}
                alt={editorsChoice.name}
                style={{ objectFit: 'contain', maxHeight: '160px' }}
              />
            </div>
            <span className="inline-block bg-[#E8380D] text-white font-heading text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 mb-3">
              {editorsChoice.badge}
            </span>
            <h3 className="font-heading text-base font-bold uppercase text-gray-900 dark:text-gray-100 leading-tight mb-2">
              {editorsChoice.name}
            </h3>
            <p className="font-body text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              {editorsChoice.summary}
            </p>
            <a
              href={editorsChoice.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="block text-center font-heading font-bold uppercase tracking-widest text-[13px] text-white bg-[#E8380D] px-4 py-2.5 rounded-[8px] shadow-[3px_3px_0px_#A8260A] hover:shadow-[4px_4px_0px_#A8260A] hover:-translate-x-px hover:-translate-y-px active:shadow-[1px_1px_0px_#A8260A] active:translate-x-[2px] active:translate-y-[2px] transition-all duration-75 mb-3"
            >
              View on Amazon →
            </a>
            <p className="font-body text-[11px] text-gray-500 text-center">
              We may earn a commission on qualifying purchases.
            </p>
          </div>
          <div className="mt-4 text-center">
            <CTAButton href="#top-rated">See All Top Picks</CTAButton>
          </div>
        </div>

        {/* Right: From the Editors + Latest Review + Quick Stat */}
        <div>
          <span className="block font-heading text-[11px] uppercase tracking-[0.15em] text-[#E8380D] mb-4">From the Editors</span>
          <div className="space-y-4 mb-6">
            {[
              { name: 'James Harlow', title: 'Senior Gear Editor', quote: 'The best packing system isn\'t the lightest — it\'s the one you actually follow on every trip. Start with a hanging toiletry bag. It changes every hotel bathroom.' },
              { name: 'Mia Santos', title: 'Travel Accessories Writer', quote: 'Most travelers underestimate the value of a quality luggage scale. Overweight fees are a preventable tax on disorganized packing.' },
              { name: 'Theo Nakamura', title: 'Business Travel Editor', quote: 'Two years of weekly flights taught me one thing: carry-on only is always the right answer. Everything else is a system to make that possible.' },
            ].map((e, i) => (
              <div key={i} className="border-l-2 border-[#E8380D] pl-4">
                <p className="font-body text-sm text-gray-600 dark:text-gray-400 italic leading-relaxed mb-1">&ldquo;{e.quote}&rdquo;</p>
                <p className="font-heading text-[11px] uppercase tracking-wider text-gray-900 dark:text-gray-100">{e.name}</p>
                <p className="font-body text-[11px] text-gray-500">{e.title}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-dashed border-[#d4d4d4] dark:border-gray-700 pt-4 mb-4">
            <p className="font-heading text-[11px] uppercase tracking-wider text-gray-500 mb-2">Latest Review</p>
            <Link href={`/best/${articles[0].slug}`} className="block group">
              <p className="font-heading text-sm font-bold uppercase text-gray-900 dark:text-gray-100 group-hover:text-[#E8380D] transition-colors leading-tight mb-1">
                {articles[0].title}
              </p>
              <p className="font-body text-xs text-gray-500">{articles[0].excerpt.split('.')[0]}.</p>
              <span className="font-heading text-[11px] uppercase tracking-wider text-[#E8380D] mt-1 block">Read Review →</span>
            </Link>
          </div>

          <div className="bg-[#0B1929] rounded-sm p-4">
            <p className="font-heading text-4xl font-bold text-white">36</p>
            <p className="font-heading text-sm uppercase tracking-wider text-[#E8380D]">Products Reviewed</p>
            <p className="font-body text-xs text-gray-400 mt-1">Across 6 categories for 2026</p>
          </div>
        </div>
      </section>

      {/* ZONE B: Left sticky sidebar + Main content + Right sticky sidebar */}
      <div className="max-w-7xl mx-auto px-6 flex gap-8">

        {/* Left sticky sidebar: On This Page */}
        <aside className="hidden xl:block w-44 flex-shrink-0">
          <div className="sticky top-20 pt-4">
            <p className="font-heading text-[11px] uppercase tracking-[0.15em] text-gray-500 mb-4">On This Page</p>
            <ul className="space-y-3">
              {[
                { href: '#top-rated', label: 'Top Rated' },
                { href: '#browse-by-category', label: 'By Category' },
                { href: '#latest-guides', label: 'Road Notes' },
                { href: '#packing-calculator', label: 'Calculator' },
                { href: '#pack-vocab-preview', label: 'Pack Vocab' },
                { href: '#how-we-pick', label: 'How We Pick' },
                { href: '#newsletter', label: 'Newsletter' },
              ].map(item => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="font-body text-xs text-gray-500 dark:text-gray-500 hover:text-[#E8380D] transition-colors block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 min-w-0">

          {/* TOP RATED */}
          <section id="top-rated" className="py-12">
            <div className="flex items-end gap-4 mb-2">
              <h2 className="font-heading text-4xl font-bold uppercase text-gray-900 dark:text-gray-100 tracking-tight">
                Top-Rated Travel Accessories
              </h2>
            </div>
            <div className="bg-amber-50 dark:bg-gray-900 border border-amber-200 dark:border-gray-700 rounded-sm p-4 mb-8">
              <p className="font-body text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                <strong className="font-heading uppercase tracking-wide">Affiliate Disclosure:</strong> PackEdgePost.com participates in the Amazon Services LLC Associates Program. When you click product links and make a purchase, we may earn a small commission at no additional cost to you. This never influences our editorial opinions.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {topProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>

          {/* BROWSE BY CATEGORY */}
          <section id="browse-by-category" className="bg-[#111827] -mx-6 px-6 py-16 mb-12">
            <h2 className="font-heading text-4xl font-bold uppercase text-white tracking-tight mb-10">
              Shop by Category
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {categoriesData.map(cat => {
                const Icon = categoryIcons[cat.slug]
                return (
                  <Link
                    key={cat.slug}
                    href={`/best/${cat.slug}`}
                    className="group block bg-[#1a2332] border border-gray-700/50 hover:border-[#E8380D] transition-all duration-200 rounded-sm overflow-hidden"
                  >
                    <div className="h-44 flex items-center justify-center p-6 bg-[#0f1822]">
                      {Icon && <Icon size={64} className="text-white opacity-30 group-hover:opacity-60 transition-opacity" />}
                    </div>
                    <div className="px-4 py-3 border-t border-gray-700/50 group-hover:border-[#E8380D] transition-colors">
                      <p className="font-heading text-sm font-bold uppercase tracking-[0.1em] text-gray-300 group-hover:text-white transition-colors">
                        {cat.name}
                      </p>
                      <p className="font-body text-[12px] text-gray-500 mt-0.5 group-hover:text-[#E8380D] transition-colors">
                        {cat.count} reviews →
                      </p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </section>

          {/* LATEST GUIDES — Dark card grid */}
          <section id="latest-guides" className="py-12">
            <span className="block font-heading text-[11px] uppercase tracking-[0.15em] text-[#E8380D] mb-2">Road Notes</span>
            <h2 className="font-heading text-4xl font-bold uppercase text-gray-900 dark:text-gray-100 tracking-tight mb-8">
              Latest Guides
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {guides.map(guide => (
                <Link key={guide.slug} href={`/guides/${guide.slug}`} className="block group">
                  <div className="relative rounded-sm overflow-hidden">
                    <img
                      src={guide.coverImage}
                      alt={guide.title}
                      className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-[#E8380D]">{guide.category}</span>
                      <h3 className="font-heading text-sm font-bold uppercase text-white leading-tight mt-1">{guide.title}</h3>
                      <span className="text-[11px] text-gray-400 mt-1 block">Read Guide →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* TESTIMONIALS */}
          <section className="bg-[#0B1929] -mx-6 px-6 py-16 mb-0">
            <span className="text-[10px] font-heading font-bold uppercase tracking-[0.15em] text-[#E8380D] block mb-2">
              Trusted by Frequent Flyers
            </span>
            <h2 className="font-heading text-4xl font-bold uppercase text-white tracking-tight mb-10">
              What Travel Pros Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((review, i) => (
                <div key={i} className="bg-[#111827] border border-gray-700/50 p-6 rounded-sm">
                  <span className="text-[#E8380D] text-4xl font-heading font-bold leading-none block mb-4">&ldquo;</span>
                  <p className="font-body text-gray-300 text-sm leading-relaxed italic mb-6">{review.quote}</p>
                  <div className="border-t border-gray-700/50 pt-4">
                    <p className="font-heading font-bold uppercase text-white text-sm tracking-wide">{review.name}</p>
                    <p className="font-body text-[#E8380D] text-xs mt-0.5">{review.title}</p>
                    <p className="font-body text-gray-500 text-xs mt-0.5">{review.flightCount}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CALCULATOR */}
          <div className="-mx-6">
            <NicheCalculator />
          </div>

          {/* PACK VOCAB PREVIEW */}
          <section id="pack-vocab-preview" className="py-12">
            <span className="block font-heading text-[11px] uppercase tracking-[0.15em] text-[#E8380D] mb-2">Pack Vocab</span>
            <h2 className="font-heading text-4xl font-bold uppercase text-gray-900 dark:text-gray-100 tracking-tight mb-8">
              Know the Terms
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {glossaryTerms.map(item => (
                <div key={item.term} className="border-l-4 border-[#E8380D] pl-4 py-2">
                  <p className="font-heading text-sm font-bold uppercase tracking-wide text-gray-900 dark:text-gray-100 mb-1">{item.term}</p>
                  <p className="font-body text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item.def}</p>
                </div>
              ))}
            </div>
            <CTAButton href="/pack-vocab">Explore Full Pack Vocab →</CTAButton>
          </section>

          {/* HOW WE PICK */}
          <section id="how-we-pick" className="py-12 border-t border-dashed border-[#d4d4d4] dark:border-gray-700">
            <h2 className="font-heading text-4xl font-bold uppercase text-gray-900 dark:text-gray-100 tracking-tight mb-8">
              How We Pick Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {[
                {
                  title: 'Research Process',
                  steps: ['Identify top-selling products in each category', 'Cross-reference consumer reviews across platforms', 'Evaluate brand reputation and return rates', 'Assess feature sets against category benchmarks'],
                },
                {
                  title: 'Editorial Criteria',
                  steps: ['Durability relative to price point', 'Feature density vs. complexity trade-off', 'Suitability for target traveler type', 'Value for money across the full trip lifespan'],
                },
                {
                  title: 'Editorial Independence',
                  steps: ['No sponsored placements — rankings reflect our editorial judgment', 'Affiliate commissions don\'t influence order or inclusion', 'Products included because they\'re good, not because they pay us', 'We disclose affiliate relationships on every product page'],
                },
              ].map(col => (
                <div key={col.title}>
                  <h3 className="font-heading text-base font-bold uppercase tracking-wide text-gray-900 dark:text-gray-100 mb-4">{col.title}</h3>
                  <ul className="space-y-2">
                    {col.steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-2 font-body text-sm text-gray-600 dark:text-gray-400">
                        <span className="text-[#E8380D] font-bold flex-shrink-0">{i + 1}.</span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Process flow */}
            <div className="bg-gray-50 dark:bg-gray-900 border border-[#e5e5e5] dark:border-gray-800 rounded-sm p-6 mb-6">
              <p className="font-heading text-[11px] uppercase tracking-wider text-gray-500 mb-4">Our Research Flow</p>
              <div className="flex flex-wrap items-center gap-2">
                {['Category Research', '→', 'Product Shortlist', '→', 'Feature Analysis', '→', 'Editorial Review', '→', 'Publication'].map((step, i) => (
                  <span
                    key={i}
                    className={step === '→' ? 'text-[#E8380D] font-bold' : 'font-heading text-[12px] uppercase tracking-wider bg-white dark:bg-gray-800 border border-[#e5e5e5] dark:border-gray-700 px-3 py-1 text-gray-700 dark:text-gray-300'}
                  >
                    {step}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-xs font-body text-gray-500">
              <a href="https://www.tsa.gov" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#E8380D] transition-colors">
                <ExternalLink size={12} /> TSA.gov
              </a>
              <a href="https://www.wirecutter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#E8380D] transition-colors">
                <ExternalLink size={12} /> Wirecutter
              </a>
            </div>

            <div className="mt-6 bg-amber-50 dark:bg-gray-900 border border-amber-200 dark:border-gray-700 rounded-sm p-4">
              <p className="font-body text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                <strong className="font-heading uppercase tracking-wide">Affiliate Disclosure:</strong> As an Amazon Associate, PackEdgePost.com earns from qualifying purchases. Affiliate commissions help fund our editorial work, but our product rankings and opinions are editorially independent. We only recommend products we believe provide genuine value to travelers.
              </p>
            </div>
          </section>

          {/* NEWSLETTER */}
          <section id="newsletter" className="bg-[#0B1929] -mx-6 px-6 py-16">
            <span className="block font-heading text-[11px] uppercase tracking-[0.15em] text-[#E8380D] mb-2">Stay Sharp</span>
            <h2 className="font-heading text-4xl font-bold uppercase text-white tracking-tight mb-4">
              Get the Packing Edge
            </h2>
            <p className="font-body text-gray-400 text-sm mb-8 max-w-md">
              New gear reviews, packing guides, and TSA updates delivered to your inbox.
            </p>
            <NewsletterForm />
            <p className="font-body text-[11px] text-gray-600 mt-4">No spam. Unsubscribe anytime.</p>
          </section>

        </div>

        {/* Right sticky sidebar: Buying Guides */}
        <aside className="hidden xl:block w-56 flex-shrink-0">
          <div className="sticky top-20 pt-4">
            <p className="font-heading text-[11px] uppercase tracking-[0.15em] text-[#E8380D] mb-4">Buying Guides</p>
            <ul className="space-y-3">
              {articles.map(a => (
                <li key={a.slug}>
                  <Link
                    href={`/best/${a.slug}`}
                    className="font-body text-xs text-gray-600 dark:text-gray-400 hover:text-[#E8380D] dark:hover:text-orange-400 leading-snug block transition-colors"
                  >
                    {a.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-dashed border-[#d4d4d4] dark:border-gray-700">
              <Link
                href="/travel-notes"
                className="font-heading text-[11px] uppercase tracking-wider text-[#E8380D] hover:underline"
              >
                All Reviews →
              </Link>
            </div>
          </div>
        </aside>

      </div>
    </>
  )
}
