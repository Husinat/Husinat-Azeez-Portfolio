import { ChapterTrack }      from './ChapterTrack'
import { ChapterDetail }     from './ChapterDetail'
import { useChapterJourney } from '../../hooks/useChapterJourney'
import { useEffect, useRef } from 'react'

/**
 * EvolutionJourney
 * Orchestrates the full Evolution section:
 *   - ChapterTrack (7 cards + connectors)
 *   - ChapterDetail panel (one open at a time)
 *
 * Uses useChapterJourney for all interactive state.
 */
export function EvolutionJourney({ chapters }) {
  const journeyRef = useRef(null)
  const {
    activeChapterId,
    expandedChapterId,
    scrollChapterId,
    connectorProgress,
    openChapter,
    setHover,
    clearHover,
    setScrollChapterId,
    setScrollProgress,
  } = useChapterJourney(chapters.length)

  const expandedChapter = chapters.find((c) => c.id === expandedChapterId) ?? null

  useEffect(() => {
    const updateProgress = () => {
      if (!journeyRef.current) return

      const rect = journeyRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight || 1
      const travel = Math.max(rect.height - viewportHeight * 0.4, 1)
      const rawProgress = (viewportHeight * 0.55 - rect.top) / travel
      const progress = Math.min(Math.max(rawProgress, 0), 1)
      const chapterIndex = Math.min(
        chapters.length - 1,
        Math.max(0, Math.floor(progress * chapters.length))
      )

      setScrollProgress(progress)
      setScrollChapterId(chapters[chapterIndex]?.id ?? 1)
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)

    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [chapters, setScrollChapterId, setScrollProgress])

  return (
    <div ref={journeyRef} className="relative">
      <div className="mb-7 grid gap-5 rounded-2xl border border-elevated/70 bg-space/35 p-5 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-teal">
            Signature journey
          </p>
          <p className="mt-2 max-w-2xl font-body text-base leading-8 text-muted">
            Scroll through the path, then open any chapter to read the decisions, skills, and projects behind that stage.
          </p>
        </div>
        <div className="rounded-xl border border-elevated bg-surface/80 p-4">
          <div className="mb-2 flex items-center justify-between gap-8 font-mono text-xs text-muted">
            <span className="text-teal">Chapter {String(scrollChapterId).padStart(2, '0')}</span>
            <span>{chapters.length.toString().padStart(2, '0')} total</span>
          </div>
          <span className="block h-1 w-40 overflow-hidden rounded-full bg-elevated">
            <span
              className="block h-full rounded-full bg-teal transition-all duration-300"
              style={{ width: `${connectorProgress}%` }}
            />
          </span>
        </div>
      </div>

      <ChapterTrack
        chapters={chapters}
        activeChapterId={activeChapterId}
        expandedChapterId={expandedChapterId}
        connectorProgress={connectorProgress}
        openChapter={openChapter}
        setHover={setHover}
        clearHover={clearHover}
      />

      {/* Detail panel — slides content, does not flicker */}
      <div
        className={[
          'transition-all duration-300 overflow-hidden',
          expandedChapter ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
        aria-live="polite"
      >
        {expandedChapter && (
          <ChapterDetail chapter={expandedChapter} />
        )}
      </div>
    </div>
  )
}
