import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Affiliate Disclosure | PackEdgePost',
  description: 'PackEdgePost affiliate disclosure — how we earn money and how it affects our editorial process.',
}

export default function AffiliateDisclosurePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <nav className="flex items-center gap-2 font-body text-xs text-gray-500 mb-8">
        <Link href="/" className="hover:text-[#E8380D]">Home</Link>
        <span>/</span>
        <span>Affiliate Disclosure</span>
      </nav>
      <h1 className="font-heading text-4xl font-bold uppercase text-gray-900 dark:text-gray-100 tracking-tight mb-8">Affiliate Disclosure</h1>
      <div className="space-y-6 font-body text-base text-gray-600 dark:text-gray-500 leading-relaxed">
        <p>PackEdgePost.com (<strong className="text-gray-900 dark:text-gray-100">PackEdgePost</strong>) participates in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.</p>
        <p>When you click a product link on this site and make a purchase on Amazon, PackEdgePost may earn a small commission. This commission comes at no additional cost to you — the price you pay is the same whether you use our link or navigate to Amazon directly.</p>
        <h2 className="font-heading text-xl font-bold uppercase text-gray-900 dark:text-gray-100 tracking-tight pt-4">How This Affects Our Editorial Process</h2>
        <p>It doesn&apos;t. Our editorial rankings, product selections, and written assessments are determined entirely by our editorial team based on research, category analysis, and evaluation of product quality and value. Products are not paid to be included in our rankings, and their position in our lists is not influenced by the commission rate they generate.</p>
        <p>The affiliate model allows us to operate and produce editorial content without charging readers or accepting advertising. We believe this model is compatible with editorial integrity when disclosed clearly — which we do on every page containing affiliate links, not just this page.</p>
        <h2 className="font-heading text-xl font-bold uppercase text-gray-900 dark:text-gray-100 tracking-tight pt-4">FTC Compliance</h2>
        <p>PackEdgePost complies with the Federal Trade Commission&apos;s guidelines on disclosure of material connections between publishers and the products they recommend. Our affiliate relationship with Amazon constitutes a material connection that we are required to disclose, and we do so both on this page and on individual product pages throughout the site.</p>
        <p>For questions about our affiliate relationships, contact us at <a href="mailto:info@packedgepost.com" className="text-[#E8380D] hover:underline">info@packedgepost.com</a>.</p>
      </div>
    </div>
  )
}
