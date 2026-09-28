const stacks = [
  {
    title: 'Frontend',
    tone: 'frontend',
    items: [
      'React',
      'Next.js',
      'Vite',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'GSAP',
    ],
  },
  {
    title: 'CMS & E-commerce',
    tone: 'cms',
    items: [
      'WordPress',
      'WooCommerce',
      'PHP',
      'Custom themes',
      'Custom plugins',
      'Elementor',
    ],
  },
  {
    title: 'Apps & APIs',
    tone: 'apps',
    items: [
      'REST APIs',
      'Supabase',
      'TanStack Query',
      'Node-friendly backends',
      'sql.js / offline-first',
      'Firebase Auth',
    ],
  },
  {
    title: 'Interaction & specialized',
    tone: 'special',
    items: [
      'GSAP motion',
      'Matter.js',
      'Custom UI systems',
      'Biometric SDK',
      'Admin dashboards',
      'Peer-review workflows',
    ],
  },
  {
    title: 'Ship & polish',
    tone: 'ship',
    items: [
      'Vercel',
      'Netlify',
      'Git / GitHub',
      'Performance',
      'Responsive UI',
      'Code splitting',
    ],
  },
] as const

export function TechStack() {
  return (
    <section className="tech-stack">
      <div className="container">
        <h2>Tools I build with</h2>
        <p className="tech-stack__lede">
          The stack behind client work — from WordPress and WooCommerce to React
          apps and interaction-heavy interfaces.
        </p>
        <div className="tech-stack__grid">
          {stacks.map((group) => (
            <article
              key={group.title}
              className={`tech-card tech-card--${group.tone}`}
            >
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
