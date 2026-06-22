import { ProfileImage }          from './ProfileImage'
import { StatusBadge }           from './StatusBadge'
import { AvailabilityIndicator } from './AvailabilityIndicator'
import { TechLabels }            from './TechLabels'

/**
 * ProfileShowcase
 * Combines ProfileImage, AvailabilityIndicator, StatusBadge, TechLabels
 * into the Hero profile column.
 */
export function ProfileShowcase({ profile }) {
  return (
    <div className="flex flex-col items-center md:items-start gap-5">
      <ProfileImage src="/images/profile-placeholder.jpg" alt={profile.name} />

      <div className="flex flex-col items-center md:items-start gap-3">
        <AvailabilityIndicator text={profile.availability} />
        <StatusBadge label={profile.role} />
        <TechLabels
          labels={profile.techLabels}
          currentlyBuilding={profile.currentlyBuilding}
        />
      </div>
    </div>
  )
}
