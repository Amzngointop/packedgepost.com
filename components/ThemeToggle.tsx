'use client'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (saved === 'dark' || (!saved && prefersDark)) {
      document.documentElement.classList.add('dark')
      setDark(true)
    }
  }, [])

  const toggle = () => {
    if (dark) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
    setDark(!dark)
  }

  return (
    <button onClick={toggle} aria-label="Toggle theme" className="flex items-center gap-1.5 text-sm">
      <span>☀️</span>
      <div className={`w-10 h-5 rounded-full transition-colors relative ${dark ? 'bg-orange-600' : 'bg-gray-300'}`}>
        <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform ${dark ? 'translate-x-5' : 'translate-x-0.5'}`} />
      </div>
      <span>🌙</span>
    </button>
  )
}
