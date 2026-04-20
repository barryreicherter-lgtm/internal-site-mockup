// Hackathon gallery page + elevated project detail renderer.
// Gallery = curated 18 cards under The Studio.
// Elevated (4) reuse ProjectHero/KPIBand but render custom content.

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
          <span style={{ color: "#fff" }}>Hackathon 2025</span>
        </div>
        <Eyebrow color="#FBB533">SHRM Innovation Series · 2025 Hackathon</Eyebrow>
        <h1 style={{ font: "900 68px/1.04 var(--font-display)", letterSpacing: "-0.03em", margin: "20px 0 22px", textWrap: "balance", maxWidth: 1000 }}>
          61 staff submissions. One question:<br/>what does HR need next?
        </h1>
        <p style={{ font: "400 20px/1.55 var(--font-body)", color: "#C5E5FF", margin: "0 0 28px", maxWidth: 780, textWrap: "pretty" }}>
          The 2025 SHRM Innovation Hackathon gathered sixty-one proposals from SHRM staff — Knowledge Advisors, Research, Certification, Member Services, Marketing. The Intelligence Layer Studio is currently evaluating the portfolio. The curated set below represents the ideas most aligned with the Studio's thesis. Four have been elevated to candidate Studio projects.
        </p>
        <div style={{ display: "flex", gap: 36, flexWrap: "wrap", paddingTop: 22, borderTop: "1px solid rgba(197,229,255,.2)" }}>
          {[
            { n: "61",  l: "Total submissions" },
            { n: "18",  l: "Featured in this gallery" },
            { n: "4",   l: "Elevated to candidate Studio projects" },
            { n: "9",   l: "Thematic tracks represented" },
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
  const elevated = s.status === "elevated";
  const accent = elevated ? "#F26A42" : "#0076BE";
  const clickable = elevated;
  return (
    <a onClick={() => clickable && onNavigate && onNavigate(s.id)}
       style={{
         display: "block", background: "#fff", border: "1px solid #E4E8F1",
         padding: "26px 28px 28px", textDecoration: "none", color: "inherit",
         cursor: clickable ? "pointer" : "default", position: "relative",
         transition: "transform .18s, box-shadow .18s",
         borderTop: elevated ? `4px solid ${accent}` : "1px solid #E4E8F1",
       }}
       onMouseEnter={e => { if (clickable) { e.currentTarget.style.boxShadow = "0 14px 36px -14px rgba(0,9,62,.3)"; e.currentTarget.style.transform = "translateY(-2px)"; } }}
       onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <span style={{ font: "800 10px/1 var(--font-display)", letterSpacing: ".14em", color: accent, textTransform: "uppercase" }}>{s.theme}</span>
        {elevated
          ? <span style={{ font: "800 10px/1 var(--font-display)", letterSpacing: ".12em", textTransform: "uppercase", color: "#fff", background: accent, padding: "5px 9px" }}>Elevated</span>
          : <span style={{ font: "700 10px/1 var(--font-display)", letterSpacing: ".12em", textTransform: "uppercase", color: "#787878", border: "1px solid #E4E8F1", padding: "4px 9px" }}>Submitted</span>}
      </div>
      <h3 style={{ font: "800 22px/1.22 var(--font-display)", color: "#00093E", margin: "0 0 10px", textWrap: "balance" }}>{s.title}</h3>
      <div style={{ font: "600 12px/1.4 var(--font-body)", color: "#787878", marginBottom: 14 }}>Submitted by {s.author}</div>
      <p style={{ font: "400 14px/1.55 var(--font-body)", color: "#3B4A66", margin: "0 0 14px", textWrap: "pretty" }}>{s.tldr}</p>
      {s.problem && <p style={{ font: "400 13px/1.5 var(--font-body)", color: "#787878", margin: 0, borderTop: "1px solid #EEF1F6", paddingTop: 14, textWrap: "pretty" }}><em>{s.problem}</em></p>}
      {elevated && <div style={{ marginTop: 18, paddingTop: 16, borderTop: "1px solid #EEF1F6", font: "800 12px/1 var(--font-display)", color: accent, letterSpacing: ".06em", textTransform: "uppercase" }}>Read the project page →</div>}
    </a>
  );
}

function HackathonPage({ onNavigate }) {
  const [theme, setTheme] = React.useState("All");
  const filtered = theme === "All" ? HACK_CURATED : HACK_CURATED.filter(s => s.theme === theme);
  const sorted = [...filtered].sort((a, b) => (a.order || 99) - (b.order || 99));
  return (
    <div>
      <HackathonHero onNavigate={onNavigate}/>
      <section style={{ background: "#F5F7FB", padding: "72px 0 96px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, marginBottom: 24, flexWrap: "wrap" }}>
            <div style={{ maxWidth: 700 }}>
              <Eyebrow>The curated portfolio</Eyebrow>
              <h2 style={{ font: "900 38px/1.1 var(--font-display)", color: "#00093E", letterSpacing: "-0.025em", margin: "14px 0 8px", textWrap: "balance" }}>
                Eighteen submissions the Studio is paying attention to.
              </h2>
              <p style={{ font: "400 15px/1.55 var(--font-body)", color: "#3B4A66", margin: 0, maxWidth: 640, textWrap: "pretty" }}>
                Every card here was submitted by a named SHRM staff member. Four have been elevated to candidate Studio projects with full pages. The rest are documented and routed into the Vibe Experiments Library.
              </p>
            </div>
          </div>
          <HackFilter active={theme} onChange={setTheme}/>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {sorted.map(s => <HackCard key={s.id} s={s} onNavigate={onNavigate}/>)}
          </div>
          {sorted.length === 0 && (
            <div style={{ padding: "60px 0", textAlign: "center", font: "500 16px/1.4 var(--font-body)", color: "#787878" }}>
              No submissions in this theme — try another filter.
            </div>
          )}
        </div>
      </section>

      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto", padding: "0 40px" }}>
          <Eyebrow>How the Studio routes hackathon output</Eyebrow>
          <h2 style={{ font: "900 36px/1.12 var(--font-display)", color: "#00093E", letterSpacing: "-0.022em", margin: "14px 0 14px", textWrap: "balance" }}>
            Every submission gets a disposition. None get forgotten.
          </h2>
          <p style={{ font: "400 16px/1.65 var(--font-body)", color: "#3B4A66", margin: "0 0 18px", textWrap: "pretty" }}>
            Submissions enter a layered triage. Four have been elevated to candidate Studio projects — they appear with full project pages alongside HR-X, KCDE, Voice of Work Synthetic, University Nodes, and the Innovation Series itself. The remaining submissions are documented in the Vibe Experiments Library and routed to the right track — internal MVP, program handoff, strategic input, or honorable discontinuation.
          </p>
          <p style={{ font: "400 16px/1.65 var(--font-body)", color: "#3B4A66", margin: 0, textWrap: "pretty" }}>
            The logic is simple: a well-maintained library changes what "didn't continue" means. An abandoned project is not a failure — it's a documented learning asset that future sprints can draw on.
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

// -- Elevated project detail renderers --------------------------------------

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
          <a onClick={() => onNavigate && onNavigate("hackathon")} style={{ cursor: "pointer", color: "inherit", textDecoration: "none" }}>Hackathon 2025</a>
          <span style={{ opacity: .5 }}>›</span>
          <span style={{ color: "#fff" }}>{p.name}</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "end" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22, flexWrap: "wrap" }}>
              <span style={{ font: "800 12px/1 var(--font-display)", letterSpacing: ".18em", color: "#FBB533", textTransform: "uppercase" }}>{p.code}</span>
              <span style={{ font: "800 10px/1 var(--font-display)", letterSpacing: ".14em", textTransform: "uppercase", color: "#00093E", background: "#FBB533", padding: "5px 10px" }}>Elevated · Candidate Project</span>
            </div>
            <h1 style={{ font: "900 68px/1.04 var(--font-display)", letterSpacing: "-0.03em", margin: "0 0 22px", textWrap: "balance" }}>{p.name}</h1>
            <p style={{ font: "500 24px/1.4 var(--font-body)", color: "#C5E5FF", margin: 0, maxWidth: 700, textWrap: "pretty" }}>{p.tagline}</p>
          </div>
          <div style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(197,229,255,0.25)", padding: "26px 28px" }}>
            {[
              { k: "Classification", v: p.classification },
              { k: "Status",         v: p.statusLine },
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

      {/* One-liner + origin */}
      <section style={{ background: "#fff", padding: "80px 0 40px" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto", padding: "0 40px" }}>
          <Eyebrow>The submission</Eyebrow>
          <h2 style={{ font: "900 40px/1.12 var(--font-display)", color: "#00093E", letterSpacing: "-0.025em", margin: "14px 0 20px", textWrap: "balance" }}>
            What {p.origin.author} proposed.
          </h2>
          <p style={{ font: "400 19px/1.7 var(--font-body)", color: "#3B4A66", margin: 0, textWrap: "pretty" }}>{p.oneLiner}</p>
        </div>
      </section>

      {/* Phases / modules / diagnoses depending on project */}
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

      {p.modules && (
        <section style={{ background: "#F5F7FB", padding: "80px 0" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
            <div style={{ maxWidth: 720, marginBottom: 36 }}>
              <Eyebrow>The platform</Eyebrow>
              <h2 style={{ font: "900 36px/1.12 var(--font-display)", color: "#00093E", letterSpacing: "-0.022em", margin: "14px 0 14px", textWrap: "balance" }}>
                Five modules. One platform.
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 2, background: "#E4E8F1", border: "1px solid #E4E8F1" }}>
              {p.modules.map((m, i) => (
                <div key={i} style={{ background: "#fff", padding: "28px 24px 30px" }}>
                  <div style={{ font: "900 32px/1 var(--font-display)", color: p.accent, letterSpacing: "-0.025em" }}>{m.n}</div>
                  <h4 style={{ font: "800 17px/1.25 var(--font-display)", color: "#00093E", margin: "14px 0 10px", textWrap: "balance" }}>{m.h}</h4>
                  <p style={{ font: "400 13px/1.55 var(--font-body)", color: "#3B4A66", margin: 0, textWrap: "pretty" }}>{m.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {p.diagnoses && (
        <section style={{ background: "#F5F7FB", padding: "80px 0" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
            <div style={{ maxWidth: 720, marginBottom: 36 }}>
              <Eyebrow>Diagnosis types</Eyebrow>
              <h2 style={{ font: "900 36px/1.12 var(--font-display)", color: "#00093E", letterSpacing: "-0.022em", margin: "14px 0 14px", textWrap: "balance" }}>
                Five ways HR friction shows up.
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 2, background: "#E4E8F1", border: "1px solid #E4E8F1" }}>
              {p.diagnoses.map((d, i) => (
                <div key={i} style={{ background: "#fff", padding: "26px 22px 28px" }}>
                  <div style={{ font: "900 11px/1 var(--font-display)", letterSpacing: ".16em", textTransform: "uppercase", color: p.accent, marginBottom: 14 }}>Type 0{i+1}</div>
                  <h4 style={{ font: "800 17px/1.22 var(--font-display)", color: "#00093E", margin: "0 0 10px", textWrap: "balance" }}>{d.h}</h4>
                  <p style={{ font: "400 13px/1.55 var(--font-body)", color: "#3B4A66", margin: 0 }}>{d.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {p.principles && (
        <section style={{ background: "#fff", padding: "80px 0" }}>
          <div style={{ maxWidth: 1040, margin: "0 auto", padding: "0 40px" }}>
            <Eyebrow>What makes it different</Eyebrow>
            <h2 style={{ font: "900 36px/1.12 var(--font-display)", color: "#00093E", letterSpacing: "-0.022em", margin: "14px 0 24px", textWrap: "balance" }}>
              A diagnostic, not a verdict.
            </h2>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
              {p.principles.map((pr, i) => (
                <li key={i} style={{ font: "500 16px/1.5 var(--font-body)", color: "#3B4A66", paddingLeft: 22, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, top: 7, width: 10, height: 10, background: p.accent }}/>
                  {pr}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Audiences */}
      <section style={{ background: "#fff", padding: "60px 0 100px" }}>
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
            <Eyebrow color="#FBB533">Elevated from the Innovation Series</Eyebrow>
            <h3 style={{ font: "900 36px/1.12 var(--font-display)", letterSpacing: "-0.022em", margin: "14px 0 12px", textWrap: "balance" }}>
              This is a candidate project. The Studio is evaluating it now.
            </h3>
            <p style={{ font: "400 16px/1.55 var(--font-body)", color: "#C5E5FF", margin: 0, maxWidth: 700, textWrap: "pretty" }}>
              Elevated submissions are the hackathon proposals the Studio has judged closest to the Intelligence Layer's thesis. Next steps: scope, partners, deployment mode, and whether it merges into an existing project or stands alone.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Btn kind="emphasis" onClick={() => onNavigate && onNavigate("partner")}>Share feedback with the Studio →</Btn>
            <Btn kind="ghostD" onClick={() => onNavigate && onNavigate("hackathon")}>Back to the Hackathon gallery</Btn>
          </div>
        </div>
      </section>

      {/* Related — other elevated */}
      <section style={{ background: "#fff", padding: "80px 0", borderTop: "1px solid #E4E8F1" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
          <Eyebrow>Also elevated from the 2025 Hackathon</Eyebrow>
          <h2 style={{ font: "900 36px/1.12 var(--font-display)", color: "#00093E", letterSpacing: "-0.022em", margin: "14px 0 32px", textWrap: "balance" }}>
            Continue exploring the candidate projects.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
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
                <h4 style={{ font: "800 20px/1.22 var(--font-display)", color: "#00093E", margin: "0 0 10px", textWrap: "balance" }}>{o.name}</h4>
                <p style={{ font: "500 14px/1.4 var(--font-body)", color: o.accent, margin: "0 0 12px" }}>{o.tagline}</p>
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
