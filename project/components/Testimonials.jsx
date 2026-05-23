// Testimonials grid
function Testimonials() {
  return (
    <section className="section" id="schools" style={{background: 'var(--bg-2)', borderTop: '1px solid var(--hair)', borderBottom: '1px solid var(--hair)'}}>
      <div className="container">
        <div className="section-head center">
          <span className="section-eyebrow"><span className="dot" /> Loved by principals</span>
          <h2 className="section-title">Principals sleep better.<br/>Bursars throw fewer hands up.</h2>
        </div>

        <div className="t-grid">
          <article className="t-card feat">
            <div className="t-stars">★★★★★</div>
            <p className="t-quote">
              "We replaced four separate systems with EduHubSA in one weekend.
              Our bursar's office runs with two fewer people now — and
              parents actually <em>thank</em> us for the WhatsApp updates."
            </p>
            <div className="t-author">
              <div className="av" style={{background: '#fff'}}>NK</div>
              <div>
                <div className="nm">Dr. Nomvula Khumalo</div>
                <div className="ro">Principal · Rhodes High, Johannesburg</div>
              </div>
            </div>
          </article>

          <article className="t-card">
            <div className="t-stars">★★★★★</div>
            <p className="t-quote">
              "Setting up our entire matric class on EduHubSA took 40 minutes. The auto-timetable saved me a literal week."
            </p>
            <div className="t-author">
              <div className="av" style={{background: 'var(--peach)'}}>JB</div>
              <div>
                <div className="nm">Johan Botha</div>
                <div className="ro">Deputy · Stellenbosch Prep</div>
              </div>
            </div>
          </article>

          <article className="t-card">
            <div className="t-stars">★★★★★</div>
            <p className="t-quote">
              "Fee collection went from 71% to 94% in one term. Parents now pay because they actually understand the invoice."
            </p>
            <div className="t-author">
              <div className="av" style={{background: 'var(--mint)'}}>AS</div>
              <div>
                <div className="nm">Aisha Singh</div>
                <div className="ro">Bursar · Durban Academy</div>
              </div>
            </div>
          </article>

          <article className="t-card">
            <div className="t-stars">★★★★★</div>
            <p className="t-quote">
              "Works offline at our Northern Cape campus where signal drops daily. That alone sold us."
            </p>
            <div className="t-author">
              <div className="av" style={{background: 'var(--lilac)'}}>TM</div>
              <div>
                <div className="nm">Tshepo Mahlangu</div>
                <div className="ro">IT Lead · Khanya Institute</div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

window.Testimonials = Testimonials;
