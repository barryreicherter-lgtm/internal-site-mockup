function Footer() {
  const cols = [
    { h: "About SHRM", l: ["Who we are", "History", "Careers", "Press room", "Contact"] },
    { h: "Membership", l: ["Become a member", "Benefits", "Renew", "Student membership", "For teams"] },
    { h: "Certification", l: ["SHRM-CP", "SHRM-SCP", "Prep courses", "Recertification", "Verify a credential"] },
    { h: "Stay informed", l: ["HR Daily", "All Things Work", "Tomorrowist", "Research", "Podcasts"] },
  ];
  return (
    <footer style={ftStyles.wrap}>
      <div style={ftStyles.top}>
        <div style={ftStyles.inner}>
          <div style={ftStyles.brand}>
            <Blocks size={48} />
            <div style={ftStyles.tag}>Better Workplaces. Better World.<sup style={{ fontSize: 8 }}>™</sup></div>
            <p style={ftStyles.mission}>
              The trusted authority on all things work. Nearly 340,000 members in 180 countries.
            </p>
          </div>
          <div style={ftStyles.colsWrap}>
            {cols.map(c => (
              <div key={c.h} style={ftStyles.col}>
                <div style={ftStyles.colH}>{c.h}</div>
                {c.l.map(x => <a key={x} style={ftStyles.colL}>{x}</a>)}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={ftStyles.bottom}>
        <div style={{ ...ftStyles.inner, padding: "22px 32px", display: "flex", gap: 16, alignItems: "center" }}>
          <span>© 2026 SHRM. All rights reserved.</span>
          <span style={{ flex: 1 }} />
          <a>Privacy</a><a>Terms</a><a>Accessibility</a><a>Cookie settings</a>
        </div>
      </div>
    </footer>
  );
}

const ftStyles = {
  wrap: { background: "#00093E", color: "#C5E5FF", fontFamily: "var(--font-display)" },
  top: { padding: "72px 0 56px" },
  inner: { maxWidth: 1200, margin: "0 auto", padding: "0 32px", display: "grid", gridTemplateColumns: "1fr 2.2fr", gap: 64 },
  brand: { display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 14 },
  tag: { font: "800 13px/1.2 var(--font-display)", color: "#fff", letterSpacing: ".02em", textTransform: "uppercase" },
  mission: { font: "400 14px/1.6 var(--font-body)", color: "#79ADD8", maxWidth: 260, margin: 0 },
  colsWrap: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 32 },
  col: { display: "flex", flexDirection: "column", gap: 12 },
  colH: { font: "800 12px/1 var(--font-display)", color: "#fff", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 4 },
  colL: { font: "400 14px/1.5 var(--font-body)", color: "#C5E5FF", textDecoration: "none", cursor: "pointer" },
  bottom: {
    background: "#00052A", font: "400 12px/1 var(--font-display)",
    color: "#79ADD8", letterSpacing: ".02em",
  },
};

window.Footer = Footer;
