import { SectionTitle } from '../ui/SectionTitle'
import { profile }      from '../../data/profile'

const strengths = [
  { label: 'Communication', value: 'Clear writing, audience awareness, and structured thinking' },
  { label: 'Product Mindset', value: 'Interfaces and flows designed around real user needs' },
  { label: 'Engineering Focus', value: 'React, APIs, authentication, and database-backed features' },
]

/**
 * About
 * Professional context, background, and strengths.
 */
export function About() {
  return (
    <section id="about" className="section-band-soft section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="About"
          subtitle="A communication-first developer building practical web products."
        />

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="space-y-5">
            <p className="font-body text-lg leading-8 text-headline">
              I build full-stack applications with the discipline of a developer and the instincts of a communicator.
            </p>
            <p className="font-body leading-8 text-muted">
              My background in Mass Communication shaped how I think about clarity, audience, and structure. That perspective now informs how I design interfaces, write code, document decisions, and turn ideas into usable products.
            </p>
            <p className="font-body leading-8 text-muted">
              I am focused on modern JavaScript development across React, Node.js, Express, MongoDB, Firebase, and REST APIs, with a growing body of projects that connect design thinking to working software.
            </p>
          </div>

          <div className="rounded-2xl border border-elevated bg-space/30 p-5">
            <div className="mb-5 flex items-center justify-between gap-4">
              <p className="font-mono text-xs uppercase tracking-widest text-amber">Professional snapshot</p>
              <span className="rounded-full border border-amber/20 bg-amber/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-amber">
                {profile.role}
              </span>
            </div>

            <dl className="mb-6 grid gap-3">
              {[
                { label: 'Location',   value: 'Nigeria' },
                { label: 'Background', value: 'Mass Communication, storytelling, design' },
                { label: 'Focus',      value: 'Full-stack products and MERN applications' },
                { label: 'Status',     value: profile.availability },
              ].map(({ label, value }) => (
                <div key={label} className="grid gap-1 border-b border-elevated/60 pb-3 last:border-b-0 last:pb-0 sm:grid-cols-[120px_1fr]">
                  <dt className="font-mono text-xs text-muted/60">{label}</dt>
                  <dd className="font-body text-sm leading-relaxed text-headline">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="grid gap-3">
              {strengths.map((item) => (
                <div key={item.label} className="rounded-xl border border-elevated/70 bg-surface/70 p-4">
                  <p className="font-body text-sm font-semibold text-headline">{item.label}</p>
                  <p className="mt-1 font-body text-xs leading-relaxed text-muted">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
