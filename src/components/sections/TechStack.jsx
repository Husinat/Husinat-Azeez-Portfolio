import { useState } from 'react'
import { SectionTitle } from '../ui/SectionTitle'
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
  SiJsonwebtokens,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiVscodium,
  SiFigma
} from 'react-icons/si'
import { Server, Layout, Database, Wrench } from 'lucide-react'

// Static icon mapping to enable full tree-shaking
const IconMap = {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
  SiJsonwebtokens,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiVscodium,
  SiFigma
}

const architectureLayers = [
  {
    id: 'client',
    title: 'Client Interface Layer',
    icon: Layout,
    description: 'Building responsive, accessible frontend views with modular states and fast client rendering.',
    items: [
      { name: "HTML5",             icon: "SiHtml5",       color: "#E34F26" },
      { name: "CSS3",              icon: "SiCss",        color: "#1572B6" },
      { name: "JavaScript",        icon: "SiJavascript",  color: "#F7DF1E" },
      { name: "React",             icon: "SiReact",       color: "#61DAFB" },
      { name: "Tailwind CSS",      icon: "SiTailwindcss", color: "#06B6D4" },
      { name: "Bootstrap",         icon: "SiBootstrap",   color: "#7952B3" },
      { name: "Responsive Design", icon: "",              color: "#D69A7A" }
    ]
  },
  {
    id: 'server',
    title: 'API Server Layer',
    icon: Server,
    description: 'Architecting secure request-response pipelines, custom REST endpoints, and custom auth headers.',
    items: [
      { name: "Node.js",                 icon: "SiNodedotjs",   color: "#339933" },
      { name: "Express.js",              icon: "SiExpress",     color: "#FAF8F5" },
      { name: "REST APIs",               icon: "",              color: "#FAF8F5" },
      { name: "Firebase Authentication", icon: "SiFirebase",    color: "#FFCA28" },
      { name: "JWT Authentication",      icon: "SiJsonwebtokens", color: "#FAF8F5" }
    ]
  },
  {
    id: 'database',
    title: 'Database & Cloud Layer',
    icon: Database,
    description: 'Structuring database schemas, models, and cloud database listeners.',
    items: [
      { name: "MongoDB",            icon: "SiMongodb",  color: "#47A248" },
      { name: "Mongoose",           icon: "",           color: "#880000" },
      { name: "Firebase Firestore", icon: "SiFirebase", color: "#FFCA28" }
    ]
  },
  {
    id: 'tooling',
    title: 'Development & Design Tooling',
    icon: Wrench,
    description: 'System diagnostic testing, version control, layouts design, and collaborative workflows.',
    items: [
      { name: "Git",     icon: "SiGit",              color: "#F05032" },
      { name: "GitHub",  icon: "SiGithub",           color: "#FAF8F5" },
      { name: "Postman", icon: "SiPostman",          color: "#FF6C37" },
      { name: "VS Code", icon: "SiVscodium,", color: "#007ACC" },
      { name: "Figma",   icon: "SiFigma",            color: "#F24E1E" }
    ]
  }
]

export function TechStack() {
  const [activeLayer, setActiveLayer] = useState('all')

  return (
    <section id="stack" className="section-padding scroll-mt-20">
      <div className="section-inner">
        <SectionTitle
          title="Tech Stack"
          subtitle="The architecture and tooling I use to design, build, and connect systems."
        />

        {/* Editorial Architecture Split Layout */}
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          
          {/* Left Column: Architectural Intent */}
          <div className="lg:sticky lg:top-28 lg:h-fit space-y-6">
            <div className="rounded-2xl border border-border bg-surface/40 p-6 md:p-8">
              <span className="font-mono text-xs uppercase tracking-widest text-terracotta">
                Architectural Focus
              </span>
              <h3 className="mt-3 font-display text-3xl leading-tight text-headline">
                Integrated Systems
              </h3>
              
              <p className="mt-5 font-body text-sm leading-8 text-muted">
                I approach technologies not as isolated boxes but as modules in a data pipeline. 
              </p>
              <p className="mt-4 font-body text-sm leading-8 text-muted">
                From responsive client-side layout grids to server request authentication cycles and database index performance, my goal is to build secure, predictable, and maintainable systems.
              </p>

              {/* Layer selectors */}
              <div className="mt-6 border-t border-border/80 pt-5 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setActiveLayer('all')}
                  className={[
                    'rounded-lg px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider transition-all duration-200 border',
                    activeLayer === 'all'
                      ? 'bg-terracotta border-terracotta text-space'
                      : 'border-border bg-space text-muted hover:border-terracotta/40 hover:text-headline'
                  ].join(' ')}
                >
                  All Layers
                </button>
                {architectureLayers.map((layer) => (
                  <button
                    key={layer.id}
                    type="button"
                    onClick={() => setActiveLayer(layer.id)}
                    className={[
                      'rounded-lg px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider transition-all duration-200 border',
                      activeLayer === layer.id
                        ? 'bg-terracotta border-terracotta text-space'
                        : 'border-border bg-space text-muted hover:border-terracotta/40 hover:text-headline'
                    ].join(' ')}
                  >
                    {layer.id}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Architectural Stack Grouping */}
          <div className="relative space-y-6">
            {/* Visual connector thread */}
            <div className="absolute left-[29px] top-6 bottom-6 w-px bg-border/60" />

            {architectureLayers
              .filter((layer) => activeLayer === 'all' || activeLayer === layer.id)
              .map((layer) => {
                const LayerIcon = layer.icon
                return (
                  <div key={layer.id} className="relative pl-16 group transition-all duration-300">
                    
                    {/* Visual node anchor */}
                    <div className="absolute left-3.5 top-1 z-10 flex h-[32px] w-[32px] items-center justify-center rounded-full border border-border bg-surface text-terracotta shadow-[0_0_12px_rgba(214,154,122,0.15)] group-hover:border-terracotta/60 group-hover:shadow-[0_0_16px_rgba(214,154,122,0.35)] transition-all duration-300">
                      <LayerIcon size={14} />
                    </div>

                    {/* Content Block */}
                    <div className="rounded-xl border border-border bg-surface/50 p-5 space-y-4 group-hover:border-terracotta/30 group-hover:bg-surface/85 transition-all duration-300">
                      <div>
                        <h4 className="font-body text-base font-semibold text-headline">
                          {layer.title}
                        </h4>
                        <p className="mt-1 font-body text-xs leading-relaxed text-muted">
                          {layer.description}
                        </p>
                      </div>

                      {/* Stack item list */}
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                        {layer.items.map((item) => {
                          const IconComp = IconMap[item.icon]
                          return (
                            <div
                              key={item.name}
                              className="flex items-center gap-2.5 rounded-lg border border-border/80 bg-space/45 p-2.5 hover:border-terracotta/40 hover:bg-space/80 transition-all duration-200"
                            >
                              {IconComp ? (
                                <IconComp
                                  size={16}
                                  style={{ color: item.color }}
                                  className="shrink-0 opacity-80 group-hover:opacity-100 transition-opacity"
                                />
                              ) : (
                                <div className="flex h-4.5 w-4.5 shrink-0 select-none items-center justify-center rounded bg-elevated border border-border font-mono text-[9px] text-terracotta font-semibold">
                                  {item.name[0]}
                                </div>
                              )}
                              <span className="font-mono text-[10px] text-muted leading-none">
                                {item.name}
                              </span>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                  </div>
                )
              })}
          </div>

        </div>
      </div>
    </section>
  )
}
