import {
  GraduationCap,
  Mic,
  BookOpen,
  PenLine,
  Palette,
  RefreshCw,
} from 'lucide-react'

const ICON_MAP = {
  GraduationCap,
  Mic,
  BookOpen,
  PenLine,
  Palette,
  RefreshCw,
}

/**
 * BeyondCodeCard
 * Renders one Beyond Code item: lucide icon, title, description.
 */
export function BeyondCodeCard({ item }) {
  const IconComponent = ICON_MAP[item.icon] ?? GraduationCap

  return (
    <div className="group bg-surface border border-elevated rounded-xl p-5 transition-all duration-300 hover:border-amber/40 hover:bg-elevated/50">
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-10 h-10 rounded-lg bg-amber/10 border border-amber/20 flex items-center justify-center transition-colors duration-300 group-hover:bg-amber/15">
          <IconComponent size={18} className="text-amber" />
        </div>
        <div>
          <h3 className="font-body text-sm font-semibold text-headline mb-1">
            {item.title}
          </h3>
          <p className="font-body text-xs text-muted leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  )
}
