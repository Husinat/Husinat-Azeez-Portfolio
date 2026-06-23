import { Tag } from '../ui/Tag'

/**
 * TechLabels
 * Renders tech stack pills and a "Currently Building" label.
 */
export function TechLabels({ labels = [], currentlyBuilding }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap gap-2">
        {labels.map((label) => (
          <Tag key={label} variant="teal">
            {label}
          </Tag>
        ))}
      </div>
      {currentlyBuilding && (
        <p className="font-mono text-xs text-muted">
          Currently Building:{' '}
          <span className="text-amber">{currentlyBuilding}</span>
        </p>
      )}
    </div>
  )
}
