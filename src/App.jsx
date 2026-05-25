import { useState, useEffect, useRef } from 'react'

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
          Founding Crew
        </a>
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {[
            { label: 'Pillars', href: '#pillars' },
            { label: 'Contact', href: '#contact' },
          ].map(({ label, href }) => (
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
            The founding team
            <br />
            <span className="italic">you didn&apos;t hire.</span>
          </h1>
          <p
            className="text-[#9A9A94] text-lg md:text-xl font-sans font-light leading-relaxed mb-12 max-w-2xl animate-fade-in"
            style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}
          >
            We&apos;ve shipped at NASA, GE, Cargill, and 3M — inside startups, Fortune 500s, and federal agencies. Now we plug into your company to close the gap between strategy and execution.
          </p>
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 animate-fade-in"
            style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}
          >
            <a
              href="mailto:nate@foundingcrew.io"
              className="inline-flex items-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white text-sm font-sans font-medium px-6 py-3 rounded-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2 focus:ring-offset-[#0A0A0A]"
            >
              Start a conversation
            </a>
            <a
              href="#pillars"
              className="inline-flex items-center gap-2 text-[#9A9A94] hover:text-[#F5F5F0] text-sm font-sans transition-colors duration-200 link-underline group"
            >
              See how we work
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div
          className="grid grid-cols-3 gap-px bg-[#1E1E1E] mt-24 animate-fade-in"
          style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}
        >
          {[
            { stat: '6+', label: 'Years at NASA Mission Control' },
            { stat: '$2M+', label: 'ARR unlocked via compliance' },
            { stat: '0→1', label: 'Startups to enterprise contracts' },
          ].map(({ stat, label }) => (
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

// --- SOCIAL PROOF ---
function SocialProof() {
  const [ref, visible] = useFadeIn()
  const logos = [
    { name: 'NASA', href: 'https://www.nasa.gov/johnson/', logo: '/logos/nasa.svg' },
    { name: 'Cargill', href: 'https://www.cargill.com', logo: '/logos/cargill.svg' },
    { name: '3M', href: 'https://www.3m.com', logo: '/logos/3m.svg' },
    { name: 'GE', href: 'https://www.ge.com', logo: '/logos/ge.svg' },
    { name: 'Johns Hopkins', href: 'https://www.jhu.edu', logo: '/logos/johnshopkins.png' },
    { name: 'Biobot Analytics', href: 'https://biobot.io', logo: '/logos/biobot.png', invert: true },
    { name: 'Emory', href: 'https://reporter.nih.gov/search/TxNs2nZMUEyDRdoywNGcCw/project-details/10781129', logo: '/logos/emory.png', invert: true },
    { name: 'Cornell', href: 'https://www.cornell.edu', logo: '/logos/cornell.png' },
    { name: 'Coca-Cola', href: 'https://www.coca-colacompany.com', logo: '/logos/cocacola.svg' },
    { name: 'ExxonMobil', href: 'https://www.exxonmobil.com', logo: '/logos/exxonmobil.svg' },
    { name: 'Intel', href: 'https://www.intel.com', logo: '/logos/intel.svg' },
    { name: 'Micron', href: 'https://www.micron.com', logo: '/logos/micron.svg' },
    { name: 'KFC', href: 'https://www.kfc.com', logo: '/logos/kfc.png' },
    { name: "McDonald's", href: 'https://www.mcdonalds.com', logo: '/logos/mcdonalds.svg' },
    { name: 'Target Field', href: 'https://www.mlb.com/twins/ballpark', logo: '/logos/targetfield.svg' },
    { name: 'Sysco', href: 'https://www.sysco.com', logo: '/logos/sysco.png' },
    { name: 'Tyson', href: 'https://www.tysonfoods.com', logo: '/logos/tyson.png' },
    { name: "Applebee's", href: 'https://www.applebees.com', logo: '/logos/applebees.png' },
    { name: 'FedEx', href: 'https://www.fedex.com', logo: '/logos/fedex.jpg' },
    { name: 'Walmart', href: 'https://www.walmart.com', logo: '/logos/walmart.png' },
    { name: 'Target', href: 'https://www.target.com', logo: '/logos/target.svg' },
    { name: 'J.B. Hunt', href: 'https://www.jbhunt.com', logo: '/logos/jbhunt.svg' },
  ]

  return (
    <section
      ref={ref}
      className={`py-16 px-6 border-t border-b border-[#E5E5E0] transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-[#6B6B6B] text-xs font-sans tracking-widest uppercase text-center mb-10">
          Where we&apos;ve shipped
        </p>
      </div>
      <div className="overflow-hidden" aria-label="Companies we've worked with">
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
    </section>
  )
}

// --- PROBLEM ---
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
            Most companies don&apos;t fail at strategy.
            <br />
            They fail at execution.
          </h2>
          <div className="space-y-6 text-[#5A5A55] font-sans font-light leading-relaxed text-base md:text-[17px]">
            <p>
              There&apos;s a gap between knowing what to build and shipping it to production.
              It&apos;s where AI initiatives stall, new product lines get stuck in pilot, and
              compliance debt accumulates.
            </p>
            <p>
              You can hire consultants who&apos;ll write you a deck. You can hire contractors
              who&apos;ll build what you scoped. Neither closes the gap.
            </p>
            <p className="text-[#0A0A0A]">
              Founding Crew closes it. We&apos;re operators with founder-grade judgment, not pairs
              of hands.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// --- PILLARS ---
function Pillars() {
  const [ref, visible] = useFadeIn()

  const pillars = [
    {
      num: '01',
      name: 'AI Automation & Training',
      desc: "We help your team go from 'we should use AI for that' to 'we shipped it last week.' We don't sell you tools you can buy yourself — we train your team to use them, integrate them into your workflows, and own the result.",
      deliverables: ['Automation rollouts', 'Workflow audits', 'AI training programs', 'Change management'],
      who: "Companies whose teams need to actually use AI, not just talk about it.",
    },
    {
      num: '02',
      name: '0→1 Product',
      desc: 'You have an idea. You need it shipped. We do product direction, customer experience, and software development as a single embedded team — the same way a founding team works.',
      deliverables: ['MVP builds', 'Product strategy', 'Customer onboarding flows', 'Full-stack engineering', 'Design'],
      who: 'Seed-stage startups and intrapreneurs at Fortune 500s who need 0→1 velocity.',
    },
    {
      num: '03',
      name: 'Compliance & Infrastructure',
      desc: "SOC 2. NIST 800-171. HIPAA. CI/CD that doesn't fall over. We also run AI processing locally against regulated data — patient records, financial files, sensitive CSVs — so you get the speed of automation without data ever leaving your environment.",
      deliverables: ['Compliance programs', 'Security policies', 'DevSecOps pipelines', 'Cloud architecture', 'Observability', 'Local and cloud deployed AI data pipelines'],
      who: 'Startups, academic institutions, and enterprises selling into or operating within regulated markets that need a project shipped without expanding headcount.',
    },
  ]

  return (
    <section
      id="pillars"
      ref={ref}
      className={`py-24 md:py-32 px-6 border-t border-[#E5E5E0] transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-[#6B6B6B] text-xs font-sans tracking-widest uppercase mb-4">
            What we do
          </p>
          <h2 className="font-serif font-light text-[#0A0A0A] text-3xl md:text-4xl leading-tight tracking-tight">
            Three pillars. One embedded team.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px md:gap-x-px md:gap-y-6 bg-[#E5E5E0]">
          {pillars.map((p) => (
            <div key={p.num} className="bg-[#FFFFFF] p-8 flex flex-col gap-6 md:grid md:row-span-5 md:[grid-template-rows:subgrid] md:gap-0">
              <span className="text-[#3B82F6] text-xs font-sans font-medium tracking-widest">
                {p.num}
              </span>
              <h3 className="text-[#0A0A0A] font-sans font-medium text-lg leading-tight">
                {p.name}
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

// --- HOW WE WORK ---
function HowWeWork() {
  const [ref, visible] = useFadeIn()

  const steps = [
    {
      num: '01',
      title: 'Diagnose',
      desc: "One free call. We figure out if we're the right team for the problem. If not, we'll tell you who is.",
    },
    {
      num: '02',
      title: 'Scope',
      desc: 'Fixed-fee proposal in 5 business days. Clear deliverables. Clear timeline. No retainers.',
    },
    {
      num: '03',
      title: 'Embed',
      desc: "We work like part of your team. Daily standups, shared Slack, on-call for launches.",
    },
    {
      num: '04',
      title: 'Hand off',
      desc: "We document everything and train your team to own it. Then we leave. That's the point.",
    },
  ]

  return (
    <section
      ref={ref}
      className={`py-24 md:py-32 px-6 border-t border-[#E5E5E0] transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-[#6B6B6B] text-xs font-sans tracking-widest uppercase mb-4">
            The process
          </p>
          <h2 className="font-serif font-light text-[#0A0A0A] text-3xl md:text-4xl leading-tight tracking-tight">
            How we work.
          </h2>
        </div>
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

// --- PROOF ---
function Proof() {
  const [ref, visible] = useFadeIn()

  const cases = [
    {
      outcome: 'SOC 2 in 6 months. NIST 800-171 underway. $2M ARR in new vertical unlocked.',
      company: 'Seed-stage startup',
      what: 'Founder-led the compliance program that opened regulated enterprise markets.',
      href: null,
    },
    {
      outcome: '0→1 hardware + software product business shipping to McDonald\'s, KFC, and Target Field.',
      company: 'Cargill Horizons',
      what: 'Built from a garage to enterprise contracts with metered funding. CES Innovation Award honoree.',
      href: 'https://www.cargill.com',
    },
    {
      outcome: 'Mission-critical procedure tracking deployed at NASA Houston Mission Control.',
      company: 'NASA Johnson Space Center',
      what: 'Six years of full-stack work on systems used for International Space Station operations.',
      href: 'https://www.nasa.gov/johnson/',
    },
  ]

  return (
    <section
      ref={ref}
      className={`py-24 md:py-32 px-6 border-t border-[#E5E5E0] transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-[#6B6B6B] text-xs font-sans tracking-widest uppercase mb-4">
            Track record
          </p>
          <h2 className="font-serif font-light text-[#0A0A0A] text-3xl md:text-4xl leading-tight tracking-tight">
            What we&apos;ve shipped.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5E5E0]">
          {cases.map((c) => (
            <div key={c.company} className="bg-[#FFFFFF] p-8 flex flex-col gap-4">
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

  const items = [
    {
      q: 'How are you different from a consulting firm?',
      a: "Consulting firms write decks. We ship products. We embed with your team, own the outcomes, and hand off working systems — not slide recommendations. We have skin in the execution, not just the strategy.",
    },
    {
      q: "Why not just hire a contractor?",
      a: "Contractors execute what you spec. We figure out what to build, how to build it, and why — then build it. If the spec is wrong, we'll tell you before you pay for something that won't work.",
    },
    {
      q: "We're too small / too early.",
      a: "No you're not. Seed-stage is exactly when founder-grade execution matters most. We've worked with 2-person teams and helped them punch into enterprise markets. Small is a feature, not a blocker.",
    },
    {
      q: "We're too big / too regulated.",
      a: "No you're not. We've shipped inside Cargill, 3M, and NASA. We understand compliance requirements, procurement, and the politics of large organizations. Regulated markets are a specialty, not a limitation.",
    },
    {
      q: 'How do you bill?',
      a: "Fixed-fee per project. No hourly, no retainer. You know what you're getting and what it costs before we start. Scope changes require a new proposal — no scope creep, no surprise invoices.",
    },
    {
      q: 'How long are typical engagements?',
      a: "Three to six months for a defined project. We have done shorter sprints (6-8 weeks) for focused audits or compliance work. We don't do indefinite retainers — we complete the work and hand it off.",
    },
  ]

  return (
    <section
      ref={ref}
      className={`py-24 md:py-32 px-6 border-t border-[#E5E5E0] transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-[#6B6B6B] text-xs font-sans tracking-widest uppercase mb-4">FAQ</p>
          <h2 className="font-serif font-light text-[#0A0A0A] text-3xl md:text-4xl leading-tight tracking-tight">
            Common questions.
          </h2>
        </div>
        <div className="max-w-2xl flex flex-col divide-y divide-[#E5E5E0]">
          {items.map((item, i) => (
            <div key={i}>
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

// --- FINAL CTA ---
function FinalCTA() {
  const [ref, visible] = useFadeIn()

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-32 md:py-40 px-6 border-t border-[#E5E5E0] text-center transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      <div className="max-w-xl mx-auto">
        <h2 className="font-serif font-light text-[#0A0A0A] text-4xl md:text-5xl leading-tight tracking-tight mb-6">
          Let&apos;s talk.
        </h2>
        <p className="text-[#5A5A55] font-sans font-light text-lg leading-relaxed mb-10">
          Free 30-minute call. We&apos;ll tell you whether we&apos;re the right team for the job.
        </p>
        <a
          href="mailto:nate@foundingcrew.io"
          className="inline-flex items-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white text-sm font-sans font-medium px-8 py-4 rounded-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2 focus:ring-offset-[#FAFAF8]"
        >
          Start a conversation
        </a>
        <p className="text-[#8A8A85] font-sans text-xs mt-6">nate@foundingcrew.io</p>
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
          <p className="text-[#0A0A0A] font-sans font-medium text-sm mb-2">Founding Crew</p>
          <p className="text-[#6B6B6B] font-sans font-light text-xs leading-relaxed">
            The founding team you didn&apos;t hire.
          </p>
        </div>
        <nav aria-label="Footer navigation" className="flex justify-center">
          <ul className="flex flex-row gap-6 list-none m-0 p-0">
            {[
              { label: 'Pillars', href: '#pillars' },
              { label: 'Contact', href: '#contact' },
            ].map(({ label, href }) => (
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
        <div className="flex justify-end">
          <p className="text-[#8A8A85] font-sans text-xs leading-relaxed">
            &copy; 2026 Founding Crew
          </p>
        </div>
      </div>
    </footer>
  )
}

// --- INLINE ICONS (no heavy icon lib) ---
function ArrowRight({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Plus({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M8 3v10M3 8h10" strokeLinecap="round" />
    </svg>
  )
}

// --- RESOURCES ---
function Resources() {
  const [ref, visible] = useFadeIn()

  const disciplines = [
    'Technical Founders',
    'Product Founders',
    'Customer Success',
    'PCB & Electrical Engineering',
    'Full-Stack Engineering',
    'DevSecOps & Cloud',
    'Compliance & Regulatory',
    'AI & Automation',
    'UX & Product Design',
    'Go-to-Market Strategy',
    'Research & Data Science',
    'Hardware & Manufacturing',
  ]

  return (
    <section
      ref={ref}
      className={`py-24 md:py-32 px-6 border-t border-[#E5E5E0] transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <p className="text-[#6B6B6B] text-xs font-sans tracking-widest uppercase mb-4">
            The bench
          </p>
          <h2 className="font-serif font-light text-[#0A0A0A] text-3xl md:text-4xl leading-tight tracking-tight mb-6">
            We bring more than two people.
          </h2>
          <p className="text-[#5A5A55] font-sans font-light text-base leading-relaxed">
            Founding Crew includes a vetted network of operators, engineers, and specialists. When your project needs it, we pull in the right people — already trusted, already proven.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {disciplines.map((d) => (
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

// --- APP ---
export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SocialProof />
        <Problem />
        <Pillars />
        <HowWeWork />
        <Resources />
        <Proof />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
