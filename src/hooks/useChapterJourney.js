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
  const [activeChapterId, setActiveChapterId]     = useState(null)
  const [expandedChapterId, setExpandedChapterId] = useState(null)

  const connectorProgress = expandedChapterId
    ? Math.round(((expandedChapterId - 1) / (totalChapters - 1)) * 100)
    : 0

  const openChapter = useCallback((id) => {
    setExpandedChapterId((prev) => (prev === id ? null : id))
    setActiveChapterId(id)
  }, [])

  const closeChapter = useCallback(() => {
    setExpandedChapterId(null)
    setActiveChapterId(null)
  }, [])

  const setHover = useCallback((id) => {
    setActiveChapterId(id)
  }, [])

  const clearHover = useCallback(() => {
    setActiveChapterId(expandedChapterId)
  }, [expandedChapterId])

  return {
    activeChapterId,
    expandedChapterId,
    connectorProgress,
    openChapter,
    closeChapter,
    setHover,
    clearHover,
  }
}
