import { useState } from 'react'

/**
 * ProfileImage
 * Circular profile photo with teal ring and subtle glow.
 */
export function ProfileImage({ src, alt = "Husinat Azeez" }) {
  const [imageFailed, setImageFailed] = useState(false)
  const showImage = src && !imageFailed

  return (
    <div className="relative inline-block">
      {/* Glow ring */}
      <div className="absolute inset-0 scale-110 rounded-full bg-teal/20 blur-xl" />
      {/* Border ring */}
      <div className="relative rounded-full bg-gradient-to-br from-teal/70 via-headline/20 to-teal/10 p-[2px]">
        <div className="h-36 w-36 overflow-hidden rounded-full bg-elevated md:h-44 md:w-44">
          {showImage ? (
            <img
              src={src}
              alt={alt}
              onError={() => setImageFailed(true)}
              className="h-full w-full object-cover"
            />
          ) : (
            // Placeholder initials
            <div className="flex h-full w-full items-center justify-center bg-elevated">
              <span className="font-display text-3xl text-teal select-none">HA</span>
            </div>
          )}
        </div>
      </div>
      <div className="absolute -bottom-1 left-1/2 h-3 w-20 -translate-x-1/2 rounded-full bg-teal/20 blur-md" />
    </div>
  )
}
