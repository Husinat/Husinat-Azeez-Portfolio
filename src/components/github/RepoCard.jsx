import { Star, ExternalLink } from 'lucide-react'
import { Tag }                from '../ui/Tag'

/**
 * RepoCard
 * Displays: repo name, description, primary language badge, topics, stars, link.
 * No fake language percentage bars.
 */
export function RepoCard({ repo }) {
  const isPublic = Boolean(repo.url)

  return (
    <article className="group flex min-h-52 flex-col gap-4 rounded-xl border border-elevated bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-amber/40 hover:bg-elevated/50">

      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-amber">
            {isPublic ? 'Public repository' : 'Repository profile'}
          </p>
          <h3 className="font-mono text-sm font-medium text-headline truncate mb-1">
            {repo.name}
          </h3>
          <p className="font-body text-xs text-muted leading-relaxed line-clamp-3">
            {repo.description}
          </p>
        </div>

        {repo.url && (
          <a
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${repo.name} on GitHub`}
            className="shrink-0 text-muted hover:text-amber transition-colors duration-200"
          >
            <ExternalLink size={15} />
          </a>
        )}
      </div>

      {/* Footer meta */}
      <div className="mt-auto flex flex-wrap items-end justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {/* Primary language badge */}
          <Tag variant="teal">{repo.language}</Tag>
          {/* Topics */}
          {repo.topics.slice(0, 3).map((topic) => (
            <Tag key={topic} variant="default">{topic}</Tag>
          ))}
        </div>

        {/* Stars */}
        <div className="flex items-center gap-1 text-muted font-mono text-xs">
          <Star size={12} />
          <span>{repo.stars}</span>
        </div>
      </div>

      {!isPublic && (
        <p className="border-t border-elevated/70 pt-3 font-mono text-[10px] uppercase tracking-widest text-muted/50">
          Link pending
        </p>
      )}
    </article>
  )
}
