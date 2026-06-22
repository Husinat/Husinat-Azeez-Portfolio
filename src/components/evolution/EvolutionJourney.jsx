import { ChapterTrack }      from './ChapterTrack'
import { ChapterDetail }     from './ChapterDetail'
import { useChapterJourney } from '../../hooks/useChapterJourney'

/**
 * EvolutionJourney
 * Orchestrates the full Evolution section:
 *   - ChapterTrack (7 cards + connectors)
 *   - ChapterDetail panel (one open at a time)
 *
 * Uses useChapterJourney for all interactive state.
 */
export function EvolutionJourney({ chapters }) {
  const {
    activeChapterId,
    expandedChapterId,
    openChapter,
    setHover,
    clearHover,
  } = useChapterJourney(chapters.length)

  const expandedChapter = chapters.find((c) => c.id === expandedChapterId) ?? null

  return (
    <div>
      <ChapterTrack
        chapters={chapters}
        activeChapterId={activeChapterId}
        expandedChapterId={expandedChapterId}
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
