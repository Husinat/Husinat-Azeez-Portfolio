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
  connectorProgress = 0,
  openChapter,
  setHover,
  clearHover,
}) {
  const getSegmentProgress = (index) => {
    const segmentStart = (index / (chapters.length - 1)) * 100
    const segmentEnd = ((index + 1) / (chapters.length - 1)) * 100
    const progress = ((connectorProgress - segmentStart) / (segmentEnd - segmentStart)) * 100
    return Math.min(Math.max(progress, 0), 100)
  }

  return (
    <>
      {/* Desktop: horizontal track */}
      <div className="hidden md:flex items-stretch gap-0 rounded-2xl border border-elevated/70 bg-space/30 p-4">
        {chapters.map((chapter, index) => {
          return (
            <div key={chapter.id} className="flex items-center flex-1">
              <ChapterCard
                chapter={chapter}
                isActive={activeChapterId === chapter.id}
                isExpanded={expandedChapterId === chapter.id}
                isPassed={connectorProgress >= ((chapter.id - 1) / (chapters.length - 1)) * 100}
                onClick={openChapter}
                onMouseEnter={setHover}
                onMouseLeave={clearHover}
              />
              {index < chapters.length - 1 && (
                <ProgressConnector
                  progress={getSegmentProgress(index)}
                />
              )}
            </div>
          )
        })}
      </div>

      {/* Mobile: vertical stack with left border connector */}
      <div className="flex rounded-2xl border border-elevated/70 bg-space/30 p-4 md:hidden">
        <div className="mr-4 flex flex-col items-center pt-5">
          <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-teal shadow-[0_0_16px_rgba(95,191,173,0.45)]" />
          <div className="w-px flex-1 bg-elevated" />
        </div>
        <div className="flex flex-col gap-0 flex-1">
          {chapters.map((chapter, index) => (
            <div key={chapter.id} className="flex flex-col">
              <ChapterCard
                chapter={chapter}
                isActive={activeChapterId === chapter.id}
                isExpanded={expandedChapterId === chapter.id}
                isPassed={connectorProgress >= ((chapter.id - 1) / (chapters.length - 1)) * 100}
                onClick={openChapter}
                onMouseEnter={setHover}
                onMouseLeave={clearHover}
              />
              {index < chapters.length - 1 && (
                <ProgressConnector
                  progress={getSegmentProgress(index)}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
