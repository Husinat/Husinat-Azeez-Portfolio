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

        <div className="grid md:grid-cols-3 gap-6">
          {philosophyItems.map((item, index) => (
            <div
              key={item.id}
              className="group bg-surface border border-elevated rounded-xl p-6 transition-all duration-300 hover:border-teal/40 hover:bg-elevated/50"
            >
              {/* Index number */}
              <p className="font-mono text-5xl font-medium text-elevated group-hover:text-teal/20 transition-colors duration-300 mb-4 select-none leading-none">
                {String(index + 1).padStart(2, '0')}
              </p>

              <h3 className="font-display text-xl text-headline mb-3 leading-snug">
                {item.principle}
              </h3>

              <p className="font-body text-sm text-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
