function Hero({ onNavigate }) {
  return (
    <section style={{
      position: "relative", overflow: "hidden",
      background: "linear-gradient(135deg, #00093E 0%, #1B3C69 55%, #0076BE 120%)",
      color: "#fff",
    }}>
      <div style={{ position: "absolute", right: -200, top: -140, pointerEvents: "none" }}>
        <Pinwheel size={760} opacity={0.12} tone="dark"/>
      </div>
      <div aria-hidden style={{
        position: "absolute", inset: 0, opacity: 0.055, pointerEvents: "none",
        font: "900 150px/0.85 var(--font-display)", color: "#fff",
        display: "flex", flexWrap: "wrap", gap: "0 40px",
        padding: 40, transform: "rotate(-4deg) translateX(-6%)", transformOrigin: "top left",
      }}>
        {Array.from({length: 18}).map((_, i) =>
          <span key={i} style={{ letterSpacing: "-0.04em" }}>SHRM</span>
        )}
      </div>

      <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "96px 40px 120px" }}>
        <Eyebrow color="#FBB533">SHRM Intelligence Layer Studio</Eyebrow>
        <h1 style={{
          font: "900 96px/0.98 var(--font-display)",
          letterSpacing: "-0.035em", margin: "22px 0 28px", textWrap: "balance",
          maxWidth: 1100,
        }}>
          The reasoning layer<br/>
          behind the{" "}
          <span style={{ color: "#79ADD8" }}>world's authority</span>{" "}
          on work.
        </h1>
        <p style={{
          font: "400 22px/1.5 var(--font-body)", color: "#C5E5FF",
          maxWidth: 820, margin: "0 0 40px", textWrap: "pretty",
        }}>
          SHRM is converting seventy-plus years of standards, two years of expert case resolutions, and three years of longitudinal workforce data into machine-executable intelligence — peer-reviewed, ethically red-teamed, and deployable inside the tools HR professionals already use.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Btn kind="emphasis" onClick={() => onNavigate && onNavigate("partner")}>Partner with SHRM →</Btn>
          <Btn kind="ghostD" onClick={() => onNavigate && onNavigate("research")}>Read the research</Btn>
        </div>
      </div>
    </section>
  );
}

