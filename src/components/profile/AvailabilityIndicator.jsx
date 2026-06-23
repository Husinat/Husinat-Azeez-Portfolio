/**
 * AvailabilityIndicator
 * Pulsing green dot + availability text.
 */
export function AvailabilityIndicator({ text }) {
  return (
    <div className="inline-flex items-center gap-2 text-sm text-muted">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber opacity-60" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber" />
      </span>
      <span>{text}</span>
    </div>
  )
}
