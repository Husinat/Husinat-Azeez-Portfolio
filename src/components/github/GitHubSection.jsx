import { RepoCard } from './RepoCard'

/**
 * GitHubSection
 * Renders 3–4 RepoCards in a responsive grid.
 * Used inside the GitHub section wrapper.
 */
export function GitHubSection({ repos }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {repos.map((repo) => (
        <RepoCard key={repo.name} repo={repo} />
      ))}
    </div>
  )
}
