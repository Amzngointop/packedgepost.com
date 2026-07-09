import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Use | PackEdgePost',
  description: 'PackEdgePost terms of use — the rules governing use of this website.',
}

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <nav className="flex items-center gap-2 font-body text-xs text-gray-500 mb-8">
        <Link href="/" className="hover:text-[#E8380D]">Home</Link>
        <span>/</span>
        <span>Terms of Use</span>
      </nav>
      <h1 className="font-heading text-4xl font-bold uppercase text-gray-900 dark:text-gray-100 tracking-tight mb-2">Terms of Use</h1>
      <p className="font-body text-xs text-gray-500 mb-8">Last updated: January 2026</p>
      <div className="space-y-6 font-body text-base text-gray-600 dark:text-gray-500 leading-relaxed">
        <p>By accessing PackEdgePost.com, you agree to be bound by these Terms of Use. If you do not agree, please do not use this site.</p>
        <h2 className="font-heading text-xl font-bold uppercase text-gray-900 dark:text-gray-100 tracking-tight pt-4">Content Use</h2>
        <p>All content on PackEdgePost.com is for informational purposes only. You may not reproduce, distribute, or republish any content from this site without prior written permission. Brief quotations with attribution are permitted for editorial and educational purposes.</p>
        <h2 className="font-heading text-xl font-bold uppercase text-gray-900 dark:text-gray-100 tracking-tight pt-4">Disclaimer of Warranties</h2>
        <p>Content on this site is provided &quot;as is&quot; without warranties of any kind. We make no representation that product information is accurate, complete, or current. Product specifications, availability, and pricing are controlled by manufacturers and retailers and may change without notice.</p>
        <h2 className="font-heading text-xl font-bold uppercase text-gray-900 dark:text-gray-100 tracking-tight pt-4">Limitation of Liability</h2>
        <p>PackEdgePost.com is not liable for any damages arising from your use of this site or from products purchased based on content on this site. Purchase decisions are your own responsibility.</p>
        <h2 className="font-heading text-xl font-bold uppercase text-gray-900 dark:text-gray-100 tracking-tight pt-4">Affiliate Links</h2>
        <p>This site contains affiliate links to Amazon.com. See our <Link href="/affiliate-disclosure" className="text-[#E8380D] hover:underline">Affiliate Disclosure</Link> for full details.</p>
        <h2 className="font-heading text-xl font-bold uppercase text-gray-900 dark:text-gray-100 tracking-tight pt-4">Contact</h2>
        <p>Questions about these terms: <a href="mailto:info@packedgepost.com" className="text-[#E8380D] hover:underline">info@packedgepost.com</a></p>
      </div>
    </div>
  )
}
