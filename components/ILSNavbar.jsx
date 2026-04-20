// ILS-specific top chrome: parent SHRM utility strip + ILS subsite bar
function ILSNavbar({ route, go }) {
  const links = [
    { id: "home",  label: "Overview" },
    { id: "kcde",  label: "Knowledge Center Decision Engine" },
    { id: "vow",   label: "Voice of Work Synthetic" },
    { id: "unode", label: "University Nodes" },
    { id: "hack",  label: "Staff Hackathon Series" },
  ];
  return (
    <header style={ilsNavStyles.wrap}>
      {/* Parent SHRM strip */}
      <div style={ilsNavStyles.parent}>
        <a style={ilsNavStyles.parentLink}>← shrm.org</a>
        <span style={ilsNavStyles.parentSep}>/</span>
        <span style={ilsNavStyles.parentCrumb}>SHRM Business</span>
        <span style={ilsNavStyles.parentSep}>/</span>
        <span style={ilsNavStyles.parentCrumbActive}>Intelligence Layer Studio</span>
        <span style={{ flex: 1 }} />
        <span style={ilsNavStyles.parentMeta}>Internal Use</span>
        <span style={ilsNavStyles.parentMeta}>·</span>
        <span style={ilsNavStyles.parentMeta}>April 2026</span>
      </div>

      {/* ILS subsite masthead */}
      <div style={ilsNavStyles.main}>
        <a style={ilsNavStyles.brand} onClick={() => go("home")}>
          <Blocks size={34} />
          <span style={ilsNavStyles.brandSep} />
          <span style={ilsNavStyles.brandWords}>
            <span style={ilsNavStyles.brandTop}>Intelligence</span>
            <span style={ilsNavStyles.brandBot}>Layer Studio</span>
          </span>
        </a>

        <nav style={ilsNavStyles.nav}>
          {links.map(l => {
            const active = route === l.id;
            return (
              <a key={l.id}
                 onClick={() => go(l.id)}
                 style={{ ...ilsNavStyles.navLink, ...(active ? ilsNavStyles.navLinkActive : {}) }}>
                {l.label}
                {active && <span style={ilsNavStyles.activeBar}/>}
              </a>
            );
          })}
        </nav>

        <div style={ilsNavStyles.util}>
          <span style={ilsNavStyles.search}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </span>
          <a style={ilsNavStyles.signin}>Sign in</a>
        </div>
      </div>
    </header>
  );
}

const ilsNavStyles = {
  wrap: { position: "sticky", top: 0, zIndex: 50, background: "#fff", fontFamily: "var(--font-display)" },
  parent: {
    display: "flex", alignItems: "center", gap: 10,
    padding: "8px 40px", background: "#00093E", color: "#C5E5FF",
    font: "600 12px/1 var(--font-display)", letterSpacing: ".02em",
  },
  parentLink:   { color: "#fff", cursor: "pointer", textDecoration: "none" },
  parentSep:    { color: "#4a5a87" },
  parentCrumb:  { color: "#79ADD8" },
  parentCrumbActive: { color: "#fff", fontWeight: 700 },
  parentMeta:   { color: "#79ADD8", fontWeight: 500, letterSpacing: ".04em", textTransform: "uppercase", fontSize: 11 },

  main: {
    display: "flex", alignItems: "stretch", height: 72, padding: "0 40px", gap: 28,
    borderBottom: "1px solid #E4E8EE", background: "#fff",
  },
  brand: { display: "flex", alignItems: "center", gap: 14, textDecoration: "none", cursor: "pointer" },
  brandSep: { width: 1, height: 34, background: "#E4E8EE" },
  brandWords: { display: "flex", flexDirection: "column", lineHeight: 1 },
  brandTop: { font: "600 11px/1 var(--font-display)", color: "#787878", letterSpacing: ".14em", textTransform: "uppercase" },
  brandBot: { font: "800 18px/1 var(--font-display)", color: "#00093E", letterSpacing: "-0.01em", marginTop: 4 },

  nav: { display: "flex", alignItems: "center", gap: 4, flex: 1, marginLeft: 20 },
  navLink: {
    position: "relative", padding: "0 14px", height: "100%", display: "inline-flex", alignItems: "center",
    font: "600 13px/1 var(--font-display)", color: "#1B3C69", cursor: "pointer", textDecoration: "none",
    letterSpacing: ".005em",
  },
  navLinkActive: { color: "#0076BE" },
  activeBar: { position: "absolute", left: 14, right: 14, bottom: -1, height: 3, background: "#0076BE" },

  util: { display: "flex", alignItems: "center", gap: 18, paddingLeft: 22, borderLeft: "1px solid #E4E8EE" },
  search: { color: "#787878", cursor: "pointer", display: "inline-flex" },
  signin: { font: "600 13px/1 var(--font-display)", color: "#1B3C69", cursor: "pointer", textDecoration: "none" },
};

window.ILSNavbar = ILSNavbar;
