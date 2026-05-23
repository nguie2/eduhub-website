// Final CTA band
function CTA() {
  return (
    <section id="cta" style={{padding: '0 28px'}}>
      <div className="cta-band">
        <span className="section-eyebrow" style={{background:'#fff'}}><span className="dot" /> 30-day trial · No credit card</span>
        <h2 style={{marginTop: 16}}>Ready to ditch the<br/>spreadsheet shuffle?</h2>
        <p>Set up your institution in under an hour. Import your roster, invite teachers, and run your first attendance roll-call before lunch.</p>
        <div style={{display:'flex', gap: 14, flexWrap:'wrap'}}>
          <a className="btn btn-dark" href="#">
            Start free trial
            <span className="btn-arrow" style={{background:'var(--lime)', color:'var(--ink)'}}><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
          </a>
          <a className="btn" style={{background:'#fff'}} href="#">Book a 20-min demo</a>
        </div>

        {/* Decorative doodle */}
        <svg className="deco" viewBox="0 0 320 320" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 40 200 C 80 140, 160 130, 220 180" />
          <path d="M 220 180 l -10 -4 m 10 4 l -4 -10" />
          <circle cx="60" cy="100" r="30" />
          <path d="M 240 70 L 260 90 L 240 110 L 220 90 Z" />
          <path d="M 280 240 q 10 -14 20 0 t 20 0" />
          <path d="M 100 280 l 8 -16 l 8 16 l 16 8 l -16 8 l -8 16 l -8 -16 l -16 -8 z" fill="var(--ink)" />
        </svg>
      </div>
    </section>
  );
}

window.CTA = CTA;
