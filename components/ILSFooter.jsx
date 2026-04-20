function ILSFooter() {
  const cols = [
    { h: "Studio",       l: ["Overview", "Mission", "Operating model", "Investment cascade", "Contact"] },
    { h: "Projects",     l: ["KCDE — Decision Engine", "VoW Synthetic", "University Nodes", "Staff Hackathon Series"] },
    { h: "Governance",   l: ["Proprietary Intelligence Boundary", "Research governance", "Publication protocol", "Legal & IP"] },
    { h: "Back to SHRM", l: ["shrm.org", "SHRM Business", "Research Panel", "HR Daily"] },
  ];
  return (
    <footer style={ilsFtStyles.wrap}>
      <div style={ilsFtStyles.top}>
        <div style={ilsFtStyles.inner}>
          <div style={ilsFtStyles.brand}>
            <Blocks size={46} />
            <div style={ilsFtStyles.sub}>Intelligence Layer Studio</div>
            <p style={ilsFtStyles.mission}>
              Computational infrastructure for the world of work. Proprietary corpora, SHRM-owned reasoning, enterprise-grade governance.
            </p>
            <div style={ilsFtStyles.stamp}>
              <span style={ilsFtStyles.stampDot}/>
              Operative stack: Google (Phase 0–1) · Microsoft-native (Phase 2+)
            </div>
          </div>
          <div style={ilsFtStyles.colsWrap}>
            {cols.map(c => (
              <div key={c.h} style={ilsFtStyles.col}>
                <div style={ilsFtStyles.colH}>{c.h}</div>
                {c.l.map(x => <a key={x} style={ilsFtStyles.colL}>{x}</a>)}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={ilsFtStyles.bottom}>
        <div style={ilsFtStyles.bottomInner}>
          <span>© 2026 SHRM. All rights reserved.</span>
          <span style={{ flex: 1 }} />
          <span>ILS Document Owner · Barry Reicherter</span>
          <span style={{ color: "#4a5a87" }}>·</span>
          <span>ILS Sponsor · Syed Wasey, EVP SHRM Business</span>
        </div>
      </div>
    </footer>
  );
}

const ilsFtStyles = {
  wrap: { background: "#00093E", color: "#C5E5FF", fontFamily: "var(--font-display)" },
  top: { padding: "72px 0 56px" },
  inner: { maxWidth: 1280, margin: "0 auto", padding: "0 40px", display: "grid", gridTemplateColumns: "1.2fr 2.4fr", gap: 64 },
  brand: { display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 14 },
  sub: { font: "800 13px/1 var(--font-display)", color: "#fff", letterSpacing: ".12em", textTransform: "uppercase" },
  mission: { font: "400 14px/1.6 var(--font-body)", color: "#79ADD8", maxWidth: 320, margin: 0 },
  stamp: {
    display: "inline-flex", alignItems: "center", gap: 8, marginTop: 8,
    font: "500 11px/1.4 var(--font-body)", color: "#79ADD8",
    padding: "8px 12px", background: "rgba(121,173,216,0.08)", borderRadius: 3,
    border: "1px solid rgba(121,173,216,0.18)",
  },
  stampDot: { width: 6, height: 6, borderRadius: "50%", background: "#0076BE" },
  colsWrap: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 32 },
  col: { display: "flex", flexDirection: "column", gap: 12 },
  colH: { font: "800 12px/1 var(--font-display)", color: "#fff", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 4 },
  colL: { font: "400 14px/1.5 var(--font-body)", color: "#C5E5FF", textDecoration: "none", cursor: "pointer" },
  bottom: { background: "#00052A", font: "400 12px/1 var(--font-display)", color: "#79ADD8" },
  bottomInner: { maxWidth: 1280, margin: "0 auto", padding: "22px 40px", display: "flex", gap: 14, alignItems: "center" },
};

window.ILSFooter = ILSFooter;
