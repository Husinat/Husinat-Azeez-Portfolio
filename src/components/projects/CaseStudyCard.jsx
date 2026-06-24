import { ExternalLink, Github, Wrench, Shield, ShoppingBag, Terminal } from 'lucide-react'
import { Tag } from '../ui/Tag'
import { Button } from '../ui/Button'
import { socials } from '../../config/socials'

// Abstract Visual Mockup Generators for project previews
function ProjectMockup({ title }) {
  if (title === 'ExamCore') {
    return (
      <div className="relative flex h-full w-full flex-col justify-between bg-space/85 p-4 font-mono text-[9px] text-muted">
        {/* Test Header */}
        <div className="flex items-center justify-between border-b border-border/60 pb-2">
          <span className="flex items-center gap-1 text-terracotta font-semibold">
            <Shield size={10} />
            CBT Exam System
          </span>
          <span className="bg-red-500/10 text-red-400 px-1.5 py-0.5 rounded animate-pulse">
            Time: 42:18
          </span>
        </div>
        
        {/* Question Mock */}
        <div className="space-y-1.5 py-3">
          <p className="text-headline font-semibold">Q14: Explain the difference between REST API and GraphQL.</p>
          <div className="space-y-1 pl-2 text-dim">
            <p className="flex items-center gap-1.5 text-muted/80">
              <span className="h-2 w-2 rounded-full border border-terracotta bg-terracotta/20" />
              A. REST relies on HTTP endpoints while GraphQL uses query strings.
            </p>
            <p className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full border border-border" />
              B. GraphQL is only supported on SQL databases.
            </p>
          </div>
        </div>

        {/* Sync Status */}
        <div className="flex items-center justify-between border-t border-border/60 pt-2 text-[8px] text-dim">
          <span>Status: Cache Synced (Local)</span>
          <span className="text-sage font-semibold">Ready to Submit</span>
        </div>
      </div>
    )
  }

  if (title === 'T.O.C – The Ola Collection') {
    return (
      <div className="relative flex h-full w-full flex-col justify-between bg-space/65 p-4 text-muted">
        {/* Store Header */}
        <div className="flex items-center justify-between border-b border-border/60 pb-2 font-mono text-[9px]">
          <span className="flex items-center gap-1 text-headline uppercase tracking-wider font-semibold">
            <ShoppingBag size={10} className="text-terracotta" />
            T.O.C Editorial
          </span>
          <span className="text-dim">Cart (02)</span>
        </div>

        {/* Store Catalog Item Grid Mock */}
        <div className="grid grid-cols-2 gap-2 py-2">
          <div className="rounded border border-border/80 bg-surface/80 p-2 text-center space-y-1">
            <div className="h-10 w-full bg-space/55 rounded flex items-center justify-center font-mono text-[10px] text-terracotta/40">
              [PHOTO]
            </div>
            <p className="font-mono text-[8px] text-headline leading-none font-semibold truncate">Rose Copper Ring</p>
            <p className="font-mono text-[7px] text-dim leading-none">$149</p>
          </div>
          <div className="rounded border border-border/80 bg-surface/80 p-2 text-center space-y-1">
            <div className="h-10 w-full bg-space/55 rounded flex items-center justify-center font-mono text-[10px] text-terracotta/40">
              [PHOTO]
            </div>
            <p className="font-mono text-[8px] text-headline leading-none font-semibold truncate">Terracotta Vase</p>
            <p className="font-mono text-[7px] text-dim leading-none">$85</p>
          </div>
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between text-[8px] text-dim font-mono">
          <span>Aesthetic Filters: Active</span>
          <span className="text-terracotta">Catalog: Spring 2026</span>
        </div>
      </div>
    )
  }

  // Portfolio Mockup
  return (
    <div className="relative flex h-full w-full flex-col justify-between bg-space/90 p-4 font-mono text-[9px] text-muted">
      {/* Portfolio Info */}
      <div className="flex items-center justify-between border-b border-border/60 pb-2">
        <span className="flex items-center gap-1 text-headline font-semibold">
          <Terminal size={10} className="text-terracotta" />
          portfolio-build // static
        </span>
        <span className="bg-sage/10 text-sage px-1.5 py-0.5 rounded">
          Size: 284 KB
        </span>
      </div>

      {/* Code bundle stats mock */}
      <div className="space-y-1.5 py-3 text-dim">
        <p className="text-headline">&gt; npm run build</p>
        <p className="pl-2 text-sage/75">&gt; dist/assets/index.js (Built in 1.4s)</p>
        <p className="pl-2 text-muted/70">&gt; tree-shaking react-icons/si: success (95%+ saved)</p>
        <p className="pl-2 text-muted/70">&gt; responsive breakpoints compile: OK</p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-border/60 pt-2 text-[8px]">
        <span>Palette: Espresso & Terracotta</span>
        <span className="text-terracotta">100% Performance Score</span>
      </div>
    </div>
  )
}

