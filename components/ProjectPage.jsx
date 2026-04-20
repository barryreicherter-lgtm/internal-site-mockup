// Public project subpages for ils.shrm.org.
// Content-safe: no budgets, no leadership names, no risk matrices,
// no internal governance language. Thought-leadership tone.

function ProjectHero({ p }) {
  return (
    <section style={{
      background: p.gradient, color: "#fff",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", right: -160, top: -120 }}>
        <Pinwheel size={680} opacity={0.16} tone="dark"/>
      </div>
      <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "64px 40px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, font: "600 12px/1 var(--font-display)", letterSpacing: ".08em", textTransform: "uppercase", color: "#C5E5FF", marginBottom: 30, opacity: .9 }}>
          <span>Projects</span>
          <span style={{ opacity: .5 }}>›</span>
          <span style={{ color: "#fff" }}>{p.name}</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "end" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22, flexWrap: "wrap" }}>
              <span style={{ font: "800 12px/1 var(--font-display)", letterSpacing: ".18em", color: "#FBB533", textTransform: "uppercase" }}>{p.code}</span>
              <StatusPill status={p.status}/>
            </div>
            <h1 style={{
              font: "900 68px/1.04 var(--font-display)",
              letterSpacing: "-0.03em", margin: "0 0 22px", textWrap: "balance",
            }}>{p.name}</h1>
            <p style={{ font: "500 24px/1.4 var(--font-body)", color: "#C5E5FF", margin: 0, maxWidth: 700, textWrap: "pretty" }}>
              {p.tagline}
            </p>
          </div>
          <div style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(197,229,255,0.25)", padding: "26px 28px" }}>
            {[
              { k: "Classification", v: p.classification },
              { k: "Status",          v: p.statusLine },
              { k: "Part of",         v: "SHRM Intelligence Layer Studio" },
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

function KPIBand({ p }) {
  return (
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
  );
}

function LongForm({ eyebrow, title, children, lede }) {
  return (
    <section style={{ background: "#fff", padding: "100px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px", display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 80 }}>
        <div style={{ position: "sticky", top: 140, alignSelf: "start" }}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 style={{ font: "900 44px/1.08 var(--font-display)", color: "#00093E", letterSpacing: "-0.028em", margin: "16px 0 18px", textWrap: "balance" }}>{title}</h2>
          {lede && <p style={{ font: "400 16px/1.6 var(--font-body)", color: "#3B4A66", margin: 0, textWrap: "pretty" }}>{lede}</p>}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

function ModeGrid({ p, columns = 2 }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: 18 }}>
      {p.modes.map((m) => (
        <div key={m.code} style={{ background: "#fff", border: "1px solid #E4E8F1", padding: "30px 30px 32px" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 16 }}>
            <span style={{ font: "900 48px/1 var(--font-display)", color: p.accent, letterSpacing: "-0.025em" }}>{m.code}</span>
            <span style={{ font: "800 11px/1 var(--font-display)", letterSpacing: ".14em", textTransform: "uppercase", color: "#787878" }}>Mode {m.code}</span>
          </div>
          <h4 style={{ font: "800 22px/1.22 var(--font-display)", color: "#00093E", margin: "0 0 8px", textWrap: "balance" }}>{m.name}</h4>
          <div style={{ font: "600 12px/1.3 var(--font-body)", color: p.accent, marginBottom: 10 }}>{m.platform}</div>
          <p style={{ font: "400 15px/1.55 var(--font-body)", color: "#3B4A66", margin: "0 0 16px" }}>{m.user}</p>
          <Chip tone="blue">{m.phase}</Chip>
        </div>
      ))}
    </div>
  );
}

function RelatedProjects({ currentId, onNavigate }) {
  const others = ILS_PROJECTS.filter(p => p.id !== currentId);
  return (
    <section style={{ background: "#fff", padding: "96px 0", borderTop: "1px solid #E4E8F1" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
        <Eyebrow>Across the portfolio</Eyebrow>
        <h2 style={{ font: "900 40px/1.1 var(--font-display)", color: "#00093E", letterSpacing: "-0.025em", margin: "16px 0 40px", textWrap: "balance" }}>
          Continue exploring the Studio.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {others.map(p => (
            <a key={p.id} onClick={() => onNavigate && onNavigate(p.id)}
               style={{
                 display: "block", textDecoration: "none", color: "inherit",
                 padding: "24px 24px 26px", border: "1px solid #E4E8F1",
                 cursor: "pointer", background: "#fff",
                 transition: "transform .18s ease, box-shadow .18s ease",
               }}
               onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 12px 32px -14px rgba(0,9,62,.3)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
               onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                <span style={{ font: "800 10px/1 var(--font-display)", letterSpacing: ".14em", color: p.accent, textTransform: "uppercase" }}>{p.code}</span>
                <StatusPill status={p.status}/>
              </div>
              <h4 style={{ font: "800 19px/1.2 var(--font-display)", color: "#00093E", margin: "0 0 10px", textWrap: "balance" }}>{p.name}</h4>
              <p style={{ font: "400 13px/1.5 var(--font-body)", color: "#3B4A66", margin: "0 0 16px", textWrap: "pretty" }}>{p.tagline}</p>
              <span style={{ font: "800 11px/1 var(--font-display)", color: p.accent, letterSpacing: ".06em", textTransform: "uppercase" }}>Explore →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCTA({ p, onNavigate }) {
  return (
    <section style={{ background: p.accentDark, color: "#fff", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", right: -100, bottom: -100 }}>
        <Pinwheel size={420} opacity={0.14} tone="dark"/>
      </div>
      <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "80px 40px", display: "grid", gridTemplateColumns: "1.4fr auto", gap: 40, alignItems: "center" }}>
        <div>
          <Eyebrow color="#FBB533">Interested in {p.code}?</Eyebrow>
          <h3 style={{ font: "900 40px/1.1 var(--font-display)", letterSpacing: "-0.025em", margin: "14px 0 12px", textWrap: "balance" }}>
            Talk to the Studio about {p.code}.
          </h3>
          <p style={{ font: "400 17px/1.5 var(--font-body)", color: "#C5E5FF", margin: 0, maxWidth: 700, textWrap: "pretty" }}>
            Enterprise pilots, research collaborations, integration inquiries — every conversation starts with understanding fit.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <Btn kind="emphasis" onClick={() => onNavigate && onNavigate("partner")}>Request a briefing →</Btn>
          <Btn kind="ghostD" onClick={() => onNavigate && onNavigate("research")}>Read the research</Btn>
        </div>
      </div>
    </section>
  );
}

// ---- Project-specific content ---------------------------------------------

function KCDEDetail({ p }) {
  return (
    <>
      <LongForm eyebrow="What KCDE is"
                title="Expert HR reasoning, at the speed of software."
                lede="The SHRM Knowledge Center has spent years resolving expert HR questions case by case. KCDE is the system that makes that corpus machine-executable.">
        <div>
          <p style={{ font: "400 18px/1.7 var(--font-body)", color: "#3B4A66", margin: "0 0 24px", textWrap: "pretty" }}>
            General-purpose AI has read the internet. KCDE has resolved the hard cases. It encodes <strong style={{ color: "#00093E" }}>two years of SHRM Knowledge Center case resolutions</strong> alongside the canonical SHRM standards — the BASK knowledge framework, the HR-X Solution ontology — into a Graph-RAG reasoning engine designed to reason the way an expert HR advisor reasons.
          </p>
          <p style={{ font: "400 18px/1.7 var(--font-body)", color: "#3B4A66", margin: "0 0 40px", textWrap: "pretty" }}>
            What makes it different: the Proprietary Intelligence Boundary. SHRM standards and case history never leave SHRM-controlled infrastructure. KCDE is called — never copied — by the tools HR professionals use.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, border: "1px solid #E4E8F1" }}>
            {[
              { h: "Memory Layer",    b: "Two years of expert Knowledge Center resolutions. The largest reasoning asset in the corpus — real questions, real answers, real reasoning chains." },
              { h: "Anchor Layer",    b: "SHRM BASK framework and the Proprietary Intelligence Boundary. The governance layer that keeps SHRM standards inside SHRM-controlled mechanisms." },
              { h: "Standards Layer", b: "The HR-X Solution ontology — SHRM's canonical taxonomy of HR practice areas. The routing layer that lets KCDE find the right precedent." },
            ].map((l, i) => (
              <div key={l.h} style={{ padding: "26px 24px", borderLeft: i === 0 ? "none" : "1px solid #E4E8F1" }}>
                <div style={{ font: "900 14px/1 var(--font-display)", color: p.accent, letterSpacing: ".06em", textTransform: "uppercase", marginBottom: 12 }}>Layer {i+1}</div>
                <h4 style={{ font: "800 18px/1.25 var(--font-display)", color: "#00093E", margin: "0 0 8px" }}>{l.h}</h4>
                <p style={{ font: "400 14px/1.55 var(--font-body)", color: "#3B4A66", margin: 0 }}>{l.b}</p>
              </div>
            ))}
          </div>
        </div>
      </LongForm>

      <section style={{ background: "#F5F7FB", padding: "100px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ maxWidth: 820, marginBottom: 56 }}>
            <Eyebrow>Four deployment modes</Eyebrow>
            <h2 style={{ font: "900 44px/1.08 var(--font-display)", color: "#00093E", letterSpacing: "-0.028em", margin: "16px 0 18px", textWrap: "balance" }}>
              The same engine. Four places to meet HR professionals.
            </h2>
            <p style={{ font: "400 17px/1.55 var(--font-body)", color: "#3B4A66", margin: 0, textWrap: "pretty" }}>
              KCDE is designed to deploy through the channels HR professionals already live in. Each mode carries the same underlying reasoning, the same Proprietary Intelligence Boundary, and the same SHRM Validation Seal.
            </p>
          </div>
          <ModeGrid p={p} columns={2}/>
        </div>
      </section>

      <LongForm eyebrow="What you get"
                title="Reasoning with receipts."
                lede="Authority without auditability is just a brand claim. KCDE delivers both.">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2, background: "#E4E8F1", border: "1px solid #E4E8F1" }}>
          {[
            { h: "Cited, not guessed",         b: "Every KCDE response returns the SHRM source — the standard, the resolution, the chain of reasoning that produced it." },
            { h: "Determinism that audits",    b: "Reasoning chains are traceable. Regulated HR decisions need to be defensible. KCDE is built for the audit log, not just the chat window." },
            { h: "No IP leakage",              b: "KCDE is called, not copied. Enterprise copilots and consumer assistants invoke the API; the corpus stays inside SHRM infrastructure." },
            { h: "Built for the decision",     b: "Drafting augmentation, not automated sign-off. KCDE respects the places HR judgment is the right tool — termination, multi-jurisdiction leave, ambiguous fact patterns." },
          ].map(f => (
            <div key={f.h} style={{ background: "#fff", padding: "28px 28px" }}>
              <h4 style={{ font: "800 18px/1.25 var(--font-display)", color: "#00093E", margin: "0 0 8px" }}>{f.h}</h4>
              <p style={{ font: "400 15px/1.6 var(--font-body)", color: "#3B4A66", margin: 0 }}>{f.b}</p>
            </div>
          ))}
        </div>
      </LongForm>
    </>
  );
}

function VoWDetail({ p }) {
  return (
    <>
      <LongForm eyebrow="What Voice of Work Synthetic is"
                title="A digital twin of the HR profession."
                lede="Three years of longitudinal member data. Roughly 13,000 evidence-based synthetic personas. A computational workforce you can ask questions of at research speed.">
        <div>
          <p style={{ font: "400 18px/1.7 var(--font-body)", color: "#3B4A66", margin: "0 0 24px", textWrap: "pretty" }}>
            Enterprise HR decisions too often wait on data that doesn't exist yet. Voice of Work Synthetic is SHRM's answer: a workforce simulation built from <strong style={{ color: "#00093E" }}>three years of longitudinal SHRM member surveys</strong>, vectorized into ~13,000 evidence-based personas that can predict behavior, preferences, and reactions before a single real survey goes out.
          </p>
          <p style={{ font: "400 18px/1.7 var(--font-body)", color: "#3B4A66", margin: "0 0 40px", textWrap: "pretty" }}>
            VoW Synthetic is not a chatbot. It's a research instrument — built to the same standards as SHRM's published research, and validated against a 90% ground-truth benchmark before any commercial deployment.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, border: "1px solid #E4E8F1" }}>
            {[
              { h: "Memory Layer",    b: "Three years of longitudinal SHRM member surveys. The behavioral backbone of every synthetic persona." },
              { h: "Anchor Layer",    b: "SHRM BASK and HR-X taxonomy. The segmentation framework that maps personas cleanly onto HR practice areas and decision contexts." },
              { h: "Extension Layer", b: "Third-party workforce datasets. Covers non-HR employee populations — the populations SHRM's member panel alone cannot represent." },
            ].map((l, i) => (
              <div key={l.h} style={{ padding: "26px 24px", borderLeft: i === 0 ? "none" : "1px solid #E4E8F1" }}>
                <div style={{ font: "900 14px/1 var(--font-display)", color: p.accent, letterSpacing: ".06em", textTransform: "uppercase", marginBottom: 12 }}>Layer {i+1}</div>
                <h4 style={{ font: "800 18px/1.25 var(--font-display)", color: "#00093E", margin: "0 0 8px" }}>{l.h}</h4>
                <p style={{ font: "400 14px/1.55 var(--font-body)", color: "#3B4A66", margin: 0 }}>{l.b}</p>
              </div>
            ))}
          </div>
        </div>
      </LongForm>

      <section style={{ background: "#F5F7FB", padding: "100px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ maxWidth: 820, marginBottom: 56 }}>
            <Eyebrow>Four deployment modes</Eyebrow>
            <h2 style={{ font: "900 44px/1.08 var(--font-display)", color: "#00093E", letterSpacing: "-0.028em", margin: "16px 0 18px", textWrap: "balance" }}>
              From internal simulator to enterprise digital twin.
            </h2>
            <p style={{ font: "400 17px/1.55 var(--font-body)", color: "#3B4A66", margin: 0, textWrap: "pretty" }}>
              Four roles a validated synthetic workforce can play — for SHRM, for enterprise SaaS partners, for commercial data partners, and for CHROs and CFOs inside Global 2000 organizations.
            </p>
          </div>
          <ModeGrid p={p} columns={2}/>
        </div>
      </section>

      <LongForm eyebrow="Why the benchmark is non-negotiable"
                title="Correlation with human ground truth — or we don't ship."
                lede="A synthetic population only earns its place if it behaves like the real one. VoW Synthetic is held to a single, unforgiving benchmark: 90% correlation with human panels at the construct level.">
        <div style={{
          background: "#00093E", color: "#fff", padding: "44px 48px",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", right: -80, bottom: -80 }}>
            <Pinwheel size={320} opacity={0.14} tone="dark"/>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 18, marginBottom: 14 }}>
              <span style={{ font: "900 120px/0.9 var(--font-display)", color: "#FBB533", letterSpacing: "-0.04em" }}>90<span style={{ fontSize: 60 }}>%</span></span>
              <span style={{ font: "700 14px/1.4 var(--font-display)", color: "#79ADD8", textTransform: "uppercase", letterSpacing: ".14em", maxWidth: 220 }}>Ground-truth correlation, measured at the construct level</span>
            </div>
            <p style={{ font: "400 16px/1.65 var(--font-body)", color: "#C5E5FF", margin: "28px 0 0", maxWidth: 720 }}>
              Miss the benchmark and commercial activation waits — regardless of how attractive the pipeline looks. This is how SHRM earns the right to put a synthetic population under its name.
            </p>
          </div>
        </div>
      </LongForm>
    </>
  );
}

function UNODEDetail({ p }) {
  return (
    <>
      <LongForm eyebrow="Why a research network"
                title="Authority without validation is a marketing claim."
                lede="The Intelligence Layer Studio isn't trying to build the most persuasive AI. It's trying to build AI that the HR profession can trust. That needs independent scientists — not just engineers.">
        <div>
          <p style={{ font: "400 18px/1.7 var(--font-body)", color: "#3B4A66", margin: "0 0 22px", textWrap: "pretty" }}>
            SHRM is modeling University Nodes on the US National Laboratories: a small network of specialized institutions, each selected for a specific intersection of HR authority and technical capability. Cornell for the deep-tech logic audit. Indiana for behavioral benchmarking. The University of Denver for enterprise integration stress tests.
          </p>
          <p style={{ font: "400 18px/1.7 var(--font-body)", color: "#3B4A66", margin: "0 0 40px", textWrap: "pretty" }}>
            No two nodes do the same work. The institutional specialization is the architecture — and the output is peer-reviewed science that general-purpose AI systems cannot credibly produce.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
            {p.modes.slice(0, 3).map((m, i) => {
              const bg = ["#1B3C69", "#0076BE", "#4030D6"][i];
              return (
                <div key={m.code} style={{ background: bg, color: "#fff", padding: "30px 26px 30px", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", right: -50, bottom: -50 }}>
                    <Pinwheel size={200} opacity={0.18} tone="dark"/>
                  </div>
                  <div style={{ position: "relative" }}>
                    <div style={{ font: "800 10px/1 var(--font-display)", letterSpacing: ".18em", textTransform: "uppercase", color: "#FBB533", marginBottom: 14 }}>Node 0{i+1}</div>
                    <h4 style={{ font: "900 24px/1.15 var(--font-display)", margin: "0 0 4px", letterSpacing: "-0.02em" }}>{m.code}</h4>
                    <div style={{ font: "600 13px/1.3 var(--font-display)", color: "#C5E5FF", marginBottom: 16 }}>{m.name}</div>
                    <div style={{ font: "500 12px/1.4 var(--font-body)", color: "#fff", marginBottom: 14, borderTop: "1px solid rgba(197,229,255,.25)", paddingTop: 14 }}>{m.platform}</div>
                    <p style={{ font: "400 14px/1.55 var(--font-body)", color: "#C5E5FF", margin: 0 }}>{m.user}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </LongForm>

      <section style={{ background: "#F5F7FB", padding: "100px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ maxWidth: 820, marginBottom: 48 }}>
            <Eyebrow>The Triple-Gate Review</Eyebrow>
            <h2 style={{ font: "900 44px/1.08 var(--font-display)", color: "#00093E", letterSpacing: "-0.028em", margin: "16px 0 18px", textWrap: "balance" }}>
              No ILS capability ships under SHRM branding without passing three gates.
            </h2>
            <p style={{ font: "400 17px/1.55 var(--font-body)", color: "#3B4A66", margin: 0, textWrap: "pretty" }}>
              The SHRM Validation Seal is the outcome of a three-stage independent review. Every gate is owned by a different node. All three must pass.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, background: "#E4E8F1", border: "1px solid #E4E8F1" }}>
            {[
              { n: "01", g: "Technical Gate",    node: "Cornell",              q: "Is the code deterministic? Is retrieval accurate? Are reasoning chains auditable?" },
              { n: "02", g: "Practitioner Gate", node: "Indiana",              q: "Does the tool save time for a real HR manager? Does it improve decision quality? Does it create new burnout risks?" },
              { n: "03", g: "Commercial Gate",   node: "University of Denver", q: "Is the integration stable inside a real ERP or HRIS? Does it handle messy enterprise data? Does it perform at commercial scale?" },
            ].map(g => (
              <div key={g.n} style={{ background: "#fff", padding: "30px 28px 34px" }}>
                <div style={{ font: "900 44px/1 var(--font-display)", color: p.accent, letterSpacing: "-0.028em" }}>{g.n}</div>
                <div style={{ font: "800 20px/1.2 var(--font-display)", color: "#00093E", margin: "18px 0 6px" }}>{g.g}</div>
                <div style={{ font: "700 12px/1.2 var(--font-body)", color: p.accent, marginBottom: 14, textTransform: "uppercase", letterSpacing: ".08em" }}>{g.node}</div>
                <p style={{ font: "400 15px/1.6 var(--font-body)", color: "#3B4A66", margin: 0 }}>{g.q}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LongForm eyebrow="The Validation Seal"
                title="An earned mark of scientific credibility.">
        <div>
          <p style={{ font: "400 18px/1.7 var(--font-body)", color: "#3B4A66", margin: "0 0 22px" }}>
            The SHRM Validation Seal communicates one thing clearly: this capability has passed independent peer review, practitioner testing, and enterprise-grade integration stress across three specialized academic institutions. It is an outcome of the Triple-Gate Review, not a label that can be applied in advance.
          </p>
          <p style={{ font: "400 18px/1.7 var(--font-body)", color: "#3B4A66", margin: 0 }}>
            For enterprise partners, the Seal is the signal that SHRM reasoning inside your system is backed by science — not brand equity alone. For the profession, it's the standard SHRM holds itself to before anything it builds carries its name.
          </p>
        </div>
      </LongForm>
    </>
  );
}

function HACKDetail({ p }) {
  return (
    <>
      <LongForm eyebrow="What the Innovation Series is"
                title="From Identic AI to Agentic fluency."
                lede="The cultural engine of the Intelligence Layer Studio. A rolling program of one-to-two week flash-team sprints against real HR friction points.">
        <div>
          <p style={{ font: "400 18px/1.7 var(--font-body)", color: "#3B4A66", margin: "0 0 22px" }}>
            Most enterprise AI programs start with tools and hope for culture. SHRM is doing the opposite. The Innovation Series is designed to move SHRM staff from <em>Identic AI</em> — ad-hoc use of free consumer tools — to <em>Agentic AI</em> fluency, by putting them inside secure, high-velocity sprints with coaching, sandboxes, and real HR problems.
          </p>
          <p style={{ font: "400 18px/1.7 var(--font-body)", color: "#3B4A66", margin: "0 0 40px" }}>
            Every sprint contributes to the Vibe Experiments Library — the program's institutional memory. And every output, whether it reaches launch or not, is treated as a documented learning asset rather than a success or failure.
          </p>
          <ModeGrid p={p} columns={2}/>
        </div>
      </LongForm>

      <section style={{ background: "#F5F7FB", padding: "100px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ maxWidth: 820, marginBottom: 48 }}>
            <Eyebrow>Five tracks. One library.</Eyebrow>
            <h2 style={{ font: "900 44px/1.08 var(--font-display)", color: "#00093E", letterSpacing: "-0.028em", margin: "16px 0 18px", textWrap: "balance" }}>
              Layered Triage — because a good hackathon produces diverse outputs.
            </h2>
            <p style={{ font: "400 17px/1.55 var(--font-body)", color: "#3B4A66", margin: 0, textWrap: "pretty" }}>
              Sprint outputs land in the Vibe Experiments Library as the universal disposition. Beyond that, a subset routes to one of five active tracks — technical development, internal MVP, program handoff, strategic input, or honorable discontinuation.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12 }}>
            {[
              { t: "Scientific audit",      d: "Cornell-reviewed prototypes that carry HR compliance logic" },
              { t: "Internal MVP",          d: "Most technical outputs — routed to SHRM product teams" },
              { t: "Program handoff",       d: "Non-technical concepts routed to Certification, L&D, Member Services" },
              { t: "Strategic input",       d: "Insights and frameworks routed to leadership briefings" },
              { t: "Library-only",          d: "Honorable discontinuation — documented in the Library" },
            ].map((tr, i) => {
              const bg = ["#1B3C69", "#0076BE", "#4030D6", "#8B1377", "#787878"][i];
              return (
                <div key={i} style={{ background: bg, color: "#fff", padding: "28px 22px 28px", position: "relative", overflow: "hidden", minHeight: 240 }}>
                  <div style={{ position: "absolute", right: -40, bottom: -40 }}>
                    <Pinwheel size={150} opacity={0.2} tone="dark"/>
                  </div>
                  <div style={{ position: "relative" }}>
                    <div style={{ font: "900 36px/1 var(--font-display)", color: "#FBB533", letterSpacing: "-0.025em" }}>0{i+1}</div>
                    <h4 style={{ font: "800 17px/1.22 var(--font-display)", margin: "14px 0 10px", textWrap: "balance" }}>{tr.t}</h4>
                    <p style={{ font: "400 13px/1.5 var(--font-body)", color: "#C5E5FF", margin: 0 }}>{tr.d}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <LongForm eyebrow="The Vibe Experiments Library"
                title="Institutional memory, enforced at disband time.">
        <div>
          <p style={{ font: "400 18px/1.7 var(--font-body)", color: "#3B4A66", margin: "0 0 32px" }}>
            A well-maintained Library changes what "didn't continue" means. In most organizations an abandoned project is a failure. In a Library-enabled program, it's a documented learning asset that future sprints — and future SHRM initiatives — can draw on.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, background: "#E4E8F1", border: "1px solid #E4E8F1" }}>
            {[
              { h: "Proposal",        b: "The original one-paragraph 'One Problem' submission, captured verbatim" },
              { h: "Team",            b: "Flash Team roster, functional roles, and assigned AI Coach" },
              { h: "Sprint artifact", b: "Code, prototype, or concept doc — in whatever form the sprint produced" },
              { h: "Lessons memo",    b: "A short narrative: what worked, what didn't, why it landed where it landed" },
              { h: "Disposition tag", b: "Tracks 1–5, with track-change history if the output moves later" },
              { h: "Discoverability", b: "HR-X practice area × technique × problem-type — consistent taxonomy" },
            ].map(e => (
              <div key={e.h} style={{ background: "#fff", padding: "22px 22px" }}>
                <div style={{ font: "800 11px/1 var(--font-display)", letterSpacing: ".14em", textTransform: "uppercase", color: p.accent, marginBottom: 8 }}>{e.h}</div>
                <div style={{ font: "400 14px/1.5 var(--font-body)", color: "#3B4A66" }}>{e.b}</div>
              </div>
            ))}
          </div>
        </div>
      </LongForm>
    </>
  );
}

function XHUBDetail({ p }) {
  return (
    <>
      <LongForm eyebrow="The strategic reframe"
                title="A maturity score tells you where you are. The Hub tells you what to do, and lets you simulate what happens if you act."
                lede="That progression — Diagnostic, Prescriptive, Predictive — is both the architecture of the platform and the logic of the commercial offer. One platform. Three tiers. Each tier a commitment enterprise HR leaders can make as they're ready.">
        <div>
          <p style={{ font: "400 18px/1.7 var(--font-body)", color: "#3B4A66", margin: "0 0 24px", textWrap: "pretty" }}>
            HR-X Solutions Hub is the enterprise B2B product at the center of SHRM's move from manual assessment-and-consulting vendor to scalable, data-driven workforce decision intelligence. It is simultaneously the <strong style={{ color: "#00093E" }}>most commercially advanced project in the Intelligence Layer Studio</strong> and the most architecturally complex — a five-mode platform serving two distinct user populations across a three-tier intelligence model.
          </p>
          <p style={{ font: "400 18px/1.7 var(--font-body)", color: "#3B4A66", margin: 0, textWrap: "pretty" }}>
            The Hub is currently in market as a manually-operated consulting engagement — the MVP — generating revenue with named enterprise pilot clients and validating that enterprise HR leaders will pay for a structured, SHRM-grounded diagnostic with a guided results conversation. The Hub is the scalable architecture that makes what the solutions team does today available to ten times the enterprise volume without ten times the headcount.
          </p>
        </div>
      </LongForm>

      <section style={{ background: "#F5F7FB", padding: "100px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ maxWidth: 820, marginBottom: 48 }}>
            <Eyebrow>Three proprietary assets</Eyebrow>
            <h2 style={{ font: "900 44px/1.08 var(--font-display)", color: "#00093E", letterSpacing: "-0.028em", margin: "16px 0 18px", textWrap: "balance" }}>
              The Hub is built on intelligence SHRM already owns.
            </h2>
            <p style={{ font: "400 17px/1.55 var(--font-body)", color: "#3B4A66", margin: 0, textWrap: "pretty" }}>
              A validated diagnostic instrument. The authoritative body of applied HR knowledge. Three-hundred-thousand-plus members of longitudinal workforce data. No other provider has the combination.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, background: "#E4E8F1", border: "1px solid #E4E8F1" }}>
            {[
              { h: "The HR-X Assessment", m: "95-item · 4 dimensions · 16 practice areas · 71 subpractices", b: "A validated diagnostic instrument that scores an organization's HR function against a benchmark panel of SHRM members — the empirical spine of every Hub deliverable." },
              { h: "The SHRM BASK",       m: "Body of Applied Skills and Knowledge",                          b: "The authoritative content standard for every prescriptive recommendation the Hub issues. No Hub intervention is untethered from a SHRM standard." },
              { h: "SHRM Member & Workforce Data", m: "330,000+ members · longitudinal survey history",      b: "The foundation of the benchmark panel, the Priority Index, and the VoW Synthetic simulation engine that powers Tier 3 Predictive Intelligence." },
            ].map((a, i) => (
              <div key={a.h} style={{ background: "#fff", padding: "32px 32px 36px" }}>
                <div style={{ font: "900 14px/1 var(--font-display)", color: p.accent, letterSpacing: ".06em", textTransform: "uppercase", marginBottom: 14 }}>Asset 0{i+1}</div>
                <h4 style={{ font: "800 22px/1.22 var(--font-display)", color: "#00093E", margin: "0 0 6px", textWrap: "balance" }}>{a.h}</h4>
                <div style={{ font: "600 12px/1.4 var(--font-body)", color: p.accent, marginBottom: 14 }}>{a.m}</div>
                <p style={{ font: "400 15px/1.6 var(--font-body)", color: "#3B4A66", margin: 0 }}>{a.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LongForm eyebrow="The three-tier intelligence model"
                title="Diagnostic. Prescriptive. Predictive."
                lede="Each tier is a product. Each tier is a commitment level. Each tier unlocks a new set of decisions the HR function can make with SHRM-grounded evidence.">
        <div style={{ display: "grid", gap: 14 }}>
          {[
            { n: "Tier 1", t: "Diagnostic Intelligence", tag: "MVP active · Phase 1 automates",
              bullets: [
                "95-item HR-X Assessment with automated scoring to 71 subpractice areas",
                "Benchmark-percentile comparison against a panel of SHRM-member organizations",
                "Multi-respondent divergence detection across HR and business stakeholders",
                "Longitudinal tracking across re-assessment periods",
                "Natural-language query interface over the scored dataset",
              ]},
            { n: "Tier 2", t: "Prescriptive Intelligence", tag: "Phase 2 · months 4–12",
              bullets: [
                "C-suite strategy configuration — the Priority Index framework",
                "Priority Index ranking across all 71 subpractices for the organization's stated strategy",
                "BASK-grounded intervention library for every prescriptive recommendation",
                "Routing to the right SHRM product pathway — certification, L&D, consulting",
                "Jurisdiction-aware compliance guidance and editable enterprise report exports",
              ]},
            { n: "Tier 3", t: "Predictive Intelligence", tag: "Phase 3 · months 9–18 · gated on VoW Phase 0 validation",
              bullets: [
                "VoW Synthetic Digital Twin calibrated by the organization's subpractice maturity scores",
                "Workforce decision simulation — RTO, RIF, L&D ROI, compensation restructure",
                "Simulation Sprints — scoped engagements against specific enterprise scenarios",
                "Continuous twin sync as re-assessment data flows into the model",
                "The same 90% ground-truth correlation benchmark the VoW Synthetic program is held to",
              ]},
          ].map(t => (
            <div key={t.n} style={{ background: "#fff", border: "1px solid #E4E8F1", padding: "30px 32px 32px" }}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16, marginBottom: 14, flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 18 }}>
                  <span style={{ font: "900 38px/1 var(--font-display)", color: p.accent, letterSpacing: "-0.025em" }}>{t.n}</span>
                  <h4 style={{ font: "800 24px/1.2 var(--font-display)", color: "#00093E", margin: 0, letterSpacing: "-0.015em" }}>{t.t}</h4>
                </div>
                <Chip tone="olive">{t.tag}</Chip>
              </div>
              <ul style={{ margin: 0, paddingLeft: 18, display: "grid", gap: 8, font: "400 15px/1.55 var(--font-body)", color: "#3B4A66" }}>
                {t.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </LongForm>

      <section style={{ background: "#00093E", color: "#fff", padding: "100px 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -160, top: -120 }}>
          <Pinwheel size={620} opacity={0.1} tone="dark"/>
        </div>
        <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ maxWidth: 820, marginBottom: 48 }}>
            <Eyebrow color="#FBB533">The five-mode operating model</Eyebrow>
            <h2 style={{ font: "900 44px/1.08 var(--font-display)", letterSpacing: "-0.028em", margin: "16px 0 18px", textWrap: "balance" }}>
              One platform. Five moments. Two distinct users.
            </h2>
            <p style={{ font: "400 17px/1.55 var(--font-body)", color: "#C5E5FF", margin: 0, textWrap: "pretty" }}>
              The Hub serves two populations — the enterprise HR leader and the SHRM Business operator — across five operating modes. Each mode is a different user with a different purpose at a different stage of the engagement.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 2, background: "rgba(197,229,255,0.2)", border: "1px solid rgba(197,229,255,0.2)" }}>
            {[
              { n: "1",   t: "SHRM Internal — Build",              u: "Solutions Architect",        q: "What do we publish to this client?",            tone: "shrm" },
              { n: "2a",  t: "Enterprise — Setup & Deployment",    u: "HR Operations contact",      q: "Who is taking the assessment — are they completing it?", tone: "ent" },
              { n: "2b",  t: "Enterprise — Results Hub",           u: "CHRO & HR leadership",       q: "What does our HR maturity profile say — and what should we do?", tone: "ent" },
              { n: "3a",  t: "SHRM Internal — Customer Success",   u: "Solutions team / CSM",       q: "How are our accounts progressing — which need attention?", tone: "shrm" },
              { n: "3b",  t: "Enterprise — Progression & Re-Assessment", u: "CHRO & HR leadership",q: "How have we improved — and what's our next step?", tone: "ent" },
            ].map((m) => (
              <div key={m.n} style={{ background: "#00093E", padding: "28px 22px 30px", position: "relative" }}>
                <div style={{ display: "inline-block", background: m.tone === "shrm" ? "#FBB533" : "#0076BE", color: m.tone === "shrm" ? "#00093E" : "#fff", padding: "4px 10px", font: "800 10px/1 var(--font-display)", letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 16 }}>
                  {m.tone === "shrm" ? "SHRM" : "Enterprise"}
                </div>
                <div style={{ font: "900 36px/1 var(--font-display)", color: "#79ADD8", letterSpacing: "-0.025em", marginBottom: 12 }}>Mode {m.n}</div>
                <h4 style={{ font: "800 17px/1.25 var(--font-display)", margin: "0 0 10px", color: "#fff", textWrap: "balance" }}>{m.t}</h4>
                <div style={{ font: "600 12px/1.4 var(--font-body)", color: "#C5E5FF", marginBottom: 14, paddingBottom: 14, borderBottom: "1px solid rgba(197,229,255,0.15)" }}>{m.u}</div>
                <p style={{ font: "400 13px/1.5 var(--font-body)", color: "#79ADD8", margin: 0, fontStyle: "italic" }}>"{m.q}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LongForm eyebrow="The Proprietary Intelligence Boundary"
                title="Whatever the Hub is built on, SHRM's intelligence never lives inside a vendor's platform."
                lede="One architectural principle governs every Hub decision. It is the moat that makes the Hub defensible — regardless of whether SHRM builds the delivery shell internally, licenses a third-party platform, or pursues a hybrid.">
        <div>
          <p style={{ font: "400 18px/1.7 var(--font-body)", color: "#3B4A66", margin: "0 0 32px", textWrap: "pretty" }}>
            The scoring engine, the vectorized BASK corpus, the benchmark panel data, the member longitudinal data, and the VoW Synthetic persona infrastructure — the intelligence that makes the Hub what it is — live in SHRM's own data layer. Any delivery platform accesses that intelligence by API. The platform provides the shell; SHRM retains the intelligence. A vendor whose architecture requires SHRM's data to live inside their platform is structurally disqualifying, regardless of other capabilities.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2, background: "#E4E8F1", border: "1px solid #E4E8F1" }}>
            {[
              { h: "In SHRM's data layer",   b: "Scoring engine · vectorized BASK · benchmark panel · member longitudinal data · VoW Synthetic personas" },
              { h: "At the platform edge",   b: "Delivery shell · customer-facing UX · visualization layer · workflow integration · authentication" },
              { h: "Called, never copied",   b: "Every Hub deployment invokes SHRM intelligence as a remote service. No corpus transfer. No vendor lock-in of SHRM IP." },
              { h: "Architecturally enforced", b: "Vendor evaluation begins with one question: can you consume external APIs for scoring, or do you implement scoring natively? The second answer ends the conversation." },
            ].map(f => (
              <div key={f.h} style={{ background: "#fff", padding: "26px 28px" }}>
                <h4 style={{ font: "800 18px/1.25 var(--font-display)", color: "#00093E", margin: "0 0 8px" }}>{f.h}</h4>
                <p style={{ font: "400 14px/1.55 var(--font-body)", color: "#3B4A66", margin: 0 }}>{f.b}</p>
              </div>
            ))}
          </div>
        </div>
      </LongForm>

      <section style={{ background: "#F5F7FB", padding: "100px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ maxWidth: 820, marginBottom: 48 }}>
            <Eyebrow>Roadmap</Eyebrow>
            <h2 style={{ font: "900 44px/1.08 var(--font-display)", color: "#00093E", letterSpacing: "-0.028em", margin: "16px 0 18px", textWrap: "balance" }}>
              MVP in market. Phase 1 in design. The architecture staged over eighteen months.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {[
              { n: "Phase 1", w: "M1–M6",   t: "Tier 1 automation",  b: "HR-X scoring API operational. Automated delivery of the 95-item assessment. Benchmarking dashboard. NLQ interface. Manual MVP engagements continue in parallel — every pilot feeds the benchmark panel.",
                gate: "Gate: first assessment scored and benchmarked against panel, end-to-end through the platform." },
              { n: "Phase 2", w: "M4–M12",  t: "Tier 2 prescriptive", b: "Priority Index engine. BASK-grounded intervention library. Strategy configuration. Jurisdiction-aware compliance guidance. Editable enterprise report exports. First prescriptive roadmap delivered through the platform.",
                gate: "Gate: Priority Index live; SHRM product pathway mapping complete across all 71 subpractices." },
              { n: "Phase 3", w: "M9–M18",  t: "Tier 3 predictive",   b: "VoW Synthetic integration. Enterprise Digital Twin construction. The Simulation Sprint commercial model. Tier 2 platform clients generate outcome data that feeds Tier 3 calibration.",
                gate: "Gate: first Digital Twin constructed; 90% ground-truth validation complete via the VoW Synthetic program." },
            ].map(ph => (
              <div key={ph.n} style={{ background: "#fff", border: "1px solid #E4E8F1", padding: "30px 30px 32px" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 4 }}>
                  <span style={{ font: "900 24px/1 var(--font-display)", color: p.accent, letterSpacing: "-0.02em" }}>{ph.n}</span>
                  <span style={{ font: "700 12px/1 var(--font-body)", color: "#787878" }}>{ph.w}</span>
                </div>
                <h4 style={{ font: "800 22px/1.22 var(--font-display)", color: "#00093E", margin: "14px 0 12px", textWrap: "balance" }}>{ph.t}</h4>
                <p style={{ font: "400 14px/1.6 var(--font-body)", color: "#3B4A66", margin: "0 0 16px" }}>{ph.b}</p>
                <div style={{ font: "600 13px/1.5 var(--font-body)", color: p.accent, paddingTop: 14, borderTop: "1px solid #EEF1F6" }}>{ph.gate}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const PROJECT_DETAIL = { kcde: KCDEDetail, vow: VoWDetail, unode: UNODEDetail, xhub: XHUBDetail, hack: HACKDetail };

function ProjectPage({ id, onNavigate }) {
  const p = getProject(id);
  const Detail = PROJECT_DETAIL[id];
  if (!p || !Detail) return null;
  return (
    <div>
      <ProjectHero p={p}/>
      <KPIBand p={p}/>
      <Detail p={p}/>
      <ProjectCTA p={p} onNavigate={onNavigate}/>
      <RelatedProjects currentId={id} onNavigate={onNavigate}/>
    </div>
  );
}

window.ProjectPage = ProjectPage;
