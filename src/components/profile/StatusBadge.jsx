/**
 * StatusBadge
 * Displays the developer's current role label.
 */
export function StatusBadge({ label }) {
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-teal bg-teal/10 border border-teal/20 px-3 py-1 rounded-full">
      {label}
    </span>
  )
}
