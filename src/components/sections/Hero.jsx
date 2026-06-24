import { ProfileShowcase } from '../profile/ProfileShowcase'
import { Button }          from '../ui/Button'
import { profile }         from '../../data/profile'
import { Github, Linkedin, ArrowRight } from 'lucide-react'
import { socials }         from '../../config/socials'

/**
 * Hero
 * Two-column editorial layout:
 * Left = Name, tagline, value proposition points, and high-impact CTAs.
 * Right = Visual ExamCore preview & status showcase.
 */
export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-space section-padding pt-[104px]"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Copy & Value Proposition */}
          <div className="order-2 md:order-1 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-terracotta">
                Developer + Communicator
              </span>
              <h1 className="font-display text-5xl leading-tight text-headline md:text-6xl lg:text-7xl">
                {profile.name}
              </h1>
              <p className="max-w-xl font-display text-xl leading-relaxed text-muted/90 md:text-2xl">
                {profile.tagline}
              </p>
            </div>

            {/* Structured Value Proposition Points */}
            <div className="space-y-4 max-w-lg border-l border-border/80 pl-5">
              {[
                {
                  title: "Technical Direction",
                  text: "Developing MERN-stack architectures with database design and API structures."
                },
                {
                  title: "Product Thinking",
                  text: "Structuring components around clear user flows, secure auth, and offline resilience."
                },
                {
                  title: "Communication Strength",
                  text: "Leveraging my Mass Comm background to write clean documentation and bridge complex logic."
                }
              ].map((point, index) => (
                <div key={index} className="group relative">
                  <h3 className="font-mono text-[10px] uppercase tracking-wider text-terracotta">
                    {point.title}
                  </h3>
                  <p className="mt-1 font-body text-xs text-muted/80 leading-relaxed">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Button as="a" href="#projects" variant="primary">
                Explore Case Studies
                <ArrowRight size={14} className="ml-1 shrink-0" />
              </Button>
              <Button as="a" href="#journey" variant="secondary">
                Read Journey
              </Button>
              
              {/* Social icons next to CTAs */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href={socials.github || "https://github.com/husinat-azeez"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="rounded-lg border border-border bg-surface p-2 text-muted hover:text-terracotta hover:border-terracotta/40 transition-all duration-200"
                >
                  <Github size={15} />
                </a>
                <a
                  href={socials.linkedin || "https://linkedin.com/in/husinat-azeez"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="rounded-lg border border-border bg-surface p-2 text-muted hover:text-terracotta hover:border-terracotta/40 transition-all duration-200"
                >
                  <Linkedin size={15} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Profile Showcase (Visual system mockup) */}
          <div className="order-1 flex justify-center md:order-2 md:justify-end">
            <ProfileShowcase profile={profile} />
          </div>

        </div>
      </div>
    </section>
  )
}
