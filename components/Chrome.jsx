// Public-facing chrome for ils.shrm.org. No internal-use markers,
// no sign-in, thought-leadership tone. Public CTAs only.

function ILSNav({ current = "home", onNavigate }) {
  const primary = [
    { id: "studio",   label: "The Studio" },
    { id: "projects", label: "Projects", children: [
      { id: "xhub",  label: "HR-X Solutions Hub" },
      { id: "kcde",  label: "Knowledge Center Decision Engine" },
      { id: "vow",   label: "Voice of Work Synthetic" },
      { id: "unode", label: "University Nodes" },
      { id: "hack",      label: "SHRM Innovation Series" },
      { id: "hackathon", label: "Hackathon 2025 · Gallery" },
    ]},
    { id: "research",     label: "Research" },
    { id: "universities", label: "For Universities" },
    { id: "partner",      label: "Partner with SHRM" },
    { id: "newsroom",     label: "Newsroom" },
  ];

  const [open, setOpen] = React.useState(null);
  const projectIds = ["kcde", "vow", "unode", "xhub", "hack"];
  const projectsActive = current === "projects" || projectIds.includes(current);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 40, background: "#fff", boxShadow: "0 1px 0 rgba(0,9,62,.08)" }}>
      {/* Utility bar — outbound SHRM context */}
      <div style={{ background: "#00093E", color: "#C5E5FF", font: "500 12px/1 var(--font-body)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "8px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <span style={{ opacity: .75 }}>Part of</span>
            <a href="https://www.shrm.org" target="_blank" rel="noreferrer" style={{ color: "#fff", fontWeight: 700, letterSpacing: ".02em", textDecoration: "none" }}>SHRM.org ↗</a>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 22, opacity: .9 }}>
            <a style={{ color: "#C5E5FF", textDecoration: "none" }}>About SHRM</a>
            <span style={{ width: 1, height: 12, background: "rgba(255,255,255,.2)" }}/>
            <a style={{ color: "#C5E5FF", textDecoration: "none" }}>SHRM Certification</a>
            <span style={{ width: 1, height: 12, background: "rgba(255,255,255,.2)" }}/>
            <a style={{ color: "#C5E5FF", textDecoration: "none" }}>Membership</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div style={{ borderBottom: "1px solid #E4E8F1" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", gap: 20, height: 80, minWidth: 1280 }}>
          {/* Wordmark lockup */}
          <a onClick={() => onNavigate && onNavigate("home")}
             style={{ display: "flex", alignItems: "center", gap: 14, cursor: "pointer", textDecoration: "none" }}>
            <Blocks size={34}/>
            <span style={{ width: 1, height: 32, background: "#DDDDDD" }}/>
            <span style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <span style={{ font: "900 17px/1 var(--font-display)", letterSpacing: "-0.01em", color: "#00093E" }}>
                Intelligence Layer Studio
              </span>
              <span style={{ font: "600 11px/1 var(--font-display)", letterSpacing: ".18em", textTransform: "uppercase", color: "#0076BE", marginTop: 4 }}>
                ils.shrm.org
              </span>
            </span>
          </a>

          <nav style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 0, height: "100%" }}
               onMouseLeave={() => setOpen(null)}>
            {primary.map(n => {
              const active = n.id === current || (n.id === "projects" && projectsActive);
              const hasMenu = !!n.children;
              return (
                <div key={n.id}
                     onMouseEnter={() => setOpen(hasMenu ? n.id : null)}
                     style={{ position: "relative", height: "100%", display: "flex", alignItems: "center" }}>
                  <a onClick={() => {
                       if (hasMenu) { setOpen(open === n.id ? null : n.id); }
                       else { setOpen(null); onNavigate && onNavigate(n.id); }
                     }}
                     style={{
                       font: `${active ? 700 : 600} 14px/1 var(--font-display)`,
                       color: active ? "#00093E" : "#3B4A66",
                       padding: "30px 12px", position: "relative", cursor: "pointer", height: "100%",
                       textDecoration: "none", letterSpacing: "-0.005em",
                       display: "flex", alignItems: "center", gap: 6,
                       whiteSpace: "nowrap",
                     }}>
                    {n.label}
                    {hasMenu && <span style={{ fontSize: 9, opacity: .6 }}>▾</span>}
                    {active && <span style={{ position: "absolute", left: 12, right: 12, bottom: 0, height: 3, background: "#0076BE" }}/>}
                  </a>

                  {hasMenu && open === n.id && (
                    <div style={{
                      position: "absolute", top: "100%", left: 0, minWidth: 320,
                      background: "#fff", border: "1px solid #E4E8F1",
                      boxShadow: "0 20px 40px -16px rgba(0,9,62,.25)",
                      padding: "10px 0", zIndex: 50,
                    }}>
                      {n.children.map(c => {
                        const p = getProject(c.id) || (c.id === "hackathon" ? { accent: "#F26A42", tagline: "Curated staff submissions · 4 elevated" } : null);
                        return (
                          <a key={c.id}
                             onClick={() => { setOpen(null); onNavigate && onNavigate(c.id); }}
                             style={{
                               display: "grid", gridTemplateColumns: "8px 1fr", gap: 14, alignItems: "center",
                               padding: "12px 20px", cursor: "pointer", textDecoration: "none",
                             }}
                             onMouseEnter={e => e.currentTarget.style.background = "#F5F7FB"}
                             onMouseLeave={e => e.currentTarget.style.background = "#fff"}>
                            <span style={{ width: 4, height: 28, background: p?.accent || "#0076BE" }}/>
                            <span>
                              <span style={{ display: "block", font: "700 14px/1.25 var(--font-display)", color: "#00093E" }}>{c.label}</span>
                              <span style={{ display: "block", font: "500 12px/1.3 var(--font-body)", color: "#787878", marginTop: 3 }}>{p?.tagline}</span>
                            </span>
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <Btn kind="emphasis" onClick={() => onNavigate && onNavigate("partner")}>Partner with us</Btn>
        </div>
      </div>
    </header>
  );
}

function ILSFooter({ onNavigate }) {
  const nav = (id) => () => onNavigate && onNavigate(id);
  return (
    <footer style={{ background: "#00093E", color: "#C5E5FF", marginTop: 80, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", right: -180, bottom: -180, pointerEvents: "none" }}>
        <Pinwheel size={520} opacity={0.08} tone="dark"/>
      </div>

      {/* Top band */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,.1)", position: "relative" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 40px 56px", display: "grid", gridTemplateColumns: "1.3fr 1fr 1fr 1fr 1.1fr", gap: 40 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <Blocks size={36}/>
              <span style={{ font: "900 18px/1.15 var(--font-display)", color: "#fff" }}>
                Intelligence<br/>Layer Studio
              </span>
            </div>
            <p style={{ font: "400 14px/1.6 var(--font-body)", marginTop: 20, maxWidth: 320, color: "#79ADD8" }}>
              SHRM's computational reasoning layer for work, workers, and the workplace.
            </p>
            <div style={{ marginTop: 22, display: "flex", gap: 10 }}>
              {["LinkedIn", "X", "YouTube"].map(s => (
                <a key={s} style={{
                  font: "700 11px/1 var(--font-display)", letterSpacing: ".1em", color: "#C5E5FF",
                  padding: "8px 12px", border: "1px solid rgba(197,229,255,.3)", textDecoration: "none",
                }}>{s}</a>
              ))}
            </div>
          </div>
          {[
            { h: "Projects", items: [
              { l: "HR-X Solutions Hub",               id: "xhub" },
              { l: "Knowledge Center Decision Engine", id: "kcde" },
              { l: "Voice of Work Synthetic",          id: "vow" },
              { l: "University Nodes",                 id: "unode" },
              { l: "SHRM Innovation Series",           id: "hack" },
              { l: "Hackathon 2025 · Gallery",         id: "hackathon" },
            ]},
            { h: "Research",        items: [
              { l: "Insights & publications", id: "research" },
              { l: "Methodology",             id: "research" },
              { l: "Proprietary Intelligence Boundary", id: "studio" },
              { l: "Triple-Gate Review",      id: "unode" },
            ]},
            { h: "Engage", items: [
              { l: "Partner with SHRM",       id: "partner" },
              { l: "For universities",        id: "universities" },
              { l: "Newsroom",                id: "newsroom" },
              { l: "Contact the Studio",      id: "partner" },
            ]},
            { h: "Subscribe", custom: true, items: [] },
          ].map(col => (
            <div key={col.h}>
              <div style={{ font: "800 11px/1 var(--font-display)", letterSpacing: ".16em", textTransform: "uppercase", color: "#fff", marginBottom: 18 }}>{col.h}</div>
              {col.custom ? (
                <div>
                  <p style={{ font: "400 13px/1.55 var(--font-body)", color: "#79ADD8", margin: "0 0 14px" }}>
                    Insights from the Studio, quarterly.
                  </p>
                  <form onSubmit={(e) => { e.preventDefault(); }} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <input type="email" placeholder="you@organization.com" style={{
                      background: "rgba(255,255,255,0.06)", border: "1px solid rgba(197,229,255,0.25)",
                      padding: "11px 14px", color: "#fff", font: "400 14px/1 var(--font-body)", outline: "none",
                    }}/>
                    <button type="submit" style={{
                      background: "#FBB533", color: "#00093E", border: "none",
                      padding: "11px 14px", font: "800 12px/1 var(--font-display)", letterSpacing: ".08em", textTransform: "uppercase", cursor: "pointer",
                    }}>Subscribe</button>
                  </form>
                </div>
              ) : (
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 10 }}>
                  {col.items.map(i => (
                    <li key={i.l}><a onClick={nav(i.id)} style={{ font: "400 14px/1.4 var(--font-body)", color: "#C5E5FF", textDecoration: "none", cursor: "pointer" }}>{i.l}</a></li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom band */}
      <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "22px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", font: "400 12px/1.4 var(--font-body)", color: "#79ADD8", flexWrap: "wrap", gap: 14 }}>
        <span>© 2026 SHRM — Society for Human Resource Management. All rights reserved.</span>
        <span style={{ display: "flex", gap: 20 }}>
          <a style={{ color: "#79ADD8", textDecoration: "none" }}>Privacy</a>
          <a style={{ color: "#79ADD8", textDecoration: "none" }}>Terms</a>
          <a style={{ color: "#79ADD8", textDecoration: "none" }}>Accessibility</a>
        </span>
      </div>
    </footer>
  );
}

window.ILSNav = ILSNav;
window.ILSFooter = ILSFooter;
