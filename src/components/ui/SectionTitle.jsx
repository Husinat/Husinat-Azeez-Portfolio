/**
 * SectionTitle
 * Renders the section heading in DM Serif Display.
 * Optional subtitle in muted body text beneath it.
 */
export function SectionTitle({ title, subtitle, centered = false, className = '' }) {
  return (
    <div className={['mb-12', centered ? 'text-center' : '', className].filter(Boolean).join(' ')}>
      <h2 className="font-display text-3xl md:text-4xl text-headline leading-tight mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-muted text-base max-w-xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
