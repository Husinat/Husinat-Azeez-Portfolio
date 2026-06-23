import { socials } from '../../config/socials'
import { SiGithub, SiTiktok } from 'react-icons/si'
import { Mail,  Linkedin } from 'lucide-react'

const SOCIAL_LINKS = [
  { key: 'linkedin', icon: Linkedin,  label: 'LinkedIn',  href: socials.linkedin },
  { key: 'github',   icon: SiGithub,    label: 'GitHub',    href: socials.github   },
  // { key: 'twitter',  icon: SiTwitter,   label: 'X/Twitter', href: socials.twitter  },
  { key: 'tiktok',   icon: SiTiktok,    label: 'TikTok',    href: socials.tiktok   },
  { key: 'email',    icon: Mail,        label: 'Email',     href: socials.email ? `mailto:${socials.email}` : '' },
]

/**
 * Footer
 * Copyright, credits, social icons.
 * All href values sourced from socials.js.
 */
export function Footer() {
  return (
    <footer className="border-t border-elevated bg-surface">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left: copy + credits */}
        <div className="text-center md:text-left">
          <p className="font-body text-sm text-muted">
            © {new Date().getFullYear()} Husinat Azeez. All Rights Reserved.
          </p>
          <p className="font-body text-xs text-muted/60 mt-1">
            Designed &amp; Developed by Husinat Azeez.
          </p>
        </div>

        {/* Right: social icons */}
        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map(({ key, icon: Icon, label, href }) => (
            href ? (
              <a
                key={key}
                href={href}
                target={key !== 'email' ? '_blank' : undefined}
                rel={key !== 'email' ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="text-muted/60 hover:text-amber transition-colors duration-200"
              >
                <Icon size={16} />
              </a>
            ) : (
              <span
                key={key}
                aria-label={label}
                className="text-muted/30 cursor-not-allowed"
              >
                <Icon size={16} />
              </span>
            )
          ))}
        </div>

      </div>
    </footer>
  )
}
