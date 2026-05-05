/* Page: Work */

function ProjectThumb({ kind, accent }) {
  /* Multi-blob abstract compositions per project, each with its own palette
     and a single-line drawing themed to the idea of the project.
     Stroke stays dark forest green for editorial contrast across themes. */
  const common = {
    width: "100%",
    height: "100%",
    viewBox: "0 0 320 200",
    preserveAspectRatio: "xMidYMid meet",
    style: { display: "block" },
  };
  const stroke = "#2A3D1E";
  const lineProps = {
    fill: "none",
    stroke,
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  /* Per-project palettes — soft, washed, abstract blob colors */
  const palettes = {
    tracker:   ["rgba(245, 200, 160, 0.85)", "rgba(210, 180, 220, 0.55)", "rgba(180, 200, 175, 0.55)"],
    ai:        ["rgba(195, 215, 230, 0.78)", "rgba(245, 215, 200, 0.65)", "rgba(220, 220, 230, 0.55)"],
    nodes:     ["rgba(180, 205, 195, 0.78)", "rgba(220, 210, 195, 0.65)", "rgba(200, 195, 180, 0.55)"],
    lasers:    ["rgba(230, 175, 175, 0.80)", "rgba(245, 220, 195, 0.62)", "rgba(200, 175, 195, 0.55)"],
    agents:    ["rgba(200, 215, 195, 0.80)", "rgba(230, 215, 200, 0.62)", "rgba(180, 195, 210, 0.55)"],
    dashboard: ["rgba(225, 215, 230, 0.78)", "rgba(200, 210, 215, 0.65)", "rgba(235, 220, 205, 0.55)"],
  };
  const [c1, c2, c3] = palettes[kind] || palettes.tracker;

  switch (kind) {
    case "tracker":
      return (
        <svg {...common}>
          <ellipse cx="100" cy="105" rx="68" ry="78" fill={c1} />
          <ellipse cx="200" cy="80" rx="62" ry="58" fill={c2} />
          <ellipse cx="220" cy="135" rx="50" ry="40" fill={c3} />
          <path d="M 50 162 C 78 156 96 142 110 122 C 124 102 138 92 152 100 C 164 108 162 124 152 138 C 146 146 152 154 164 150 C 184 142 198 122 212 96 C 226 70 244 56 268 56"
                {...lineProps} />
          <circle cx="268" cy="56" r="5" fill="none" stroke={stroke} strokeWidth="1.4" />
          <circle cx="268" cy="56" r="1.6" fill={stroke} />
          <path d="M 50 170 Q 160 174 270 170" fill="none" stroke={stroke} strokeWidth="0.8" opacity="0.35" strokeDasharray="2 4" />
        </svg>
      );
    case "ai":
      return (
        <svg {...common}>
          <ellipse cx="170" cy="100" rx="78" ry="78" fill={c1} />
          <ellipse cx="115" cy="80" rx="50" ry="48" fill={c2} />
          <ellipse cx="210" cy="140" rx="46" ry="42" fill={c3} />
          <path d="M 160 170 C 160 152 152 140 144 130 C 132 118 124 102 130 88 C 138 72 158 70 168 84 C 176 96 172 112 158 120 C 172 118 184 128 184 142 C 184 156 172 164 160 162"
                {...lineProps} />
          <path d="M 130 88 C 116 80 100 84 94 96 C 88 110 98 122 112 122" {...lineProps} />
          <path d="M 168 84 C 184 76 200 80 206 92 C 212 106 202 120 188 122" {...lineProps} />
          <path d="M 184 142 C 198 146 210 158 208 172" {...lineProps} />
          <circle cx="155" cy="105" r="2.5" fill={stroke} />
        </svg>
      );
    case "nodes":
      return (
        <svg {...common}>
          <ellipse cx="90" cy="85" rx="58" ry="52" fill={c1} />
          <ellipse cx="220" cy="95" rx="68" ry="58" fill={c2} />
          <ellipse cx="160" cy="145" rx="68" ry="42" fill={c3} />
          <path d="M 60 70 C 90 60 120 64 140 80 C 158 94 178 96 198 86 C 220 74 248 84 256 106 C 250 126 230 138 210 132 C 192 126 174 132 162 148 C 152 162 132 168 116 158 C 102 148 92 132 92 116 C 92 100 76 88 60 70 Z"
                {...lineProps} />
          <circle cx="60" cy="70" r="4.5" fill={stroke} />
          <circle cx="256" cy="106" r="4.5" fill={stroke} />
          <circle cx="162" cy="148" r="4" fill={stroke} />
          <circle cx="140" cy="80" r="3.2" fill={stroke} />
          <circle cx="92" cy="116" r="3.2" fill={stroke} />
          <circle cx="210" cy="132" r="3.2" fill={stroke} />
        </svg>
      );
    case "lasers":
      return (
        <svg {...common}>
          <ellipse cx="100" cy="100" rx="60" ry="68" fill={c1} />
          <ellipse cx="220" cy="80" rx="58" ry="52" fill={c2} />
          <ellipse cx="200" cy="150" rx="50" ry="38" fill={c3} />
          <path d="M 50 168 C 86 156 116 138 136 110 C 156 82 196 72 224 90 C 244 102 248 124 234 138 C 220 152 198 148 188 132 C 178 116 184 100 200 92 C 218 82 240 90 250 108"
                {...lineProps} />
          <circle cx="136" cy="110" r="9" fill="none" stroke={stroke} strokeWidth="1.4" />
          <line x1="120" y1="110" x2="152" y2="110" stroke={stroke} strokeWidth="1.2" />
          <line x1="136" y1="94"  x2="136" y2="126" stroke={stroke} strokeWidth="1.2" />
          <circle cx="136" cy="110" r="1.6" fill={stroke} />
        </svg>
      );
    case "agents":
      return (
        <svg {...common}>
          <ellipse cx="160" cy="110" rx="78" ry="74" fill={c1} />
          <ellipse cx="100" cy="80" rx="48" ry="44" fill={c2} />
          <ellipse cx="225" cy="145" rx="48" ry="38" fill={c3} />
          <path d="M 160 178 C 160 158 150 146 140 134 C 128 120 122 102 132 86 C 142 72 162 74 170 88 C 176 100 170 112 158 120"
                {...lineProps} />
          <path d="M 140 134 C 124 130 108 134 102 148 C 96 162 108 174 122 172" {...lineProps} />
          <path d="M 158 120 C 174 114 192 118 200 132 C 208 148 196 164 178 162" {...lineProps} />
          <path d="M 132 86 C 116 78 102 86 100 100" {...lineProps} />
          <path d="M 170 88 C 186 82 200 92 200 108" {...lineProps} />
          <circle cx="160" cy="178" r="3.5" fill={stroke} />
          <circle cx="122" cy="172" r="3" fill={stroke} />
          <circle cx="178" cy="162" r="3" fill={stroke} />
          <circle cx="100" cy="100" r="2.5" fill={stroke} />
          <circle cx="200" cy="108" r="2.5" fill={stroke} />
          <circle cx="158" cy="120" r="2.8" fill={stroke} />
        </svg>
      );
    case "dashboard":
      return (
        <svg {...common}>
          <ellipse cx="115" cy="95" rx="62" ry="62" fill={c1} />
          <ellipse cx="210" cy="85" rx="56" ry="48" fill={c2} />
          <ellipse cx="200" cy="150" rx="64" ry="40" fill={c3} />
          <path d="M 64 60 C 64 56 68 52 72 52 L 248 52 C 252 52 256 56 256 60 L 256 156 C 256 160 252 164 248 164 L 72 164 C 68 164 64 160 64 156 Z"
                {...lineProps} />
          <path d="M 64 80 L 256 80" {...lineProps} />
          <path d="M 110 80 L 110 164" {...lineProps} />
          <path d="M 130 130 C 144 122 156 124 168 132 C 180 140 196 138 210 124 C 222 112 238 116 246 130"
                {...lineProps} />
          <circle cx="84" cy="100" r="2.2" fill={stroke} />
          <circle cx="84" cy="114" r="2.2" fill={stroke} />
          <circle cx="84" cy="128" r="2.2" fill={stroke} />
        </svg>
      );
    default:
      return <div style={{ width: "100%", height: "100%", background: c1 }} />;
  }
}

function WorkPage() {
  return (
    <div className="page-enter relative z-10 w-full px-8 pb-32">
      <header className="max-w-[1400px] mx-auto pt-8 pb-16 text-center">
        <div className="mono text-[10px] tracking-[0.3em] uppercase ink-faint mb-6 animate-fade-rise">
          (six selected projects)
        </div>
        <h1
          className="display ink"
          style={{
            fontSize: "clamp(72px, 14vw, 220px)",
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
          }}
        >
          <LetterReveal text="work" />
          <span className="paren">(06)</span>
        </h1>
        <p className="animate-fade-rise-d2 ink-soft max-w-xl mx-auto mt-6 text-sm leading-relaxed">
          Personal builds and shipped systems — agentic platforms, distributed
          servers, games, and dashboards that have to actually work.
        </p>
      </header>

      <div
        className="max-w-[1400px] mx-auto grid gap-6 animate-fade-rise-d3"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))" }}
      >
        {PROJECTS.map((p, idx) => (
          <ProjectCard key={p.id} project={p} index={idx} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const num = String(index + 1).padStart(2, "0");
  const isLink = !!project.href;
  const Tag = isLink ? "a" : "article";
  const tagProps = isLink
    ? { href: project.href, target: "_blank", rel: "noreferrer" }
    : {};

  return (
    <Tag
      {...tagProps}
      className={`project-card no-underline block ${!isLink ? "cursor-default" : ""}`}
    >
      <div className="project-thumb">
        <ProjectThumb kind={project.thumbKind} accent={project.accent} />
        <div className="project-thumb-stripes" />
        <div className="absolute top-3 left-4 mono text-[10px] tracking-[0.25em] uppercase" style={{ color: "rgba(42, 61, 30, 0.78)" }}>
          {num}
        </div>
        <div className="absolute top-3 right-4 mono text-[10px] tracking-[0.25em] uppercase" style={{ color: "rgba(42, 61, 30, 0.55)" }}>
          {project.year}
        </div>
        {!isLink && (
          <div
            className="absolute bottom-3 right-4 mono text-[10px] tracking-[0.2em] uppercase"
            style={{
              color: "#F5EFE3",
              background: "rgba(42, 61, 30, 0.78)",
              padding: "3px 8px",
              borderRadius: "999px",
            }}
          >
            internal · dayforce
          </div>
        )}
      </div>

      <div className="p-5 relative" style={{ zIndex: 3 }}>
        <div className="flex items-start justify-between gap-3">
          <h3 className="display text-2xl ink leading-tight flex-1 min-w-0">
            {project.name}
          </h3>
          {isLink && (
            <div className="flex-shrink-0 mt-1.5 ink-soft">
              <Icon name="arrow" size={16} />
            </div>
          )}
        </div>
        <div className="mono text-[10px] tracking-[0.2em] uppercase ink-faint mt-3">
          {project.role}
        </div>
        <p className="ink-soft text-sm mt-4 leading-relaxed">
          {project.blurb}
        </p>
        <div className="flex flex-wrap gap-2 mt-5">
          {project.tags.map(t => (
            <span key={t} className="tag-chip">{t}</span>
          ))}
        </div>
      </div>
    </Tag>
  );
}

Object.assign(window, { WorkPage });
