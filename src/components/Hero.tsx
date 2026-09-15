function HangerShape() {
  return (
    <svg
      className="hanger-shape"
      width="300"
      height="121"
      viewBox="0 0 300 121"
      aria-hidden="true"
    >
      <path
        fill="#1C1D20"
        d="M239.634 0C272.771 0 299.634 26.863 299.634 60s-26.863 60-60 60H0V0h239.634zm0 18.776c-22.768 0-41.225 18.457-41.225 41.224s18.457 41.225 41.225 41.225 41.224-18.458 41.224-41.225-18.457-41.224-41.224-41.224z"
      />
    </svg>
  )
}

function DigitalBall() {
  return (
    <div className="digital-ball" aria-hidden="true">
      <div className="globe">
        <div className="globe-wrap">
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle-hor" />
          <div className="circle-hor-middle" />
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="home-header" id="top">
      <div className="personal-image">
        <img src="/portrait.png" alt="Fisayo Ariyo" width={720} height={960} />
      </div>

      <div className="hanger">
        <HangerShape />
        <p>
          <span>Located </span>
          <span>in </span>
          <span>Lagos</span>
        </p>
        <DigitalBall />
      </div>

      <div className="hero-role">
        <div className="hero-role__arrow" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M2.77 0H12v9.23M12 0 0 12"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </div>
        <h4>
          <span className="hero-role__line">Freelance</span>
          <span className="hero-role__line hero-role__line--full">
            Designer &amp; Developer
          </span>
        </h4>
      </div>

      <div className="big-name" aria-hidden="true">
        <div className="name-h1">
          <div className="name-wrap">
            <h1>
              Fisayo Ariyo<span className="spacer">—</span>
            </h1>
            <h1>
              Fisayo Ariyo<span className="spacer">—</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}
