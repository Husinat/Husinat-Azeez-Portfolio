import { Tag } from '../ui/Tag'

/**
 * ChapterDetail
 * Editorial narrative panel for the selected chapter.
 */
export function ChapterDetail({ chapter }) {
  return (
    <div className="mt-6 animate-panel-in overflow-hidden rounded-2xl border border-amber/30 bg-surface/90 shadow-[0_28px_90px_rgba(0,0,0,0.24)]">
      <div className="border-b border-elevated/70 bg-space/25 px-6 py-4 md:px-8">
        <p className="font-mono text-xs uppercase tracking-widest text-amber">
          Chapter {chapter.chapter} / {chapter.period}
        </p>
      </div>

      <div className="grid gap-8 p-6 md:grid-cols-3 md:p-8">
        <div className="space-y-6 md:col-span-2">
          <div className="animate-fade-up">
            <h3 className="mb-4 font-display text-3xl leading-tight text-headline md:text-4xl">
              {chapter.stage}
            </h3>
            <p className="max-w-2xl font-body text-sm leading-7 text-muted md:text-base">
              {chapter.narrative}
            </p>
          </div>

          {chapter.learned.length > 0 && (
            <div
              className="animate-fade-up rounded-xl border border-elevated/70 bg-space/20 p-5"
              style={{ animationDelay: '80ms' }}
            >
              <h4 className="mb-4 font-body text-xs font-semibold uppercase tracking-widest text-headline">
                What I Learned
              </h4>
              <ul className="grid gap-2 sm:grid-cols-2">
                {chapter.learned.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="animate-fade-up space-y-6" style={{ animationDelay: '140ms' }}>
          <div>
            <h4 className="mb-3 font-body text-xs font-semibold uppercase tracking-widest text-headline">
              Skills Gained
            </h4>
            <div className="flex flex-wrap gap-2">
              {chapter.skills.map((skill) => (
                <Tag key={skill} variant="teal">{skill}</Tag>
              ))}
            </div>
          </div>

          {chapter.projects.length > 0 && (
            <div>
              <h4 className="mb-3 font-body text-xs font-semibold uppercase tracking-widest text-headline">
                Related Projects
              </h4>
              <div className="flex flex-col gap-1.5">
                {chapter.projects.map((project) => (
                  <span
                    key={project}
                    className="rounded-md border border-amber/20 bg-amber/5 px-2.5 py-1 font-mono text-xs text-amber"
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
