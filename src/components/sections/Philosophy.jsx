import { SectionTitle }   from '../ui/SectionTitle'
import { philosophyItems } from '../../data/philosophy'

/**
 * Philosophy section
 * 3 development philosophy principles.
 * Editorial layout: large principle number, principle title, description.
 */
export function Philosophy() {
  return (
    <section id="philosophy" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Development Philosophy"
          subtitle="The principles I build by."
        />

        <div className="overflow-hidden rounded-2xl border border-elevated bg-surface/70">
          {philosophyItems.map((item, index) => (
            <article
              key={item.id}
              className="group grid gap-4 border-b border-elevated p-6 transition-colors duration-300 last:border-b-0 hover:bg-elevated/35 md:grid-cols-[120px_1fr]"
            >
              {/* Index number */}
              <p className="select-none font-mono text-5xl font-medium leading-none text-elevated transition-colors duration-300 group-hover:text-amber/25 md:text-6xl">
                {String(index + 1).padStart(2, '0')}
              </p>

              <div className="max-w-2xl">
                <h3 className="mb-3 font-display text-2xl leading-snug text-headline md:text-3xl">
                  {item.principle}
                </h3>

                <p className="font-body text-sm leading-7 text-muted md:text-base">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
