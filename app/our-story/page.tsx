import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Story — About PackEdgePost | PackEdgePost',
  description: 'Learn how PackEdgePost researches and reviews travel accessories and luggage organizers — our methodology, team, and editorial standards.',
}

export default function OurStoryPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <nav className="flex items-center gap-2 font-body text-xs text-gray-500 mb-8">
        <Link href="/" className="hover:text-[#E8380D]">Home</Link>
        <span>/</span>
        <span>Our Story</span>
      </nav>

      <span className="block font-heading text-[11px] uppercase tracking-[0.15em] text-[#E8380D] mb-3">About</span>
      <h1 className="font-heading text-5xl font-bold uppercase text-gray-900 dark:text-gray-100 tracking-tight mb-8">
        Our Story
      </h1>

      <div className="prose-like space-y-8">
        <section>
          <h2 className="font-heading text-2xl font-bold uppercase text-gray-900 dark:text-gray-100 tracking-tight mb-4">
            Why PackEdgePost Exists
          </h2>
          <p className="font-body text-base text-gray-600 dark:text-gray-500 leading-relaxed mb-4">
            PackEdgePost.com was built around a frustration that every frequent traveler knows: the product reviews that come up first in search results are written by people who haven&apos;t traveled with the products, or who are being paid to recommend them without disclosure.
          </p>
          <p className="font-body text-base text-gray-600 dark:text-gray-500 leading-relaxed">
            We set out to build a different kind of travel accessories resource — one grounded in editorial discipline, honest assessment of what products actually do, and clear disclosure of how we make money. The result is PackEdgePost: independent reviews of travel organizers, bags, and accessories, written by people who understand that the difference between a good trip and a great one often comes down to the gear you bring.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold uppercase text-gray-900 dark:text-gray-100 tracking-tight mb-4">
            Our Editorial Methodology
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'Category Research', body: 'We start every category by identifying the most-sold and most-reviewed products in that space. We cross-reference consumer reviews on Amazon, Reddit travel forums, and specialty travel communities.' },
              { step: '02', title: 'Feature Analysis', body: 'We evaluate each product against category-specific criteria: durability indicators, feature density, design logic, and how the product performs against its stated purpose.' },
              { step: '03', title: 'Editorial Ranking', body: 'Rankings reflect our editorial judgment of which products deliver the best combination of quality, value, and practical usefulness for the specific traveler type each product serves.' },
            ].map(col => (
              <div key={col.step} className="border-t-2 border-[#E8380D] pt-4">
                <span className="font-heading text-3xl font-bold text-gray-200">{col.step}</span>
                <h3 className="font-heading text-base font-bold uppercase text-gray-900 dark:text-gray-100 tracking-wide mt-2 mb-2">{col.title}</h3>
                <p className="font-body text-sm text-gray-600 dark:text-gray-500 leading-relaxed">{col.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold uppercase text-gray-900 dark:text-gray-100 tracking-tight mb-4">
            Editorial Independence
          </h2>
          <p className="font-body text-base text-gray-600 dark:text-gray-500 leading-relaxed mb-4">
            PackEdgePost does not accept sponsored placements, paid reviews, or payment to include products in our rankings. Our affiliate relationship with Amazon means we earn a small commission when you purchase through our links — but this never influences which products we feature, where they rank, or what we say about them.
          </p>
          <p className="font-body text-base text-gray-600 dark:text-gray-500 leading-relaxed">
            We believe the affiliate model is compatible with editorial integrity when disclosed clearly — which we do on every page that includes affiliate links. If a product is #1 in our rankings, it&apos;s because it earned that position by being the best option for most travelers in that category, not because it pays more per click.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold uppercase text-gray-900 dark:text-gray-100 tracking-tight mb-4">
            Contact & Corrections
          </h2>
          <p className="font-body text-base text-gray-600 dark:text-gray-500 leading-relaxed">
            If you notice an error in our content, have a product suggestion, or want to reach our editorial team, contact us at{' '}
            <a href="mailto:info@packedgepost.com" className="text-[#E8380D] hover:underline">info@packedgepost.com</a>.
            We update our reviews when new information changes our assessment, and we correct factual errors promptly.
          </p>
        </section>
      </div>
    </div>
  )
}
