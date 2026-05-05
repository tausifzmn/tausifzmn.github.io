/* Page: About */

function AboutPage() {
  return (
    <div className="page-enter relative z-10 w-full px-8 pb-32">
      <header className="max-w-[1400px] mx-auto pt-8 pb-12 text-center">
        <div className="mono text-[10px] tracking-[0.3em] uppercase ink-faint mb-6 animate-fade-rise">
          (the short version)
        </div>
        <h1
          className="display ink"
          style={{
            fontSize: "clamp(80px, 16vw, 240px)",
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
          }}
        >
          <LetterReveal text="about" />
          <span className="paren">(me)</span>
        </h1>
      </header>

      <div className="max-w-[860px] mx-auto animate-fade-rise-d2">
        <div className="liquid-glass rounded-[28px] p-10 md:p-14 text-left">
          <Row label="Currently">
            <p className="ink text-lg leading-relaxed">
              I'm an <span className="display underline ink">AI Engineer II</span> at
              Dayforce, building AI systems that make everyday work a little smarter.
            </p>
          </Row>

          <hr className="hr-soft my-10" />

          <Row label="The arc">
            <p className="ink-soft text-base leading-relaxed">
              I spent the early part of my career building a strong foundation in
              traditional software development in Texas. The more I built, the more I
              found myself drawn to AI - not just for what it could do, but for how it
              could change the way we approach problems. That curiosity led me to a
              Master's in Applied Computing, and into the work I'm doing today with
              LangChain, multi-agent systems, and automation.
            </p>
          </Row>

          <hr className="hr-soft my-10" />

          <Row label="How I work">
            <p className="ink-soft text-base leading-relaxed">
              I thrive on collaboration and believe the best solutions come from
              diverse perspectives. I learn the most from teammates who think
              differently than I do.
            </p>
          </Row>

          <hr className="hr-soft my-10" />

          <Row label="Always open">
            <p className="ink-soft text-base leading-relaxed">
              Always open to connecting with others passionate about building the
              future of tech.{" "}
              <a
                onClick={() => window.__setRoute("contact")}
                className="ink underline underline-offset-4 cursor-pointer hover:opacity-70"
              >
                Let's chat.
              </a>
            </p>
          </Row>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {["LangChain", "LangGraph", "MCP", "RAG", "Python", "TypeScript", "FastAPI", "React", "Postgres"].map(t => (
            <span key={t} className="tag-chip">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Row({ label, children }) {
  return (
    <div className="grid md:grid-cols-[120px_1fr] gap-6 md:gap-10 items-start">
      <div className="mono text-[10px] tracking-[0.25em] uppercase ink-faint">
        {label}
      </div>
      {children}
    </div>
  );
}

Object.assign(window, { AboutPage });
