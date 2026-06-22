import { ChapterCard }       from './ChapterCard'
import { ProgressConnector } from './ProgressConnector'

/**
 * ChapterTrack
 * Desktop: horizontal row of 7 ChapterCards connected by ProgressConnector lines.
 * Mobile:  vertical stack with left-side connector line.
 *
 * Receives state/handlers from useChapterJourney via EvolutionJourney.
 */
export function ChapterTrack({
  chapters,
  activeChapterId,
  expandedChapterId,
  openChapter,
  setHover,
  clearHover,
}) {
  return (
    <>
      {/* Desktop: horizontal track */}
      <div className="hidden md:flex items-center gap-0">
        {chapters.map((chapter, index) => {
          const isBeforeExpanded = expandedChapterId !== null && chapter.id <= expandedChapterId
          return (
            <div key={chapter.id} className="flex items-center flex-1">
              <ChapterCard
                chapter={chapter}
                isActive={activeChapterId === chapter.id}
                isExpanded={expandedChapterId === chapter.id}
                onClick={openChapter}
                onMouseEnter={setHover}
                onMouseLeave={clearHover}
              />
              {index < chapters.length - 1 && (
                <ProgressConnector
                  active={expandedChapterId !== null && index < expandedChapterId - 1}
                />
              )}
            </div>
          )
        })}
      </div>

      {/* Mobile: vertical stack with left border connector */}
      <div className="flex md:hidden">
        <div className="flex flex-col items-center mr-4 pt-5">
          <div className="w-2.5 h-2.5 rounded-full bg-teal shrink-0" />
          <div className="flex-1 w-px bg-elevated" />
        </div>
        <div className="flex flex-col gap-0 flex-1">
          {chapters.map((chapter, index) => (
            <div key={chapter.id} className="flex flex-col">
              <ChapterCard
                chapter={chapter}
                isActive={activeChapterId === chapter.id}
                isExpanded={expandedChapterId === chapter.id}
                onClick={openChapter}
                onMouseEnter={setHover}
                onMouseLeave={clearHover}
              />
              {index < chapters.length - 1 && (
                <ProgressConnector
                  active={expandedChapterId !== null && chapter.id < expandedChapterId}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
