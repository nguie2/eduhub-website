// Top navigation
function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav-wrap ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav">
        <a href="index.html" className="brand">
          <span className="brand-mark">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 10l9-6 9 6-9 6-9-6z" />
              <path d="M7 12.5V17c2.5 2 7.5 2 10 0v-4.5" />
            </svg>
          </span>
          eduhub<span style={{color: 'var(--lime-deep)'}}>sa</span>
        </a>
        <nav className={`nav-links${menuOpen ? ' open' : ''}`}>
          <a className="nav-link" href="index.html#features">Features</a>
          <a className="nav-link" href="case-studies.html">Case Studies</a>
          <a className="nav-link" href="blog.html">Blog</a>
          <a className="nav-link" href="pricing.html">Pricing</a>
          <a className="nav-link" href="contact.html">Need help?</a>
          <a className="btn nav-cta-mobile" href="contact.html">Start free trial</a>
        </nav>
        <a className="btn nav-cta" href="contact.html">Start free trial</a>
        <button className="nav-burger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
          {menuOpen
            ? <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            : <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          }
        </button>
      </div>
    </header>
  );
}

window.Nav = Nav;
