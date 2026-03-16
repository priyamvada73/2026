import { useState, useEffect } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window === 'undefined') return 'dark'
    return (localStorage.getItem('theme') as 'dark' | 'light') ?? 'dark'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  // apply on first mount
  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return { theme, toggle: () => setTheme(t => t === 'dark' ? 'light' : 'dark') }
}
