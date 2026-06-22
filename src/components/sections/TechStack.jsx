import { useState }  from 'react'
import * as SiIcons  from 'react-icons/si'
import { SectionTitle } from '../ui/SectionTitle'
import { techStack }    from '../../data/techStack'

/**
 * TechCard
 * Renders one technology: official SVG icon (react-icons/si) + name in JetBrains Mono.
 * Icon resolves dynamically from the icon string key.
 */
function TechCard({ item }) {
  const IconComponent = SiIcons[item.icon]

  return (
    <div className="group flex min-h-32 flex-col items-center justify-center gap-3 rounded-xl border border-elevated bg-surface p-4 transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:bg-elevated/50">
      {IconComponent ? (
        <IconComponent
          size={34}
          style={{ color: item.color }}
          className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
        />
      ) : (
        <div className="w-8 h-8 rounded bg-elevated flex items-center justify-center">
          <span className="font-mono text-xs text-muted">{item.name[0]}</span>
        </div>
      )}
      <span className="font-mono text-xs text-muted group-hover:text-headline transition-colors duration-300 text-center leading-tight">
        {item.name}
      </span>
    </div>
  )
}

/**
 * TechStack section
 * Tabbed: Frontend · Backend · Database · Tools
 * Each tab renders TechCard[] for that category.
 */
export function TechStack() {
  const categories = ['All', ...techStack.map((group) => group.category)]
  const allItems = techStack.flatMap((group) => group.items)
  const [activeCategory, setActiveCategory] = useState('All')
  const activeItems = activeCategory === 'All'
    ? allItems
    : techStack.find((g) => g.category === activeCategory)?.items ?? []

  return (
    <section id="stack" className="section-band-soft section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Tech Stack"
          subtitle="The technologies I use to design, build, connect, and ship web applications."
        />

        <div className="mb-8 flex flex-col gap-5 rounded-2xl border border-elevated/80 bg-space/25 p-4 md:flex-row md:items-center md:justify-between">
          {/* Tabs */}
          <div className="flex w-fit flex-wrap gap-1 rounded-xl border border-elevated bg-surface p-1">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={[
                  'rounded-lg px-4 py-2 font-mono text-xs transition-all duration-200',
                  activeCategory === category
                    ? 'bg-elevated text-headline shadow-[0_8px_24px_rgba(0,0,0,0.18)]'
                    : 'text-muted hover:text-headline',
                ].join(' ')}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="max-w-sm">
            <p className="font-mono text-xs uppercase tracking-widest text-teal">
              {activeCategory}
            </p>
            <p className="mt-1 font-body text-sm leading-relaxed text-muted">
              {activeItems.length} technologies represented in this view.
            </p>
          </div>
        </div>

        {/* Tech cards grid */}
        <div key={activeCategory} className="grid animate-fade-up grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {activeItems.map((item) => (
            <TechCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
