import { useState, useEffect, useRef } from 'react'

/**
 * useScrollSpy
 * Monitors a list of section IDs via IntersectionObserver.
 * Returns the ID of the currently visible section.
 *
 * navMap: maps section IDs to navbar labels.
 * e.g. { evolution: 'Journey' } — so #evolution activates the "Journey" nav item.
 */
export function useScrollSpy(sectionIds, options = {}) {
  const [activeId, setActiveId] = useState(null)
  const observerRef = useRef(null)

  useEffect(() => {
    const threshold = options.threshold ?? 0.3
    const rootMargin = options.rootMargin ?? '-72px 0px -40% 0px'

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { threshold, rootMargin }
    )

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    elements.forEach((el) => observerRef.current.observe(el))

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [sectionIds, options.threshold, options.rootMargin])

  return activeId
}
