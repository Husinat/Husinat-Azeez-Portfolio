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
    <div className="group flex flex-col items-center gap-2.5 p-4 bg-surface border border-elevated rounded-xl transition-all duration-300 hover:border-teal/40 hover:bg-elevated/50">
      {IconComponent ? (
        <IconComponent
          size={32}
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
  const [activeCategory, setActiveCategory] = useState(techStack[0].category)
  const activeGroup = techStack.find((g) => g.category === activeCategory)

  return (
    <section id="stack" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Tech Stack"
          subtitle="The tools I use to build."
        />

        {/* Tabs */}
        <div className="flex flex-wrap gap-1 mb-8 bg-surface border border-elevated rounded-xl p-1 w-fit">
          {techStack.map(({ category }) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={[
                'font-mono text-xs px-4 py-2 rounded-lg transition-all duration-200',
                activeCategory === category
                  ? 'bg-elevated text-headline'
                  : 'text-muted hover:text-headline',
              ].join(' ')}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tech cards grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
          {activeGroup?.items.map((item) => (
            <TechCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
