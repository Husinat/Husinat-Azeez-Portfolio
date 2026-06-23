import { useState, useEffect } from 'react'
import { useScrollSpy }        from '../../hooks/useScrollSpy'

const NAV_ITEMS = [
  { label: 'About',    id: 'about'    },
  { label: 'Journey',  id: 'evolution' }, // "Journey" label → #evolution
  { label: 'Projects', id: 'projects' },
  { label: 'Learning', id: 'learning' },
  { label: 'GitHub',   id: 'github'   },
  { label: 'Contact',  id: 'contact'  },
]

const SECTION_IDS = NAV_ITEMS.map((item) => item.id)

/**
 * Navbar
 * Fixed top navigation with scroll spy.
 * "Journey" navbar label anchors to #evolution section.
 * Mobile: hamburger menu.
 */
export function Navbar() {
  const [scrolled,     setScrolled]     = useState(false)
  const [menuOpen,     setMenuOpen]     = useState(false)
  const activeSectionId                  = useScrollSpy(SECTION_IDS)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route click
  const handleNavClick = () => setMenuOpen(false)

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-space/90 backdrop-blur-md border-b border-elevated'
          : 'bg-transparent',
      ].join(' ')}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-12 h-[72px] flex items-center justify-between">

        {/* Logo */}
        <a
          href="#hero"
          className="font-display text-headline text-lg hover:text-amber transition-colors duration-200"
          onClick={handleNavClick}
        >
          Husinat Azeez
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map(({ label, id }) => {
            const isActive = activeSectionId === id
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={[
                    'font-body text-sm px-3 py-1.5 rounded-md transition-all duration-200',
                    isActive
                      ? 'text-amber'
                      : 'text-muted hover:text-headline',
                  ].join(' ')}
                >
                  {label}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden flex flex-col gap-1.5 p-2 text-muted hover:text-headline focus:outline-none focus-visible:ring-2 focus-visible:ring-amber/60 rounded"
        >
          <span
            className={[
              'w-5 h-px bg-current transition-all duration-300',
              menuOpen ? 'translate-y-[7px] rotate-45' : '',
            ].join(' ')}
          />
          <span
            className={[
              'w-5 h-px bg-current transition-all duration-300',
              menuOpen ? 'opacity-0' : '',
            ].join(' ')}
          />
          <span
            className={[
              'w-5 h-px bg-current transition-all duration-300',
              menuOpen ? '-translate-y-[7px] -rotate-45' : '',
            ].join(' ')}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={[
          'md:hidden border-t border-elevated bg-space/95 backdrop-blur-md transition-all duration-300 overflow-hidden',
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
      >
        <ul className="px-6 py-4 flex flex-col gap-1">
          {NAV_ITEMS.map(({ label, id }) => {
            const isActive = activeSectionId === id
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={handleNavClick}
                  className={[
                    'block font-body text-sm py-2.5 px-3 rounded-md transition-all duration-200',
                    isActive
                      ? 'text-amber bg-amber/5'
                      : 'text-muted hover:text-headline hover:bg-elevated/50',
                  ].join(' ')}
                >
                  {label}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}
