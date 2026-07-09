'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface AccordionSectionProps {
  title: string
  children: React.ReactNode
}

export function AccordionSection({ title, children }: AccordionSectionProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-t border-dashed border-[#d4d4d4] dark:border-gray-700">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-3 text-left"
      >
        <span className="font-heading text-[12px] font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300">
          {title}
        </span>
        <ChevronDown
          size={16}
          className={`text-[#E8380D] transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-4 font-body text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          {children}
        </div>
      )}
    </div>
  )
}