function WhatTheStudioIs() {
  const principles = [
    { n: "01", t: "Proprietary, not general-purpose.", d: "General AI has read the internet. SHRM has resolved the hard cases. The Intelligence Layer Studio encodes SHRM's standards and case history into reasoning infrastructure that general systems cannot replicate — and cannot access." },
    { n: "02", t: "Deployed where HR already works.",   d: "ILS is not a destination product. It shows up inside the tools HR professionals already use — enterprise copilots, consumer assistants, HRIS systems — with SHRM as the invisible authority behind the answer." },
    { n: "03", t: "Validated before it ships.",          d: "Every ILS capability passes independent scientific review across three specialized academic nodes before carrying SHRM branding. The SHRM Validation Seal is an outcome, not a slogan." },
  ];
  return (
    <section style={{ background: "#fff", padding: "130px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 80, alignItems: "start" }}>
          <div>
            <Eyebrow>What the Studio is</Eyebrow>
            <h2 style={{ font: "900 52px/1.05 var(--font-display)", color: "#00093E", letterSpacing: "-0.028em", margin: "16px 0 20px", textWrap: "balance" }}>
              Three commitments that make the Intelligence Layer Studio worth listening to.
            </h2>
            <p style={{ font: "400 18px/1.55 var(--font-body)", color: "#3B4A66", margin: 0, textWrap: "pretty", maxWidth: 460 }}>
              The Studio's current slate is five active projects — a rolling portfolio, not a fixed roadmap. New initiatives spin up as the architecture demands it.
            </p>
          </div>
          <div style={{ display: "grid", gap: 0 }}>
            {principles.map((p, i) => (
              <div key={p.n} style={{
                display: "grid", gridTemplateColumns: "auto 1fr",
                gap: 32, padding: "34px 0",
                borderTop: i === 0 ? "3px solid #00093E" : "1px solid #E4E8F1",
              }}>
                <div style={{ font: "900 56px/1 var(--font-display)", color: "#0076BE", letterSpacing: "-0.03em", minWidth: 90 }}>{p.n}</div>
                <div>
                  <h3 style={{ font: "800 26px/1.2 var(--font-display)", color: "#00093E", margin: "0 0 12px", textWrap: "balance" }}>{p.t}</h3>
                  <p style={{ font: "400 17px/1.6 var(--font-body)", color: "#3B4A66", margin: 0, textWrap: "pretty" }}>{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p, onNavigate, featured = false }) {
  return (
    <a onClick={() => onNavigate && onNavigate(p.id)}
       style={{
         display: "block", textDecoration: "none", color: "inherit",
         background: "#fff", cursor: "pointer", position: "relative",
         border: "1px solid #E4E8F1",
         overflow: "hidden",
         transition: "transform .18s ease, box-shadow .18s ease",
       }}
       onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 16px 44px -14px rgba(0,9,62,0.35)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
       onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}>
      <div style={{
        background: p.gradient, color: "#fff",
        padding: "36px 34px 32px",
        position: "relative", overflow: "hidden", minHeight: 220,
      }}>
        <div style={{ position: "absolute", right: -70, bottom: -70 }}>
          <Pinwheel size={260} opacity={0.22} tone="dark"/>
        </div>
        <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, marginBottom: 18 }}>
          <span style={{ font: "800 11px/1 var(--font-display)", letterSpacing: ".18em", color: "#C5E5FF", textTransform: "uppercase" }}>{p.code}</span>
          <StatusPill status={p.status}/>
        </div>
        <div style={{ position: "relative" }}>
          <h3 style={{
            font: "900 34px/1.08 var(--font-display)",
            margin: "0 0 12px", letterSpacing: "-0.022em", textWrap: "balance",
          }}>{p.name}</h3>
          <p style={{ font: "500 17px/1.4 var(--font-body)", margin: 0, color: "#C5E5FF", maxWidth: 520, textWrap: "pretty" }}>
            {p.tagline}
          </p>
        </div>
      </div>
      <div style={{ padding: "26px 34px 30px" }}>
        <p style={{ font: "400 15px/1.6 var(--font-body)", color: "#3B4A66", margin: "0 0 22px", textWrap: "pretty" }}>
          {p.oneLiner}
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, marginBottom: 22 }}>
          {p.kpis.slice(0, 2).map(k => (
            <div key={k.l} style={{ borderLeft: `3px solid ${p.accent}`, paddingLeft: 14 }}>
              <div style={{ font: "900 24px/1 var(--font-display)", color: "#00093E", letterSpacing: "-0.02em" }}>{k.n}</div>
              <div style={{ font: "500 12px/1.4 var(--font-body)", color: "#787878", marginTop: 6 }}>{k.l}</div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 18, borderTop: "1px solid #EEF1F6" }}>
          <span style={{ font: "500 12px/1 var(--font-body)", color: "#787878" }}>{p.statusLine}</span>
          <span style={{ font: "800 13px/1 var(--font-display)", color: p.accent, letterSpacing: ".04em" }}>Learn more →</span>
        </div>
      </div>
    </a>
  );
}

function Portfolio({ onNavigate }) {
  return (
    <section style={{ background: "#F5F7FB", padding: "120px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 40, marginBottom: 56 }}>
          <div style={{ maxWidth: 760 }}>
            <Eyebrow>The portfolio</Eyebrow>
            <h2 style={{ font: "900 56px/1.05 var(--font-display)", color: "#00093E", letterSpacing: "-0.028em", margin: "16px 0 20px", textWrap: "balance" }}>
              Current projects.
            </h2>
            <p style={{ font: "400 18px/1.55 var(--font-body)", color: "#3B4A66", margin: 0, textWrap: "pretty" }}>
              One enterprise platform. Two reasoning capabilities. One research backbone. One cultural engine. A rolling portfolio — more will join as the architecture demands it.
            </p>
          </div>
          <Btn kind="ghost" onClick={() => onNavigate && onNavigate("research")}>Research highlights →</Btn>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 20 }}>
          {ILS_PROJECTS.map((p, i) => {
            // Balanced 5-card layout: row 1 = 2 half-width, row 2 = 3 third-width.
            const span = i < 2 ? "span 3" : "span 2";
            return (
              <div key={p.id} style={{ gridColumn: span }}>
                <ProjectCard p={p} onNavigate={onNavigate}/>
              </div>
            );
          })}
        </div>

        {/* Incoming from the Innovation Series — candidate projects under evaluation */}
        <div style={{ marginTop: 72 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, marginBottom: 24, flexWrap: "wrap" }}>
            <div style={{ maxWidth: 680 }}>
              <Eyebrow color="#F26A42">Incoming · from the 2025 Hackathon</Eyebrow>
              <h3 style={{ font: "900 32px/1.12 var(--font-display)", color: "#00093E", letterSpacing: "-0.022em", margin: "14px 0 10px", textWrap: "balance" }}>
                Four candidate projects under Studio evaluation.
              </h3>
              <p style={{ font: "400 16px/1.55 var(--font-body)", color: "#3B4A66", margin: 0, maxWidth: 620, textWrap: "pretty" }}>
                Elevated from sixty-one staff submissions. Each has a full project page; whether they stand alone, merge into existing projects, or route to programs is the Studio's current decision.
              </p>
            </div>
            <Btn kind="ghost" onClick={() => onNavigate && onNavigate("hackathon")}>View the full gallery →</Btn>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {Object.values(ELEVATED_PROJECTS).map(p => (
              <a key={p.id} onClick={() => onNavigate && onNavigate(p.id)}
                 style={{
                   display: "block", background: "#fff", cursor: "pointer", textDecoration: "none", color: "inherit",
                   padding: "24px 24px 26px", borderTop: `4px solid ${p.accent}`, border: "1px solid #E4E8F1",
                   transition: "transform .18s, box-shadow .18s",
                 }}
                 onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 14px 32px -14px rgba(0,9,62,.28)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                 onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                  <span style={{ font: "800 10px/1 var(--font-display)", letterSpacing: ".14em", color: p.accent, textTransform: "uppercase" }}>
                    {p.classification.split(" · ")[0]}
                  </span>
                  <span style={{ font: "800 10px/1 var(--font-display)", letterSpacing: ".12em", textTransform: "uppercase", color: "#fff", background: p.accent, padding: "4px 8px" }}>Elevated</span>
                </div>
                <h4 style={{ font: "800 20px/1.22 var(--font-display)", color: "#00093E", margin: "0 0 8px", textWrap: "balance" }}>{p.name}</h4>
                <p style={{ font: "500 14px/1.45 var(--font-body)", color: p.accent, margin: "0 0 14px", textWrap: "pretty" }}>{p.tagline}</p>
                <div style={{ font: "500 12px/1.4 var(--font-body)", color: "#787878" }}>Submitted by {p.origin.author}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AuthorityStrip() {
  return (
    <section style={{ background: "#00093E", color: "#fff", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", left: -180, top: -180 }}>
        <Pinwheel size={520} opacity={0.1} tone="dark"/>
      </div>
      <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "80px 40px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 48 }}>
        {[
          { n: "340K",   l: "SHRM members across 180 countries" },
          { n: "362M+",  l: "Workers touched by SHRM standards" },
          { n: "70+ yrs", l: "Authority on work, workers, and the workplace" },
          { n: "Since 1948", l: "The profession's institutional memory" },
        ].map((s, i) => (
          <div key={i} style={{ borderTop: "2px solid #FBB533", paddingTop: 20 }}>
            <div style={{ font: "900 48px/1 var(--font-display)", color: "#fff", letterSpacing: "-0.03em" }}>{s.n}</div>
            <div style={{ font: "500 14px/1.4 var(--font-body)", color: "#79ADD8", marginTop: 14, maxWidth: 220 }}>{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItReaches({ onNavigate }) {
  const channels = [
    { n: "A", t: "Inside SHRM's own tools",         d: "KCDE and VoW Synthetic deploy first through SHRM-owned surfaces — the Knowledge Center advisor channel and SHRM Research operations." },
    { n: "B", t: "As skills inside enterprise copilots", d: "Microsoft Copilot, enterprise assistants, and internal HR bots call SHRM reasoning as a skill — never copying the corpus, always calling the source." },
    { n: "C", t: "Through consumer AI assistants",   d: "SHRM members access Intelligence Layer reasoning from ChatGPT, Claude, and Gemini via certified actions, extensions, and tool definitions." },
    { n: "D", t: "As an API inside enterprise HRIS", d: "Workday, SAP, Rippling, and other systems of record call KCDE at decision points — with full auditability and the SHRM Validation Seal on every response." },
  ];
  return (
    <section style={{ background: "#fff", padding: "120px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
        <div style={{ textAlign: "center", maxWidth: 820, margin: "0 auto 56px" }}>
          <Eyebrow>How the Studio reaches the profession</Eyebrow>
          <h2 style={{ font: "900 56px/1.05 var(--font-display)", color: "#00093E", letterSpacing: "-0.028em", margin: "16px 0 20px", textWrap: "balance" }}>
            Four channels. One source of authority.
          </h2>
          <p style={{ font: "400 18px/1.55 var(--font-body)", color: "#3B4A66", margin: 0, textWrap: "pretty" }}>
            SHRM reasoning shouldn't require HR professionals to change where they work. ILS is designed to meet them inside the tools they already use.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2, background: "#E4E8F1", border: "1px solid #E4E8F1" }}>
          {channels.map((c, i) => (
            <div key={c.n} style={{ background: "#fff", padding: "32px 28px 34px", position: "relative" }}>
              <div style={{ font: "900 56px/1 var(--font-display)", color: "#0076BE", letterSpacing: "-0.03em" }}>{c.n}</div>
              <h3 style={{ font: "800 20px/1.22 var(--font-display)", color: "#00093E", margin: "18px 0 10px", textWrap: "balance" }}>{c.t}</h3>
              <p style={{ font: "400 15px/1.55 var(--font-body)", color: "#3B4A66", margin: 0, textWrap: "pretty" }}>{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResearchPreview({ onNavigate }) {
  const featured = ILS_RESEARCH.slice(0, 3);
  const kindTone = { Architecture: "navy", "Research note": "blue", Program: "melon", Insight: "olive", Partnership: "plum" };
  return (
    <section style={{ background: "#F5F7FB", padding: "120px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 40, marginBottom: 48 }}>
          <div style={{ maxWidth: 720 }}>
            <Eyebrow>Research & insights</Eyebrow>
            <h2 style={{ font: "900 52px/1.05 var(--font-display)", color: "#00093E", letterSpacing: "-0.028em", margin: "16px 0 18px", textWrap: "balance" }}>
              What the Studio is publishing.
            </h2>
            <p style={{ font: "400 18px/1.55 var(--font-body)", color: "#3B4A66", margin: 0, textWrap: "pretty" }}>
              Architecture decisions, research notes, and emerging findings from the projects currently in motion.
            </p>
          </div>
          <Btn kind="ghost" onClick={() => onNavigate && onNavigate("research")}>All research →</Btn>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {featured.map((r, i) => {
            const p = getProject(r.project);
            return (
              <a key={i} onClick={() => onNavigate && onNavigate(r.project)}
                 style={{
                   display: "block", background: "#fff", border: "1px solid #E4E8F1",
                   cursor: "pointer", textDecoration: "none", color: "inherit",
                   transition: "transform .18s ease, box-shadow .18s ease",
                 }}
                 onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 12px 32px -12px rgba(0,9,62,.3)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                 onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}>
                <div style={{ height: 6, background: p.accent }}/>
                <div style={{ padding: "28px 28px 30px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                    <Chip tone={kindTone[r.kind] || "blue"}>{r.kind}</Chip>
                    <span style={{ font: "600 12px/1 var(--font-body)", color: "#787878" }}>{r.date}</span>
                  </div>
                  <h3 style={{ font: "800 22px/1.25 var(--font-display)", color: "#00093E", margin: "0 0 12px", textWrap: "balance" }}>{r.title}</h3>
                  <p style={{ font: "400 15px/1.55 var(--font-body)", color: "#3B4A66", margin: "0 0 20px", textWrap: "pretty" }}>{r.body}</p>
                  <span style={{ font: "800 12px/1 var(--font-display)", color: p.accent, letterSpacing: ".06em", textTransform: "uppercase" }}>
                    {p.name} →
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTABands({ onNavigate }) {
  return (
    <section style={{ background: "#fff", padding: "120px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
        <Eyebrow>Engage with the Studio</Eyebrow>
        <h2 style={{ font: "900 52px/1.05 var(--font-display)", color: "#00093E", letterSpacing: "-0.028em", margin: "16px 0 40px", textWrap: "balance", maxWidth: 820 }}>
          Three ways to work with the Intelligence Layer Studio.
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {[
            { tag: "For enterprises", title: "Partner with SHRM", dek: "Integrate SHRM reasoning into your HR platform, copilot, or HRIS. Carry the SHRM Validation Seal on decisions that matter.", cta: "Partner with us", page: "partner", bg: "linear-gradient(155deg, #00093E 0%, #0076BE 100%)" },
            { tag: "For universities", title: "Join the research network", dek: "Cornell, Indiana, and the University of Denver anchor the Studio's scientific backbone. We're selectively expanding the network.", cta: "For universities", page: "universities", bg: "linear-gradient(155deg, #1B3C69 0%, #4030D6 100%)" },
            { tag: "For the profession", title: "Read the research", dek: "Architecture decisions, methodology notes, and emerging findings from the projects currently in motion. Published as the work progresses.", cta: "Research highlights", page: "research", bg: "linear-gradient(155deg, #0076BE 0%, #79ADD8 100%)" },
          ].map((c, i) => (
            <a key={i} onClick={() => onNavigate && onNavigate(c.page)}
               style={{
                 display: "block", background: c.bg, color: "#fff",
                 padding: "36px 34px 36px", position: "relative", overflow: "hidden",
                 cursor: "pointer", textDecoration: "none",
                 minHeight: 320,
               }}>
              <div style={{ position: "absolute", right: -80, bottom: -80 }}>
                <Pinwheel size={260} opacity={0.2} tone="dark"/>
              </div>
              <div style={{ position: "relative", display: "flex", flexDirection: "column", height: "100%", minHeight: 248 }}>
                <Eyebrow color="#FBB533">{c.tag}</Eyebrow>
                <h3 style={{ font: "900 30px/1.1 var(--font-display)", margin: "18px 0 14px", letterSpacing: "-0.02em", textWrap: "balance" }}>{c.title}</h3>
                <p style={{ font: "400 15px/1.55 var(--font-body)", color: "#C5E5FF", margin: "0 0 28px", textWrap: "pretty", flex: 1 }}>{c.dek}</p>
                <span style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  font: "800 13px/1 var(--font-display)", letterSpacing: ".08em", textTransform: "uppercase", color: "#FBB533",
                }}>{c.cta} →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
window.WhatTheStudioIs = WhatTheStudioIs;
window.Portfolio = Portfolio;
window.AuthorityStrip = AuthorityStrip;
window.HowItReaches = HowItReaches;
window.ResearchPreview = ResearchPreview;
window.CTABands = CTABands;
