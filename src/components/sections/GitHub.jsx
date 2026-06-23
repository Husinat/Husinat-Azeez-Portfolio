import { SectionTitle }   from '../ui/SectionTitle'
import { GitHubSection }  from '../github/GitHubSection'
import { Button }         from '../ui/Button'
import { repoHighlights } from '../../data/github'
import { socials }        from '../../config/socials'

/**
 * GitHub section
 * RepoCard grid + CTA button to GitHub profile.
 */
export function GitHub() {
  return (
    <section id="github" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="GitHub"
          subtitle="A selected view of repositories, project direction, and technical focus."
        />

        <div className="mb-6 grid gap-4 rounded-2xl border border-elevated/80 bg-space/25 p-5 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-amber">
              Repository highlights
            </p>
            <p className="mt-2 max-w-2xl font-body text-sm leading-7 text-muted">
              Selected work samples are grouped by purpose and stack. Public links can be attached from the existing repo config when they are ready.
            </p>
          </div>
          <div className="flex gap-6 font-mono text-xs text-muted">
            <span><strong className="text-headline">{repoHighlights.length}</strong> featured</span>
            <span><strong className="text-headline">0</strong> fake metrics</span>
          </div>
        </div>

        <GitHubSection repos={repoHighlights} />

        <div className="mt-8 flex justify-center">
          {socials.github ? (
            <Button
              as="a"
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              View all repositories on GitHub
            </Button>
          ) : (
            <Button variant="secondary" disabled>
              GitHub profile coming soon
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
