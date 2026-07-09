'use client'
import { useState } from 'react'
import Link from 'next/link'

type TripType = 'business' | 'leisure' | 'backpacking' | 'cruise'
type Duration = 'weekend' | 'week' | 'twoweeks'
type BagType = 'carryon' | 'checked'
type Concern = 'organization' | 'comfort' | 'security' | 'weight'

interface Recommendation {
  title: string
  categories: { name: string; slug: string }[]
  tips: string[]
  essentials: string[]
  guideSlug?: string
  guideTitle?: string
}

const getRecommendation = (
  trip: TripType,
  duration: Duration,
  bag: BagType,
  concern: Concern
): Recommendation => {
  if (trip === 'business') {
    if (bag === 'carryon') {
      return {
        title: 'Business Carry-On System',
        categories: [
          { name: 'Garment Bags', slug: 'garment-bags' },
          { name: 'Travel Backpacks', slug: 'travel-backpacks' },
          { name: 'Passport Holders', slug: 'passport-holders' },
        ],
        tips: [
          'Use a garment bag inside your carry-on to keep suits wrinkle-free',
          'Pack a universal adapter — client offices use every outlet type',
          'TSA PreCheck saves 20+ minutes at every checkpoint',
        ],
        essentials: ['Garment bag', 'Laptop backpack', 'RFID passport wallet', 'TSA-approved toiletry kit'],
        guideSlug: 'business-traveler-packing-list',
        guideTitle: 'The Ultimate Business Traveler Packing List',
      }
    }
    return {
      title: 'Business Full-Service System',
      categories: [
        { name: 'Garment Bags', slug: 'garment-bags' },
        { name: 'Travel Backpacks', slug: 'travel-backpacks' },
        { name: 'Passport Holders', slug: 'passport-holders' },
      ],
      tips: [
        'Use compression packing cubes for casual clothes, flat-pack for suits',
        'Dedicate one packing cube to each day of the trip',
        'Ship a garment bag to your hotel in advance for long business trips',
      ],
      essentials: ['Garment bag', 'Compression packing cubes', 'RFID wallet', 'Hanging toiletry bag'],
      guideSlug: 'business-traveler-packing-list',
      guideTitle: 'The Ultimate Business Traveler Packing List',
    }
  }

  if (trip === 'backpacking') {
    return {
      title: 'Ultralight Backpacker System',
      categories: [
        { name: 'Travel Backpacks', slug: 'travel-backpacks' },
        { name: 'Hanging Toiletry Bags', slug: 'hanging-toiletry-bags' },
        { name: 'Travel Bottles', slug: 'travel-bottles' },
      ],
      tips: [
        'Switch all liquids to solid bar alternatives — eliminates TSA bag and saves weight',
        'One compression cube per clothing category keeps your pack organized on the road',
        concern === 'weight' ? 'Weigh everything before packing — even 50g savings add up over 2+ weeks' : 'A 35L backpack fits in every overhead bin worldwide',
      ],
      essentials: ['35L travel backpack', 'Packing cubes set', 'Solid shampoo bar', 'Lightweight hanging toiletry bag'],
      guideSlug: 'pack-carry-on-two-weeks',
      guideTitle: 'How to Pack a Carry-On for a 2-Week Trip',
    }
  }

  if (trip === 'cruise') {
    return {
      title: 'Cruise Cabin Organization System',
      categories: [
        { name: 'Hanging Toiletry Bags', slug: 'hanging-toiletry-bags' },
        { name: 'Travel Bottles', slug: 'travel-bottles' },
        { name: 'Garment Bags', slug: 'garment-bags' },
      ],
      tips: [
        'A hanging toiletry bag is essential — cruise cabin bathrooms have minimal counter space',
        'Packing cubes keep clothes organized in small cabin drawers',
        'Formal night requires a garment bag — cruise dressing codes still exist on many lines',
      ],
      essentials: ['Hanging toiletry bag', 'Packing cubes', 'Garment bag for formal nights', 'Luggage tags with ship + cabin number'],
      guideSlug: 'pack-carry-on-two-weeks',
      guideTitle: 'How to Pack a Carry-On for a 2-Week Trip',
    }
  }

  // Leisure
  if (duration === 'weekend') {
    return {
      title: 'Weekend Getaway Kit',
      categories: [
        { name: 'Travel Backpacks', slug: 'travel-backpacks' },
        { name: 'Hanging Toiletry Bags', slug: 'hanging-toiletry-bags' },
        { name: concern === 'security' ? 'Passport Holders' : 'Travel Bottles', slug: concern === 'security' ? 'passport-holders' : 'travel-bottles' },
      ],
      tips: [
        'A 35L backpack easily handles a 2-3 day leisure trip — no checked bag needed',
        'Keep a pre-packed toiletry bag ready so weekend trips launch in minutes',
        concern === 'comfort' ? 'Pack a travel neck pillow — even short flights are more comfortable with proper neck support' : 'Front pockets and interior zipper pouches keep valuables accessible',
      ],
      essentials: ['35L travel backpack', 'Compact toiletry bag', '2-3 outfit changes', 'Portable charger'],
      guideSlug: 'pack-carry-on-two-weeks',
      guideTitle: 'How to Pack a Carry-On for a 2-Week Trip',
    }
  }

  if (duration === 'twoweeks') {
    return {
      title: '2-Week Carry-On System',
      categories: [
        { name: 'Travel Backpacks', slug: 'travel-backpacks' },
        { name: 'Hanging Toiletry Bags', slug: 'hanging-toiletry-bags' },
        { name: 'Travel Neck Pillows', slug: 'travel-neck-pillows' },
      ],
      tips: [
        'The 5-4-3-2-1 capsule wardrobe formula fits 14 days in a single carry-on',
        'Plan one laundry session mid-trip — most hotels and hostels have laundry facilities',
        concern === 'organization' ? 'Color-coded packing cubes by outfit type eliminate mid-trip suitcase chaos' : 'Rolling vs. folding: roll casual items, flat-fold any structured garments',
      ],
      essentials: ['Compression packing cubes', 'Hanging toiletry bag', 'Travel neck pillow for long flights', 'RFID passport wallet'],
      guideSlug: 'pack-carry-on-two-weeks',
      guideTitle: 'How to Pack a Carry-On for a 2-Week Trip',
    }
  }

  // Default leisure week
  return {
    title: '1-Week Leisure System',
    categories: [
      { name: 'Travel Backpacks', slug: 'travel-backpacks' },
      { name: 'Hanging Toiletry Bags', slug: 'hanging-toiletry-bags' },
      { name: 'Travel Neck Pillows', slug: 'travel-neck-pillows' },
    ],
    tips: [
      'A 35L travel backpack handles a full week without checking a bag',
      'Keep your toiletry bag pre-packed between trips to make packing faster',
      'Download your boarding pass to your phone before leaving home',
    ],
    essentials: ['35L travel backpack', 'Hanging toiletry bag', 'Travel neck pillow', 'Passport holder'],
    guideSlug: 'tsa-311-liquids-rule-guide',
    guideTitle: 'TSA 3-1-1 Liquids Rule — Complete Guide',
  }
}

