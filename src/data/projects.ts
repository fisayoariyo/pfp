export type ProjectCategory =
  | 'wordpress'
  | 'react'
  | 'woocommerce'
  | 'specialized'

export type Project = {
  title: string
  slug: string
  service: string
  excerpt: string
  stack: string
  category: ProjectCategory
  liveUrl?: string
  repoUrl?: string
  year: string
  accent: string
  image: string
}

export const categories: { slug: 'all' | ProjectCategory; label: string }[] = [
  { slug: 'all', label: 'All' },
  { slug: 'wordpress', label: 'WordPress' },
  { slug: 'react', label: 'React / Next.js' },
  { slug: 'woocommerce', label: 'WooCommerce' },
  { slug: 'specialized', label: 'Specialized' },
]

export const categoryLabels: Record<ProjectCategory, string> = {
  wordpress: 'WordPress & CMS',
  react: 'Full-Stack Apps',
  woocommerce: 'E-Commerce',
  specialized: 'Specialized Platforms',
}

/** Curated local site shots — never swap for remote thumbnails. */
export function previewSrc(project: Project): string {
  return project.image
}

export function projectHref(project: Project): string {
  return project.liveUrl || project.repoUrl || '/contact'
}

export const projects: Project[] = [
  {
    title: 'DotCharis Consult',
    slug: 'dotcharis-consult',
    service: 'Interaction & Development',
    excerpt:
      'Multi-role consultancy platform for real estate, travel, construction, and agent onboarding.',
    stack: 'Next.js, React, TypeScript, Tailwind, Supabase, GSAP',
    category: 'react',
    liveUrl: 'https://www.dotcharisconsult.com/',
    repoUrl: 'https://github.com/fisayoariyo/cc',
    year: '2025',
    accent: '#0a1628',
    image: '/projects/dotcharis-consult.png',
  },
  {
    title: 'BSHP Portfolio',
    slug: 'bshp-portfolio',
    service: 'Interaction & Development',
    excerpt: 'Interactive PM portfolio with Matter.js physics hero and GSAP.',
    stack: 'WordPress, Tailwind, Matter.js, GSAP, PHP',
    category: 'wordpress',
    liveUrl: 'https://pelumioluwaseun.cc',
    year: '2025',
    accent: '#101010',
    image: '/projects/bshp-portfolio.png',
  },
  {
    title: 'HFEI CropEx',
    slug: 'hfei-cropex',
    service: 'Design & Development',
    excerpt:
      'Mobile-first AgTech enrollment with biometric verification for farmers and field agents.',
    stack: 'React, Vite, Tailwind, DigitalPersona SDK, REST API',
    category: 'specialized',
    liveUrl: 'https://hfei.hashmarcropex.com/',
    repoUrl: 'https://github.com/fisayoariyo/hashp',
    year: '2025',
    accent: '#E8F5E9',
    image: '/projects/hfei-cropex.jpg',
  },
  {
    title: 'JASET',
    slug: 'jase-peer-review',
    service: 'Design & Development',
    excerpt:
      'University of Ibadan — Journal of Automotive Science and Engineering Technology. Peer review, manuscript pipeline, and published volumes.',
    stack: 'WordPress, PHP, Peer Review Plugin',
    category: 'wordpress',
    liveUrl: 'https://jasetui.org',
    year: '2026',
    accent: '#0B1F3A',
    image: '/projects/jase-peer-review.jpg',
  },
  {
    title: 'Ossy Brown EPK',
    slug: 'ossy-brown-epk',
    service: 'Design & Development',
    excerpt: 'Storydoc-inspired electronic press kit for Afro-R&B artist Ossy Brown.',
    stack: 'WordPress, PHP, Custom CSS, JavaScript',
    category: 'wordpress',
    liveUrl: 'https://ossybrown.com/',
    year: '2026',
    accent: '#1a1a1a',
    image: '/projects/ossy-brown-epk.jpg',
  },
  {
    title: 'CropEx Admin',
    slug: 'cropex-admin',
    service: 'Design & Development',
    excerpt: 'Offline-first admin dashboard for farmers, agents, and verifications.',
    stack: 'React 19, Vite, TypeScript, Tailwind, sql.js',
    category: 'specialized',
    year: '2025',
    accent: '#F1F1F1',
    image: '/projects/cropex-admin.png',
  },
  {
    title: 'Clicks Aladire',
    slug: 'clicks-aladire',
    service: 'Design & Development',
    excerpt: 'Headless WooCommerce storefront for Afrocentric fashion.',
    stack: 'React, Vite, TypeScript, TanStack Query, WooCommerce, GSAP',
    category: 'woocommerce',
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
    category: 'wordpress',
    liveUrl: 'http://localhost/shop/',
    year: '2026',
    accent: '#F1F1F1',
    image: '/projects/vela-store.png',
  },
  {
    title: 'OKAL Music',
    slug: 'okal-music',
    service: 'Design & Development',
    excerpt: 'Standalone artist website for Nigerian songwriter OKAL.',
    stack: 'WordPress, Custom CSS, JavaScript, PHP',
    category: 'wordpress',
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
    category: 'wordpress',
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
    category: 'wordpress',
    liveUrl: 'https://milliondollarideasltd.com',
    year: '2025',
    accent: '#0a0a0a',
    image: '/projects/million-dollar-ideas.jpg',
  },
  {
    title: 'Miyaki Store',
    slug: 'miyaki-theme',
    service: 'Design & Development',
    excerpt: 'Editorial minimal WooCommerce theme for fashion.',
    stack: 'WordPress, WooCommerce, PHP, Elementor',
    category: 'woocommerce',
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
    category: 'woocommerce',
    year: '2025',
    accent: '#F1F1F1',
    image: '/projects/miyaki-theme.png',
  },
]

/** Recent work — only these three */
export const featured = [
  projects.find((p) => p.slug === 'dotcharis-consult')!,
  projects.find((p) => p.slug === 'bshp-portfolio')!,
  projects.find((p) => p.slug === 'hfei-cropex')!,
].filter(Boolean)

/** Best three for mobile homepage tiles */
export const bestThree = [...featured]

/** Full catalog for More work */
export const moreProjects = projects

/** WordPress filter: JASET leads; other filters keep list order */
export function sortMoreProjects(
  list: Project[],
  filter: 'all' | ProjectCategory,
): Project[] {
  const items =
    filter === 'all' ? [...list] : list.filter((p) => p.category === filter)

  if (filter === 'wordpress') {
    items.sort((a, b) => {
      if (a.slug === 'jase-peer-review') return -1
      if (b.slug === 'jase-peer-review') return 1
      return 0
    })
  }

  return items
}
