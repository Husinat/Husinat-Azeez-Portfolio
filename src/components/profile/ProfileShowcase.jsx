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
    <div className="relative w-full max-w-sm">
      <div className="absolute inset-0 rounded-3xl bg-teal/5 blur-2xl" />
      <div className="relative overflow-hidden rounded-3xl border border-elevated/80 bg-surface/80 p-5 shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur">
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-teal/80 via-teal/20 to-transparent" />

        <div className="flex flex-col items-center gap-5">
          <ProfileImage src="/images/profile-placeholder.jpg" alt={profile.name} />

          <div className="w-full space-y-4">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <StatusBadge label={profile.role} />
              <AvailabilityIndicator text={profile.availability} />
            </div>

            <div className="rounded-2xl border border-elevated/70 bg-space/25 p-4">
              <TechLabels
                labels={profile.techLabels}
                currentlyBuilding={profile.currentlyBuilding}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
