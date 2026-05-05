/* Page: Home -fits to viewport, no scroll on first paint */

function HomePage({ tweaks }) {
  return (
    <div className="page-enter home-fit">
      <section className="home-hero">

        <div className="mono text-[10px] tracking-[0.3em] uppercase ink-faint animate-fade-rise home-kicker">
          Toronto, CA&nbsp;&nbsp;·&nbsp;&nbsp;{new Date().getFullYear()}
        </div>

        <h1 className="display ink home-headline">
          <span className="home-headline-name">
            <LetterReveal text="Tausif Zaman" />
          </span>
          <span className="home-headline-sub">
            <em className="not-italic ink-soft">
              <LetterReveal text="AI Software Engineer" delay={0.5} />
            </em>
          </span>
        </h1>

        <p className="animate-fade-rise-d3 ink-soft home-tagline">
          {tweaks.tagline}
        </p>

        <div className="animate-fade-rise-d4 home-ctas">
          <button
            className="liquid-glass is-button rounded-full text-sm ink tracking-wide"
            onClick={() => window.__setRoute("work")}
          >
            See the work
          </button>
          <button
            className="liquid-glass is-button rounded-full text-sm ink-soft tracking-wide flex items-center gap-2"
            onClick={() => window.__setRoute("contact")}
          >
            Say hello <Icon name="arrow" size={14} />
          </button>
        </div>

        <div className="animate-fade-rise-d4 home-stats">
          {STATS.map((s, i) => (
            <div key={i} className="stat-card home-stat-card">
              <div className="flex items-center justify-start ink home-stat-icon">
                <Icon name={s.icon} size={22} />
              </div>
              <div className="ink home-stat-value">
                {s.value}
              </div>
              <div className="ink-soft home-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { HomePage });
