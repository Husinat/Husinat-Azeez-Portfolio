/**
 * Card
 * Base glass card with optional hover state and padding.
 * variant: 'default' | 'hover'
 */
export function Card({ children, variant = 'default', className = '', as: Tag = 'div', ...props }) {
  const base = 'bg-surface border border-elevated rounded-xl'
  const variants = {
    default : '',
    hover   : 'transition-all duration-300 hover:border-amber/40 hover:bg-elevated/50',
  }

  return (
    <Tag
      className={[base, variants[variant], className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </Tag>
  )
}
