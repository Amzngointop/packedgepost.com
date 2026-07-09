import { ReactNode } from 'react'

interface CTAButtonProps {
  href: string
  children: ReactNode
  className?: string
  external?: boolean
}

export function CTAButton({ href, children, className = '', external = false }: CTAButtonProps) {
  const base = `inline-block font-heading font-bold uppercase tracking-widest text-[13px] text-white bg-[#E8380D] dark:bg-orange-500 px-6 py-3 rounded-[8px] shadow-[3px_3px_0px_#A8260A] dark:shadow-[3px_3px_0px_#c2410c] hover:shadow-[4px_4px_0px_#A8260A] hover:-translate-x-px hover:-translate-y-px active:shadow-[1px_1px_0px_#A8260A] active:translate-x-[2px] active:translate-y-[2px] transition-all duration-75 ${className}`

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer nofollow" className={base}>
        {children}
      </a>
    )
  }
  return <a href={href} className={base}>{children}</a>
}
