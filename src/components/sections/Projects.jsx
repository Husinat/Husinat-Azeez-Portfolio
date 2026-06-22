import { SectionTitle }        from '../ui/SectionTitle'
import { FeaturedProjectCard } from '../projects/FeaturedProjectCard'
import { SmallProjectCard }    from '../projects/SmallProjectCard'
import { projects }            from '../../data/projects'

const featured = projects.filter((p) => p.type === 'featured')
const other    = projects.filter((p) => p.type === 'other')

/**
 * Projects section
 * Featured projects and supporting builds.
 */
export function Projects() {
  return (
    <section id="projects" className="section-band section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="Projects"
          subtitle="Selected applications that show product thinking, interface work, and full-stack growth."
        />

        <div className="mb-12 grid gap-5 lg:grid-cols-2">
          {featured.map((project) => (
            <FeaturedProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mb-6">
          <p className="mb-5 font-mono text-xs uppercase tracking-widest text-muted">
            Supporting Builds
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {other.map((project) => (
              <SmallProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
