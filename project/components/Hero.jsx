// Hero section — matches reference layout
function Hero() {
  const [domain, setDomain] = React.useState('');
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-left">
          <div className="badge fade-up in">
            <span className="badge-logo">E</span>
            <span className="stars">★★★★★</span>
            <span>Trusted by 120+ institutions across SA</span>
          </div>

          <h1 className="h1">
            <span className="word-reveal"><span style={{animationDelay: '.05s'}}>Run</span></span>{' '}
            <span className="word-reveal"><span style={{animationDelay: '.12s'}}>your</span></span>{' '}
            <span className="word-reveal"><span style={{animationDelay: '.20s'}}>institution,</span></span>
            <br />
            <span className="word-reveal"><span style={{animationDelay: '.30s'}}>not</span></span>{' '}
            <span className="word-reveal"><span style={{animationDelay: '.40s'}}>the</span></span>{' '}
            <span className="accent">
              <span className="word-reveal"><span style={{animationDelay: '.50s'}}>chaos.</span></span>
              <span className="underline" />
            </span>
          </h1>

          <p className="lede fade-up d3 in">
            EduHubSA replaces six clunky tools with one calm system —
            admissions, fees, attendance, timetables and parent comms
            — built for South African universities & high schools.
          </p>

          <form className="cta-row fade-up d4 in" onSubmit={(e) => { e.preventDefault(); alert('Thanks! We\'ll be in touch at ' + (domain || 'your-school') + '.edu.za'); }}>
            <input
              type="text"
              placeholder="your-school"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
            />
            <span className="suffix">.edu.za</span>
            <button className="btn" type="submit">
              Get Started Free
              <span className="btn-arrow">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </button>
          </form>

          <p className="cta-sub fade-up d5 in">
            Already have an account? <a href="#">Sign in here.</a>
          </p>
        </div>

        <div className="hero-right fade-up d2 in">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
