import { ExternalLink, Github, Wrench } from 'lucide-react'
import { Tag }                           from '../ui/Tag'

/**
 * FeaturedProjectCard
 * Renders one of the 4 featured projects.
 * Status: 'live' | 'building'
 */
export function FeaturedProjectCard({ project }) {
  return (
    <div className="group bg-surface border border-elevated rounded-xl overflow-hidden transition-all duration-300 hover:border-teal/40 flex flex-col">

      {/* Image */}
      <div className="relative h-44 bg-elevated overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-display text-2xl text-elevated">{project.title[0]}</span>
          </div>
        )}

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
      <div className="p-5 flex flex-col flex-1 gap-3">
        <div>
          <h3 className="font-body text-base font-semibold text-headline mb-1.5">
            {project.title}
          </h3>
          <p className="font-body text-sm text-muted leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
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
        </div>
      </div>
    </div>
  )
}
