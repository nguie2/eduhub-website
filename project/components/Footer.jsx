// Site footer
function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="foot-grid">
          <div>
            <a href="#" className="brand" style={{color:'var(--bg)'}}>
              <span className="brand-mark" style={{background:'var(--lime)', color:'var(--ink)'}}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 10l9-6 9 6-9 6-9-6z"/>
                  <path d="M7 12.5V17c2.5 2 7.5 2 10 0v-4.5"/>
                </svg>
              </span>
              eduhubsa
            </a>
            <p className="foot-blurb">
              A calm, low-cost institution management system built in South Africa, for South African schools and universities. POPIA-compliant. Loadshedding-friendly.
            </p>
            <div style={{display:'flex', gap: 10}}>
              {['🐦','💼','📷','▶️'].map((s, i) => (
                <a key={i} href="#" style={{
                  width: 38, height: 38, borderRadius: '50%',
                  border:'1px solid rgba(250,250,242,.2)',
                  display:'grid', placeItems:'center',
                  textDecoration:'none', fontSize: 14,
                  transition:'all .2s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--lime)'; e.currentTarget.style.borderColor = 'var(--lime)';}}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(250,250,242,.2)';}}>
                  {s}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h5>Product</h5>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#">Integrations</a></li>
              <li><a href="#">Changelog</a></li>
              <li><a href="#">Roadmap</a></li>
            </ul>
          </div>
          <div>
            <h5>Resources</h5>
            <ul>
              <li><a href="#">Case studies</a></li>
              <li><a href="#">Help centre</a></li>
              <li><a href="#">Migration guide</a></li>
              <li><a href="#">API docs</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div>
            <h5>Company</h5>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">POPIA</a></li>
              <li><a href="#">Status</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <div>© 2026 EduHubSA (Pty) Ltd. Made in Johannesburg.</div>
          <div className="links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
