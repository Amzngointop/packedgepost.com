import type { Metadata } from 'next'
import { Barlow_Condensed, Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-barlow',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'PackEdgePost — Pack Smarter. Travel Lighter.',
    template: '%s | PackEdgePost',
  },
  description: 'Independent reviews of travel organizers, bags & accessories — so your next trip starts before you leave home.',
  openGraph: {
    siteName: 'PackEdgePost',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${barlowCondensed.variable} ${inter.variable} bg-white text-gray-900 font-body`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
