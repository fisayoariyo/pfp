import { useMemo, useState } from 'react'
import {
  bestThree,
  categories,
  categoryLabels,
  featured,
  moreProjects,
  mobilePreviewSrc,
  previewSrc,
  projectHref,
  sortMoreProjects,
  type Project,
  type ProjectCategory,
} from '../data/projects'
import { WorkHoverPreview } from './WorkHoverPreview'

function ProjectCard({ project }: { project: Project }) {
  const href = projectHref(project)
  const external = href.startsWith('http')

  return (
    <article
      className={`project-card${project.imageMobile ? ' project-card--mobile-logo' : ''}`}
      style={{ ['--project-accent' as string]: project.accent }}
    >
      <a
        className="project-card__link"
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
      >
        <div className="project-card__media" style={{ backgroundColor: project.accent }}>
          <img
            className="project-card__img project-card__img--desktop"
            src={previewSrc(project)}
            alt=""
            loading="lazy"
          />
          {project.imageMobile ? (
            <img
              className="project-card__img project-card__img--mobile"
              src={mobilePreviewSrc(project)}
              alt=""
              loading="lazy"
            />
          ) : null}
          <div className="project-card__overlay">
            <span className="project-card__view">View</span>
          </div>
        </div>
        <div className="project-card__body">
          <p className="project-card__category">
            {categoryLabels[project.category]}
          </p>
          <h4 className="project-card__title">{project.title}</h4>
          <p className="project-card__excerpt">{project.excerpt}</p>
          <div className="project-card__meta">
            <span>{project.service}</span>
            <span>{project.year}</span>
          </div>
        </div>
      </a>
    </article>
  )
}

export function Work({ startOpen = false }: { startOpen?: boolean }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [showMore, setShowMore] = useState(startOpen)
  const [filter, setFilter] = useState<'all' | ProjectCategory>('all')

  const remaining = Math.max(moreProjects.length - featured.length, 0)

  const filteredMore = useMemo(
    () => sortMoreProjects(moreProjects, filter),
    [filter],
  )

  return (
    <>
      <WorkHoverPreview projects={featured} activeIndex={activeIndex} />

      <section className="work-grid large-work-grid theme-light" id="work">
        <div className="container">
          <div className="grid-sub-title">
            <h5>Recent work</h5>
          </div>
          <ul
            className="work-items"
            onMouseLeave={() => setActiveIndex(null)}
          >
            {featured.map((project, index) => {
              const href = projectHref(project)
              return (
                <li key={project.slug}>
                  <div className="stripe" />
                  <a
                    className="work-row"
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
                    onMouseEnter={() => setActiveIndex(index)}
                  >
                    <h4>
                      <span>{project.title}</span>
                    </h4>
                    <div className="work-meta">
                      <p>{project.service}</p>
                      <p className="work-year">
                        {categoryLabels[project.category]}
                      </p>
                    </div>
                  </a>
                </li>
              )
            })}
            <div className="stripe last" />
          </ul>
        </div>
      </section>

      <section className="work-tiles theme-light" id="work-mobile">
        <div className="container">
          <ul>
            {bestThree.map((project) => {
              const href = projectHref(project)
              return (
                <li key={`tile-${project.slug}`}>
                  <a
                    className="tile-row"
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    <div
                      className={`tile-image${project.imageMobile ? ' tile-image--logo' : ''}`}
                      style={{ backgroundColor: project.accent }}
                    >
                      <img src={mobilePreviewSrc(project)} alt="" loading="lazy" />
                    </div>
                    <h4>{project.title}</h4>
                    <div className="tile-meta">
                      <p className="tile-service">
                        {categoryLabels[project.category]}
                      </p>
                      <p className="tile-year">{project.service}</p>
                    </div>
                    <p className="tile-category-year">{project.year}</p>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {!showMore ? (
        <section className="more-work theme-light">
          <button
            type="button"
            className="btn-pill btn-pill--more"
            onClick={() => {
              setShowMore(true)
              window.setTimeout(() => {
                document
                  .getElementById('more-projects')
                  ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }, 50)
            }}
          >
            <span className="btn-pill__text">
              More work
              <span className="count-nr">{remaining}</span>
            </span>
          </button>
        </section>
      ) : null}

      {showMore ? (
        <section className="work-more theme-light" id="more-projects">
          <div className="container">
            <div className="grid-sub-title">
              <h5>More work</h5>
            </div>

            <div
              className="work-filter"
              role="tablist"
              aria-label="Filter by category"
            >
              {categories.map((cat) => (
                <button
                  key={cat.slug}
                  type="button"
                  role="tab"
                  aria-selected={filter === cat.slug}
                  className={`work-filter__btn${
                    filter === cat.slug ? ' is-active' : ''
                  }`}
                  onClick={() => setFilter(cat.slug)}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="projects-grid">
              {filteredMore.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>

            {filteredMore.length === 0 ? (
              <p className="work-more__empty">No projects in this category.</p>
            ) : null}
          </div>
        </section>
      ) : null}
    </>
  )
}
