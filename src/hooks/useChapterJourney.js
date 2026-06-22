import { useState, useCallback } from 'react'

/**
 * useChapterJourney
 * Manages the Evolution section's interactive state.
 *
 * activeChapterId   — chapter currently highlighted (hovered/focused)
 * expandedChapterId — chapter whose detail panel is open
 * connectorProgress — 0–100, drives CSS fill animation on ProgressConnector
 */
export function useChapterJourney(totalChapters = 7) {
  const [hoveredChapterId, setHoveredChapterId]   = useState(null)
  const [expandedChapterId, setExpandedChapterId] = useState(null)
  const [scrollChapterId, setScrollChapterId]     = useState(1)
  const [scrollProgress, setScrollProgress]       = useState(0)

  const connectorProgress = expandedChapterId
    ? Math.round(((expandedChapterId - 1) / (totalChapters - 1)) * 100)
    : Math.round(scrollProgress * 100)

  const activeChapterId = hoveredChapterId ?? expandedChapterId ?? scrollChapterId

  const openChapter = useCallback((id) => {
    setExpandedChapterId((prev) => (prev === id ? null : id))
    setHoveredChapterId(null)
  }, [])

  const closeChapter = useCallback(() => {
    setExpandedChapterId(null)
  }, [])

  const setHover = useCallback((id) => {
    setHoveredChapterId(id)
  }, [])

  const clearHover = useCallback(() => {
    setHoveredChapterId(null)
  }, [])

  return {
    activeChapterId,
    expandedChapterId,
    scrollChapterId,
    scrollProgress,
    connectorProgress,
    openChapter,
    closeChapter,
    setHover,
    clearHover,
    setScrollChapterId,
    setScrollProgress,
  }
}
