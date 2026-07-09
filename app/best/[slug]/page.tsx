import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Check, X, ExternalLink } from 'lucide-react'
import { articles } from '@/data/articles'
import { products } from '@/data/products'
import { ComparisonTable } from '@/components/ComparisonTable'
import { FAQ } from '@/components/FAQ'
import { AccordionSection } from '@/components/AccordionSection'
import { ArticleSidebar } from '@/components/ArticleSidebar'
import { CTAButton } from '@/components/CTAButton'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return articles.map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find(a => a.slug === slug)
  if (!article) return {}
  return {
    title: `${article.title} | PackEdgePost`,
    description: article.metaDescription,
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      images: [article.coverImage],
    },
  }
}

const faqMap: Record<string, { question: string; answer: string }[]> = {
  'hanging-toiletry-bags': [
    { question: 'What size hanging toiletry bag do I need?', answer: 'For most travelers, a medium bag (roughly 10×5×3 inches) works for trips up to 2 weeks. Only go larger if you carry full-size bottles or extensive skincare.' },
    { question: 'Are hanging toiletry bags TSA compliant?', answer: 'The bag itself has no restrictions. The liquids inside must follow the 3-1-1 rule: each container 3.4oz or less, all fitting in one quart-size clear bag.' },
    { question: 'Can I use a hanging toiletry bag in my carry-on?', answer: 'Yes — just ensure the liquids inside comply with TSA 3-1-1 rules. The bag itself is not a liquid and can be any size.' },
    { question: 'How do I clean a hanging toiletry bag?', answer: 'Most water-resistant bags wipe clean with a damp cloth. For deeper cleaning, hand wash with mild soap and allow to air dry fully before repacking.' },
    { question: 'What\'s the difference between a dopp kit and a hanging toiletry bag?', answer: 'A dopp kit is a flat rectangular bag without a hook, typically used on a countertop. A hanging toiletry bag adds a hook for hanging from towel bars or shower rods, which is more practical in cramped hotel bathrooms.' },
  ],
  'travel-neck-pillows': [
    { question: 'Are travel neck pillows worth it for short flights?', answer: 'On flights under 3 hours, a neck pillow provides less benefit since the flight isn\'t long enough to enter deep sleep. They pay off most on flights over 4-5 hours.' },
    { question: 'Can I wash my travel neck pillow?', answer: 'Most have removable, machine-washable covers. The core (memory foam, microbeads) typically requires spot cleaning. Check the care label before washing.' },
    { question: 'How do I attach a neck pillow to my carry-on?', answer: 'Most travel pillows have a snap or loop for exterior bag attachment. Clip to a bag handle or strap with a carabiner to avoid taking up interior space.' },
    { question: 'What\'s the most packable neck pillow?', answer: 'Inflatable pillows compress to almost nothing. The Trtl folds to scarf size. Memory foam pillows are the least packable but provide the best support.' },
    { question: 'Should the opening of a U-pillow face front or back?', answer: 'The opening faces the front. The curved back portion supports the back and sides of your neck, and you rest your head toward the side against the curved part.' },
  ],
  'garment-bags': [
    { question: 'Will a garment bag fit in an overhead bin?', answer: 'A 43" garment bag folded in half at the 21" mark fits most domestic US overhead bins when placed widthwise. Check your airline\'s overhead bin dimensions before assuming it fits.' },
    { question: 'How do I pack a suit in a garment bag to avoid wrinkles?', answer: 'Button the jacket, turn one shoulder inside out and nest the other shoulder into it, then fold the body over. This distributes the weight and avoids sharp crease lines across the jacket face.' },
    { question: 'Can I put a garment bag through TSA security?', answer: 'Yes. Garment bags go on the X-ray belt like any other bag. If it contains liquids, those must comply with 3-1-1 rules.' },
    { question: 'What\'s the difference between a garment bag and a suit bag?', answer: 'They\'re the same product with different names. "Suit bag" typically implies a shorter bag for suits only; "garment bag" is the broader category that includes dresses, gowns, and multiple suits.' },
    { question: 'Can I check a garment bag as luggage?', answer: 'Yes, though airlines may charge a checked bag fee if it exceeds carry-on dimensions. Some airlines treat garment bags as a special category — verify with your carrier before travel.' },
  ],
  'travel-bottles': [
    { question: 'What size travel bottles are TSA approved?', answer: '3.4 oz (100ml) or smaller per container. The container size determines compliance — a 6oz bottle that\'s half empty is NOT compliant.' },
    { question: 'Are silicone or plastic travel bottles better?', answer: 'Silicone is softer and easier to squeeze for thick products like conditioner, and survives compression better. Hard plastic is more rigid and stands upright on its own. Both comply with TSA rules.' },
    { question: 'How many travel bottles fit in a quart bag?', answer: 'Most quart bags hold 5-8 containers of 3oz size, depending on container shape. Flat disc containers pack more efficiently than round bottles.' },
    { question: 'How do I prevent travel bottles from leaking?', answer: 'Fill to 80% capacity (not full), squeeze out excess air before sealing, and store upright in your bag. Pressure changes during flight are the primary cause of leaks.' },
    { question: 'Can I refill travel bottles from large containers?', answer: 'Yes — that\'s the intended use. Travel bottles are designed to be refilled from your regular-sized products at home. Most have wide openings for easy filling.' },
  ],
  'passport-holders': [
    { question: 'Does RFID blocking actually work?', answer: 'Yes — quality RFID blocking material prevents contactless card scanning. The practical threat of RFID skimming is lower than often marketed, but the protection is cheap and real.' },
    { question: 'Should I carry my passport or a copy when sightseeing?', answer: 'Most countries legally require you to carry your actual passport. A photocopy is a backup, not a substitute. Keep the original secure but accessible, not locked in a hotel safe all day.' },
    { question: 'What documents should go in a travel wallet?', answer: 'Passport, primary credit card, debit card, travel insurance card, printed emergency contacts, and local currency. Don\'t overload — the wallet should be slim enough for an interior pocket.' },
    { question: 'How do I keep my passport safe while traveling?', answer: 'Use an interior jacket pocket or a neck wallet in high-theft areas. Never keep your passport in a back pocket or an unzipped bag.' },
    { question: 'What\'s the best passport holder for a family?', answer: 'A family passport holder with individual slots for each passport keeps documents organized at check-in and customs. Assign one adult to carry it — don\'t pass it between family members in busy areas.' },
  ],
  'travel-backpacks': [
    { question: 'What size backpack qualifies as a carry-on?', answer: 'Most airlines accept carry-on bags up to 22×14×9 inches. A 35-40L backpack typically fits within these dimensions when packed without overstuffing.' },
    { question: 'Can a 40L backpack be a personal item?', answer: 'A 40L backpack is generally too large for a personal item slot (typically 18×14×8 inches) on most airlines. It qualifies as a carry-on for the overhead bin.' },
    { question: 'What makes a backpack anti-theft?', answer: 'Back-panel access (zippers face your back while worn), hidden pockets, slash-resistant materials, and lockable zipper pulls are the main anti-theft features. Back-panel access is the most effective.' },
    { question: 'Should I get a hard or soft travel backpack?', answer: 'Soft backpacks are lighter and more flexible for fitting into overhead bins. Hard-shell travel backpacks provide more structure and protection for fragile items like laptops.' },
    { question: 'How do I choose between a travel backpack and a rolling suitcase?', answer: 'Choose a backpack for complex itineraries with multiple transit modes (trains, buses, walking). Choose a roller for hotel-to-hotel trips where you\'re primarily on smooth floors and taxis.' },
  ],
}

