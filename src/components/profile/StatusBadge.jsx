/**
 * StatusBadge
 * Displays the developer's current role label.
 */
export function StatusBadge({ label }) {
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-amber bg-amber/10 border border-amber/20 px-3 py-1 rounded-full">
      {label}
    </span>
  )
}
