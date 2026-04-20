const { useState } = React;

const NAV = [
  { label: "Membership", items: ["Individual", "Team", "Student", "Renew"] },
  { label: "Certification", items: ["SHRM-CP", "SHRM-SCP", "Prep Courses", "Recertification"] },
  { label: "Topics & News", items: ["All Things Work", "HR Daily", "Tomorrowist", "Research"] },
  { label: "Events", items: ["SHRM26 Annual", "SHRM Talent", "Blueprint", "Webinars"] },
  { label: "Resources", items: ["Toolkits", "Templates", "How-To Guides", "Ask an Advisor"] },
];

function Blocks({ size = 34 }) {
  // Recreates the SHRM Master Brand Blocks inline (S | H·R | M).
  // Used at header scale only; full Blocks + BWBW logo lives in assets/logos.
  const s = size;
  const style = {
    display: "inline-flex",
    height: s,
    fontFamily: 'Georgia, "Times New Roman", serif',
    fontWeight: 700,
    color: "#fff",
    letterSpacing: 0,
  };
  const cell = (bg, w) => ({
    display: "flex", alignItems: "center", justifyContent: "center",
    width: w, height: s, background: bg, fontSize: s * 0.66, lineHeight: 1,
  });
  return (
    <span style={style} aria-label="SHRM">
      <span style={cell("#0076BE", s * 0.85)}>S</span>
      <span style={{ ...cell("#1B3C69", s * 1.6), gap: 2 }}>HR</span>
      <span style={cell("#0076BE", s * 0.85)}>M</span>
      <sup style={{ fontSize: 9, alignSelf: "flex-start", color: "#1B3C69", marginLeft: 2, marginTop: 2 }}>®</sup>
    </span>
  );
}

function Navbar({ onNav }) {
  const [open, setOpen] = useState(null);
  return (
    <header style={navStyles.wrap}>
      <div style={navStyles.top}>
        <span>Shop</span><span>Chapters</span><span>SHRM Foundation</span>
        <span style={{ flex: 1 }} />
        <span>For Business</span><span>Help</span>
      </div>
      <div style={navStyles.main}>
        <a style={navStyles.logo} onClick={() => onNav && onNav("home")}>
          <Blocks size={38} />
        </a>
        <nav style={navStyles.links} onMouseLeave={() => setOpen(null)}>
          {NAV.map(n => (
            <div key={n.label} style={{ position: "relative" }}
                 onMouseEnter={() => setOpen(n.label)}>
              <a style={{ ...navStyles.link, color: open === n.label ? "#0076BE" : "#1B3C69" }}>
                {n.label} <span style={{ fontSize: 9 }}>▾</span>
              </a>
              {open === n.label && (
                <div style={navStyles.flyout}>
                  {n.items.map(i => <a key={i} style={navStyles.flyoutItem}>{i}</a>)}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div style={navStyles.util}>
          <span style={navStyles.search}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            Search
          </span>
          <a style={navStyles.signin} onClick={() => onNav && onNav("signin")}>Sign In</a>
          <a style={navStyles.cta} onClick={() => onNav && onNav("join")}>Join SHRM</a>
        </div>
      </div>
    </header>
  );
}

const navStyles = {
  wrap: { background: "#fff", borderBottom: "1px solid #E4E8EE", fontFamily: 'var(--font-display)' },
  top: {
    display: "flex", gap: 20, padding: "8px 32px", background: "#00093E", color: "#C5E5FF",
    font: "600 12px/1 var(--font-display)", letterSpacing: ".02em",
  },
  main: { display: "flex", alignItems: "stretch", height: 84, padding: "0 32px", gap: 28 },
  logo: { display: "flex", alignItems: "center", textDecoration: "none", cursor: "pointer" },
  links: { display: "flex", alignItems: "center", gap: 26, flex: 1 },
  link: {
    font: "600 14px/1 var(--font-display)", color: "#1B3C69", cursor: "pointer",
    textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 5, letterSpacing: ".01em",
  },
  flyout: {
    position: "absolute", top: "100%", left: -12, background: "#fff",
    border: "1px solid #E4E8EE", boxShadow: "0 8px 20px rgba(0,9,62,.1)",
    padding: 8, minWidth: 220, zIndex: 5, borderRadius: 4, marginTop: 6,
  },
  flyoutItem: {
    display: "block", padding: "10px 12px", color: "#1B3C69", textDecoration: "none",
    font: "500 14px/1.2 var(--font-display)", borderRadius: 3, cursor: "pointer",
  },
  util: {
    display: "flex", alignItems: "center", gap: 18, paddingLeft: 22, borderLeft: "1px solid #E4E8EE",
  },
  search: { display: "flex", alignItems: "center", gap: 6, color: "#787878", font: "500 13px/1 var(--font-display)", cursor: "pointer" },
  signin: { font: "600 13px/1 var(--font-display)", color: "#1B3C69", cursor: "pointer", textDecoration: "none" },
  cta: {
    background: "#0076BE", color: "#fff", padding: "11px 18px", borderRadius: 3,
    font: "700 13px/1 var(--font-display)", letterSpacing: ".02em", cursor: "pointer", textDecoration: "none",
  },
};

window.Navbar = Navbar;
window.Blocks = Blocks;
