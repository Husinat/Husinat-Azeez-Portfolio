/**
 * ChapterCard
 * Renders a single chapter node: number, stage name, period, one-line summary.
 * Active state: teal accent border + elevated background.
 * Click handler passed from ChapterTrack via useChapterJourney.
 */
export function ChapterCard({
  chapter,
  isActive,
  isExpanded,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <button
      type="button"
      onClick={() => onClick(chapter.id)}
      onMouseEnter={() => onMouseEnter(chapter.id)}
      onMouseLeave={onMouseLeave}
      aria-expanded={isExpanded}
      className={[
        'group flex flex-col items-start text-left rounded-xl p-4 min-w-[120px] md:min-w-0',
        'transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal/60',
        'border',
        isActive || isExpanded
          ? 'bg-elevated border-teal/50 shadow-[0_0_16px_rgba(95,191,173,0.12)]'
          : 'bg-surface border-elevated hover:border-teal/30 hover:bg-elevated/50 opacity-70 hover:opacity-100',
      ].join(' ')}
    >
      <span
        className={[
          'font-mono text-xs font-medium mb-1.5 transition-colors duration-200',
          isActive || isExpanded ? 'text-teal' : 'text-muted group-hover:text-teal',
        ].join(' ')}
      >
        {chapter.chapter}
      </span>
      <span className="font-body text-sm font-semibold text-headline leading-snug mb-1">
        {chapter.stage}
      </span>
      <span className="font-mono text-xs text-muted">
        {chapter.period}
      </span>
    </button>
  )
}
