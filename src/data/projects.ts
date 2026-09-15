export type Project = {
  title: string
  slug: string
  service: string
  excerpt: string
  stack: string
  liveUrl?: string
  repoUrl?: string
  year: string
  accent: string
  /** Local fallback / primary preview image — prefer real site shots */
  image: string
}

/** Curated local site shots — never swap for remote thumbnails. */
export function previewSrc(project: Project): string {
  return project.image
}

export const projects: Project[] = [
  {
    title: 'Ossy Brown EPK',
    slug: 'ossy-brown-epk',
    service: 'Design & Development',
    excerpt: 'Storydoc-inspired electronic press kit for Afro-R&B artist Ossy Brown.',
    stack: 'WordPress, PHP, Custom CSS, JavaScript',
    liveUrl: 'http://localhost/epk/',
    year: '2026',
    accent: '#1a1a1a',
    image: '/projects/ossy-brown-epk-site.svg',
  },
  {
    title: 'DotCharis Consult',
    slug: 'dotcharis-consult',
    service: 'Interaction & Development',
    excerpt:
      'Multi-role consultancy platform for real estate, travel, construction, and agent onboarding.',
    stack: 'Next.js, React, TypeScript, Tailwind, Supabase, GSAP',
    liveUrl: 'https://www.dotcharisconsult.com/',
    repoUrl: 'https://github.com/fisayoariyo/cc',
    year: '2025',
    accent: '#0a1628',
    image: '/projects/dotcharis-consult.png',
  },
  {
    title: 'HFEI CropEx',
    slug: 'hfei-cropex',
    service: 'Design & Development',
    excerpt:
      'Mobile-first AgTech enrollment with biometric verification for farmers and field agents.',
    stack: 'React, Vite, Tailwind, DigitalPersona SDK, REST API',
    liveUrl: 'https://hfei.hashmarcropex.com/',
    repoUrl: 'https://github.com/fisayoariyo/hashp',
    year: '2025',
    accent: '#E8F5E9',
    image: '/projects/hfei-cropex.jpg',
  },
  {
    title: 'CropEx Admin',
    slug: 'cropex-admin',
    service: 'Design & Development',
    excerpt: 'Offline-first admin dashboard for farmers, agents, and verifications.',
    stack: 'React 19, Vite, TypeScript, Tailwind, sql.js',
    year: '2025',
    accent: '#F1F1F1',
    image: '/projects/cropex-admin-site.svg',
  },
  {
    title: 'Clicks Aladire',
    slug: 'clicks-aladire',
    service: 'Design & Development',
    excerpt: 'Headless WooCommerce storefront for Afrocentric fashion.',
    stack: 'React, Vite, TypeScript, TanStack Query, WooCommerce, GSAP',
    liveUrl: 'https://clicksaladire.store/',
    year: '2025',
    accent: '#FCE4EC',
    image: '/projects/clicks-aladire.png',
  },
  {
    title: 'Nest Gadgets',
    slug: 'nest-gadgets',
    service: 'Design & Development',
    excerpt: 'Modern gadget shop with deal finder, curated kits, and brand filters.',
    stack: 'PHP, Custom CSS, JavaScript',
    liveUrl: 'http://localhost/shop/',
    year: '2026',
    accent: '#F1F1F1',
    image: '/projects/nest-gadgets-site.svg',
  },
  {
    title: 'BSHP Portfolio',
    slug: 'bshp-portfolio',
    service: 'Interaction & Development',
    excerpt: 'Interactive PM portfolio with Matter.js physics hero and GSAP.',
    stack: 'WordPress, Tailwind, Matter.js, GSAP, PHP',
    liveUrl: 'https://pelumioluwaseun.cc',
    year: '2025',
    accent: '#101010',
    image: '/projects/bshp-portfolio.png',
  },
  {
    title: 'OKAL Music',
    slug: 'okal-music',
    service: 'Design & Development',
    excerpt: 'Standalone artist website for Nigerian songwriter OKAL.',
    stack: 'WordPress, Custom CSS, JavaScript, PHP',
    liveUrl: 'https://www.iamokal.com',
    year: '2025',
    accent: '#F5F0E8',
    image: '/projects/okal-music.jpg',
  },
  {
    title: 'MDI Consults',
    slug: 'mdi-consults',
    service: 'Design & Development',
    excerpt: 'Corporate consulting site with GTV visa packages.',
    stack: 'WordPress, PHP, Custom CSS, JavaScript',
    liveUrl: 'https://mdiconsults.com',
    year: '2025',
    accent: '#F1F1F1',
    image: '/projects/mdi-consults.png',
  },
  {
    title: 'Million Dollar Ideas',
    slug: 'million-dollar-ideas',
    service: 'Design & Development',
    excerpt: 'Creative growth agency site with dark glassmorphism aesthetic.',
    stack: 'WordPress, PHP, Custom CSS',
    liveUrl: 'https://milliondollarideasltd.com',
    year: '2025',
    accent: '#0a0a0a',
    image: '/projects/million-dollar-ideas.jpg',
  },
  {
    title: 'JASE Peer Review',
    slug: 'jase-peer-review',
    service: 'Design & Development',
    excerpt: 'Academic journal platform with multi-role peer review workflow.',
    stack: 'WordPress, PHP, Peer Review Plugin',
    year: '2025',
    accent: '#EEF0FF',
    image: '/projects/jase-peer-review-site.svg',
  },
  {
    title: 'Miyaki Store',
    slug: 'miyaki-theme',
    service: 'Design & Development',
    excerpt: 'Editorial minimal WooCommerce theme for fashion.',
    stack: 'WordPress, WooCommerce, PHP, Elementor',
    year: '2025',
    accent: '#F8F1F4',
    image: '/projects/miyaki-theme.png',
  },
  {
    title: 'Vela Store',
    slug: 'vela-store',
    service: 'Design & Development',
    excerpt: 'Clean editorial WooCommerce theme — mobile-first.',
    stack: 'WordPress, WooCommerce, PHP 8+',
    year: '2025',
    accent: '#F1F1F1',
    image: '/projects/vela-store-site.svg',
  },
]

export const featured = [
  projects.find((p) => p.slug === 'dotcharis-consult')!,
  projects.find((p) => p.slug === 'hfei-cropex')!,
  projects.find((p) => p.slug === 'okal-music')!,
  projects.find((p) => p.slug === 'bshp-portfolio')!,
].filter(Boolean)

/** Best three for mobile homepage tiles */
export const bestThree = [
  projects.find((p) => p.slug === 'bshp-portfolio')!,
  projects.find((p) => p.slug === 'dotcharis-consult')!,
  projects.find((p) => p.slug === 'hfei-cropex')!,
].filter(Boolean)
