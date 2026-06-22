import { Github } from 'lucide-react'
import { Tag }    from '../ui/Tag'

/**
 * SmallProjectCard
 * Compact card for other projects (no image).
 */
export function SmallProjectCard({ project }) {
  return (
    <div className="group bg-surface border border-elevated rounded-xl p-5 transition-all duration-300 hover:border-teal/40 hover:bg-elevated/50 flex flex-col gap-3">

      <div className="flex items-start justify-between gap-2">
        <h3 className="font-body text-sm font-semibold text-headline leading-snug">
          {project.title}
        </h3>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on GitHub`}
            className="shrink-0 text-muted hover:text-teal transition-colors duration-200"
          >
            <Github size={15} />
          </a>
        )}
      </div>

      <p className="font-body text-xs text-muted leading-relaxed flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <Tag key={t} variant="default">{t}</Tag>
        ))}
      </div>
    </div>
  )
}
