import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | PackEdgePost',
  description: 'PackEdgePost privacy policy — how we collect, use, and protect your information.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <nav className="flex items-center gap-2 font-body text-xs text-gray-500 mb-8">
        <Link href="/" className="hover:text-[#E8380D]">Home</Link>
        <span>/</span>
        <span>Privacy Policy</span>
      </nav>
      <h1 className="font-heading text-4xl font-bold uppercase text-gray-900 dark:text-gray-100 tracking-tight mb-2">Privacy Policy</h1>
      <p className="font-body text-xs text-gray-500 mb-8">Last updated: January 2026</p>
      <div className="space-y-6 font-body text-base text-gray-600 dark:text-gray-500 leading-relaxed">
        <p>PackEdgePost.com (&quot;PackEdgePost,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
        <h2 className="font-heading text-xl font-bold uppercase text-gray-900 dark:text-gray-100 tracking-tight pt-4">Information We Collect</h2>
        <p>We may collect information you provide directly, such as your email address if you subscribe to our newsletter or contact us. We also collect non-personally identifiable information through standard web analytics, including pages visited, time on site, and referring URLs.</p>
        <h2 className="font-heading text-xl font-bold uppercase text-gray-900 dark:text-gray-100 tracking-tight pt-4">Cookies and Tracking</h2>
        <p>We use standard web analytics tools that may set cookies on your device. These cookies help us understand how visitors use our site. We do not sell or share this data with third parties for advertising purposes. You can disable cookies in your browser settings, though this may affect site functionality.</p>
        <h2 className="font-heading text-xl font-bold uppercase text-gray-900 dark:text-gray-100 tracking-tight pt-4">Third-Party Links</h2>
        <p>Our site contains links to Amazon.com and other third-party sites. These sites have their own privacy policies, which we encourage you to review. We are not responsible for the privacy practices of linked sites.</p>
        <h2 className="font-heading text-xl font-bold uppercase text-gray-900 dark:text-gray-100 tracking-tight pt-4">Contact</h2>
        <p>For privacy-related inquiries, contact <a href="mailto:info@packedgepost.com" className="text-[#E8380D] hover:underline">info@packedgepost.com</a>.</p>
      </div>
    </div>
  )
}
