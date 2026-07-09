'use client'

export function NewsletterForm() {
  return (
    <form className="flex flex-col sm:flex-row gap-3 max-w-md" onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        placeholder="your@email.com"
        className="flex-1 bg-gray-900 dark:bg-gray-800 border border-gray-700 dark:border-gray-600 text-gray-100 placeholder-gray-500 px-4 py-3 rounded-sm font-body text-sm focus:outline-none focus:border-[#E8380D]"
      />
      <button
        type="submit"
        className="font-heading font-bold uppercase tracking-widest text-[13px] text-white bg-[#E8380D] px-6 py-3 rounded-[8px] shadow-[3px_3px_0px_#A8260A] hover:shadow-[4px_4px_0px_#A8260A] hover:-translate-x-px hover:-translate-y-px active:shadow-[1px_1px_0px_#A8260A] active:translate-x-[2px] active:translate-y-[2px] transition-all duration-75 whitespace-nowrap"
      >
        Subscribe →
      </button>
    </form>
  )
}