export function CaseStudyCard({ project, index }) {
  const imageLeft = index % 2 === 0
  const hasLinks = project.github || project.live

  return (
    <article className="group py-12 border-b border-border/40 last:border-b-0">
      <div className="grid md:grid-cols-[1.1fr_0.9fr] lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-14 items-center">
        
        {/* Case Study Content Column */}
        <div className={[
          'space-y-5',
          imageLeft ? 'order-2 md:order-1' : 'order-2'
        ].join(' ')}>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-terracotta">
              Case Study {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-1 font-display text-3xl font-semibold leading-tight text-headline group-hover:text-terracotta transition-colors duration-300">
              {project.title}
            </h3>
            <p className="font-mono text-xs text-dim mt-0.5">
              {project.subtitle}
            </p>
          </div>

          <p className="font-body text-sm leading-relaxed text-muted">
            {project.description}
          </p>

          {/* Three-column problem / solution / result breakdown */}
          <div className="grid gap-4 sm:grid-cols-3 border-y border-border/60 py-4">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-wider text-dim">Challenge</p>
              <p className="mt-1 font-body text-xs text-muted/80 leading-relaxed">
                {project.problem}
              </p>
            </div>
            <div>
              <p className="font-mono text-[9px] uppercase tracking-wider text-dim">Solution</p>
              <p className="mt-1 font-body text-xs text-muted/80 leading-relaxed">
                {project.solution}
              </p>
            </div>
            <div>
              <p className="font-mono text-[9px] uppercase tracking-wider text-dim">Engineering Result</p>
              <p className="mt-1 font-body text-xs text-muted/80 leading-relaxed font-medium">
                {project.result}
              </p>
            </div>
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <Tag key={t} variant="default">{t}</Tag>
            ))}
          </div>

          {/* Links / CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-muted hover:text-terracotta transition-colors duration-200"
              >
                <Github size={13} />
                Source Code
              </a>
            ) : (
              <span className="font-mono text-xs text-dim flex items-center gap-1">
                <Github size={13} className="opacity-50" />
                Repo on request
              </span>
            )}
            
            {project.live && project.status !== 'building' ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-terracotta hover:text-terracotta-dim transition-colors duration-200 font-semibold"
              >
                <ExternalLink size={13} />
                Live Demo
              </a>
            ) : (
              <span className="font-mono text-xs text-dim flex items-center gap-1">
                <ExternalLink size={13} className="opacity-50" />
                Demo coming soon
              </span>
            )}
          </div>
        </div>

        {/* Custom Project Mockup Preview Column */}
        <div className={[
          'relative aspect-[16/10] w-full rounded-2xl border border-border bg-surface/50 overflow-hidden shadow-2xl p-[1px]',
          imageLeft ? 'order-1 md:order-2' : 'order-1'
        ].join(' ')}>
          <div className="absolute inset-0 bg-gradient-to-br from-terracotta/5 to-transparent pointer-events-none" />
          <div className="h-full w-full rounded-2xl overflow-hidden bg-space/45 border border-border/40">
            <ProjectMockup title={project.title} />
          </div>
        </div>

      </div>
    </article>
  )
}
