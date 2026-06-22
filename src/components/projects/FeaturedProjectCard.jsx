import { ExternalLink, Github, Wrench } from 'lucide-react'
import { Tag }                           from '../ui/Tag'

/**
 * FeaturedProjectCard
 * Renders one of the 4 featured projects.
 * Status: 'live' | 'building'
 */
export function FeaturedProjectCard({ project }) {
  const hasLinks = project.github || (project.live && project.status !== 'building')

  return (
    <article className="group grid overflow-hidden rounded-2xl border border-elevated bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-[0_24px_70px_rgba(0,0,0,0.22)] md:grid-cols-[0.9fr_1.1fr]">

      {/* Image */}
      <div className="relative min-h-56 overflow-hidden bg-elevated">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="font-display text-4xl text-muted/30">{project.title[0]}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-space/50 via-transparent to-transparent opacity-70" />

        {/* Status badge */}
        {project.status === 'building' && (
          <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-space/80 backdrop-blur-sm border border-teal/30 text-teal font-mono text-xs px-2.5 py-1 rounded-full">
            <Wrench size={11} />
            Building
          </div>
        )}
        {project.status === 'live' && (
          <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-space/80 backdrop-blur-sm border border-teal/30 text-teal font-mono text-xs px-2.5 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-teal" />
            Live
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-5 md:p-6">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-teal">
            Featured case study
          </p>
          <h3 className="mb-2 font-display text-2xl leading-tight text-headline">
            {project.title}
          </h3>
          <p className="font-body text-sm leading-7 text-muted">
            {project.description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 border-y border-elevated/70 py-3">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted/60">Status</p>
            <p className="mt-1 font-body text-sm text-headline">
              {project.status === 'building' ? 'In development' : 'Built and presentable'}
            </p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted/60">Focus</p>
            <p className="mt-1 font-body text-sm text-headline">
              {project.tech.slice(0, 2).join(' + ')}
            </p>
          </div>
        </div>

        {/* Tech tags */}
        <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
          {project.tech.map((t) => (
            <Tag key={t} variant="default">{t}</Tag>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-1">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-muted hover:text-headline transition-colors duration-200"
            >
              <Github size={13} />
              Code
            </a>
          )}
          {project.live && project.status !== 'building' && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-teal hover:text-teal/80 transition-colors duration-200"
            >
              <ExternalLink size={13} />
              Live
            </a>
          )}
          {!hasLinks && (
            <span className="font-mono text-xs text-muted/60">
              Links will be added when public
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
