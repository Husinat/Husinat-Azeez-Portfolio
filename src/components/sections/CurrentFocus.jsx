import { SectionTitle }                    from '../ui/SectionTitle'
import { Tag }                             from '../ui/Tag'
import { currentFocus, currentlyLearning } from '../../data/currentFocus'

const focusGroups = [
  {
    title: 'Building',
    description: 'Product features and full-stack application flows.',
    items: ['Full-Stack Development', 'React Ecosystem', 'Authentication Systems'],
  },
  {
    title: 'Learning',
    description: 'Backend patterns, data modeling, and system structure.',
    items: currentlyLearning,
  },
  {
    title: 'Improving',
    description: 'API clarity, maintainability, and production readiness.',
    items: currentFocus.filter((item) => ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'].includes(item)),
  },
]

/**
 * CurrentFocus section
 * Current work grouped by intent.
 */
export function CurrentFocus() {
  return (
    <section id="focus" className="section-band section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="Current Focus"
          subtitle="The areas I am actively strengthening while building full-stack products."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {focusGroups.map((group) => (
            <article key={group.title} className="rounded-2xl border border-elevated bg-surface/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-amber/35">
              <p className="font-mono text-xs uppercase tracking-widest text-amber">{group.title}</p>
              <p className="mt-3 min-h-12 font-body text-sm leading-relaxed text-muted">
                {group.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item} variant={group.title === 'Learning' ? 'outline' : 'teal'}>
                    {item}
                  </Tag>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
