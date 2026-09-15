// ---------------------------------------------------------------------------
// All site copy lives here. Edit text in this file; layout lives in App.jsx.
// Items marked REVIEW need CEO confirmation before publishing.
// ---------------------------------------------------------------------------

export const site = {
  name: 'Founding Crew',
  email: 'nate@foundingcrew.io',
  // REVIEW: create a form at https://formspree.io that forwards to the inbox
  // above, then replace this with the real form ID (e.g. 'xpzgkqyw').
  formspreeId: 'YOUR_FORM_ID',
  tagline: 'Digital transformation, delivered by forward deployed engineers.',
  copyright: '© 2026 Founding Crew',
}

export const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'How We Work', href: '#how-we-work' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  headline: 'Digital transformation',
  headlineEmphasis: 'that actually ships.',
  sub: "Forward deployed engineers who've shipped inside NASA, Cargill, 3M, and GE. We embed with your teams to take AI and digital initiatives from pilot to production.",
  primaryCta: { label: 'Talk to our team', href: '#contact' },
  secondaryCta: { label: 'See how we work', href: '#how-we-work' },
  // REVIEW: confirm all three are defensible as stated.
  stats: [
    { stat: '6+', label: 'Years at NASA Mission Control' },
    { stat: '3', label: 'Regulated frameworks delivered: SOC 2, NIST 800-171, HIPAA' },
    { stat: '100%', label: 'Fixed-fee engagements. No retainers, no hourly.' },
  ],
}

// Do not change: same logos, same order, same behavior.
export const logoWall = {
  eyebrow: "Where we've shipped",
  ariaLabel: "Companies we've worked with",
  logos: [
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
  ],
}

export const problem = {
  headlineLine1: "Most companies don't fail at strategy.",
  headlineLine2: 'They fail at execution.',
  paragraphs: [
    "There's a gap between knowing what to build and shipping it to production. It's where AI initiatives stall, new product lines get stuck in pilot, and compliance debt accumulates.",
    "You can hire consultants who'll write you a deck. You can hire contractors who'll build what you scoped. Neither closes the gap.",
  ],
  closing:
    'Founding Crew closes it. We deploy senior engineers and product leaders into your organization — forward deployed, accountable for outcomes, not staff augmentation.',
}

export const services = {
  eyebrow: 'What we do',
  headline: 'Three ways we unlock value.',
  items: [
    {
      num: '01',
      name: 'AI Transformation',
      desc: "We take AI initiatives from pilot to production inside your real workflows. We don't sell you tools you can buy yourself. We find where AI creates value, redesign the workflow around it, build and integrate it, and ship it — with governance and data security built in, including local and private processing for regulated data.",
      deliverables: [
        'AI opportunity assessment',
        'Workflow redesign',
        'Agent & automation build',
        'Systems integration',
        'Production deployment',
        'Governance & data security',
      ],
      who: 'Operations and technology leaders whose AI initiatives are stuck in pilot.',
    },
    {
      num: '02',
      name: 'Digital Solutions',
      subtitle: '0→1 Product Development',
      desc: 'New digital products, platforms, internal tools, and connected hardware and software — built from concept to launch. Product direction, design, and engineering as one accountable team, inside your environment.',
      deliverables: [
        'Product strategy',
        'UX & product design',
        'Full-stack engineering',
        'Hardware & embedded systems',
        'Launch & rollout',
      ],
      who: 'Enterprise and intrapreneurial teams that need a new product or platform shipped, not scoped.',
    },
    {
      num: '03',
      name: 'Training & Implementation',
      desc: "Delivery isn't done until your team owns it. We run the rollout, manage the change, train the people who will operate the system, and document everything before we leave.",
      deliverables: [
        'Implementation & rollout',
        'Change management',
        'Team training programs',
        'Documentation & handoff',
        'Ongoing enablement',
      ],
      who: 'Leaders who need a delivered system to be adopted, run, and extended by their own teams.',
    },
  ],
}

export const industries = {
  eyebrow: 'Where we work',
  headline: 'Built for regulated, mission-critical environments.',
  // REVIEW: confirm each proof-point list reflects work actually done in that industry.
  items: [
    {
      name: 'Supply Chain & Manufacturing',
      desc: 'Planning, logistics, plant-floor, and operations systems. AI for forecasting, exception handling, and workflow automation.',
      proof: ['Cargill', 'Sysco', 'Tyson', 'FedEx', 'J.B. Hunt', 'Walmart', 'Target'],
    },
    {
      name: 'Industrial',
      desc: 'Asset-heavy, safety- and process-critical environments. Integration with legacy and OT systems.',
      proof: ['3M', 'GE', 'ExxonMobil', 'Intel', 'Micron'],
    },
    {
      name: 'Healthcare',
      desc: 'HIPAA-aware AI and product work. Local and private data processing for PHI.',
      proof: ['Johns Hopkins', 'Emory', 'Biobot Analytics'],
    },
    {
      name: 'Aerospace',
      desc: 'Mission-critical, high-reliability software. Six years inside NASA Mission Control.',
      proof: ['NASA Johnson Space Center'],
    },
    {
      name: 'Education',
      desc: 'Institutional systems, research platforms, and AI adoption for universities.',
      proof: ['Cornell', 'Johns Hopkins', 'Emory'],
    },
  ],
  // Sixth card: keeps the compliance proof point visible now that it is no longer a headline pillar.
  note: {
    name: 'Across all of them',
    desc: 'Security and compliance are built into every engagement, not bolted on. SOC 2, NIST 800-171, HIPAA, DevSecOps, and cloud architecture are standard capabilities.',
  },
}

