import { SectionTitle }       from '../ui/SectionTitle'
import { FeaturedProjectCard } from '../projects/FeaturedProjectCard'
import { SmallProjectCard }    from '../projects/SmallProjectCard'
import { projects }             from '../../data/projects'

const featured = projects.filter((p) => p.type === 'featured')
const other     = projects.filter((p) => p.type === 'other')

/**
 * Projects section
 * Featured: 4 large cards (2-column grid).
 * Other: 4 small cards (2–4 column grid).
 */
export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Projects"
          subtitle="What I've built — from early experiments to full-stack applications."
        />

        {/* Featured */}
        <div className="grid sm:grid-cols-2 gap-5 mb-12">
          {featured.map((project) => (
            <FeaturedProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Other projects */}
        <div className="mb-6">
          <p className="font-mono text-xs text-muted uppercase tracking-widest mb-5">
            Other Projects
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {other.map((project) => (
              <SmallProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
