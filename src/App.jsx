import { Navbar }    from './components/layout/Navbar'
import { Footer }    from './components/layout/Footer'
import { Hero }      from './components/sections/Hero'
import { Journey }   from './components/sections/Journey'
import { TechStack } from './components/sections/TechStack'
import { Projects }  from './components/sections/Projects'
import { Contact }   from './components/sections/Contact'

/**
 * App
 * Root component. Consolidated section list for clean visual flow.
 */
export default function App() {
  return (
    <div className="min-h-screen bg-space text-muted font-body antialiased">
      <Navbar />

      <main>
        <Hero />
        <div className="section-divider" />
        <Journey />
        <div className="section-divider" />
        <TechStack />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
