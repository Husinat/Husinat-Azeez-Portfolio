import { SectionTitle }  from '../ui/SectionTitle'
import { GitHubSection } from '../github/GitHubSection'
import { Button }        from '../ui/Button'
import { repoHighlights } from '../../data/github'
import { socials }        from '../../config/socials'

/**
 * GitHub section
 * RepoCard grid + CTA button to GitHub profile.
 * Language metadata badge only — no fake language percentage bars.
 */
export function GitHub() {
  return (
    <section id="github" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="GitHub"
          subtitle="A selection of repositories — open to view, inspect, and fork."
        />

        <GitHubSection repos={repoHighlights} />

        {/* CTA to full GitHub profile */}
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
