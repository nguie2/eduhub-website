// Pricing section — 3 tiers
function Pricing() {
  const [annual, setAnnual] = React.useState(true);
  const m = annual ? 0.8 : 1;
  const fmt = (n) => `R${Math.round(n)}`;
  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="section-head center">
          <span className="section-eyebrow"><span className="dot" /> Pricing</span>
          <h2 className="section-title">Low cost. Per learner.<br/>No hidden modules.</h2>
          <p className="section-lede">
            One price, every feature. No "premium support" upsell, no surprise add-ons.
            Cancel any time — your data is yours, exportable in one click.
          </p>

          <div style={{display:'inline-flex', marginTop: 24, background:'var(--bg-2)', border:'1px solid var(--hair)', padding: 4, borderRadius: 999}}>
            <button onClick={() => setAnnual(false)} className="pricing-toggle" style={toggleStyle(!annual)}>Monthly</button>
            <button onClick={() => setAnnual(true)} className="pricing-toggle" style={toggleStyle(annual)}>
              Annually <span style={{fontSize: 11, marginLeft: 4, color: annual ? 'var(--lime-deep)' : 'var(--ink-2)'}}>−20%</span>
            </button>
          </div>
        </div>

        <div className="pricing-grid">
          <Plan
            name="Starter"
            blurb="For small schools getting organized"
            price={fmt(12 * m)}
            unit="/learner / month"
            feats={[
              "Up to 500 learners",
              "Student records & attendance",
              "Parent SMS notifications",
              "Basic timetable",
              "Email support",
            ]}
            cta="Start free"
          />
          <Plan
            name="School"
            blurb="The full system for high schools"
            price={fmt(22 * m)}
            unit="/learner / month"
            featured
            tag="Most popular"
            feats={[
              "Unlimited learners",
              "Fees, finance & PayShap",
              "WhatsApp parent portal",
              "Auto-timetable engine",
              "Offline-first sync",
              "Priority support — 1hr SLA",
            ]}
            cta="Start 30-day trial"
          />
          <Plan
            name="University"
            blurb="For tertiary institutions"
            price="Custom"
            unit=" — talk to us"
            feats={[
              "Faculty & department modules",
              "LMS integrations (Moodle, Canvas)",
              "SAQA/NSFAS reporting",
              "Single sign-on (SAML/OIDC)",
              "Dedicated success manager",
              "On-site training & migration",
            ]}
            cta="Book a demo"
          />
        </div>
      </div>
    </section>
  );
}

function toggleStyle(active) {
  return {
    border: 'none',
    background: active ? '#fff' : 'transparent',
    color: 'var(--ink)',
    padding: '10px 20px',
    borderRadius: 999,
    fontSize: 14,
    fontWeight: 700,
    boxShadow: active ? '0 1px 4px rgba(0,0,0,.08), inset 0 0 0 1px var(--ink)' : 'none',
    transition: 'all .2s ease',
  };
}

function Plan({name, blurb, price, unit, feats, featured, tag, cta}) {
  return (
    <article className={`plan ${featured ? 'featured' : ''}`}>
      {tag && <span className="plan-tag">{tag}</span>}
      <h3>{name}</h3>
      <p className="blurb">{blurb}</p>
      <div className="price">{price}<span className="unit">{unit}</span></div>
      <ul className="feat-list">
        {feats.map((f, i) => <li key={i}>{f}</li>)}
      </ul>
      <a className={`btn ${featured ? '' : 'btn-dark'}`} style={featured ? {} : {background:'var(--ink)', color:'var(--bg)'}} href="#">
        {cta}
        <span className="btn-arrow"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
      </a>
    </article>
  );
}

window.Pricing = Pricing;
