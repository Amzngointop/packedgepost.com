import type { Metadata } from 'next'
import Link from 'next/link'
import { ContactForm } from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Reach Us — Contact PackEdgePost | PackEdgePost',
  description: 'Contact the PackEdgePost editorial team with questions, product suggestions, or corrections.',
}

export default function ReachUsPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <nav className="flex items-center gap-2 font-body text-xs text-gray-500 mb-8">
        <Link href="/" className="hover:text-[#E8380D]">Home</Link>
        <span>/</span>
        <span>Reach Us</span>
      </nav>

      <span className="block font-heading text-[11px] uppercase tracking-[0.15em] text-[#E8380D] mb-3">Contact</span>
      <h1 className="font-heading text-5xl font-bold uppercase text-gray-900 dark:text-gray-100 tracking-tight mb-4">
        Reach Us
      </h1>
      <p className="font-body text-base text-gray-600 dark:text-gray-500 mb-10">
        Have a question about a product, spotted an error, or want to suggest something we should cover? We&apos;d like to hear from you.
      </p>

      <div className="space-y-6 mb-10">
        <div className="border-l-4 border-[#E8380D] pl-5">
          <p className="font-heading text-[11px] uppercase tracking-wider text-gray-500 dark:text-gray-500 mb-1">Email</p>
          <a href="mailto:info@packedgepost.com" className="font-body text-base text-[#E8380D] hover:underline">
            info@packedgepost.com
          </a>
        </div>
        <div className="border-l-4 border-[#E8380D] pl-5">
          <p className="font-heading text-[11px] uppercase tracking-wider text-gray-500 dark:text-gray-500 mb-1">Address</p>
          <p className="font-body text-base text-gray-600 dark:text-gray-500">
            742 Evergreen Terrace<br />Springfield, IL 62701
          </p>
        </div>
      </div>

      <ContactForm />
    </div>
  )
}
