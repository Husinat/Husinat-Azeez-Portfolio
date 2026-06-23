import { Github } from 'lucide-react'
import { Tag }    from '../ui/Tag'

/**
 * SmallProjectCard
 * Compact card for other projects (no image).
 */
export function SmallProjectCard({ project }) {
  return (
    <div className="group flex flex-col gap-3 rounded-xl border border-elevated bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-amber/40 hover:bg-elevated/50">

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
            className="shrink-0 text-muted hover:text-amber transition-colors duration-200"
          >
            <Github size={15} />
          </a>
        )}
      </div>

      <p className="font-body text-xs text-muted leading-relaxed flex-1">
        {project.description}
      </p>

      <p className="font-mono text-[10px] uppercase tracking-widest text-muted/50">
        Early build / practice project
      </p>

      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <Tag key={t} variant="default">{t}</Tag>
        ))}
      </div>
    </div>
  )
}
