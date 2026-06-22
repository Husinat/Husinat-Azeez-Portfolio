import { SectionTitle }                  from '../ui/SectionTitle'
import { Tag }                            from '../ui/Tag'
import { currentFocus, currentlyLearning } from '../../data/currentFocus'

/**
 * CurrentFocus section
 * Two groups of tags: current focus items + currently learning items.
 */
export function CurrentFocus() {
  return (
    <section id="focus" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Current Focus"
          subtitle="What I'm actively working on and learning right now."
        />

        <div className="space-y-8">
          {/* Focus tags */}
          <div>
            <p className="font-mono text-xs text-muted uppercase tracking-widest mb-4">
              Focused on
            </p>
            <div className="flex flex-wrap gap-2">
              {currentFocus.map((item) => (
                <Tag key={item} variant="teal">{item}</Tag>
              ))}
            </div>
          </div>

          {/* Currently Learning */}
          <div>
            <p className="font-mono text-xs text-muted uppercase tracking-widest mb-4">
              Currently Learning
            </p>
            <div className="flex flex-wrap gap-2">
              {currentlyLearning.map((item) => (
                <Tag key={item} variant="outline">{item}</Tag>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
