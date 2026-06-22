/**
 * Button
 * Props:
 *   variant: 'primary' | 'secondary' | 'ghost'
 *   size: 'sm' | 'md' | 'lg'
 *   as: 'button' | 'a' (default 'button')
 *   href, target, rel — used when as='a'
 *   disabled, loading — state modifiers
 */
export function Button({
  children,
  variant  = 'primary',
  size     = 'md',
  as       = 'button',
  href,
  target,
  rel,
  disabled = false,
  loading  = false,
  className = '',
  onClick,
  type     = 'button',
}) {
  const base = [
    'inline-flex items-center justify-center gap-2 font-body font-medium rounded-lg',
    'transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal/60',
    'select-none cursor-pointer',
  ].join(' ')

  const sizes = {
    sm : 'px-4 py-2 text-sm',
    md : 'px-5 py-2.5 text-sm',
    lg : 'px-7 py-3 text-base',
  }

  const variants = {
    primary   : 'bg-teal text-space hover:bg-teal/80 active:scale-[0.98]',
    secondary : 'bg-elevated text-headline border border-elevated hover:border-teal/50 hover:bg-elevated/80 active:scale-[0.98]',
    ghost     : 'text-muted hover:text-headline hover:bg-elevated/50 active:scale-[0.98]',
  }

  const disabledClasses = disabled || loading
    ? 'opacity-50 cursor-not-allowed pointer-events-none'
    : ''

  const classes = [base, sizes[size], variants[variant], disabledClasses, className]
    .filter(Boolean)
    .join(' ')

  if (as === 'a') {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={classes}
        aria-disabled={disabled}
      >
        {loading ? <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" /> : null}
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={classes}
    >
      {loading ? <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" /> : null}
      {children}
    </button>
  )
}
