import { Linkedin, PenLine } from 'lucide-react'
import { SectionTitle }      from '../ui/SectionTitle'
import { learningCards }     from '../../data/learningCards'

/**
 * ArticleCard
 * Image, title, excerpt, date, LinkedIn CTA.
 */
function ArticleCard({ card, index }) {
  const isPublished = Boolean(card.linkedinUrl)

  return (
    <article className="group flex min-h-72 flex-col overflow-hidden rounded-xl border border-elevated bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-teal/40">
      <div className="relative h-36 overflow-hidden bg-elevated">
        {card.image ? (
          <img
            src={card.image}
            alt={card.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-space/30">
            <PenLine size={30} className="text-teal/60" />
          </div>
        )}
        <div className="absolute left-3 top-3 rounded-full border border-teal/20 bg-space/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-teal backdrop-blur">
          {isPublished ? 'Published' : `Draft ${String(index + 1).padStart(2, '0')}`}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex-1">
          <h3 className="mb-2 font-body text-sm font-semibold leading-snug text-headline">
            {card.title}
          </h3>
          <p className="line-clamp-3 font-body text-xs leading-relaxed text-muted">
            {card.excerpt}
          </p>
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-elevated/70 pt-3">
          <span className="font-mono text-xs text-muted/60">
            {card.date || 'In progress'}
          </span>
          {isPublished ? (
            <a
              href={card.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-teal transition-colors duration-200 hover:text-teal/80"
            >
              <Linkedin size={12} />
              Read
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted/45">
              <Linkedin size={12} />
              Preparing
            </span>
          )}
        </div>
      </div>
    </article>
  )
}

/**
 * LearningInPublic section
 * A growing writing log for LinkedIn learning posts.
 */
export function LearningInPublic() {
  const publishedCount = learningCards.filter((card) => card.linkedinUrl).length

  return (
    <section id="learning" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="Learning in Public"
          subtitle="Writing about the process as it happens: mistakes, breakthroughs, and everything in between."
        />

        <div className="mb-6 grid gap-4 rounded-2xl border border-elevated/80 bg-space/25 p-5 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-teal">
              Active writing queue
            </p>
            <p className="mt-2 max-w-2xl font-body text-sm leading-7 text-muted">
              The section is structured as a living journal. Drafts can become published LinkedIn entries by filling the existing date, image, and URL fields.
            </p>
          </div>
          <div className="flex gap-6 font-mono text-xs text-muted">
            <span><strong className="text-headline">{learningCards.length}</strong> planned</span>
            <span><strong className="text-headline">{publishedCount}</strong> published</span>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {learningCards.map((card, index) => (
            <ArticleCard key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
