/**
 * ProgressConnector
 * The horizontal line segment between two ChapterCards on desktop.
 * On mobile it renders as a vertical segment on the left side.
 *
 * active: whether the segment is "filled" (chapters before the expanded one).
 */
export function ProgressConnector({ active = false }) {
  return (
    <>
      {/* Desktop: horizontal line */}
      <div className="hidden md:flex items-center flex-1 min-w-[16px]">
        <div
          className={[
            'h-px w-full transition-all duration-700',
            active ? 'bg-teal' : 'bg-elevated',
          ].join(' ')}
        />
      </div>

      {/* Mobile: vertical line segment */}
      <div className="flex md:hidden justify-center w-full">
        <div
          className={[
            'w-px h-8 transition-all duration-700',
            active ? 'bg-teal' : 'bg-elevated',
          ].join(' ')}
        />
      </div>
    </>
  )
}
