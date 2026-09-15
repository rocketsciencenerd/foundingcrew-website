import { useState, useEffect, useRef } from 'react'
import {
  site,
  nav,
  hero,
  logoWall,
  problem,
  services,
  industries,
  howWeWork,
  bench,
  proof,
  faq,
  contact,
} from './content.js'

// --- Intersection Observer hook for scroll animations ---
function useFadeIn() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, visible]
}

// Shared section chrome
const sectionClass = (visible, extra = '') =>
  `py-24 md:py-32 px-6 border-t border-[#E5E5E0] transition-all duration-700 ${
    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
  } ${extra}`

function SectionHeader({ eyebrow, headline, children }) {
  return (
    <div className="mb-16 max-w-2xl">
      <p className="text-[#6B6B6B] text-xs font-sans tracking-widest uppercase mb-4">{eyebrow}</p>
      <h2 className="font-serif font-light text-[#0A0A0A] text-3xl md:text-4xl leading-tight tracking-tight">
        {headline}
      </h2>
      {children}
    </div>
  )
}

// --- NAV ---
function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#1E1E1E]' : ''
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <a
          href="#"
          className="text-[#F5F5F0] font-sans font-medium tracking-tight text-base link-underline"
          aria-label="Founding Crew home"
        >
          {site.name}
        </a>
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {nav.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-[#9A9A94] hover:text-[#F5F5F0] text-sm font-sans transition-colors duration-200 link-underline"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="md:hidden text-[#9A9A94] hover:text-[#F5F5F0] text-sm transition-colors"
          aria-label="Contact"
        >
          Contact
        </a>
      </nav>
    </header>
  )
}

