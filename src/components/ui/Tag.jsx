/**
 * Tag
 * Small pill badge rendered in JetBrains Mono.
 * variant: 'default' | 'teal' | 'outline'
 */
export function Tag({ children, variant = 'default', className = '' }) {
  const base = 'inline-flex items-center font-mono text-xs px-2.5 py-1 rounded-md'

  const variants = {
    default : 'bg-elevated text-muted',
    teal    : 'bg-amber/10 text-amber border border-amber/20',
    outline : 'border border-elevated text-muted',
  }

  return (
    <span className={[base, variants[variant], className].filter(Boolean).join(' ')}>
      {children}
    </span>
  )
}
