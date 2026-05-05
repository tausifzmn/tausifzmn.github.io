/* Pages: Contact + Resume */

function ContactPage() {
  const cards = [
    { kind: "Email",    value: CONTACT.email,           href: `mailto:${CONTACT.email}`, icon: "mail",    external: false },
    { kind: "LinkedIn", value: "in/tausifzmn",          href: CONTACT.linkedin,          icon: "linkedin", external: true  },
    { kind: "GitHub",   value: "@tausifzmn",            href: CONTACT.github,            icon: "github",   external: true  },
  ];

  return (
    <div className="page-enter relative z-10 w-full px-8 pb-32">
      <header className="max-w-[1400px] mx-auto pt-8 pb-12 text-center">
        <div className="mono text-[10px] tracking-[0.3em] uppercase ink-faint mb-6 animate-fade-rise">
          (let's talk)
        </div>
        <h1
          className="display ink"
          style={{
            fontSize: "clamp(80px, 16vw, 240px)",
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
          }}
        >
          <LetterReveal text="hello" />
          <span className="paren">(?)</span>
        </h1>
        <p className="animate-fade-rise-d2 ink-soft max-w-lg mx-auto mt-6 text-sm leading-relaxed">
          Whether it's a project, a problem, or just a tangent worth following -my
          inbox is open.
        </p>
      </header>

      <div className="max-w-[1100px] mx-auto grid gap-5 animate-fade-rise-d3"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
      >
        {cards.map(c => (
          <a
            key={c.kind}
            href={c.href}
            target={c.external ? "_blank" : undefined}
            rel="noreferrer"
            className="liquid-glass is-button rounded-[20px] p-7 block no-underline"
          >
            <div className="flex items-center justify-between mb-10 ink">
              <Icon name={c.icon} size={24} />
              <span className="ink-soft"><Icon name="arrow" size={16} /></span>
            </div>
            <div className="mono text-[10px] tracking-[0.25em] uppercase ink-faint">
              {c.kind}
            </div>
            <div className="display ink text-2xl mt-2 leading-tight break-all">
              {c.value}
            </div>
          </a>
        ))}
      </div>

      <div className="max-w-[1100px] mx-auto mt-12 text-center">
        <p className="mono text-[10px] tracking-[0.25em] uppercase ink-faint">
          {CONTACT.phone} · Toronto, CA · Open to remote
        </p>
      </div>
    </div>
  );
}

function ResumePage() {
  return (
    <div className="page-enter relative z-10 w-full px-8 pb-32">
      <header className="max-w-[1400px] mx-auto pt-8 pb-12 text-center">
        <div className="mono text-[10px] tracking-[0.3em] uppercase ink-faint mb-6 animate-fade-rise">
          (the long story, condensed)
        </div>
        <h1
          className="display ink"
          style={{
            fontSize: "clamp(72px, 14vw, 220px)",
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
          }}
        >
          <LetterReveal text="resume" />
          <span className="paren">(cv)</span>
        </h1>
      </header>

      <div className="max-w-[860px] mx-auto animate-fade-rise-d2">

        <a
          href="uploads/tausif_may_26.pdf"
          download
          className="liquid-glass is-button rounded-full px-7 py-3.5 text-sm ink flex items-center gap-3 mx-auto no-underline"
          style={{ width: "fit-content" }}
        >
          <Icon name="download" size={16} />
          Download PDF
        </a>

        <div className="liquid-glass rounded-[28px] p-10 md:p-12 mt-10 text-left">
          <div className="mono text-[10px] tracking-[0.25em] uppercase ink-faint mb-6">
            Experience
          </div>
          {EXPERIENCE.map((row, i) => (
            <React.Fragment key={i}>
              <ResumeRow {...row} />
              {i < EXPERIENCE.length - 1 && <hr className="hr-soft my-8" />}
            </React.Fragment>
          ))}
        </div>

        <div className="liquid-glass rounded-[28px] p-10 md:p-12 mt-6">
          <div className="mono text-[10px] tracking-[0.25em] uppercase ink-faint mb-6">
            Education
          </div>
          {EDUCATION.map((row, i) => (
            <React.Fragment key={i}>
              <ResumeRow {...row} bullets={[]} />
              {i < EDUCATION.length - 1 && <hr className="hr-soft my-8" />}
            </React.Fragment>
          ))}
        </div>

        <div className="liquid-glass rounded-[28px] p-8 md:p-10 mt-6">
          <div className="mono text-[10px] tracking-[0.25em] uppercase ink-faint mb-5">
            Toolkit
          </div>
          <div className="flex flex-wrap gap-2">
            {TOOLKIT.map(t => (
              <span key={t} className="tag-chip">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ResumeRow({ time, place, title, bullets = [] }) {
  return (
    <div className="grid md:grid-cols-[140px_1fr] gap-4 md:gap-10 items-start">
      <div>
        <div className="mono text-[10px] tracking-[0.25em] uppercase ink-soft">
          {time}
        </div>
        <div className="mono text-[10px] tracking-[0.2em] uppercase ink-faint mt-1">
          {place}
        </div>
      </div>
      <div>
        <div className="display text-2xl ink leading-tight">{title}</div>
        {bullets.length > 0 && (
          <ul className="list-none p-0 m-0 mt-4 space-y-2">
            {bullets.map((b, i) => (
              <li key={i} className="ink-soft text-[15px] leading-relaxed flex gap-3">
                <span className="ink-faint mt-2 flex-shrink-0">—</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { ContactPage, ResumePage });
