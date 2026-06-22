import { Navbar }          from './components/layout/Navbar'
import { Footer }          from './components/layout/Footer'
import { Hero }            from './components/sections/Hero'
import { About }           from './components/sections/About'
import { Evolution }       from './components/sections/Evolution'
import { BeyondCode }      from './components/sections/BeyondCode'
import { CurrentFocus }    from './components/sections/CurrentFocus'
import { TechStack }       from './components/sections/TechStack'
import { Projects }        from './components/sections/Projects'
import { Philosophy }      from './components/sections/Philosophy'
import { GitHub }          from './components/sections/GitHub'
import { LearningInPublic } from './components/sections/LearningInPublic'
import { Contact }         from './components/sections/Contact'

/**
 * App
 * Root component. Section order is locked per architecture v5.
 *
 * 1.  Navbar
 * 2.  Hero
 * 3.  About
 * 4.  Evolution        ← Signature section
 * 5.  BeyondCode
 * 6.  CurrentFocus
 * 7.  TechStack
 * 8.  Projects
 * 9.  Philosophy
 * 10. GitHub
 * 11. LearningInPublic
 * 12. Contact
 * 13. Footer
 */
export default function App() {
  return (
    <div className="min-h-screen bg-space">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Evolution />
        <BeyondCode />
        <CurrentFocus />
        <TechStack />
        <Projects />
        <Philosophy />
        <GitHub />
        <LearningInPublic />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
