// Secondary public pages — Studio overview, Research, Partner, Universities, Newsroom.

function StudioPage({ onNavigate }) {
  return (
    <div>
      <section style={{ background: "linear-gradient(135deg, #00093E 0%, #1B3C69 55%, #0076BE 120%)", color: "#fff", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -180, top: -140 }}>
          <Pinwheel size={640} opacity={0.14} tone="dark"/>
        </div>
        <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "80px 40px 96px" }}>
          <Eyebrow color="#FBB533">The Studio</Eyebrow>
          <h1 style={{ font: "900 76px/1.04 var(--font-display)", letterSpacing: "-0.03em", margin: "18px 0 22px", textWrap: "balance", maxWidth: 1000 }}>
            Why SHRM is building its own reasoning infrastructure.
          </h1>
          <p style={{ font: "400 21px/1.55 var(--font-body)", color: "#C5E5FF", margin: 0, maxWidth: 820, textWrap: "pretty" }}>
            The Intelligence Layer Studio is SHRM's commitment to remain the profession's authority in an era when general-purpose AI is trying to answer HR questions it doesn't understand. The Studio converts SHRM's proprietary knowledge assets into machine-executable reasoning — deployed through the tools HR professionals already use, validated by independent science, and governed by a Proprietary Intelligence Boundary that SHRM standards never cross.
          </p>
        </div>
      </section>

      <section style={{ background: "#fff", padding: "110px 0" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto", padding: "0 40px" }}>
          <Eyebrow>The Proprietary Intelligence Boundary</Eyebrow>
          <h2 style={{ font: "900 48px/1.08 var(--font-display)", color: "#00093E", letterSpacing: "-0.028em", margin: "16px 0 24px", textWrap: "balance" }}>
            Non-negotiable, and the reason the rest of the architecture works.
          </h2>
          <p style={{ font: "400 19px/1.7 var(--font-body)", color: "#3B4A66", margin: "0 0 18px", textWrap: "pretty" }}>
            SHRM standards and case history are called, never copied. No ILS deployment results in SHRM intellectual property residing in a third-party vendor's platform — even when that deployment surfaces inside Microsoft Copilot, ChatGPT, Claude, Gemini, Workday, or an enterprise HRIS.
          </p>
          <p style={{ font: "400 19px/1.7 var(--font-body)", color: "#3B4A66", margin: 0, textWrap: "pretty" }}>
            Every Intelligence Layer capability — KCDE, Voice of Work Synthetic, HR-X Solutions Hub, and the University Nodes research pipeline — is built against this boundary. It is what makes SHRM's authority transferable into AI systems without being diluted by them.
          </p>
        </div>
      </section>

      <section style={{ background: "#F5F7FB", padding: "110px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ maxWidth: 820, marginBottom: 48 }}>
            <Eyebrow>Current projects</Eyebrow>
            <h2 style={{ font: "900 48px/1.08 var(--font-display)", color: "#00093E", letterSpacing: "-0.028em", margin: "16px 0 18px", textWrap: "balance" }}>
              A rolling portfolio. One architecture.
            </h2>
            <p style={{ font: "400 17px/1.55 var(--font-body)", color: "#3B4A66", margin: "0 0 8px", textWrap: "pretty", maxWidth: 820 }}>
              The five projects below are what the Studio is building right now. One enterprise intelligence platform. Two proprietary reasoning capabilities. One research backbone. One cultural engine. More will join as the architecture demands it.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 20 }}>
            {ILS_PROJECTS.map((p, i) => {
              const span = i < 2 ? "span 3" : "span 2";
              return (
              <a key={p.id} onClick={() => onNavigate && onNavigate(p.id)}
                 style={{
                   display: "block", textDecoration: "none", color: "inherit",
                   background: "#fff", border: "1px solid #E4E8F1", cursor: "pointer",
                   padding: "30px 32px 34px", position: "relative", overflow: "hidden",
                   transition: "transform .18s, box-shadow .18s",
                   gridColumn: span,
                 }}
                 onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 14px 36px -14px rgba(0,9,62,.3)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                 onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}>
                <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: 5, background: p.accent }}/>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                  <span style={{ font: "800 11px/1 var(--font-display)", color: p.accent, letterSpacing: ".14em", textTransform: "uppercase" }}>{p.code}</span>
                  <StatusPill status={p.status}/>
                </div>
                <h3 style={{ font: "800 26px/1.2 var(--font-display)", color: "#00093E", margin: "0 0 10px", textWrap: "balance" }}>{p.name}</h3>
                <p style={{ font: "500 16px/1.4 var(--font-body)", color: p.accent, margin: "0 0 14px" }}>{p.tagline}</p>
                <p style={{ font: "400 15px/1.6 var(--font-body)", color: "#3B4A66", margin: "0 0 20px", textWrap: "pretty" }}>{p.oneLiner}</p>
                <span style={{ font: "800 12px/1 var(--font-display)", color: p.accent, letterSpacing: ".08em", textTransform: "uppercase" }}>Read more →</span>
              </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

function ResearchPage({ onNavigate }) {
  const kindTone = { Architecture: "navy", "Research note": "blue", Program: "melon", Insight: "olive", Partnership: "plum" };
  return (
    <div>
      <section style={{ background: "linear-gradient(135deg, #00093E 0%, #1B3C69 100%)", color: "#fff", padding: "70px 0 64px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -140, top: -100 }}>
          <Pinwheel size={520} opacity={0.14} tone="dark"/>
        </div>
        <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
          <Eyebrow color="#FBB533">Research & insights</Eyebrow>
          <h1 style={{ font: "900 60px/1.06 var(--font-display)", letterSpacing: "-0.028em", margin: "16px 0 18px", textWrap: "balance" }}>
            How we think about the work.
          </h1>
          <p style={{ font: "400 19px/1.55 var(--font-body)", color: "#C5E5FF", margin: 0, maxWidth: 740, textWrap: "pretty" }}>
            Architecture decisions, methodology notes, and emerging findings from the Studio's current projects — published as the work progresses.
          </p>
        </div>
      </section>

      {/* Cross-link: Innovation Series hackathon gallery */}
      <section style={{ background: "#fff", borderBottom: "1px solid #E4E8F1" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "36px 40px", display: "grid", gridTemplateColumns: "1fr auto", gap: 28, alignItems: "center" }}>
          <div>
            <div style={{ font: "800 11px/1 var(--font-display)", letterSpacing: ".16em", textTransform: "uppercase", color: "#F26A42", marginBottom: 8 }}>Also open for exploration</div>
            <div style={{ font: "700 20px/1.3 var(--font-display)", color: "#00093E", textWrap: "balance" }}>
              Sixty-one staff submissions from the 2025 SHRM Innovation Hackathon — curated, attributed, and routed.
            </div>
          </div>
          <Btn kind="ghost" onClick={() => onNavigate && onNavigate("hackathon")}>Browse the gallery →</Btn>
        </div>
      </section>

      <section style={{ background: "#F5F7FB", padding: "90px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {ILS_RESEARCH.map((r, i) => {
            const p = getProject(r.project);
            return (
              <a key={i} onClick={() => onNavigate && onNavigate(r.project)}
                 style={{ display: "block", background: "#fff", border: "1px solid #E4E8F1", cursor: "pointer", textDecoration: "none", color: "inherit", transition: "transform .18s, box-shadow .18s" }}
                 onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 12px 32px -12px rgba(0,9,62,.3)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                 onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}>
                <div style={{ height: 6, background: p.accent }}/>
                <div style={{ padding: "28px 28px 30px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
                    <Chip tone={kindTone[r.kind] || "blue"}>{r.kind}</Chip>
                    <span style={{ font: "600 12px/1 var(--font-body)", color: "#787878" }}>{r.date}</span>
                  </div>
                  <h3 style={{ font: "800 22px/1.25 var(--font-display)", color: "#00093E", margin: "0 0 12px", textWrap: "balance" }}>{r.title}</h3>
                  <p style={{ font: "400 15px/1.55 var(--font-body)", color: "#3B4A66", margin: "0 0 20px", textWrap: "pretty" }}>{r.body}</p>
                  <span style={{ font: "800 12px/1 var(--font-display)", color: p.accent, letterSpacing: ".06em", textTransform: "uppercase" }}>{p.name} →</span>
                </div>
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function PartnerPage({ onNavigate }) {
  return (
    <div>
      <section style={{ background: "linear-gradient(135deg, #00093E 0%, #0076BE 100%)", color: "#fff", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -140, top: -100 }}>
          <Pinwheel size={560} opacity={0.14} tone="dark"/>
        </div>
        <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "80px 40px 96px" }}>
          <Eyebrow color="#FBB533">Partner with SHRM</Eyebrow>
          <h1 style={{ font: "900 72px/1.04 var(--font-display)", letterSpacing: "-0.03em", margin: "18px 0 22px", textWrap: "balance", maxWidth: 1000 }}>
            Integrate SHRM reasoning into the HR decisions that matter.
          </h1>
          <p style={{ font: "400 20px/1.55 var(--font-body)", color: "#C5E5FF", margin: 0, maxWidth: 760, textWrap: "pretty" }}>
            For HR platforms, enterprise copilots, HRIS vendors, and consultancies: partner with the Intelligence Layer Studio to put the SHRM Validation Seal on the decisions your platform supports.
          </p>
        </div>
      </section>

      <section style={{ background: "#fff", padding: "96px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ maxWidth: 820, marginBottom: 48 }}>
            <Eyebrow>Ways to partner</Eyebrow>
            <h2 style={{ font: "900 42px/1.1 var(--font-display)", color: "#00093E", letterSpacing: "-0.025em", margin: "16px 0 18px", textWrap: "balance" }}>
              Five concrete partnership models.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 18 }}>
            {[
              { t: "HR-X Solutions Hub — Enterprise Subscription",   d: "For CHROs and enterprise HR leaders: the three-tier intelligence platform — Diagnostic, Prescriptive, Predictive — built on the HR-X Assessment, the SHRM BASK, and the VoW Synthetic Digital Twin." },
              { t: "Enterprise Copilot Skill",   d: "Add KCDE as a skill inside your Copilot Studio build. Your users get SHRM-backed answers; SHRM standards never leave SHRM infrastructure." },
              { t: "Certified Assistant Action", d: "Publish a SHRM-certified action for ChatGPT, Claude, or Gemini. Members and non-members reach SHRM reasoning from the tools they already use." },
              { t: "HRIS API Integration",       d: "Call the KCDE API at decision points inside your HRIS. Every response carries the SHRM Validation Seal and full audit trail." },
              { t: "Synthetic Panel Certification", d: "Use VoW Synthetic as a certification layer for your HR feature rollouts. Self-test against a SHRM-validated digital twin of the workforce." },
            ].map((p, i) => (
              <div key={i} style={{ background: "#F5F7FB", padding: "30px 32px 32px", borderTop: "3px solid #0076BE", gridColumn: i === 0 ? "span 2" : "auto" }}>
                <div style={{ font: "900 28px/1 var(--font-display)", color: "#0076BE", letterSpacing: "-0.02em", marginBottom: 14 }}>0{i+1}</div>
                <h3 style={{ font: "800 22px/1.22 var(--font-display)", color: "#00093E", margin: "0 0 10px", textWrap: "balance" }}>{p.t}</h3>
                <p style={{ font: "400 15px/1.6 var(--font-body)", color: "#3B4A66", margin: 0 }}>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm title="Request a partnership briefing"
                   lede="Tell us about your platform, your HR use case, and the decisions you're trying to support. The Studio team will reach out to schedule a briefing."
                   kinds={["HR-X Solutions Hub — enterprise subscription", "Enterprise copilot integration", "HRIS API integration", "Consumer assistant action", "Synthetic panel certification", "Research collaboration", "Other"]}/>
    </div>
  );
}

function UniversitiesPage({ onNavigate }) {
  return (
    <div>
      <section style={{ background: "linear-gradient(135deg, #00093E 0%, #4030D6 100%)", color: "#fff", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -140, top: -100 }}>
          <Pinwheel size={560} opacity={0.14} tone="dark"/>
        </div>
        <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "80px 40px 96px" }}>
          <Eyebrow color="#FBB533">For universities</Eyebrow>
          <h1 style={{ font: "900 72px/1.04 var(--font-display)", letterSpacing: "-0.03em", margin: "18px 0 22px", textWrap: "balance", maxWidth: 1000 }}>
            Research partnership as scientific infrastructure.
          </h1>
          <p style={{ font: "400 20px/1.55 var(--font-body)", color: "#C5E5FF", margin: 0, maxWidth: 760, textWrap: "pretty" }}>
            The University Nodes network is built on specialization, not scale. Three institutions anchor the current network — Cornell, Indiana, and the University of Denver. We're selectively expanding, through invited pre-MOU conversations, not open solicitations.
          </p>
        </div>
      </section>

      <section style={{ background: "#fff", padding: "96px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ maxWidth: 820, marginBottom: 48 }}>
            <Eyebrow>What a research partnership looks like</Eyebrow>
            <h2 style={{ font: "900 42px/1.1 var(--font-display)", color: "#00093E", letterSpacing: "-0.025em", margin: "16px 0 18px", textWrap: "balance" }}>
              Sprint-based MOUs. HR authority paired with technical capability. Real data access.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 18 }}>
            {[
              { t: "Cross-school authority required", d: "Each node pairs an HR-authority institution (business school, ILR) with a technical unit (engineering, informatics). Single-school partnerships don't produce the validation we need." },
              { t: "Sprint-cadence MOUs",              d: "Multi-quarter grant cycles don't fit the Studio's build cadence. Partnerships operate on sprint-based MOUs — a design constraint confirmed before any commitment." },
              { t: "Firewalled research access",       d: "Partners work inside SHRM-controlled Vertex AI and BigQuery environments. No-Download policy. Publication pre-review. IP terms in the MOU." },
              { t: "ILS Fellows program",              d: "Graduate-student placements across the nodes, paid and scoped to real Studio work. Not a sponsorship — a working research program." },
            ].map((p, i) => (
              <div key={i} style={{ background: "#F5F7FB", padding: "30px 32px 32px", borderTop: "3px solid #4030D6" }}>
                <div style={{ font: "900 28px/1 var(--font-display)", color: "#4030D6", letterSpacing: "-0.02em", marginBottom: 14 }}>0{i+1}</div>
                <h3 style={{ font: "800 22px/1.22 var(--font-display)", color: "#00093E", margin: "0 0 10px", textWrap: "balance" }}>{p.t}</h3>
                <p style={{ font: "400 15px/1.6 var(--font-body)", color: "#3B4A66", margin: 0 }}>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm title="Open a research conversation"
                   lede="If you represent a university research unit with an interest in HR reasoning infrastructure, synthetic workforce methodology, or enterprise integration science, use the form below to open an exploratory conversation with the Studio."
                   kinds={["Deep-tech / reasoning audit", "Behavioral benchmarking", "Enterprise integration research", "Ethical red-team / governance", "ILS Fellows placement", "Other"]}
                   accent="#4030D6"/>
    </div>
  );
}

function NewsroomPage({ onNavigate }) {
  return (
    <div>
      <section style={{ background: "linear-gradient(135deg, #00093E 0%, #1B3C69 100%)", color: "#fff", padding: "70px 0 64px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -140, top: -100 }}>
          <Pinwheel size={520} opacity={0.14} tone="dark"/>
        </div>
        <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
          <Eyebrow color="#FBB533">Newsroom</Eyebrow>
          <h1 style={{ font: "900 60px/1.06 var(--font-display)", letterSpacing: "-0.028em", margin: "16px 0 18px", textWrap: "balance" }}>
            Announcements from the Studio.
          </h1>
          <p style={{ font: "400 19px/1.55 var(--font-body)", color: "#C5E5FF", margin: 0, maxWidth: 700, textWrap: "pretty" }}>
            Press-ready releases, program announcements, and publication launches from the Intelligence Layer Studio.
          </p>
        </div>
      </section>

      <section style={{ background: "#F5F7FB", padding: "90px 0" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ background: "#fff", border: "1px solid #E4E8F1" }}>
            {ILS_NEWSROOM.map((n, i) => (
              <div key={i} style={{
                display: "grid", gridTemplateColumns: "170px 1fr 140px",
                gap: 28, padding: "28px 32px", alignItems: "center",
                borderTop: i === 0 ? "none" : "1px solid #EEF1F6",
              }}>
                <div style={{ font: "700 12px/1 var(--font-display)", letterSpacing: ".08em", color: "#787878", textTransform: "uppercase" }}>{n.date}</div>
                <div>
                  <h3 style={{ font: "800 20px/1.28 var(--font-display)", color: "#00093E", margin: "0 0 6px", textWrap: "balance" }}>{n.title}</h3>
                  <p style={{ font: "400 15px/1.55 var(--font-body)", color: "#3B4A66", margin: 0, textWrap: "pretty" }}>{n.dek}</p>
                </div>
                <div style={{ textAlign: "right" }}><Chip tone="navy">{n.kind}</Chip></div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40, padding: "32px 36px", background: "#00093E", color: "#fff", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 32, flexWrap: "wrap" }}>
            <div>
              <div style={{ font: "800 12px/1 var(--font-display)", letterSpacing: ".14em", textTransform: "uppercase", color: "#FBB533", marginBottom: 8 }}>Press inquiries</div>
              <div style={{ font: "600 17px/1.3 var(--font-body)" }}>For media inquiries about the Intelligence Layer Studio, reach the SHRM press office.</div>
            </div>
            <Btn kind="emphasis" onClick={() => onNavigate && onNavigate("partner")}>Contact press office →</Btn>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactForm({ title, lede, kinds, accent = "#0076BE" }) {
  return (
    <section style={{ background: "#F5F7FB", padding: "96px 0" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 40px" }}>
        <div style={{ background: "#fff", border: "1px solid #E4E8F1", padding: "48px 52px 52px" }}>
          <h2 style={{ font: "900 36px/1.15 var(--font-display)", color: "#00093E", letterSpacing: "-0.022em", margin: "0 0 14px", textWrap: "balance" }}>{title}</h2>
          <p style={{ font: "400 16px/1.6 var(--font-body)", color: "#3B4A66", margin: "0 0 36px", maxWidth: 680, textWrap: "pretty" }}>{lede}</p>
          <form onSubmit={e => { e.preventDefault(); alert("Thanks — the Studio team will be in touch."); }} style={{ display: "grid", gap: 20 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <Field label="Name" input={<input required style={fieldStyle}/>}/>
              <Field label="Organization" input={<input required style={fieldStyle}/>}/>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <Field label="Work email" input={<input type="email" required style={fieldStyle}/>}/>
              <Field label="Role / title" input={<input style={fieldStyle}/>}/>
            </div>
            <Field label="Inquiry type" input={
              <select style={fieldStyle}>
                {kinds.map(k => <option key={k}>{k}</option>)}
              </select>
            }/>
            <Field label="Tell us about the opportunity" input={<textarea rows={5} style={{...fieldStyle, resize: "vertical", fontFamily: "var(--font-body)"}}/>}/>
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 8 }}>
              <button type="submit" style={{
                background: "#FBB533", color: "#00093E", border: "none",
                padding: "16px 26px", font: "800 13px/1 var(--font-display)", letterSpacing: ".08em", textTransform: "uppercase", cursor: "pointer",
              }}>Submit inquiry →</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

const fieldStyle = {
  width: "100%", padding: "14px 16px",
  border: "1px solid #DDDDDD", background: "#fff",
  font: "400 15px/1.3 var(--font-body)", color: "#00093E", outline: "none",
  borderRadius: 0,
};

function Field({ label, input }) {
  return (
    <label style={{ display: "grid", gap: 8 }}>
      <span style={{ font: "700 11px/1 var(--font-display)", letterSpacing: ".14em", textTransform: "uppercase", color: "#3B4A66" }}>{label}</span>
      {input}
    </label>
  );
}

window.StudioPage = StudioPage;
window.ResearchPage = ResearchPage;
window.PartnerPage = PartnerPage;
window.UniversitiesPage = UniversitiesPage;
window.NewsroomPage = NewsroomPage;