// --- HERO ---
function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-0 px-6 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto w-full">
        <div className="max-w-3xl">
          <h1
            className="font-serif font-light text-[#F5F5F0] text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight mb-8 animate-fade-in"
            style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}
          >
            {hero.headline}
            <br />
            <span className="italic">{hero.headlineEmphasis}</span>
          </h1>
          <p
            className="text-[#9A9A94] text-lg md:text-xl font-sans font-light leading-relaxed mb-12 max-w-2xl animate-fade-in"
            style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}
          >
            {hero.sub}
          </p>
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 animate-fade-in"
            style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}
          >
            <a
              href={hero.primaryCta.href}
              className="inline-flex items-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white text-sm font-sans font-medium px-6 py-3 rounded-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2 focus:ring-offset-[#0A0A0A]"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center gap-2 text-[#9A9A94] hover:text-[#F5F5F0] text-sm font-sans transition-colors duration-200 link-underline group"
            >
              {hero.secondaryCta.label}
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
        <div
          className="grid grid-cols-3 gap-px bg-[#1E1E1E] mt-24 animate-fade-in"
          style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}
        >
          {hero.stats.map(({ stat, label }) => (
            <div key={label} className="bg-[#0A0A0A] px-8 py-10">
              <p className="text-[#F5F5F0] font-serif text-4xl md:text-5xl font-light mb-2">{stat}</p>
              <p className="text-[#6B6B6B] text-xs font-sans tracking-wide">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// --- SOCIAL PROOF (logo marquee — do not change) ---
function SocialProof() {
  const [ref, visible] = useFadeIn()
  const { logos } = logoWall

  return (
    <section
      ref={ref}
      className={`py-16 px-6 border-t border-b border-[#E5E5E0] transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-[#6B6B6B] text-xs font-sans tracking-widest uppercase text-center mb-10">
          {logoWall.eyebrow}
        </p>
      </div>
      <div className="overflow-hidden" aria-label={logoWall.ariaLabel}>
        <div className="flex items-center animate-marquee" style={{ width: 'max-content' }}>
          {[...logos, ...logos].map(({ name, href, logo, invert }, i) => (
            <a
              key={`${name}-${i}`}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 mx-5 transition-all duration-300"
              style={{ filter: `${invert ? 'invert(1) ' : ''}grayscale(100%)`, opacity: 0.45 }}
              onMouseEnter={(e) => { e.currentTarget.style.filter = `${invert ? 'invert(1) ' : ''}grayscale(0%)`; e.currentTarget.style.opacity = '1' }}
              onMouseLeave={(e) => { e.currentTarget.style.filter = `${invert ? 'invert(1) ' : ''}grayscale(100%)`; e.currentTarget.style.opacity = '0.45' }}
            >
              <img src={logo} alt={name} className="w-28 h-10 object-contain" />
            </a>
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <p className="text-[#8A8A85] text-xs font-sans text-center mt-8">{logoWall.note}</p>
      </div>
    </section>
  )
}

// --- PROBLEM / DIFFERENTIATION ---
function Problem() {
  const [ref, visible] = useFadeIn()

  return (
    <section
      ref={ref}
      className={`py-24 md:py-32 px-6 transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <h2 className="font-serif font-light text-[#0A0A0A] text-3xl md:text-4xl leading-tight tracking-tight mb-10">
            {problem.headlineLine1}
            <br />
            {problem.headlineLine2}
          </h2>
          <div className="space-y-6 text-[#5A5A55] font-sans font-light leading-relaxed text-base md:text-[17px]">
            {problem.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="text-[#0A0A0A]">{problem.closing}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// --- SERVICES ---
function Services() {
  const [ref, visible] = useFadeIn()

  return (
    <section id="services" ref={ref} className={sectionClass(visible)}>
      {/* Legacy anchor: keep #pillars links working */}
      <span id="pillars" aria-hidden="true" />
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow={services.eyebrow} headline={services.headline} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px md:gap-x-px md:gap-y-6 bg-[#E5E5E0]">
          {services.items.map((p) => (
            <div key={p.num} className="bg-[#FFFFFF] p-8 flex flex-col gap-6 md:grid md:row-span-5 md:[grid-template-rows:subgrid] md:gap-0">
              <span className="text-[#3B82F6] text-xs font-sans font-medium tracking-widest">
                {p.num}
              </span>
              <h3 className="text-[#0A0A0A] font-sans font-medium text-lg leading-tight">
                {p.name}
                {p.subtitle && (
                  <span className="block text-[#8A8A85] font-light text-sm mt-1 mb-3">{p.subtitle}</span>
                )}
              </h3>
              <p className="text-[#5A5A55] font-sans font-light text-sm leading-relaxed">
                {p.desc}
              </p>
              <ul className="flex flex-col gap-1.5 pt-4 pb-6">
                {p.deliverables.map((d) => (
                  <li key={d} className="text-[#6B6B6B] text-xs font-sans flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#3B82F6] shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-[#E5E5E0]">
                <p className="text-[#8A8A85] text-xs font-sans">
                  <span className="text-[#6B6B6B]">Who it&apos;s for: </span>
                  {p.who}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// --- INDUSTRIES ---
function Industries() {
  const [ref, visible] = useFadeIn()
  const cards = [...industries.items, { ...industries.note, isNote: true }]

  return (
    <section id="industries" ref={ref} className={sectionClass(visible)}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow={industries.eyebrow} headline={industries.headline} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E5E0]">
          {cards.map((c) => (
            <div
              key={c.name}
              className={`p-8 flex flex-col gap-4 ${c.isNote ? 'bg-[#FAFAF8]' : 'bg-[#FFFFFF]'}`}
            >
              <h3
                className={`font-sans font-medium text-base leading-tight ${
                  c.isNote ? 'text-[#6B6B6B]' : 'text-[#0A0A0A]'
                }`}
              >
                {c.name}
              </h3>
              <p className="text-[#5A5A55] font-sans font-light text-sm leading-relaxed">{c.desc}</p>
              {c.proof && (
                <p className="text-[#8A8A85] text-xs font-sans tracking-wide mt-auto pt-4">
                  <span className="text-[#6B6B6B]">{industries.proofLabel} </span>
                  {c.proof.join(' · ')}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// --- HOW WE WORK ---
function HowWeWork() {
  const [ref, visible] = useFadeIn()
  const { steps } = howWeWork

  return (
    <section id="how-we-work" ref={ref} className={sectionClass(visible)}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow={howWeWork.eyebrow} headline={howWeWork.headline} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5E5E0]">
          {steps.map((s, i) => (
            <div key={s.num} className="bg-[#FFFFFF] p-8 flex flex-col gap-4 relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10">
                  <div className="w-2 h-2 rounded-full bg-[#CCCCCC]" />
                </div>
              )}
              <span className="text-[#3B82F6] text-xs font-sans font-medium tracking-widest">
                {s.num}
              </span>
              <h3 className="text-[#0A0A0A] font-sans font-medium text-base">{s.title}</h3>
              <p className="text-[#5A5A55] font-sans font-light text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// --- THE BENCH ---
function Bench() {
  const [ref, visible] = useFadeIn()

  return (
    <section ref={ref} className={sectionClass(visible)}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow={bench.eyebrow} headline={bench.headline}>
          <p className="text-[#5A5A55] font-sans font-light text-base leading-relaxed mt-6">
            {bench.desc}
          </p>
        </SectionHeader>
        <div className="flex flex-wrap gap-3">
          {bench.disciplines.map((d) => (
            <span
              key={d}
              className="px-4 py-2 border border-[#E5E5E0] text-[#5A5A55] font-sans text-sm rounded-sm hover:border-[#3B82F6] hover:text-[#3B82F6] transition-colors duration-200 cursor-default"
            >
              {d}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

// --- PROOF / TRACK RECORD ---
function Proof() {
  const [ref, visible] = useFadeIn()

  return (
    <section ref={ref} className={sectionClass(visible)}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow={proof.eyebrow} headline={proof.headline} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5E5E0]">
          {proof.cases.map((c) => (
            <div key={c.company} className="bg-[#FFFFFF] p-8 flex flex-col gap-4">
              <span className="text-[#8A8A85] text-xs font-sans tracking-widest uppercase">
                Project · {c.industry}
              </span>
              <p className="text-[#0A0A0A] font-sans font-medium text-sm leading-snug">
                {c.outcome}
              </p>
              {c.href ? (
                <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-[#3B82F6] hover:text-[#2563EB] text-xs font-sans tracking-wide transition-colors">
                  {c.company}
                </a>
              ) : (
                <p className="text-[#3B82F6] text-xs font-sans tracking-wide">{c.company}</p>
              )}
              <p className="text-[#5A5A55] font-sans font-light text-sm leading-relaxed">{c.what}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// --- FAQ ---
function FAQ() {
  const [ref, visible] = useFadeIn()
  const [open, setOpen] = useState(null)

  return (
    <section ref={ref} className={sectionClass(visible)}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow={faq.eyebrow} headline={faq.headline} />
        <div className="max-w-2xl flex flex-col divide-y divide-[#E5E5E0]">
          {faq.items.map((item, i) => (
            <div key={item.q}>
              <button
                className="w-full text-left py-5 flex items-start justify-between gap-4 group focus:outline-none"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="text-[#0A0A0A] font-sans text-sm font-medium group-hover:text-[#000000] transition-colors">
                  {item.q}
                </span>
                <span
                  className={`shrink-0 text-[#6B6B6B] transition-transform duration-200 mt-0.5 ${
                    open === i ? 'rotate-45' : ''
                  }`}
                >
                  <Plus className="w-4 h-4" />
                </span>
              </button>
              <div className={`accordion-content ${open === i ? 'open' : ''}`}>
                <p className="text-[#5A5A55] font-sans font-light text-sm leading-relaxed pb-5">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// --- CONTACT ---
const inputClass =
  'w-full bg-[#FFFFFF] border border-[#E5E5E0] text-[#0A0A0A] placeholder-[#9A9A94] font-sans text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-colors'

function Contact() {
  const [ref, visible] = useFadeIn()
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const endpoint = site.formEndpoint

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.currentTarget),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" ref={ref} className={sectionClass(visible, 'py-32 md:py-40')}>
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-serif font-light text-[#0A0A0A] text-4xl md:text-5xl leading-tight tracking-tight mb-6">
          {contact.headline}
        </h2>
        <p className="text-[#5A5A55] font-sans font-light text-lg leading-relaxed mb-2">{contact.sub}</p>
        <p className="text-[#8A8A85] font-sans text-sm mb-10">{contact.responseNote}</p>

        {!endpoint ? (
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white text-sm font-sans font-medium px-8 py-4 rounded-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2 focus:ring-offset-[#FAFAF8]"
          >
            {contact.submitLabel}
          </a>
        ) : status === 'success' ? (
          <p className="text-[#0A0A0A] font-sans text-base py-8" role="status">
            {contact.successMessage}
          </p>
        ) : (
          <form onSubmit={handleSubmit} action={endpoint} method="POST" className="text-left flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="sr-only" htmlFor="contact-name">{contact.fields.name}</label>
              <input id="contact-name" name="name" type="text" required autoComplete="name" placeholder={contact.fields.name} className={inputClass} />
              <label className="sr-only" htmlFor="contact-email">{contact.fields.email}</label>
              <input id="contact-email" name="email" type="email" required autoComplete="email" placeholder={contact.fields.email} className={inputClass} />
              <label className="sr-only" htmlFor="contact-company">{contact.fields.company}</label>
              <input id="contact-company" name="company" type="text" required autoComplete="organization" placeholder={contact.fields.company} className={inputClass} />
              <label className="sr-only" htmlFor="contact-role">{contact.fields.role}</label>
              <input id="contact-role" name="role" type="text" autoComplete="organization-title" placeholder={contact.fields.role} className={inputClass} />
            </div>
            <label className="sr-only" htmlFor="contact-message">{contact.fields.message}</label>
            <textarea id="contact-message" name="message" required rows={4} placeholder={contact.fields.message} className={inputClass} />
            {/* Honeypot for spam bots */}
            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="inline-flex items-center justify-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] disabled:opacity-60 text-white text-sm font-sans font-medium px-8 py-4 rounded-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2 focus:ring-offset-[#FAFAF8]"
            >
              {status === 'submitting' ? 'Sending…' : contact.submitLabel}
            </button>
            {status === 'error' && (
              <p className="text-[#B91C1C] font-sans text-sm text-center" role="alert">
                {contact.errorMessage}
              </p>
            )}
          </form>
        )}

        <p className="text-[#8A8A85] font-sans text-xs mt-8">
          {contact.emailLabel}{' '}
          <a href={`mailto:${site.email}`} className="text-[#6B6B6B] hover:text-[#0A0A0A] link-underline">
            {site.email}
          </a>
        </p>
      </div>
    </section>
  )
}

// --- FOOTER ---
function Footer() {
  return (
    <footer className="border-t border-[#E5E5E0] py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
        <div>
          <p className="text-[#0A0A0A] font-sans font-medium text-sm mb-2">{site.name}</p>
          <p className="text-[#6B6B6B] font-sans font-light text-xs leading-relaxed">{site.tagline}</p>
        </div>
        <nav aria-label="Footer navigation" className="flex justify-center">
          <ul className="flex flex-row flex-wrap gap-6 list-none m-0 p-0">
            {nav.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-[#6B6B6B] hover:text-[#0A0A0A] text-xs font-sans transition-colors duration-200 link-underline"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex md:justify-end">
          <p className="text-[#8A8A85] font-sans text-xs leading-relaxed">{site.copyright}</p>
        </div>
      </div>
    </footer>
  )
}

// --- INLINE ICONS (no heavy icon lib) ---
function ArrowRight({ className }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Plus({ className }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M8 3v10M3 8h10" strokeLinecap="round" />
    </svg>
  )
}

// --- APP ---
export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SocialProof />
        <Problem />
        <Services />
        <Industries />
        <HowWeWork />
        <Bench />
        <Proof />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