export const howWeWork = {
  eyebrow: 'The process',
  headline: 'How we work.',
  steps: [
    {
      num: '01',
      title: 'Diagnose',
      desc: "One discovery call. We figure out if we're the right team for the problem. If not, we'll tell you who is.",
    },
    {
      num: '02',
      title: 'Scope',
      desc: 'Fixed-fee, procurement-ready proposal in 5 business days. Clear deliverables. Clear timeline. No retainers.',
    },
    {
      num: '03',
      title: 'Deploy',
      desc: 'Our engineers work inside your environment and your team — standups, shared channels, on-call for launches.',
    },
    {
      num: '04',
      title: 'Hand off',
      desc: "We document everything and train your team to own it. Then we leave. That's the point.",
    },
  ],
}

export const bench = {
  eyebrow: 'The bench',
  headline: 'A bench built for enterprise scope.',
  desc: 'Founding Crew includes a vetted network of operators, engineers, and specialists. When your project needs it, we pull in the right people — already trusted, already proven.',
  // REVIEW: first two tags were "Technical Founders" / "Product Founders".
  disciplines: [
    'Technical Leadership',
    'Product Leadership',
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
  ],
}

export const proof = {
  eyebrow: 'Track record',
  headline: "What we've shipped.",
  cases: [
    {
      industry: 'Aerospace',
      outcome: 'Mission-critical procedure tracking deployed at NASA Houston Mission Control.',
      company: 'NASA Johnson Space Center',
      what: 'Six years of full-stack work on systems used for International Space Station operations.',
      href: 'https://www.nasa.gov/johnson/',
    },
    {
      industry: 'Supply Chain & Manufacturing',
      outcome: "0→1 hardware + software product business shipping to McDonald's, KFC, and Target Field.",
      company: 'Cargill Horizons',
      what: 'Built from concept to enterprise contracts with metered funding. CES Innovation Award honoree.',
      href: 'https://www.cargill.com',
    },
    {
      industry: 'Regulated Markets',
      outcome: 'SOC 2 in 6 months. NIST 800-171 underway. Regulated enterprise markets opened for a new product line.',
      // REVIEW: client was previously described as "Seed-stage startup". Name it if permitted.
      company: 'Confidential client',
      what: 'Led the compliance program and security controls that let a new product line sell into regulated enterprise markets.',
      href: null,
    },
  ],
}

export const faq = {
  eyebrow: 'FAQ',
  headline: 'Common questions.',
  items: [
    {
      q: 'How are you different from a consulting firm?',
      a: 'Consulting firms write decks. We ship production systems. Our engineers are forward deployed inside your organization, accountable for outcomes, and we hand off working systems — not slide recommendations.',
    },
    {
      q: 'What does forward deployed engineering mean in practice?',
      a: 'Senior engineers and product leaders work inside your environment, alongside the people who own the problem. Your standups, your channels, your systems. We ship into production, then transfer ownership before we leave.',
    },
    {
      q: 'How do you work with our internal teams and existing vendors?',
      a: "As part of the team, not around it. We integrate with your engineering, IT, and security functions and with the vendors already in place. We're there to ship the outcome, not to replace your stack or your people.",
    },
    {
      q: 'How do you handle security, data residency, and regulated data?',
      a: "We've delivered SOC 2, NIST 800-171, and HIPAA programs, and we build to those standards by default. Where data can't leave your environment, we run AI processing locally or in your private cloud. Nothing moves without your security team's sign-off.",
    },
    {
      q: 'Can you integrate with legacy, on-prem, or ERP systems?',
      // REVIEW: confirm this claim is accurate for past engagements.
      a: "Yes. Most enterprise work touches systems that predate the cloud. We've shipped inside Fortune 500 and federal environments where legacy and on-prem systems are the norm, and we don't require a rip-and-replace to deliver value.",
    },
    {
      q: 'We operate in a highly regulated environment.',
      a: "We've shipped inside Cargill, 3M, and NASA. We understand compliance requirements, procurement, and the politics of large organizations. Regulated markets are a specialty, not a limitation.",
    },
    {
      q: 'How do you bill?',
      a: "Fixed-fee per project. No hourly, no retainer. You know what you're getting and what it costs before we start. Scope changes require a new proposal — no scope creep, no surprise invoices.",
    },
    {
      q: 'How long are typical engagements?',
      a: "Three to six months for a defined project. Shorter sprints of six to eight weeks work for focused assessments or compliance programs. We don't do indefinite retainers — we complete the work and hand it off.",
    },
    {
      q: 'What happens after handoff?',
      a: 'You own it. Documentation, training, and runbooks are part of every engagement, and your team is operating the system before we step back. If you want ongoing enablement, we scope that separately — never as an open-ended retainer.',
    },
    {
      q: 'How do you fit into our procurement process?',
      a: 'Fixed-fee, fixed-scope proposals with clear deliverables — the format procurement teams prefer. Master service agreements, security questionnaires, and vendor onboarding are a standard part of getting started.',
    },
  ],
}

export const contact = {
  headline: "Let's talk.",
  sub: "Book a discovery call. We'll tell you whether we're the right team for the job.",
  responseNote: 'Typical response within one business day.',
  submitLabel: 'Book a discovery call',
  successMessage: "Thanks — we've got it. Expect a reply within one business day.",
  errorMessage: 'Something went wrong. Email us directly and we will get right back to you.',
  emailLabel: 'Or email us directly:',
  fields: {
    name: 'Name',
    email: 'Work email',
    company: 'Company',
    role: 'Role',
    message: 'What are you working on?',
  },
}
