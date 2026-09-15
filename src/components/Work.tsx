import { useState } from 'react'
import { bestThree, featured, previewSrc, projects } from '../data/projects'
import { WorkHoverPreview } from './WorkHoverPreview'
import { Magnetic } from './Magnetic'

export function Work() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [archiveActive, setArchiveActive] = useState<number | null>(null)
  const [showAllMobile, setShowAllMobile] = useState(false)

  const mobileList = showAllMobile ? projects : bestThree
  const remaining = Math.max(projects.length - bestThree.length, 0)

  return (
    <>
      <WorkHoverPreview projects={featured} activeIndex={activeIndex} />
      <WorkHoverPreview projects={projects} activeIndex={archiveActive} />

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
              const href = project.liveUrl || project.repoUrl || '#contact'
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
                    <p>{project.service}</p>
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
            {mobileList.map((project) => {
              const href = project.liveUrl || project.repoUrl || '#contact'
              return (
                <li key={`tile-${project.slug}`}>
                  <a
                    className="tile-row"
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    <div
                      className="tile-image"
                      style={{ backgroundColor: project.accent }}
                    >
                      <img src={previewSrc(project)} alt="" loading="lazy" />
                    </div>
                    <h4>{project.title}</h4>
                    <div className="tile-meta">
                      <p className="tile-service">{project.service}</p>
                      <p className="tile-year">{project.year}</p>
                    </div>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {!showAllMobile ? (
        <section className="more-work theme-light">
          <Magnetic strength={20}>
            <button
              type="button"
              className="btn-pill btn-pill--light btn-pill--blue-mobile"
              onClick={() => {
                if (window.matchMedia('(max-width: 720px)').matches) {
                  setShowAllMobile(true)
                  return
                }
                document
                  .getElementById('archive')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <span className="btn-pill__fill" />
              <span className="btn-pill__text">
                More work
                <span className="count-nr">{remaining}</span>
              </span>
            </button>
          </Magnetic>
        </section>
      ) : null}

      <section className="work-archive theme-light" id="archive">
        <div className="container">
          <div className="grid-sub-title">
            <h5>All projects</h5>
          </div>
          <ul
            className="work-items"
            onMouseLeave={() => setArchiveActive(null)}
          >
            {projects.map((project, index) => {
              const href = project.liveUrl || project.repoUrl || '#contact'
              return (
                <li key={`all-${project.slug}`}>
                  <div className="stripe" />
                  <a
                    className="work-row"
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
                    onMouseEnter={() => setArchiveActive(index)}
                  >
                    <h4>
                      <span>{project.title}</span>
                    </h4>
                    <div className="work-meta">
                      <p>{project.service}</p>
                      <p className="work-year">{project.year}</p>
                    </div>
                  </a>
                </li>
              )
            })}
            <div className="stripe last" />
          </ul>
        </div>
      </section>
    </>
  )
}
