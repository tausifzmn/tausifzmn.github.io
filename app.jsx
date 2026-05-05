/* App shell: routing + tweaks + page transitions */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroLine1": "AI software",
  "heroLine2": "engineer.",
  "heroParen": "tz",
  "tagline": "Software developer based in Toronto, Canada - building AI-agentic systems that turn traditional workflows into something measurably smarter, with real-world impact.",
  "glassBlur": 14
}/*EDITMODE-END*/;

function App() {
  const [route, setRoute] = useState(() => {
    const h = (window.location.hash || "").replace("#", "");
    return NAV.find(n => n.id === h) ? h : "home";
  });
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // expose route setter for in-page anchors
  useEffect(() => { window.__setRoute = (r) => setRoute(r); }, []);

  // sync hash
  useEffect(() => {
    if (window.location.hash.replace("#", "") !== route) {
      window.history.replaceState(null, "", "#" + route);
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [route]);

  // listen for hashchange (back button)
  useEffect(() => {
    const handler = () => {
      const h = (window.location.hash || "").replace("#", "");
      if (NAV.find(n => n.id === h)) setRoute(h);
    };
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  // glass blur tweak
  useEffect(() => {
    document.documentElement.style.setProperty("--glass-blur", `${tweaks.glassBlur}px`);
  }, [tweaks.glassBlur]);

  // apply per-page theme
  useEffect(() => {
    const theme = PAGE_THEME[route] || "navy";
    document.documentElement.setAttribute("data-theme", theme);
  }, [route]);

  // pages that get the video background
  const videoRoutes = ["home", "about"];
  const showVideo = videoRoutes.includes(route);

  let Page = null;
  if (route === "home")    Page = <HomePage    tweaks={tweaks} />;
  if (route === "work")    Page = <WorkPage    />;
  if (route === "about")   Page = <AboutPage   />;
  if (route === "contact") Page = <ContactPage />;
  if (route === "resume")  Page = <ResumePage  />;

  return (
    <div className="relative min-h-screen w-full">
      <Background showVideo={showVideo} />

      <div className="page-scroll">
        <Nav route={route} setRoute={setRoute} />
        <main key={route} className="page-enter">
          {Page}
        </main>

        <footer className="relative z-10 max-w-[1400px] mx-auto px-8 py-10 mt-10 flex flex-wrap items-center justify-between gap-4">
          <div className="mono text-[10px] tracking-[0.25em] uppercase ink-faint">
            © {new Date().getFullYear()} Tausif Zaman
          </div>
          <div className="mono text-[10px] tracking-[0.25em] uppercase ink-faint">
            Built with care · Toronto, CA
          </div>
        </footer>
      </div>

      <CornerLabels
        left={`tz · ${route}`}
        right="portfolio v1"
      />

      {/* Tweaks */}
      <TweaksPanel title="Tweaks">
        <TweakSection title="Hero">
          <TweakText
            label="Headline line 1"
            value={tweaks.heroLine1}
            onChange={v => setTweak("heroLine1", v)}
          />
          <TweakText
            label="Headline line 2"
            value={tweaks.heroLine2}
            onChange={v => setTweak("heroLine2", v)}
          />
          <TweakText
            label="Parenthetical accent"
            value={tweaks.heroParen}
            onChange={v => setTweak("heroParen", v)}
          />
          <TweakText
            label="Tagline"
            value={tweaks.tagline}
            onChange={v => setTweak("tagline", v)}
            multiline
          />
        </TweakSection>

        <TweakSection title="Atmosphere">
          <TweakSlider
            label="Glass blur"
            value={tweaks.glassBlur}
            min={0} max={20} step={1}
            onChange={v => setTweak("glassBlur", v)}
          />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
