// Hackathon gallery page + Elite Recognition detail renderer.
// Inaugural Hackathon — April 16–17, 2026. 55 apps in 24 hours.
// Top 2 (Elite Recognition, 5-of-6 panel votes): Pathnex + SHRM Metric Matchup.
// Rolling cadence: Innovation Series continues beyond the inaugural event.

function HackathonHero({ onNavigate }) {
  return (
    <section style={{ background: "linear-gradient(135deg, #00093E 0%, #1B3C69 45%, #F26A42 140%)", color: "#fff", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", right: -180, top: -140 }}>
        <Pinwheel size={640} opacity={0.14} tone="dark"/>
      </div>
      <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "70px 40px 84px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, font: "600 12px/1 var(--font-display)", letterSpacing: ".08em", textTransform: "uppercase", color: "#C5E5FF", marginBottom: 24, opacity: .9 }}>
          <a onClick={() => onNavigate && onNavigate("studio")} style={{ cursor: "pointer", textDecoration: "none", color: "inherit" }}>The Studio</a>
          <span style={{ opacity: .5 }}>›</span>
          <a onClick={() => onNavigate && onNavigate("hack")} style={{ cursor: "pointer", textDecoration: "none", color: "inherit" }}>SHRM Innovation Series</a>
          <span style={{ opacity: .5 }}>›</span>
          <span style={{ color: "#fff" }}>Inaugural Hackathon · April 2026</span>
        </div>
        <Eyebrow color="#FBB533">SHRM Innovation Series · Inaugural Hackathon · April 16–17, 2026</Eyebrow>
        <h1 style={{ font: "900 68px/1.04 var(--font-display)", letterSpacing: "-0.03em", margin: "20px 0 22px", textWrap: "balance", maxWidth: 1000 }}>
          55 apps in 24 hours.<br/>Built by SHRM, for HR.
        </h1>
        <p style={{ font: "400 20px/1.55 var(--font-body)", color: "#C5E5FF", margin: "0 0 28px", maxWidth: 820, textWrap: "pretty" }}>
          The inaugural SHRM Innovation Hackathon ran April 16–17, 2026. Thirty-nine builders across seven divisions and two countries — the U.S. and SHRM East (India) — shipped 55 working apps inside a single day. An 88% Mission-Complete rate. Twelve HR domains covered. Two projects received Elite Recognition from the executive panel. The rest form the strategic signal the Studio is acting on now.
        </p>
        <div style={{ display: "flex", gap: 44, flexWrap: "wrap", paddingTop: 22, borderTop: "1px solid rgba(197,229,255,.2)" }}>
          {[
            { n: "55",  l: "Working apps built in 24 hours" },
            { n: "88%", l: "Mission-Complete rate (43 of 49)" },
            { n: "39",  l: "Unique builders · 7 divisions · 2 countries" },
            { n: "12",  l: "HR domains covered" },
            { n: "Top 2", l: "Elite Recognition · 5-of-6 panel votes" },
          ].map((s, i) => (
            <div key={i}>
              <div style={{ font: "900 36px/1 var(--font-display)", color: "#FBB533", letterSpacing: "-0.025em" }}>{s.n}</div>
              <div style={{ font: "500 12px/1.4 var(--font-body)", color: "#C5E5FF", marginTop: 8, maxWidth: 180 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Elite Recognition strip — Top 2 projects, prominent
function EliteStrip({ onNavigate }) {
  const elite = HACK_CURATED.filter(s => s.status === "elite");
  return (
    <section style={{ background: "#fff", padding: "72px 0 20px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
        <div style={{ maxWidth: 760, marginBottom: 36 }}>
          <Eyebrow color="#F26A42">Elite Recognition · Top 2</Eyebrow>
          <h2 style={{ font: "900 40px/1.1 var(--font-display)", color: "#00093E", letterSpacing: "-0.025em", margin: "14px 0 12px", textWrap: "balance" }}>
            Two projects the executive panel voted through decisively.
          </h2>
          <p style={{ font: "400 16px/1.6 var(--font-body)", color: "#3B4A66", margin: 0, textWrap: "pretty" }}>
            A six-person executive panel — the Chief Knowledge, Technology, Marketing, Communications, and Data Officers, plus SVP, SHRM East — reviewed the portfolio. Elite Recognition required five of six votes. Two projects cleared the bar.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
          {elite.map(s => (
            <a key={s.id} onClick={() => onNavigate && onNavigate(s.id)}
               style={{
                 display: "block", background: "#fff", border: "1px solid #E4E8F1",
                 padding: "32px 34px 36px", textDecoration: "none", color: "inherit",
                 cursor: "pointer", position: "relative",
                 borderTop: `4px solid ${s.id === "pathnex" ? "#0076BE" : "#F26A42"}`,
                 transition: "transform .18s, box-shadow .18s",
               }}
               onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 14px 36px -14px rgba(0,9,62,.3)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
               onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
                <span style={{ font: "800 11px/1 var(--font-display)", letterSpacing: ".14em", color: s.id === "pathnex" ? "#0076BE" : "#F26A42", textTransform: "uppercase" }}>{s.theme}</span>
                <span style={{ font: "800 10px/1 var(--font-display)", letterSpacing: ".12em", textTransform: "uppercase", color: "#00093E", background: "#FBB533", padding: "5px 9px" }}>Elite · Top 2</span>
              </div>
              <h3 style={{ font: "900 30px/1.15 var(--font-display)", color: "#00093E", letterSpacing: "-0.022em", margin: "0 0 12px", textWrap: "balance" }}>{s.title}</h3>
              <div style={{ font: "600 12px/1.4 var(--font-body)", color: "#787878", marginBottom: 16 }}>{s.author} · {s.division}</div>
              <p style={{ font: "400 15px/1.6 var(--font-body)", color: "#3B4A66", margin: "0 0 18px", textWrap: "pretty" }}>{s.tldr}</p>
              <div style={{ font: "800 12px/1 var(--font-display)", color: s.id === "pathnex" ? "#0076BE" : "#F26A42", letterSpacing: ".06em", textTransform: "uppercase" }}>Read the full write-up →</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// Panel row
function PanelRow() {
  return (
    <section style={{ background: "#F5F7FB", padding: "64px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
        <div style={{ maxWidth: 760, marginBottom: 30 }}>
          <Eyebrow>The executive panel</Eyebrow>
          <h3 style={{ font: "900 28px/1.18 var(--font-display)", color: "#00093E", letterSpacing: "-0.02em", margin: "14px 0 10px", textWrap: "balance" }}>
            Six SHRM executives. Five votes required for Elite Recognition.
          </h3>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, background: "#E4E8F1", border: "1px solid #E4E8F1" }}>
          {HACK_PANEL.map((p, i) => (
            <div key={i} style={{ background: "#fff", padding: "22px 24px" }}>
              <div style={{ font: "800 17px/1.25 var(--font-display)", color: "#00093E", marginBottom: 6 }}>{p.name}</div>
              <div style={{ font: "500 13px/1.45 var(--font-body)", color: "#3B4A66" }}>{p.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HackFilter({ active, onChange }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 36 }}>
      {HACK_THEMES.map(t => {
        const on = t === active;
        return (
          <button key={t} onClick={() => onChange(t)} style={{
            font: `${on ? 800 : 600} 12px/1 var(--font-display)`,
            letterSpacing: ".06em", textTransform: "uppercase",
            padding: "10px 16px", cursor: "pointer",
            background: on ? "#00093E" : "#fff", color: on ? "#fff" : "#3B4A66",
            border: on ? "1px solid #00093E" : "1px solid #E4E8F1",
          }}>{t}</button>
        );
      })}
    </div>
  );
}

function HackCard({ s, onNavigate }) {
  const isElite = s.status === "elite";
  const isSignal = s.status === "signal";
  const accent = isElite ? (s.id === "pathnex" ? "#0076BE" : "#F26A42") : (isSignal ? "#8B1377" : "#3B4A66");
  const clickable = isElite;
  const badgeText = isElite ? "Elite · Top 2" : (isSignal ? "Strategic signal" : "Notable build");
  const badgeBg = isElite ? "#FBB533" : (isSignal ? "#8B1377" : "transparent");
  const badgeColor = isElite ? "#00093E" : (isSignal ? "#fff" : "#787878");
  const badgeBorder = isElite || isSignal ? "none" : "1px solid #E4E8F1";

  return (
    <a onClick={() => clickable && onNavigate && onNavigate(s.id)}
       style={{
         display: "block", background: "#fff", border: "1px solid #E4E8F1",
         padding: "26px 28px 28px", textDecoration: "none", color: "inherit",
         cursor: clickable ? "pointer" : "default", position: "relative",
         transition: "transform .18s, box-shadow .18s",
         borderTop: `4px solid ${accent}`,
       }}
       onMouseEnter={e => { if (clickable) { e.currentTarget.style.boxShadow = "0 14px 36px -14px rgba(0,9,62,.3)"; e.currentTarget.style.transform = "translateY(-2px)"; } }}
       onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, gap: 10 }}>
        <span style={{ font: "800 10px/1 var(--font-display)", letterSpacing: ".14em", color: accent, textTransform: "uppercase" }}>{s.theme}</span>
        <span style={{
          font: "800 10px/1 var(--font-display)", letterSpacing: ".12em", textTransform: "uppercase",
          color: badgeColor, background: badgeBg, border: badgeBorder,
          padding: "5px 9px", whiteSpace: "nowrap",
        }}>{badgeText}</span>
      </div>
      <h3 style={{ font: "800 22px/1.22 var(--font-display)", color: "#00093E", margin: "0 0 10px", textWrap: "balance" }}>{s.title}</h3>
      <div style={{ font: "600 12px/1.4 var(--font-body)", color: "#787878", marginBottom: 14 }}>
        {s.author}{s.division ? ` · ${s.division}` : ""}
      </div>
      <p style={{ font: "400 14px/1.55 var(--font-body)", color: "#3B4A66", margin: "0 0 14px", textWrap: "pretty" }}>{s.tldr}</p>
      {s.problem && <p style={{ font: "400 13px/1.5 var(--font-body)", color: "#787878", margin: 0, borderTop: "1px solid #EEF1F6", paddingTop: 14, textWrap: "pretty" }}><em>{s.problem}</em></p>}
      {clickable && <div style={{ marginTop: 18, paddingTop: 16, borderTop: "1px solid #EEF1F6", font: "800 12px/1 var(--font-display)", color: accent, letterSpacing: ".06em", textTransform: "uppercase" }}>Read the project page →</div>}
    </a>
  );
}

function HackathonPage({ onNavigate }) {
  const [theme, setTheme] = React.useState("All");
  // Show all non-elite cards in the gallery (elite shown at top)
  const gallery = HACK_CURATED.filter(s => s.status !== "elite");
  const filtered = theme === "All" ? gallery : gallery.filter(s => s.theme === theme);
  const sorted = [...filtered].sort((a, b) => (a.order || 99) - (b.order || 99));
  return (
    <div>
      <HackathonHero onNavigate={onNavigate}/>

      {/* Elite Recognition — Top 2 */}
      <EliteStrip onNavigate={onNavigate}/>

      {/* Executive panel */}
      <PanelRow/>

      {/* Strategic signal clusters + notable builds */}
      <section style={{ background: "#F5F7FB", padding: "72px 0 96px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, marginBottom: 24, flexWrap: "wrap" }}>
            <div style={{ maxWidth: 780 }}>
              <Eyebrow>The strategic signal</Eyebrow>
              <h2 style={{ font: "900 38px/1.1 var(--font-display)", color: "#00093E", letterSpacing: "-0.025em", margin: "14px 0 10px", textWrap: "balance" }}>
                What staff built — and what that signals.
              </h2>
              <p style={{ font: "400 15px/1.6 var(--font-body)", color: "#3B4A66", margin: 0, maxWidth: 720, textWrap: "pretty" }}>
                Three clusters emerged: <strong style={{ color: "#00093E" }}>CHRO decision</strong> tools for executive-grade synthesis, <strong style={{ color: "#00093E" }}>simulation</strong> apps training judgment in safe sandboxes, and <strong style={{ color: "#00093E" }}>direct-to-employee</strong> surfaces that route around the HR-as-gatekeeper model. Together they tell the Studio where the energy — and the unmet need — is.
              </p>
            </div>
          </div>
          <HackFilter active={theme} onChange={setTheme}/>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {sorted.map(s => <HackCard key={s.id} s={s} onNavigate={onNavigate}/>)}
          </div>
          {sorted.length === 0 && (
            <div style={{ padding: "60px 0", textAlign: "center", font: "500 16px/1.4 var(--font-body)", color: "#787878" }}>
              No apps in this theme — try another filter.
            </div>
          )}
        </div>
      </section>

      {/* Rolling cadence + Innovation Series disposition */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto", padding: "0 40px" }}>
          <Eyebrow>What happens next</Eyebrow>
          <h2 style={{ font: "900 36px/1.12 var(--font-display)", color: "#00093E", letterSpacing: "-0.022em", margin: "14px 0 14px", textWrap: "balance" }}>
            The Innovation Series keeps going. Every app becomes signal.
          </h2>
          <p style={{ font: "400 16px/1.65 var(--font-body)", color: "#3B4A66", margin: "0 0 18px", textWrap: "pretty" }}>
            The inaugural Hackathon was the opening event in a rolling cadence — the SHRM Innovation Series will continue with targeted builds, thematic sprints, and cross-division collaborations. The Elite Recognition projects go into Studio evaluation. The strategic-signal clusters shape upstream research and product roadmaps. The rest are documented and routed to the Vibe Experiments Library.
          </p>
          <p style={{ font: "400 16px/1.65 var(--font-body)", color: "#3B4A66", margin: 0, textWrap: "pretty" }}>
            The logic is simple: a well-maintained library changes what "didn't continue" means. An abandoned app is not a failure — it's a documented learning asset future sprints can draw on. The Innovation Series' job is to keep the signal flowing upstream into ILS.
          </p>
          <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Btn kind="emphasis" onClick={() => onNavigate && onNavigate("hack")}>About the Innovation Series →</Btn>
            <Btn kind="ghost" onClick={() => onNavigate && onNavigate("partner")}>Partner with the Studio</Btn>
          </div>
        </div>
      </section>
    </div>
  );
}

// === Elite Recognition detail renderer ======================================

function ElevatedHero({ p, onNavigate }) {
  return (
    <section style={{ background: p.gradient, color: "#fff", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", right: -160, top: -120 }}>
        <Pinwheel size={680} opacity={0.16} tone="dark"/>
      </div>
      <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "64px 40px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, font: "600 12px/1 var(--font-display)", letterSpacing: ".08em", textTransform: "uppercase", color: "#C5E5FF", marginBottom: 30, opacity: .9 }}>
          <a onClick={() => onNavigate && onNavigate("studio")} style={{ cursor: "pointer", color: "inherit", textDecoration: "none" }}>The Studio</a>
          <span style={{ opacity: .5 }}>›</span>
          <a onClick={() => onNavigate && onNavigate("hackathon")} style={{ cursor: "pointer", color: "inherit", textDecoration: "none" }}>Inaugural Hackathon</a>
          <span style={{ opacity: .5 }}>›</span>
          <span style={{ color: "#fff" }}>{p.name}</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "end" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22, flexWrap: "wrap" }}>
              <span style={{ font: "800 12px/1 var(--font-display)", letterSpacing: ".18em", color: "#FBB533", textTransform: "uppercase" }}>{p.code}</span>
              <span style={{ font: "800 10px/1 var(--font-display)", letterSpacing: ".14em", textTransform: "uppercase", color: "#00093E", background: "#FBB533", padding: "5px 10px" }}>Elite Recognition · Top 2</span>
            </div>
            <h1 style={{ font: "900 68px/1.04 var(--font-display)", letterSpacing: "-0.03em", margin: "0 0 22px", textWrap: "balance" }}>{p.name}</h1>
            <p style={{ font: "500 24px/1.4 var(--font-body)", color: "#C5E5FF", margin: 0, maxWidth: 700, textWrap: "pretty" }}>{p.tagline}</p>
          </div>
          <div style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(197,229,255,0.25)", padding: "26px 28px" }}>
            {[
              { k: "Classification", v: p.classification },
              { k: "Recognition",    v: p.statusLine },
              { k: "Origin",         v: p.origin.source },
              { k: "Submitted by",   v: p.origin.author },
            ].map((r, i) => (
              <div key={r.k} style={{ padding: "12px 0", borderTop: i === 0 ? "none" : "1px solid rgba(197,229,255,0.15)" }}>
                <div style={{ font: "800 10px/1 var(--font-display)", letterSpacing: ".16em", textTransform: "uppercase", color: "#79ADD8", marginBottom: 6 }}>{r.k}</div>
                <div style={{ font: "600 15px/1.4 var(--font-body)", color: "#fff" }}>{r.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ElevatedDetail({ p, onNavigate }) {
  return (
    <>
      <ElevatedHero p={p} onNavigate={onNavigate}/>
      {/* KPI band */}
      <section style={{ background: "#fff", borderBottom: "1px solid #E4E8F1" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 40px", display: "grid", gridTemplateColumns: `repeat(${p.kpis.length}, 1fr)`, gap: 40 }}>
          {p.kpis.map((k, i) => (
            <div key={i} style={{ paddingLeft: i === 0 ? 0 : 28, borderLeft: i === 0 ? "none" : "1px solid #E4E8F1" }}>
              <div style={{ font: "900 44px/1 var(--font-display)", color: p.accent, letterSpacing: "-0.028em" }}>{k.n}</div>
              <div style={{ font: "500 13px/1.4 var(--font-body)", color: "#3B4A66", marginTop: 12 }}>{k.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* One-liner */}
      <section style={{ background: "#fff", padding: "80px 0 40px" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto", padding: "0 40px" }}>
          <Eyebrow>The build</Eyebrow>
          <h2 style={{ font: "900 40px/1.12 var(--font-display)", color: "#00093E", letterSpacing: "-0.025em", margin: "14px 0 20px", textWrap: "balance" }}>
            What {p.origin.author.split(" · ")[0]} shipped in 24 hours.
          </h2>
          <p style={{ font: "400 19px/1.7 var(--font-body)", color: "#3B4A66", margin: 0, textWrap: "pretty" }}>{p.oneLiner}</p>
        </div>
      </section>

      {/* Phases */}
      {p.phases && (
        <section style={{ background: "#F5F7FB", padding: "80px 0" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
            <div style={{ maxWidth: 720, marginBottom: 36 }}>
              <Eyebrow>How it works</Eyebrow>
              <h2 style={{ font: "900 36px/1.12 var(--font-display)", color: "#00093E", letterSpacing: "-0.022em", margin: "14px 0 14px", textWrap: "balance" }}>
                The flow, phase by phase.
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min(p.phases.length, 6)}, 1fr)`, gap: 2, background: "#E4E8F1", border: "1px solid #E4E8F1" }}>
              {p.phases.map((ph, i) => (
                <div key={i} style={{ background: "#fff", padding: "26px 22px 28px" }}>
                  <div style={{ font: "900 32px/1 var(--font-display)", color: p.accent, letterSpacing: "-0.025em" }}>0{i+1}</div>
                  <h4 style={{ font: "800 16px/1.25 var(--font-display)", color: "#00093E", margin: "14px 0 8px" }}>{ph.k}</h4>
                  <p style={{ font: "400 13px/1.5 var(--font-body)", color: "#3B4A66", margin: 0 }}>{ph.v}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Audiences */}
      <section style={{ background: "#fff", padding: "80px 0 100px" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto", padding: "0 40px" }}>
          <Eyebrow>Who it's for</Eyebrow>
          <h2 style={{ font: "900 36px/1.12 var(--font-display)", color: "#00093E", letterSpacing: "-0.022em", margin: "14px 0 28px", textWrap: "balance" }}>
            Designed for the people who would use it.
          </h2>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 14 }}>
            {p.audiences.map((a, i) => (
              <li key={i} style={{ font: "400 17px/1.6 var(--font-body)", color: "#3B4A66", paddingLeft: 24, position: "relative", textWrap: "pretty" }}>
                <span style={{ position: "absolute", left: 0, top: 11, width: 12, height: 2, background: p.accent }}/>
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: p.accentDark, color: "#fff", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -100, bottom: -100 }}>
          <Pinwheel size={420} opacity={0.14} tone="dark"/>
        </div>
        <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "72px 40px", display: "grid", gridTemplateColumns: "1.4fr auto", gap: 40, alignItems: "center" }}>
          <div>
            <Eyebrow color="#FBB533">Elite Recognition · Inaugural Hackathon</Eyebrow>
            <h3 style={{ font: "900 36px/1.12 var(--font-display)", letterSpacing: "-0.022em", margin: "14px 0 12px", textWrap: "balance" }}>
              In Studio evaluation for productization.
            </h3>
            <p style={{ font: "400 16px/1.55 var(--font-body)", color: "#C5E5FF", margin: 0, maxWidth: 700, textWrap: "pretty" }}>
              Elite Recognition projects move into Studio evaluation — scope, partners, deployment mode, and whether they graduate out of ILS into SHRM Product Development as standalone offerings or as capabilities inside the HR-X Solutions Hub.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Btn kind="emphasis" onClick={() => onNavigate && onNavigate("partner")}>Share feedback with the Studio →</Btn>
            <Btn kind="ghostD" onClick={() => onNavigate && onNavigate("hackathon")}>Back to the Hackathon</Btn>
          </div>
        </div>
      </section>

      {/* Related — the other Elite project */}
      <section style={{ background: "#fff", padding: "80px 0", borderTop: "1px solid #E4E8F1" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
          <Eyebrow>Also Elite Recognition</Eyebrow>
          <h2 style={{ font: "900 36px/1.12 var(--font-display)", color: "#00093E", letterSpacing: "-0.022em", margin: "14px 0 32px", textWrap: "balance" }}>
            The other Top 2 project.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            {Object.values(ELEVATED_PROJECTS).filter(o => o.id !== p.id).map(o => (
              <a key={o.id} onClick={() => onNavigate && onNavigate(o.id)}
                 style={{
                   display: "block", background: "#fff", border: "1px solid #E4E8F1", cursor: "pointer",
                   padding: "26px 28px 28px", textDecoration: "none", color: "inherit",
                   transition: "transform .18s, box-shadow .18s",
                   borderTop: `4px solid ${o.accent}`,
                 }}
                 onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 14px 36px -14px rgba(0,9,62,.3)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                 onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}>
                <div style={{ font: "800 10px/1 var(--font-display)", letterSpacing: ".14em", color: o.accent, textTransform: "uppercase", marginBottom: 14 }}>{o.classification.split(" · ")[0]}</div>
                <h4 style={{ font: "800 22px/1.22 var(--font-display)", color: "#00093E", margin: "0 0 10px", textWrap: "balance" }}>{o.name}</h4>
                <p style={{ font: "500 14px/1.45 var(--font-body)", color: o.accent, margin: "0 0 12px" }}>{o.tagline}</p>
                <div style={{ font: "600 12px/1.4 var(--font-body)", color: "#787878" }}>Submitted by {o.origin.author}</div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ElevatedProjectPage({ id, onNavigate }) {
  const p = getElevatedProject(id);
  if (!p) return null;
  return <div><ElevatedDetail p={p} onNavigate={onNavigate}/></div>;
}

window.HackathonPage = HackathonPage;
window.ElevatedProjectPage = ElevatedProjectPage;
