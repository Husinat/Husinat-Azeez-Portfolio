import { BeyondCodeCard } from './BeyondCodeCard'

/**
 * BeyondCodeSection
 * Renders the 6 Beyond Code cards in a responsive grid.
 * Used inside the BeyondCode section wrapper.
 */
export function BeyondCodeSection({ items }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => (
        <BeyondCodeCard key={item.id} item={item} />
      ))}
    </div>
  )
}
