import { useState, useEffect } from 'react'

/**
 * Hook de media query responsivo
 * @param {string} query - ex: '(min-width: 768px)'
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [matches, query])

  return matches
}

export function useIsMobile() {
  return !useMediaQuery('(min-width: 768px)')
}