export function NicheCalculator() {
  const [trip, setTrip] = useState<TripType | null>(null)
  const [duration, setDuration] = useState<Duration | null>(null)
  const [bag, setBag] = useState<BagType | null>(null)
  const [concern, setConcern] = useState<Concern | null>(null)
  const [result, setResult] = useState<Recommendation | null>(null)
  const [loading, setLoading] = useState(false)

  const canSubmit = trip && duration && bag && concern

  const handleBuild = () => {
    if (!canSubmit) return
    setLoading(true)
    setResult(null)
    setTimeout(() => {
      setResult(getRecommendation(trip!, duration!, bag!, concern!))
      setLoading(false)
    }, 600)
  }

  const reset = () => {
    setTrip(null)
    setDuration(null)
    setBag(null)
    setConcern(null)
    setResult(null)
  }

  const BtnGroup = <T extends string>({
    options,
    value,
    onChange,
  }: {
    options: { value: T; label: string }[]
    value: T | null
    onChange: (v: T) => void
  }) => (
    <div className="flex flex-wrap gap-2">
      {options.map(opt => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={`px-4 py-2 font-heading text-[12px] font-bold uppercase tracking-wider rounded-sm border transition-all ${
            value === opt.value
              ? 'bg-[#E8380D] border-[#E8380D] text-white'
              : 'border-gray-600 text-gray-300 hover:border-[#E8380D] hover:text-white'
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )

  return (
    <section id="packing-calculator" className="bg-[#0B1929] py-16">
      <div className="max-w-4xl mx-auto px-6">
        <span className="text-[10px] font-heading font-bold uppercase tracking-[0.15em] text-[#E8380D] block mb-2">
          Interactive Tool
        </span>
        <h2 className="font-heading text-4xl font-bold uppercase text-white tracking-tight mb-2">
          Trip Packing Calculator
        </h2>
        <p className="font-body text-gray-400 text-sm mb-10">
          Answer four questions and get a personalized packing system recommendation.
        </p>

        {!result ? (
          <div className="space-y-8">
            <div>
              <p className="font-heading text-[11px] uppercase tracking-widest text-gray-400 mb-3">1. Trip Type</p>
              <BtnGroup
                options={[
                  { value: 'business', label: 'Business' },
                  { value: 'leisure', label: 'Leisure' },
                  { value: 'backpacking', label: 'Backpacking' },
                  { value: 'cruise', label: 'Cruise' },
                ]}
                value={trip}
                onChange={setTrip}
              />
            </div>
            <div>
              <p className="font-heading text-[11px] uppercase tracking-widest text-gray-400 mb-3">2. Duration</p>
              <BtnGroup
                options={[
                  { value: 'weekend', label: 'Weekend' },
                  { value: 'week', label: '1 Week' },
                  { value: 'twoweeks', label: '2+ Weeks' },
                ]}
                value={duration}
                onChange={setDuration}
              />
            </div>
            <div>
              <p className="font-heading text-[11px] uppercase tracking-widest text-gray-400 mb-3">3. Bag</p>
              <BtnGroup
                options={[
                  { value: 'carryon', label: 'Carry-On Only' },
                  { value: 'checked', label: 'Checked Bag' },
                ]}
                value={bag}
                onChange={setBag}
              />
            </div>
            <div>
              <p className="font-heading text-[11px] uppercase tracking-widest text-gray-400 mb-3">4. Main Concern</p>
              <BtnGroup
                options={[
                  { value: 'organization', label: 'Organization' },
                  { value: 'comfort', label: 'Comfort' },
                  { value: 'security', label: 'Security' },
                  { value: 'weight', label: 'Minimal Weight' },
                ]}
                value={concern}
                onChange={setConcern}
              />
            </div>

            <button
              onClick={handleBuild}
              disabled={!canSubmit || loading}
              className={`font-heading font-bold uppercase tracking-widest text-sm text-white px-8 py-3 rounded-[8px] transition-all duration-75 ${
                canSubmit
                  ? 'bg-[#E8380D] shadow-[3px_3px_0px_#A8260A] hover:shadow-[4px_4px_0px_#A8260A] hover:-translate-x-px hover:-translate-y-px active:shadow-[1px_1px_0px_#A8260A] active:translate-x-[2px] active:translate-y-[2px]'
                  : 'bg-gray-700 cursor-not-allowed shadow-none'
              }`}
            >
              {loading ? 'Building…' : 'Build My List →'}
            </button>
          </div>
        ) : (
          <div className="animate-fadeIn">
            <div className="bg-[#111827] border border-gray-700/50 rounded-sm p-8">
              <span className="text-[10px] font-heading uppercase tracking-widest text-[#E8380D]">Your System</span>
              <h3 className="font-heading text-3xl font-bold uppercase text-white mt-1 mb-6">
                {result.title}
              </h3>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <p className="font-heading text-[11px] uppercase tracking-wider text-gray-500 mb-3">Top Categories</p>
                  <ul className="space-y-2">
                    {result.categories.map(cat => (
                      <li key={cat.slug}>
                        <Link
                          href={`/best/${cat.slug}`}
                          className="font-body text-sm text-[#E8380D] hover:underline"
                        >
                          {cat.name} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-heading text-[11px] uppercase tracking-wider text-gray-500 mb-3">Packing Tips</p>
                  <ul className="space-y-2">
                    {result.tips.map((tip, i) => (
                      <li key={i} className="font-body text-sm text-gray-300 flex gap-2">
                        <span className="text-[#E8380D] flex-shrink-0">→</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-heading text-[11px] uppercase tracking-wider text-gray-500 mb-3">Essentials</p>
                  <ul className="space-y-2">
                    {result.essentials.map((item, i) => (
                      <li key={i} className="font-body text-sm text-gray-300 flex gap-2">
                        <span className="text-[#E8380D]">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {result.guideSlug && (
                <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <p className="font-body text-sm text-gray-400">
                    Read the full guide for step-by-step instructions.
                  </p>
                  <Link
                    href={`/guides/${result.guideSlug}`}
                    className="font-heading font-bold uppercase tracking-widest text-[13px] text-white bg-[#E8380D] px-6 py-3 rounded-[8px] shadow-[3px_3px_0px_#A8260A] hover:shadow-[4px_4px_0px_#A8260A] hover:-translate-x-px hover:-translate-y-px transition-all duration-75 whitespace-nowrap"
                  >
                    Read the Guide →
                  </Link>
                </div>
              )}
            </div>

            <button
              onClick={reset}
              className="mt-4 font-heading text-[12px] uppercase tracking-wider text-gray-500 hover:text-gray-300 transition-colors"
            >
              ← Start Over
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