const buyingGuideMap: Record<string, { heading: string; body: string }[]> = {
  'hanging-toiletry-bags': [
    { heading: 'Hook Quality Matters More Than You Think', body: 'The hook is the one mechanical part that fails first on cheap toiletry bags — it\'s under the full weight of the bag every time you use it. Look for hooks rated to at least 2 lbs, with a rotating mechanism that locks to prevent swinging. Metal hooks outlast plastic ones significantly.' },
    { heading: 'Water Resistance vs. Waterproof', body: 'Most toiletry bags advertise "water resistant" — which means splashes and brief contact won\'t penetrate, but immersion will. True waterproofing isn\'t necessary for a toiletry bag. Water resistance is sufficient for the bathroom use case.' },
    { heading: 'Size Selection by Trip Length', body: 'For weekend trips: compact bags (under 8 inches wide) carry the essentials without dead space. For 1-week trips: medium bags with multiple compartments organize a full kit. For 2+ week trips: large bags or a hanging bag plus a TSA quart bag as supplementary storage.' },
    { heading: 'How to Set Up a Hotel Bathroom in Under 60 Seconds', body: 'Hook the bag on the towel bar before unpacking. Open all compartments. Never remove items from the bag during the hotel stay — use them in place. This eliminates the "leaving something behind" problem that plagues travelers who spread items across the counter.' },
  ],
  'travel-neck-pillows': [
    { heading: 'Matching Pillow to Seat Position', body: 'The most important variable in travel pillow selection is where you sit, not which pillow is rated highest. Window seat travelers benefit from any pillow plus the window as a backstop. Aisle seat travelers need chin support specifically. Middle seat travelers are in the most difficult position and benefit from the BCOZZY\'s multi-position design.' },
    { heading: 'The Head-Drop Problem Explained', body: 'When neck muscles relax in sleep, the head falls forward into cervical flexion — chin toward chest. Standard U-pillows provide no resistance to this movement. Only wrap-around, chin-supporting, or scarf-style pillows address this specific failure mode of traditional travel pillows.' },
    { heading: 'Pillow Care Between Trips', body: 'Travel pillows accumulate skin oils and sweat against the face and neck. Wash the cover (or the full pillow if fully washable) after every 3-5 long-haul flights. Store empty and unzipped to allow full drying and prevent mildew in the foam.' },
  ],
  'garment-bags': [
    { heading: 'The Fold Technique for Overhead Bins', body: 'A 43" garment bag folds to approximately 21.5" — which fits most domestic US overhead bins widthwise. Fold at the midpoint, drape over the garments rather than creasing sharply, and place in the bin immediately after boarding. The first and last rows have the easiest bin access.' },
    { heading: 'Garment Bag vs. Packing a Suit in a Suitcase', body: 'A garment bag prevents suit wrinkles by hanging the garment and allowing gravity to work rather than compression. In a suitcase, the bundle packing method (described in our guides) reduces wrinkles but doesn\'t eliminate them. For presentations or weddings, a garment bag is superior. For casual business travel, bundle packing is adequate.' },
    { heading: 'Checking a Garment Bag', body: 'Some airlines allow garment bags as a carry-on override regardless of size. Others charge a standard checked bag fee. A few (notably international carriers) have specific garment bag policies. Call ahead rather than assuming — the gate agent\'s discretion varies significantly.' },
  ],
  'travel-bottles': [
    { heading: 'The 80% Fill Rule', body: 'Never fill travel bottles to capacity. Leave 20% air space in each container. This reduces internal pressure at altitude and is the most reliable way to prevent leaking during flights. A full container has no room to expand when cabin pressure changes.' },
    { heading: 'Container Shape and Pack Efficiency', body: 'Round cylinders waste space in a quart bag. Flat disc containers (common for lotions and creams) pack significantly more efficiently. If you carry 5+ containers, investing in a matched disc-style set like the Muslish 21-pack increases how many items you can fit in one quart bag.' },
    { heading: 'Refilling from Full-Size Products', body: 'The ideal refilling setup at home: stand your travel bottles open on a folded paper towel, pour slowly from the large container. For thick products (conditioner, body butter), warm the large container slightly in warm water before pouring — this reduces viscosity and speeds transfer significantly.' },
  ],
  'passport-holders': [
    { heading: 'RFID Threat Assessment', body: 'Most contactless credit cards transmit only dynamic transaction codes during a skim — not account numbers or personal data. Financial loss from RFID skimming is extremely rare. However, the cost of RFID blocking is so low ($8-30) that it remains a sensible precaution, particularly for e-passports which contain more personal data.' },
    { heading: 'Organizing Documents for Fast Checkpoint Processing', body: 'Arrange documents in the order they\'re requested at checkpoints: primary ID first, then secondary documents, then cards. Practice opening your passport holder and extracting your passport in one motion. At busy border crossings, every second of fumbling adds time for you and everyone behind you.' },
    { heading: 'When to Use a Neck Wallet vs. a Passport Holder', body: 'A standard passport holder works for most destinations. A neck wallet adds value specifically in high-theft tourist areas (Barcelona\'s La Rambla, Rome\'s transit system, Prague\'s Old Town). Don\'t wear a neck wallet in every city — it creates inconvenience where it isn\'t needed. Assess the actual risk of your specific destination.' },
  ],
  'travel-backpacks': [
    { heading: 'The Personal Item vs. Carry-On Distinction', body: 'Airlines allow two bags: one overhead carry-on and one personal item under the seat. Most travel backpacks are carry-on sized (35-40L). A 20-25L day pack or a structured bag under 18×14×8 inches qualifies as a personal item. Knowing this distinction lets you carry more without paying fees by using both allowances strategically.' },
    { heading: 'Hip Belt Importance for Carry-On Backpacks', body: 'A hip belt on a travel backpack transfers 60-80% of the bag\'s weight from shoulders to hips — the body\'s strongest weight-bearing structure. On backpacks under 25L, a hip belt is optional. Above 25L, especially when fully loaded, a hip belt dramatically improves comfort on long airport walks.' },
    { heading: 'Laptop Access at Security', body: 'TSA standard screening requires removing laptops from bags. Backpacks with a dedicated, straight-access laptop sleeve (a sleeve that opens flat independently from the rest of the bag) allow compliance without unpacking. TSA PreCheck members don\'t need to remove laptops — another argument for the program.' },
  ],
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = articles.find(a => a.slug === slug)
  if (!article) notFound()

  const articleProducts = products
    .filter(p => p.articleSlug === slug)
    .sort((a, b) => a.rank - b.rank)

  const faqs = faqMap[slug] || []
  const buyingGuide = buyingGuideMap[slug] || []

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 py-8 flex gap-8">
        {/* Left sticky: Jump To */}
        <aside className="hidden xl:block w-48 flex-shrink-0">
          <div className="sticky top-20">
            <p className="font-heading text-[11px] uppercase tracking-[0.15em] text-gray-500 mb-4">Jump To</p>
            <ul className="space-y-2">
              {articleProducts.map(product => (
                <li key={product.id}>
                  <a
                    href={`#product-${product.rank}`}
                    className="font-body text-xs text-gray-500 dark:text-gray-500 hover:text-[#E8380D] transition-colors block leading-tight"
                  >
                    #{product.rank} {product.name.split(' ').slice(0, 4).join(' ')}…
                  </a>
                </li>
              ))}
              <li><a href="#buying-guide" className="font-body text-xs text-gray-500 hover:text-[#E8380D] transition-colors block mt-3">Buying Guide</a></li>
              <li><a href="#faq" className="font-body text-xs text-gray-500 hover:text-[#E8380D] transition-colors block">FAQ</a></li>
            </ul>
          </div>
        </aside>

        {/* Center: Article content */}
        <article className="flex-1 min-w-0">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 font-body text-xs text-gray-400 dark:text-gray-500 mb-6">
            <Link href="/" className="hover:text-[#E8380D] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/travel-notes" className="hover:text-[#E8380D] transition-colors">Best Picks</Link>
            <span>/</span>
            <span className="text-gray-600 dark:text-gray-400">{article.title}</span>
          </nav>

          <span className="block font-heading text-[11px] uppercase tracking-[0.15em] text-[#E8380D] mb-3">
            {articleProducts[0]?.bestFor.split(' ').slice(0, 3).join(' ')}
          </span>

          <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase text-gray-900 dark:text-gray-100 tracking-tight leading-tight mb-4">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 font-body text-xs text-gray-500 mb-6">
            <span>Updated {article.updatedDate}</span>
            <span>·</span>
            <span>{article.readTime} min read</span>
            <span>·</span>
            <span>{articleProducts.length} products reviewed</span>
          </div>

          {/* Affiliate disclosure — top */}
          <div className="bg-amber-50 dark:bg-gray-900 border border-amber-200 dark:border-gray-700 rounded-sm p-4 mb-8">
            <p className="font-body text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
              <strong className="font-heading uppercase tracking-wide">Affiliate Disclosure:</strong> PackEdgePost.com earns a commission from qualifying Amazon purchases. This never influences our rankings or editorial opinions — products are ranked on merit.
            </p>
          </div>

          {/* Intro */}
          <p className="font-body text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            {article.excerpt} Every product in this roundup was selected based on category research, consumer feedback analysis, and feature evaluation against clear criteria — not marketing claims or sponsored placement. The rankings reflect our editorial judgment of which options deliver the best combination of quality, value, and practical performance.
          </p>

          {/* Comparison table */}
          <ComparisonTable products={articleProducts} />

          {/* Product sections */}
          {articleProducts.map(product => (
            <div key={product.id} id={`product-${product.rank}`} className="mb-16">
              <div className="flex items-start gap-2 mb-4">
                <span className="font-heading text-5xl font-bold text-gray-200 leading-none select-none">
                  #{product.rank}
                </span>
                <div>
                  <span className="inline-block bg-[#E8380D] text-white font-heading text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 mb-2">
                    {product.badge}
                  </span>
                  <h2 className="font-heading text-2xl font-bold uppercase text-gray-900 dark:text-gray-100 leading-tight">
                    {product.name}
                  </h2>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div className="bg-gray-50 dark:bg-gray-800 flex items-center justify-center p-8 rounded-sm" style={{ minHeight: '240px' }}>
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    style={{ objectFit: 'contain', maxHeight: '200px', maxWidth: '100%' }}
                  />
                </div>
                <div>
                  <p className="font-body text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    {product.summary}
                  </p>
                  <div className="mb-4">
                    <p className="font-heading text-[11px] uppercase tracking-wider text-gray-500 dark:text-gray-500 mb-2">Pros</p>
                    <ul className="space-y-1.5">
                      {product.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-2 font-body text-sm text-gray-700 dark:text-gray-300">
                          <Check size={14} className="text-green-500 flex-shrink-0 mt-0.5" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-heading text-[11px] uppercase tracking-wider text-gray-500 dark:text-gray-500 mb-2">Cons</p>
                    <ul className="space-y-1.5">
                      {product.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-2 font-body text-sm text-gray-700 dark:text-gray-300">
                          <X size={14} className="text-red-500 flex-shrink-0 mt-0.5" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border border-[#e5e5e5] dark:border-gray-800 rounded-sm px-5 py-1 mb-4">
                <AccordionSection title="Why We Picked It">
                  <p>{product.summary} The combination of {product.pros[0].toLowerCase()} and {product.pros[1]?.toLowerCase()} makes this the standout choice at this rank.</p>
                </AccordionSection>
                <AccordionSection title="Who It&apos;s For">
                  <p>{product.bestFor}</p>
                </AccordionSection>
                <AccordionSection title="How to Use It">
                  <p>{product.howToUse}</p>
                </AccordionSection>
              </div>

              <CTAButton href={product.affiliateUrl} external>
                View on Amazon →
              </CTAButton>

              {product.rank < articleProducts.length && (
                <div className="border-t border-dashed border-[#d4d4d4] dark:border-gray-700 mt-12" />
              )}
            </div>
          ))}

          {/* Buying Guide */}
          <section id="buying-guide" className="mb-12">
            <h2 className="font-heading text-3xl font-bold uppercase text-gray-900 dark:text-gray-100 tracking-tight mb-6">
              {article.title.replace('Best ', '').replace(' (2026)', '')} — Buying Guide
            </h2>

            {buyingGuide.map((section, i) => (
              <div key={i} className="mb-6">
                <h3 className="font-heading text-lg font-bold uppercase text-gray-900 dark:text-gray-100 tracking-wide mb-2">
                  {section.heading}
                </h3>
                <p className="font-body text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  {section.body}
                </p>
              </div>
            ))}

            {/* Tip boxes */}
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="border-l-4 border-[#E8380D] bg-red-50 dark:bg-gray-900 pl-4 py-3 pr-4">
                <p className="font-heading text-[11px] uppercase tracking-wider text-[#E8380D] mb-1">Pro Tip</p>
                <p className="font-body text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  Pre-pack your {slug.replace(/-/g, ' ')} kit at home before the trip and leave it ready. The time saved isn&apos;t the packing itself — it&apos;s not having to think about it when you should be focused on the trip.
                </p>
              </div>
              <div className="border-l-4 border-[#E8380D] bg-red-50 dark:bg-gray-900 pl-4 py-3 pr-4">
                <p className="font-heading text-[11px] uppercase tracking-wider text-[#E8380D] mb-1">Worth Knowing</p>
                <p className="font-body text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  The right gear doesn&apos;t guarantee a good trip, but the wrong gear — a leaking toiletry bag, a luggage tag that fell off, a pillow you never use — consistently makes good trips worse. The investment is small; the return is repeated across every trip you take.
                </p>
              </div>
            </div>

            {/* Outbound links */}
            <div className="flex flex-wrap gap-4 text-sm font-body text-gray-500 mt-4">
              <a href="https://www.tsa.gov/travel/security-screening/whatcanibring/all" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#E8380D] transition-colors">
                <ExternalLink size={13} /> TSA Allowed Items List
              </a>
              <a href="https://www.consumerreports.org/luggage/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#E8380D] transition-colors">
                <ExternalLink size={13} /> Consumer Reports — Luggage
              </a>
            </div>
          </section>

          {/* FAQ */}
          {faqs.length > 0 && (
            <section id="faq" className="mb-12">
              <FAQ items={faqs} />
            </section>
          )}

          {/* Further Reading */}
          <section className="bg-gray-50 dark:bg-gray-900 border border-[#e5e5e5] dark:border-gray-800 rounded-sm p-6 mb-8">
            <h3 className="font-heading text-base font-bold uppercase text-gray-900 dark:text-gray-100 tracking-wide mb-4">Further Reading</h3>
            <ul className="space-y-2">
              {articles.filter(a => a.slug !== slug).slice(0, 3).map(a => (
                <li key={a.slug}>
                  <Link href={`/best/${a.slug}`} className="font-body text-sm text-[#E8380D] hover:underline">
                    {a.title} →
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Bottom affiliate disclosure */}
          <div className="bg-amber-50 dark:bg-gray-900 border border-amber-200 dark:border-gray-700 rounded-sm p-4 mb-8">
            <p className="font-body text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
              <strong className="font-heading uppercase tracking-wide">Affiliate Disclosure:</strong> As an Amazon Associate, PackEdgePost.com earns from qualifying purchases at no cost to you. Our editorial rankings and opinions are independent of affiliate relationships.
            </p>
          </div>
        </article>

        {/* Right sidebar */}
        <ArticleSidebar currentSlug={slug} />
      </div>
    </>
  )
}
