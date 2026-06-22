/**
 * ProgressConnector
 * The horizontal line segment between two ChapterCards on desktop.
 * On mobile it renders as a vertical segment on the left side.
 *
 * progress: 0-100 fill amount for the segment.
 */
export function ProgressConnector({ progress = 0 }) {
  const fill = `${Math.min(Math.max(progress, 0), 100)}%`

  return (
    <>
      {/* Desktop: horizontal line */}
      <div className="hidden md:flex items-center flex-1 min-w-[18px] px-1">
        <div className="h-px w-full overflow-hidden rounded-full bg-elevated">
          <div
            className="h-full bg-teal transition-all duration-500 ease-out"
            style={{ width: fill }}
          />
        </div>
      </div>

      {/* Mobile: vertical line segment */}
      <div className="flex md:hidden justify-center w-full">
        <div className="h-8 w-px overflow-hidden rounded-full bg-elevated">
          <div
            className="w-full bg-teal transition-all duration-500 ease-out"
            style={{ height: fill }}
          />
        </div>
      </div>
    </>
  )
}
