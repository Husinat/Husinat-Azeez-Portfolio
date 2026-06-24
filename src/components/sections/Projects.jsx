import { useState } from 'react'
import { SectionTitle } from '../ui/SectionTitle'
import { CaseStudyCard } from '../projects/CaseStudyCard'
import { Tag }            from '../ui/Tag'
import { projects }       from '../../data/projects'
import { ChevronDown, ChevronUp, Github, Code } from 'lucide-react'

export function Projects() {
  const [archiveOpen, setArchiveOpen] = useState(false)
  const featured = projects.filter((p) => p.type === 'featured')
  const archive = projects.filter((p) => p.type === 'archive')

  return (
    <section id="projects" className="section-padding scroll-mt-20">
      <div className="section-inner">
        <SectionTitle
          title="Case Studies"
          subtitle="Selected applications illustrating full-stack growth, role auth mechanics, and modular structures."
        />

        {/* Flagship Case Studies Grid */}
        <div className="space-y-6">
          {featured.map((project, index) => (
            <CaseStudyCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Collapsible Drawer for Early Builds */}
        {archive.length > 0 && (
          <div className="mt-16 border-t border-border/60 pt-10 text-center">
            <div className="mb-6">
              <h4 className="font-display text-lg font-semibold text-headline">Continuous Progression</h4>
              <p className="mt-1 font-body text-xs text-dim">Archive of early scripts, visual replicas, and vanilla JavaScript exercises.</p>
            </div>

            <button
              type="button"
              onClick={() => setArchiveOpen(!archiveOpen)}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-2.5 font-mono text-xs text-muted hover:text-terracotta hover:border-terracotta/40 transition-all duration-200 active:scale-[0.98]"
            >
              <span>{archiveOpen ? 'Hide Archive' : 'View Archive & Early Builds'}</span>
              {archiveOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>

            {/* Expanded Archive Container */}
            <div
              className={[
                'transition-all duration-500 overflow-hidden text-left',
                archiveOpen ? 'max-h-[1200px] opacity-100 mt-10' : 'max-h-0 opacity-0',
              ].join(' ')}
            >
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {archive.map((project) => (
                  <div
                    key={project.id}
                    className="group flex flex-col justify-between rounded-xl border border-border bg-surface/35 p-5 hover:border-terracotta/30 hover:bg-surface/75 transition-all duration-300"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <h5 className="font-body text-sm font-semibold text-headline group-hover:text-terracotta transition-colors duration-200">
                          {project.title}
                        </h5>
                        <Code size={13} className="text-dim/60 shrink-0" />
                      </div>
                      <p className="mt-2.5 font-body text-xs text-muted/75 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-5 space-y-3.5">
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((t) => (
                          <Tag key={t} variant="default">
                            {t}
                          </Tag>
                        ))}
                      </div>

                      <div className="flex items-center justify-between border-t border-border/50 pt-3 text-[10px] font-mono text-dim">
                        <span>Early build</span>
                        {project.github ? (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-muted hover:text-terracotta transition-colors"
                          >
                            <Github size={11} />
                            Code
                          </a>
                        ) : (
                          <span>Private repo</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
