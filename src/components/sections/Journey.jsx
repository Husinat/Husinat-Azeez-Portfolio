import { useState, useEffect, useRef } from 'react'
import { chapters } from '../../data/journey'
import { Tag }      from '../ui/Tag'
import { SectionTitle } from '../ui/SectionTitle'
import { BookOpen, GraduationCap, Code, Layers, Database, Palette, Smartphone, Terminal } from 'lucide-react'

// Visual key icons resolver
function StageIcon({ name, className }) {
  const map = {
    communication : GraduationCap,
    design        : Palette,
    htmlcss       : Smartphone,
    javascript    : Terminal,
    react         : Code,
    node          : Layers,
    mern          : Database
  }
  const Icon = map[name] || Code
  return <Icon className={className} size={16} />
}

export function Journey() {
  const [expandedId, setExpandedId] = useState(1)
  const itemRefs = useRef({})

  // Automatically scroll expanded node into view on mobile/desktop if it goes off-screen
  useEffect(() => {
    if (expandedId && itemRefs.current[expandedId]) {
      const timer = setTimeout(() => {
        itemRefs.current[expandedId].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest'
        })
      }, 200)
      return () => clearTimeout(timer)
    }
  }, [expandedId])

  const handleToggle = (id) => {
    setExpandedId((prev) => (prev === id ? null : id))
  }

  return (
    <section id="journey" className="section-padding scroll-mt-20">
      <div className="section-inner">
        <SectionTitle
          title="The Journey"
          subtitle="The evolution of communication, design, and full-stack engineering."
        />

        {/* Editorial Grid Layout */}
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          
          {/* Left Column: Sticky Editorial Statement */}
          <div className="lg:sticky lg:top-28 lg:h-fit space-y-6">
            <div className="rounded-2xl border border-border bg-surface/40 p-6 md:p-8">
              <span className="font-mono text-xs uppercase tracking-widest text-terracotta">
                Core Perspective
              </span>
              <h3 className="mt-3 font-display text-3xl leading-tight text-headline">
                Storytelling as a System
              </h3>
              
              <p className="mt-5 font-body text-sm leading-8 text-muted">
                My background in Mass Communication shaped how I view software. Code isn't just instructions for a machine; it's a mechanism for human communication. 
              </p>
              <p className="mt-4 font-body text-sm leading-8 text-muted">
                Understanding how information is structured, consumed, and verified dictates how I design database relations, API request-response patterns, and user interfaces.
              </p>
              
              <div className="mt-6 border-t border-border/80 pt-5 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded bg-terracotta/10 text-terracotta">
                    <span className="font-mono text-xs font-semibold">01</span>
                  </div>
                  <div>
                    <h4 className="font-body text-sm font-medium text-headline">Audience Focus</h4>
                    <p className="mt-0.5 text-xs text-dim">Writing clean code and clear flows targeted directly at user pain points.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded bg-sage/10 text-sage">
                    <span className="font-mono text-xs font-semibold">02</span>
                  </div>
                  <div>
                    <h4 className="font-body text-sm font-medium text-headline">System Documentation</h4>
                    <p className="mt-0.5 text-xs text-dim">Treating APIs and schemas with clean structured technical writing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Timeline */}
          <div className="relative">
            {/* Timeline thread connector line running behind nodes */}
            <div className="absolute left-[25px] top-6 bottom-6 w-px bg-border/60" />

            <div className="space-y-6">
              {chapters.map((chapter) => {
                const isExpanded = expandedId === chapter.id
                return (
                  <div
                    key={chapter.id}
                    ref={(el) => (itemRefs.current[chapter.id] = el)}
                    className="relative pl-14 transition-all duration-300"
                  >
                    {/* Node marker circle */}
                    <button
                      type="button"
                      onClick={() => handleToggle(chapter.id)}
                      className={[
                        'absolute left-2.5 top-1 z-10 flex h-[32px] w-[32px] items-center justify-center rounded-full border text-xs font-mono transition-all duration-300',
                        isExpanded
                          ? 'border-terracotta bg-space text-terracotta shadow-[0_0_12px_rgba(214,154,122,0.3)]'
                          : 'border-border bg-surface text-dim hover:border-terracotta/55 hover:text-terracotta',
                      ].join(' ')}
                      aria-expanded={isExpanded}
                    >
                      {chapter.chapter}
                    </button>

                    {/* Stage Header Info */}
                    <div className="group text-left">
                      <div className="flex flex-wrap items-baseline gap-2">
                        <h4 className="font-body text-base font-semibold text-headline">
                          {chapter.stage}
                        </h4>
                        <span className="font-mono text-[10px] text-dim uppercase">
                          ({chapter.period})
                        </span>
                      </div>
                      
                      <p className="mt-1.5 font-mono text-[11px] text-terracotta leading-relaxed">
                        {chapter.tagline}
                      </p>

                      {/* Expand CTA */}
                      <button
                        type="button"
                        onClick={() => handleToggle(chapter.id)}
                        className="mt-2 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase text-muted/60 hover:text-terracotta transition-colors duration-200"
                      >
                        <StageIcon name={chapter.visualKey} className="text-terracotta/75" />
                        <span>{isExpanded ? 'Collapse Stage' : 'Expand Journey'}</span>
                      </button>
                    </div>

                    {/* Timeline Node Detail Accordion */}
                    <div
                      className={[
                        'transition-all duration-300 overflow-hidden',
                        isExpanded ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0',
                      ].join(' ')}
                    >
                      <div className="rounded-xl border border-border bg-surface/75 p-5 space-y-4">
                        <div>
                          <p className="font-mono text-[9px] uppercase tracking-wider text-dim">Narrative Detail</p>
                          <p className="mt-1.5 font-body text-xs leading-relaxed text-muted">
                            {chapter.narrative}
                          </p>
                        </div>

                        {/* Skills nodes */}
                        <div>
                          <p className="font-mono text-[9px] uppercase tracking-wider text-dim">Competencies</p>
                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {chapter.skills.map((skill) => (
                              <Tag key={skill} variant="default">
                                {skill}
                              </Tag>
                            ))}
                          </div>
                        </div>

                        {/* Associated Projects */}
                        {chapter.projects && chapter.projects.length > 0 && (
                          <div className="border-t border-border/60 pt-3">
                            <p className="font-mono text-[9px] uppercase tracking-wider text-dim">Built in this phase</p>
                            <div className="mt-1.5 flex flex-wrap gap-2 text-xs text-headline">
                              {chapter.projects.map((proj) => (
                                <span key={proj} className="flex items-center gap-1 bg-space/60 px-2.5 py-1 rounded-md border border-border/40">
                                  <BookOpen size={11} className="text-terracotta/70" />
                                  {proj}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
