export interface Article {
  slug: string
  categorySlug: string
  title: string
  metaDescription: string
  excerpt: string
  readTime: number
  updatedDate: string
  coverImage: string
}

export const articles: Article[] = [
  {
    slug: 'hanging-toiletry-bags',
    categorySlug: 'hanging-toiletry-bags',
    title: 'Best Hanging Toiletry Bags for Travel (2026)',
    metaDescription: 'Independent reviews of the best hanging toiletry bags for travel in 2026. We compare organization, durability, and water resistance across 6 top picks.',
    excerpt: 'A hanging toiletry bag transforms any hotel bathroom into a functional workspace. We reviewed six leading options to find which ones actually deliver on their organizational promises.',
    readTime: 9,
    updatedDate: '2026',
    coverImage: 'https://images.unsplash.com/photo-1553531384-397c80973a0b?w=800&q=80',
  },
  {
    slug: 'travel-neck-pillows',
    categorySlug: 'travel-neck-pillows',
    title: 'Best Travel Neck Pillows for Long Flights (2026)',
    metaDescription: 'Find the best travel neck pillow for long flights in 2026. Our guide covers memory foam, inflatable, and wrap-around styles for different sleeping positions.',
    excerpt: 'Most travel pillows end up unused after one flight. Our guide to the best neck pillows focuses on what actually works for real sleeping positions on real aircraft.',
    readTime: 10,
    updatedDate: '2026',
    coverImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
  },
  {
    slug: 'garment-bags',
    categorySlug: 'garment-bags',
    title: 'Best Garment Bags for Travel — Suits, Dresses & More (2026)',
    metaDescription: 'Best garment bags for travel in 2026. Protect suits, dresses, and formal wear on business trips and destination weddings with our top-rated picks.',
    excerpt: 'Arriving with a wrinkle-free suit or formal dress is possible without checking a bag or spending on hotel steaming. The right garment bag makes the difference.',
    readTime: 8,
    updatedDate: '2026',
    coverImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80',
  },
  {
    slug: 'travel-bottles',
    categorySlug: 'travel-bottles',
    title: 'Best Travel Bottles for Toiletries — TSA-Approved Picks (2026)',
    metaDescription: 'TSA-approved travel bottles and containers for 2026. Find leak-proof options for shampoo, conditioner, face wash, and more — plus the best travel mugs.',
    excerpt: 'TSA compliance and leak-proof performance are not the same thing. This guide covers bottles that achieve both — keeping your liquids contained at 35,000 feet.',
    readTime: 8,
    updatedDate: '2026',
    coverImage: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=800&q=80',
  },
  {
    slug: 'passport-holders',
    categorySlug: 'passport-holders',
    title: 'Best Passport Holders & Travel Wallets — RFID Protected (2026)',
    metaDescription: 'Best RFID-blocking passport holders and travel wallets for 2026. Keep documents safe at international checkpoints with our top-tested picks.',
    excerpt: 'A good passport holder keeps every document accessible at checkpoints without fumbling through a bag. These six options cover solo travelers, couples, and families.',
    readTime: 9,
    updatedDate: '2026',
    coverImage: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80',
  },
  {
    slug: 'travel-backpacks',
    categorySlug: 'travel-backpacks',
    title: 'Best Travel Backpacks — Airline Approved & Carry-On Ready (2026)',
    metaDescription: 'Best carry-on travel backpacks for 2026. Airline-approved sizes, anti-theft features, and enough capacity for 1-week trips reviewed and ranked.',
    excerpt: 'A travel backpack that qualifies as carry-on eliminates checked bag fees and carousel waits. We found the six that balance airline compliance with real packing capacity.',
    readTime: 11,
    updatedDate: '2026',
    coverImage: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
  },
]
