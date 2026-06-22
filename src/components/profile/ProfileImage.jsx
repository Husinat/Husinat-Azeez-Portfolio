/**
 * ProfileImage
 * Circular profile photo with teal ring and subtle glow.
 */
export function ProfileImage({ src, alt = "Husinat Azeez" }) {
  return (
    <div className="relative inline-block">
      {/* Glow ring */}
      <div className="absolute inset-0 rounded-full bg-teal/20 blur-xl scale-110" />
      {/* Border ring */}
      <div className="relative rounded-full p-[2px] bg-gradient-to-br from-teal/60 to-teal/10">
        <div className="rounded-full overflow-hidden w-32 h-32 md:w-40 md:h-40 bg-elevated">
          {src ? (
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover"
            />
          ) : (
            // Placeholder initials
            <div className="w-full h-full flex items-center justify-center bg-elevated">
              <span className="font-display text-3xl text-teal select-none">HA</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
