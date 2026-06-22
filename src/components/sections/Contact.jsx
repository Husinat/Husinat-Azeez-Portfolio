import { SiGithub } from 'react-icons/si'
import { Mail, Linkedin }        from 'lucide-react'
import { SectionTitle }          from '../ui/SectionTitle'
import { Button }                from '../ui/Button'
import { useContactForm }        from '../../hooks/useContactForm'
import { socials }               from '../../config/socials'

/**
 * ContactForm
 * Name · Email · Message fields.
 * Submit → POST /api/contact.
 * Success state · Error state.
 */
function ContactForm() {
  const {
    fields,
    errors,
    status,
    serverError,
    handleChange,
    handleSubmit,
    reset,
  } = useContactForm()

  if (status === 'success') {
    return (
      <div className="bg-surface border border-teal/30 rounded-xl p-8 flex flex-col items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-teal/10 border border-teal/20 flex items-center justify-center">
          <span className="text-teal text-lg">✓</span>
        </div>
        <div>
          <h3 className="font-body text-base font-semibold text-headline mb-1">Message sent.</h3>
          <p className="font-body text-sm text-muted">
            Thanks for reaching out — I'll get back to you soon.
          </p>
        </div>
        <Button variant="ghost" size="sm" onClick={reset}>
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">

      {/* Name */}
      <div>
        <label htmlFor="name" className="block font-mono text-xs text-muted mb-1.5">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={fields.name}
          onChange={handleChange}
          placeholder="Your name"
          className={[
            'w-full bg-surface border rounded-lg px-4 py-2.5 font-body text-sm text-headline placeholder:text-muted/40',
            'outline-none transition-colors duration-200',
            'focus:border-teal/50 focus:ring-1 focus:ring-teal/30',
            errors.name ? 'border-red-500/50' : 'border-elevated',
          ].join(' ')}
        />
        {errors.name && (
          <p className="mt-1 font-mono text-xs text-red-400">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block font-mono text-xs text-muted mb-1.5">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={fields.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className={[
            'w-full bg-surface border rounded-lg px-4 py-2.5 font-body text-sm text-headline placeholder:text-muted/40',
            'outline-none transition-colors duration-200',
            'focus:border-teal/50 focus:ring-1 focus:ring-teal/30',
            errors.email ? 'border-red-500/50' : 'border-elevated',
          ].join(' ')}
        />
        {errors.email && (
          <p className="mt-1 font-mono text-xs text-red-400">{errors.email}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block font-mono text-xs text-muted mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={fields.message}
          onChange={handleChange}
          placeholder="What would you like to say?"
          className={[
            'w-full bg-surface border rounded-lg px-4 py-2.5 font-body text-sm text-headline placeholder:text-muted/40',
            'outline-none transition-colors duration-200 resize-none',
            'focus:border-teal/50 focus:ring-1 focus:ring-teal/30',
            errors.message ? 'border-red-500/50' : 'border-elevated',
          ].join(' ')}
        />
        {errors.message && (
          <p className="mt-1 font-mono text-xs text-red-400">{errors.message}</p>
        )}
      </div>

      {/* Server error */}
      {status === 'error' && serverError && (
        <p className="font-mono text-xs text-red-400 bg-red-500/5 border border-red-500/20 rounded-lg px-4 py-2.5">
          {serverError}
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        loading={status === 'loading'}
        className="w-full"
      >
        Send Message
      </Button>
    </form>
  )
}

/**
 * DirectContact
 * Email · LinkedIn · GitHub — all values from socials.js.
 */
function DirectContact() {
  const links = [
    {
      key   : 'email',
      icon  : Mail,
      label : 'Email',
      href  : socials.email ? `mailto:${socials.email}` : '',
      display : socials.email || 'hello@husinatazeez.dev',
    },
    {
      key   : 'linkedin',
      icon  : Linkedin,
      label : 'LinkedIn',
      href  : socials.linkedin,
      display : 'linkedin.com/in/husinat-azeez',
    },
    {
      key   : 'github',
      icon  : SiGithub,
      label : 'GitHub',
      href  : socials.github,
      display : 'github.com/husinat-azeez',
    },
  ]

  return (
    <div className="flex flex-col gap-4">
      <p className="font-body text-sm text-muted leading-relaxed">
        Prefer to reach out directly? I'm reachable via email, LinkedIn, or GitHub.
      </p>

      <div className="flex flex-col gap-3">
        {links.map(({ key, icon: Icon, label, href, display }) => (
          <div key={key} className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center shrink-0">
              <Icon size={15} className="text-teal" />
            </div>
            <div className="min-w-0">
              <p className="font-mono text-xs text-muted/60 mb-0.5">{label}</p>
              {href ? (
                <a
                  href={href}
                  target={key !== 'email' ? '_blank' : undefined}
                  rel={key !== 'email' ? 'noopener noreferrer' : undefined}
                  className="font-body text-sm text-headline hover:text-teal transition-colors duration-200 truncate block"
                >
                  {display}
                </a>
              ) : (
                <span className="font-body text-sm text-muted/50 truncate block">
                  {display}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/**
 * Contact section
 * Desktop: two-column — ContactForm left, DirectContact right.
 * Mobile: stacked — ContactForm on top, DirectContact below.
 */
export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Contact"
          subtitle="Open to internships, junior developer roles, and collaboration."
        />

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Contact form */}
          <div>
            <p className="font-mono text-xs text-muted uppercase tracking-widest mb-5">
              Send a message
            </p>
            <ContactForm />
          </div>

          {/* Right: Direct contact */}
          <div>
            <p className="font-mono text-xs text-muted uppercase tracking-widest mb-5">
              Direct contact
            </p>
            <DirectContact />
          </div>
        </div>
      </div>
    </section>
  )
}
