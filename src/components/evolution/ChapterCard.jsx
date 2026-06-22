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
  isPassed,
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
        'group relative flex min-w-[120px] flex-col items-start overflow-hidden rounded-xl p-4 text-left md:min-w-0',
        'transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal/60',
        'border',
        isActive || isExpanded
          ? 'bg-surface border-teal/60 shadow-[0_18px_45px_rgba(0,0,0,0.18)]'
          : 'bg-space/35 border-elevated hover:border-teal/35 hover:bg-surface/80 opacity-78 hover:opacity-100',
      ].join(' ')}
    >
      <span
        className={[
          'absolute inset-x-0 top-0 h-0.5 origin-left bg-teal transition-transform duration-500',
          isPassed || isExpanded ? 'scale-x-100' : 'scale-x-0',
        ].join(' ')}
      />
      <div className="mb-3 flex w-full items-center justify-between gap-3">
        <span
          className={[
            'grid h-8 w-8 place-items-center rounded-full border font-mono text-xs font-medium transition-colors duration-200',
            isActive || isExpanded ? 'border-teal/50 bg-teal/10 text-teal' : 'border-elevated bg-surface/70 text-muted group-hover:text-teal',
          ].join(' ')}
        >
          {chapter.chapter}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted/60">
          {chapter.period}
        </span>
      </div>
      <span className="mb-1 font-body text-sm font-semibold leading-snug text-headline">
        {chapter.stage}
      </span>
      <span className="hidden text-xs leading-relaxed text-muted/75 lg:line-clamp-2 lg:block">
        {chapter.summary}
      </span>
      <span
        className={[
          'mt-3 font-mono text-[10px] uppercase tracking-widest transition-all duration-300',
          isActive || isExpanded ? 'text-teal opacity-100' : 'text-muted/50 opacity-0 group-hover:opacity-100',
        ].join(' ')}
      >
        {isExpanded ? 'Reading' : 'Open chapter'}
      </span>
    </button>
  )
}
