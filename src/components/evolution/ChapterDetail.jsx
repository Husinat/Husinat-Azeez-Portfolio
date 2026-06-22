import { Tag } from '../ui/Tag'

/**
 * ChapterDetail
 * Rendered beneath the ChapterTrack when a chapter is expanded.
 * Shows: narrative, What I Learned list, Skills Gained pills, Related Projects links.
 */
export function ChapterDetail({ chapter }) {
  return (
    <div className="animate-slide-up mt-6 bg-surface border border-teal/30 rounded-xl p-6 md:p-8">
      <div className="grid md:grid-cols-3 gap-8">

        {/* Narrative */}
        <div className="md:col-span-2 space-y-6">
          <div>
            <p className="font-mono text-xs text-teal mb-3 uppercase tracking-widest">
              Chapter {chapter.chapter} · {chapter.period}
            </p>
            <h3 className="font-display text-2xl text-headline mb-4">
              {chapter.stage}
            </h3>
            <p className="font-body text-muted leading-relaxed text-sm">
              {chapter.narrative}
            </p>
          </div>

          {/* What I Learned */}
          {chapter.learned.length > 0 && (
            <div>
              <h4 className="font-body text-xs font-semibold text-headline uppercase tracking-widest mb-3">
                What I Learned
              </h4>
              <ul className="space-y-1.5">
                {chapter.learned.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted">
                    <span className="text-teal mt-0.5 shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Skills + Projects */}
        <div className="space-y-6">
          {/* Skills Gained */}
          <div>
            <h4 className="font-body text-xs font-semibold text-headline uppercase tracking-widest mb-3">
              Skills Gained
            </h4>
            <div className="flex flex-wrap gap-2">
              {chapter.skills.map((skill) => (
                <Tag key={skill} variant="teal">{skill}</Tag>
              ))}
            </div>
          </div>

          {/* Related Projects */}
          {chapter.projects.length > 0 && (
            <div>
              <h4 className="font-body text-xs font-semibold text-headline uppercase tracking-widest mb-3">
                Related Projects
              </h4>
              <div className="flex flex-col gap-1.5">
                {chapter.projects.map((project) => (
                  <span
                    key={project}
                    className="font-mono text-xs text-teal border border-teal/20 rounded-md px-2.5 py-1 bg-teal/5"
                  >
                    {project}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}
