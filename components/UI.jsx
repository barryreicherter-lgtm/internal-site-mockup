// Shared UI atoms for the ILS microsite
function Pinwheel({ size = 300, opacity = 0.22, tone = "brand" }) {
  const palette = tone === "dark"
    ? { a: "#0076BE", b: "#265D93", c: "#1B3C69" }
    : tone === "light"
    ? { a: "#79ADD8", b: "#C5E5FF", c: "#4030D6" }
    : { a: "#0076BE", b: "#1B3C69", c: "#265D93" };
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ opacity }}>
      <g transform="translate(50 50)">
        <path d="M0 0 L0 -46 A46 46 0 0 1 39.8 23 Z" fill={palette.a}/>
        <path d="M0 0 L39.8 23 A46 46 0 0 1 -39.8 23 Z" fill={palette.b}/>
        <path d="M0 0 L-39.8 23 A46 46 0 0 1 0 -46 Z" fill={palette.c}/>
        <circle r="4" fill="#fff"/>
      </g>
    </svg>
  );
}

function StatusPill({ status }) {
  const map = {
    active:    { bg: "#1E7A4D", fg: "#fff",     label: "Active" },
    phase0:    { bg: "#0076BE", fg: "#fff",     label: "Phase 0" },
    phase1:    { bg: "#4030D6", fg: "#fff",     label: "Phase 1" },
    planning:  { bg: "#FBB533", fg: "#00093E",  label: "Planning" },
    gated:     { bg: "#787878", fg: "#fff",     label: "Gated" },
    complete:  { bg: "#A7AB20", fg: "#00093E",  label: "Complete" },
  };
  const s = map[status] || map.phase0;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      background: s.bg, color: s.fg,
      font: "700 10px/1 var(--font-display)", letterSpacing: ".12em",
      textTransform: "uppercase", padding: "6px 10px", borderRadius: 2,
    }}>
      <span style={{ width: 5, height: 5, borderRadius: "50%", background: s.fg, opacity: 0.85 }}/>
      {s.label}
    </span>
  );
}

function Eyebrow({ children, color = "#0076BE" }) {
  return (
    <span style={{
      font: "800 12px/1 var(--font-display)", color,
      letterSpacing: ".18em", textTransform: "uppercase", display: "inline-block",
    }}>{children}</span>
  );
}

function SectionHead({ eyebrow, title, lede, align = "left", dark = false }) {
  return (
    <div style={{ textAlign: align, maxWidth: align === "center" ? 760 : 880, margin: align === "center" ? "0 auto" : "0" }}>
      {eyebrow && <Eyebrow color={dark ? "#79ADD8" : "#0076BE"}>{eyebrow}</Eyebrow>}
      <h2 style={{
        font: "800 40px/1.1 var(--font-display)",
        color: dark ? "#fff" : "#00093E",
        letterSpacing: "-0.02em", margin: "14px 0 16px", textWrap: "balance",
      }}>{title}</h2>
      {lede && <p style={{
        font: "400 18px/1.55 var(--font-body)",
        color: dark ? "#C5E5FF" : "#3B4A66",
        margin: 0, maxWidth: 720, textWrap: "pretty",
        ...(align === "center" ? { marginLeft: "auto", marginRight: "auto" } : {}),
      }}>{lede}</p>}
    </div>
  );
}

function Btn({ children, kind = "primary", onClick }) {
  const styles = {
    primary: { background: "#0076BE", color: "#fff",     border: "2px solid #0076BE" },
    emphasis:{ background: "#FBB533", color: "#00093E",  border: "2px solid #FBB533" },
    ghost:   { background: "transparent", color: "#0076BE", border: "2px solid #0076BE" },
    ghostD:  { background: "transparent", color: "#fff",    border: "2px solid rgba(255,255,255,.5)" },
  };
  return (
    <a onClick={onClick} style={{
      ...styles[kind],
      display: "inline-flex", alignItems: "center", gap: 8,
      padding: "13px 22px", borderRadius: 3,
      font: "700 13px/1 var(--font-display)", letterSpacing: ".04em", textTransform: "uppercase",
      cursor: "pointer", textDecoration: "none",
    }}>{children}</a>
  );
}

function Chip({ children, tone = "blue" }) {
  const tones = {
    blue:   { bg: "#E8F2FB", fg: "#0076BE" },
    navy:   { bg: "#E8ECF5", fg: "#1B3C69" },
    plum:   { bg: "#F5E3F1", fg: "#8B1377" },
    olive:  { bg: "#F3F4D6", fg: "#6E7215" },
    melon:  { bg: "#FCE7DF", fg: "#C24E2A" },
    lemon:  { bg: "#FEF1D4", fg: "#8A6309" },
  };
  const t = tones[tone] || tones.blue;
  return (
    <span style={{
      background: t.bg, color: t.fg,
      font: "700 11px/1 var(--font-display)", letterSpacing: ".08em", textTransform: "uppercase",
      padding: "6px 10px", borderRadius: 2, display: "inline-block",
    }}>{children}</span>
  );
}

window.Pinwheel = Pinwheel;
window.StatusPill = StatusPill;
window.Eyebrow = Eyebrow;
window.SectionHead = SectionHead;
window.Btn = Btn;
window.Chip = Chip;

// Also expose a tiny shared Blocks logo for the ILS navbar (copied from SHRM kit)
function Blocks({ size = 34 }) {
  const s = size;
  const style = { display: "inline-flex", height: s, fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 700, color: "#fff" };
  const cell = (bg, w) => ({ display: "flex", alignItems: "center", justifyContent: "center", width: w, height: s, background: bg, fontSize: s * 0.66, lineHeight: 1 });
  return (
    <span style={style} aria-label="SHRM">
      <span style={cell("#0076BE", s * 0.85)}>S</span>
      <span style={{ ...cell("#1B3C69", s * 1.6), gap: 2 }}>HR</span>
      <span style={cell("#0076BE", s * 0.85)}>M</span>
    </span>
  );
}
window.Blocks = Blocks;
