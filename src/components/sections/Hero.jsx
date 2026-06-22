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
      className="min-h-screen flex items-center section-padding pt-[96px]"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: copy */}
          <div className="order-2 md:order-1 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <p className="font-mono text-sm text-teal">{profile.status}</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-headline leading-tight">
                {profile.name}
              </h1>
              <p className="font-body text-lg text-muted leading-relaxed">
                {profile.tagline}
              </p>
            </div>

            <p className="font-body text-sm text-muted/80 leading-relaxed max-w-md">
              {profile.bio}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
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
          </div>

          {/* Right: profile */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <ProfileShowcase profile={profile} />
          </div>

        </div>
      </div>
    </section>
  )
}
