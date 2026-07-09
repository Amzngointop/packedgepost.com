'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
  title?: string
}

export function FAQ({ items, title = 'Frequently Asked Questions' }: FAQProps) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div>
      <h2 className="font-heading text-3xl font-bold uppercase text-gray-900 dark:text-gray-100 tracking-tight mb-6">
        {title}
      </h2>
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="border border-[#e5e5e5] dark:border-gray-800 rounded-sm bg-white dark:bg-gray-900">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left"
            >
              <span className="font-heading text-sm font-bold uppercase tracking-wide text-gray-900 dark:text-gray-100 pr-4">
                {item.question}
              </span>
              <ChevronDown
                size={18}
                className={`flex-shrink-0 text-[#E8380D] transition-transform ${open === i ? 'rotate-180' : ''}`}
              />
            </button>
            {open === i && (
              <div className="px-5 pb-4">
                <p className="font-body text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
