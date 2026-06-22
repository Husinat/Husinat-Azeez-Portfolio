import { SectionTitle } from '../ui/SectionTitle'
import { profile }      from '../../data/profile'

/**
 * About
 * Text-forward section: SectionTitle + extended bio.
 */
export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="About"
          subtitle="The background behind the code."
        />

        <div className="grid md:grid-cols-2 gap-10 lg:gap-20">
          <div className="space-y-4">
            <p className="font-body text-muted leading-relaxed">
              I'm a Full-Stack Developer with a background in Mass Communication. I transitioned into tech in 2024 and have spent every month since building, learning, and documenting the process.
            </p>
            <p className="font-body text-muted leading-relaxed">
              My path into development wasn't a straight line — it started with studying how people communicate, which gave me a foundation I still draw on today. Every project I build is a deliberate attempt to understand something new.
            </p>
            <p className="font-body text-muted leading-relaxed">
              I'm currently focused on full-stack development with the MERN stack, building real applications and putting the process in public.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-surface border border-elevated rounded-xl p-5">
              <p className="font-mono text-xs text-teal mb-3 uppercase tracking-widest">Quick facts</p>
              <dl className="space-y-3">
                {[
                  { label: 'Location',   value: 'Nigeria'                  },
                  { label: 'Background', value: 'Mass Communication'       },
                  { label: 'Focus',      value: 'Full-Stack (MERN)'        },
                  { label: 'Status',     value: profile.availability       },
                ].map(({ label, value }) => (
                  <div key={label} className="flex gap-3">
                    <dt className="font-mono text-xs text-muted/60 w-28 shrink-0 pt-0.5">{label}</dt>
                    <dd className="font-body text-sm text-headline">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
