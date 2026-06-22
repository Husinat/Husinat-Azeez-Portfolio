import { Star, ExternalLink } from 'lucide-react'
import { Tag }                from '../ui/Tag'

/**
 * RepoCard
 * Displays: repo name, description, primary language badge, topics, stars, link.
 * No fake language percentage bars.
 */
export function RepoCard({ repo }) {
  return (
    <div className="group bg-surface border border-elevated rounded-xl p-5 transition-all duration-300 hover:border-teal/40 hover:bg-elevated/50 flex flex-col gap-4">

      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-mono text-sm font-medium text-headline truncate mb-1">
            {repo.name}
          </h3>
          <p className="font-body text-xs text-muted leading-relaxed line-clamp-2">
            {repo.description}
          </p>
        </div>

        {repo.url && (
          <a
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${repo.name} on GitHub`}
            className="shrink-0 text-muted hover:text-teal transition-colors duration-200"
          >
            <ExternalLink size={15} />
          </a>
        )}
      </div>

      {/* Footer meta */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
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

    </div>
  )
}
