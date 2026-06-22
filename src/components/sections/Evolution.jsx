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
    <section id="evolution" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Evolution"
          subtitle="Seven chapters. One connected story. Click any chapter to read it."
        />

        <EvolutionJourney chapters={chapters} />
      </div>
    </section>
  )
}
