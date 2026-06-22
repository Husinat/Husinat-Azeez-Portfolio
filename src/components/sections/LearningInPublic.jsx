import { Linkedin }    from 'lucide-react'
import { SectionTitle }  from '../ui/SectionTitle'
import { learningCards } from '../../data/learningCards'

/**
 * ArticleCard
 * Image · title · excerpt · date · LinkedIn icon · "Read on LinkedIn" CTA.
 */
function ArticleCard({ card }) {
  return (
    <div className="group bg-surface border border-elevated rounded-xl overflow-hidden transition-all duration-300 hover:border-teal/40 flex flex-col">

      {/* Thumbnail */}
      <div className="h-36 bg-elevated overflow-hidden">
        {card.image ? (
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Linkedin size={28} className="text-elevated" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        <div className="flex-1">
          <h3 className="font-body text-sm font-semibold text-headline leading-snug mb-2">
            {card.title}
          </h3>
          <p className="font-body text-xs text-muted leading-relaxed line-clamp-3">
            {card.excerpt}
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2">
          {card.date && (
            <span className="font-mono text-xs text-muted/60">{card.date}</span>
          )}
          {card.linkedinUrl ? (
            <a
              href={card.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-teal hover:text-teal/80 transition-colors duration-200 ml-auto"
            >
              <Linkedin size={12} />
              Read on LinkedIn
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted/40 ml-auto">
              <Linkedin size={12} />
              Coming soon
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

/**
 * LearningInPublic section
 * 3 article cards documenting the learning journey, published on LinkedIn.
 */
export function LearningInPublic() {
  return (
    <section id="learning" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Learning in Public"
          subtitle="Writing about the process as it happens — mistakes, breakthroughs, and everything in between."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {learningCards.map((card) => (
            <ArticleCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}
