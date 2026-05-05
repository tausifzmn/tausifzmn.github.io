/* Shared chrome: Background (video or solid), Nav, Footer corners */

function Background({ showVideo }) {
  return (
    <>
      {/* Always render solid bg as fallback */}
      <div className="solid-bg" style={{ position: "fixed" }} />
      {showVideo && (
        <>
          <video
            className="fixed inset-0 w-full h-full object-cover"
            style={{ zIndex: 0 }}
            autoPlay loop muted playsInline preload="auto" aria-hidden="true"
          >
            <source src={VIDEO_SRC} type="video/mp4" />
          </video>
          <div className="video-tint" style={{ position: "fixed" }} />
        </>
      )}
    </>
  );
}

function Nav({ route, setRoute }) {
  // Left: Home, About -Right: Work, Resume, Contact
  const left  = [NAV[0], NAV[2]];
  const right = [NAV[1], NAV[3], NAV[4]];

  return (
    <nav className="relative z-20 grid grid-cols-3 items-center px-8 py-6 max-w-[1400px] mx-auto">
      {/* Left links */}
      <ul className="hidden md:flex items-center gap-7 list-none m-0 p-0">
        {left.map(item => (
          <li key={item.id}>
            <a
              className={`nav-link ${route === item.id ? "active" : ""}`}
              onClick={() => setRoute(item.id)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Center ornament */}
      <div className="flex items-center justify-center">
        <span className="ornament">✶</span>
      </div>

      {/* Right links */}
      <ul className="hidden md:flex items-center gap-7 list-none m-0 p-0 justify-end">
        {right.map(item => (
          <li key={item.id}>
            <a
              className={`nav-link ${route === item.id ? "active" : ""}`}
              onClick={() => setRoute(item.id)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* mobile fallback */}
      <div className="md:hidden col-span-3 flex flex-wrap justify-center gap-5 mt-4">
        {NAV.map(item => (
          <a
            key={item.id}
            className={`nav-link ${route === item.id ? "active" : ""}`}
            onClick={() => setRoute(item.id)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

function CornerLabels({ left, right }) {
  return (
    <>
      <div
        className="corner-label fixed left-6 bottom-6 z-20"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        {left}
      </div>
      <div
        className="corner-label fixed right-6 bottom-6 z-20"
        style={{ writingMode: "vertical-rl" }}
      >
        {right}
      </div>
    </>
  );
}

Object.assign(window, { Background, Nav, CornerLabels });
