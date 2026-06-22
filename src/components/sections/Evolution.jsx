import { SectionTitle }    from '../ui/SectionTitle'
import { EvolutionJourney } from '../evolution/EvolutionJourney'
import { chapters }         from '../../data/evolution'

/**
 * Evolution — SIGNATURE SECTION
 * Scroll-driven, chapter-based career journey in editorial style.
 * 7 chapters with animated progress connector.
 * Each chapter expands into a full narrative panel.
 */
export function Evolution() {
  return (
    <section id="evolution" className="section-band-soft section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="Evolution"
          subtitle="The story of how communication, design, and engineering became one connected path."
        />

        <EvolutionJourney chapters={chapters} />
      </div>
    </section>
  )
}
