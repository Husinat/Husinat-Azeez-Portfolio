import { ProfileShowcase } from '../profile/ProfileShowcase'
import { Button }           from '../ui/Button'
import { profile }          from '../../data/profile'

/**
 * Hero
 * Two-column layout: left = copy + CTAs, right = ProfileShowcase.
 */
export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-space via-space to-surface/30 section-padding pt-[96px]"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: copy */}
          <div className="order-2 md:order-1 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <p className="reveal-soft font-mono text-sm uppercase tracking-widest text-teal">
                {profile.status}
              </p>
              <h1
                className="reveal-soft font-display text-5xl leading-tight text-headline md:text-6xl lg:text-7xl"
                style={{ animationDelay: '90ms' }}
              >
                {profile.name}
              </h1>
              <p
                className="reveal-soft max-w-xl font-body text-lg leading-8 text-muted md:text-xl"
                style={{ animationDelay: '170ms' }}
              >
                {profile.tagline}
              </p>
            </div>

            <p
              className="reveal-soft max-w-lg font-body text-sm leading-7 text-muted/85"
              style={{ animationDelay: '250ms' }}
            >
              {profile.bio}
            </p>

            {/* CTA buttons */}
            <div
              className="reveal-soft flex flex-wrap gap-3 pt-2"
              style={{ animationDelay: '330ms' }}
            >
              <Button as="a" href="#projects" variant="primary">
                View Projects
              </Button>
              <Button as="a" href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" variant="secondary">
                Download Resume
              </Button>
              <Button as="a" href="#contact" variant="ghost">
                Contact Me
              </Button>
            </div>

            <div
              className="reveal-soft grid max-w-xl grid-cols-3 gap-3 pt-4"
              style={{ animationDelay: '410ms' }}
            >
              {[
                { label: 'Focus', value: 'Full-stack apps' },
                { label: 'Stack', value: 'React / Node' },
                { label: 'Edge', value: 'Communication' },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-elevated/70 bg-surface/50 p-3">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted/60">{item.label}</p>
                  <p className="mt-1 font-body text-sm font-medium leading-snug text-headline">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: profile */}
          <div
            className="reveal-soft order-1 flex justify-center md:order-2 md:justify-end"
            style={{ animationDelay: '180ms' }}
          >
            <ProfileShowcase profile={profile} />
          </div>

        </div>
      </div>
    </section>
  )
}
