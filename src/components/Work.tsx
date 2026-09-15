import { useState } from 'react'
import { featured, projects } from '../data/projects'
import { WorkHoverPreview } from './WorkHoverPreview'
import { Magnetic } from './Magnetic'

export function Work() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const hoverProjects = featured

  return (
    <>
      <WorkHoverPreview projects={hoverProjects} activeIndex={activeIndex} />

      <section className="work-grid large-work-grid" id="work">
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

      <section className="work-tiles">
        <div className="container">
          <ul>
            {featured.map((project) => {
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
                      <img src={project.image} alt="" />
                    </div>
                    <h4>{project.title}</h4>
                    <p className="tile-service">{project.service}</p>
                    <p className="tile-year">{project.year}</p>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className="more-work">
        <Magnetic strength={20}>
          <a className="btn-pill" href="#archive">
            <span className="btn-pill__fill" />
            <span className="btn-pill__text">
              More work
              <span className="count-nr">{projects.length}</span>
            </span>
          </a>
        </Magnetic>
      </section>

      <section className="work-archive" id="archive">
        <div className="container">
          <div className="grid-sub-title">
            <h5>All projects</h5>
          </div>
          <ul className="work-items">
            {projects.map((project) => {
              const href = project.liveUrl || project.repoUrl || '#contact'
              return (
                <li key={`all-${project.slug}`}>
                  <div className="stripe" />
                  <a
                    className="work-row"
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
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
