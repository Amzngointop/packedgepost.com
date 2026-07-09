'use client'

export function ContactForm() {
  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label className="block font-heading text-[11px] uppercase tracking-wider text-gray-500 dark:text-gray-500 mb-2">Name</label>
        <input
          type="text"
          className="w-full bg-white dark:bg-gray-900 border border-[#e5e5e5] dark:border-gray-700 text-gray-900 dark:text-gray-100 px-4 py-3 rounded-sm font-body text-sm focus:outline-none focus:border-[#E8380D]"
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="block font-heading text-[11px] uppercase tracking-wider text-gray-500 dark:text-gray-500 mb-2">Email</label>
        <input
          type="email"
          className="w-full bg-white dark:bg-gray-900 border border-[#e5e5e5] dark:border-gray-700 text-gray-900 dark:text-gray-100 px-4 py-3 rounded-sm font-body text-sm focus:outline-none focus:border-[#E8380D]"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label className="block font-heading text-[11px] uppercase tracking-wider text-gray-500 dark:text-gray-500 mb-2">Subject</label>
        <select className="w-full bg-white dark:bg-gray-900 border border-[#e5e5e5] dark:border-gray-700 text-gray-900 dark:text-gray-100 px-4 py-3 rounded-sm font-body text-sm focus:outline-none focus:border-[#E8380D]">
          <option>Product question</option>
          <option>Content correction</option>
          <option>Product suggestion</option>
          <option>Partnership inquiry</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label className="block font-heading text-[11px] uppercase tracking-wider text-gray-500 dark:text-gray-500 mb-2">Message</label>
        <textarea
          rows={5}
          className="w-full bg-white dark:bg-gray-900 border border-[#e5e5e5] dark:border-gray-700 text-gray-900 dark:text-gray-100 px-4 py-3 rounded-sm font-body text-sm focus:outline-none focus:border-[#E8380D] resize-none"
          placeholder="Your message…"
        />
      </div>
      <button
        type="submit"
        className="font-heading font-bold uppercase tracking-widest text-[13px] text-white bg-[#E8380D] px-8 py-3 rounded-[8px] shadow-[3px_3px_0px_#A8260A] hover:shadow-[4px_4px_0px_#A8260A] hover:-translate-x-px hover:-translate-y-px active:shadow-[1px_1px_0px_#A8260A] active:translate-x-[2px] active:translate-y-[2px] transition-all duration-75"
      >
        Send Message →
      </button>
    </form>
  )
}
