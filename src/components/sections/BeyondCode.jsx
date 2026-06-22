import { SectionTitle }    from '../ui/SectionTitle'
import { BeyondCodeSection } from '../beyondcode/BeyondCodeSection'
import { beyondCodeItems }   from '../../data/beyondCode'

/**
 * BeyondCode section
 * 6 cards covering skills and interests beyond software development.
 */
export function BeyondCode() {
  return (
    <section id="beyond-code" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Beyond Code"
          subtitle="Skills and disciplines that shape how I think and communicate."
        />
        <BeyondCodeSection items={beyondCodeItems} />
      </div>
    </section>
  )
}
