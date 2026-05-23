// Top navigation
function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav-wrap ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav">
        <a href="#" className="brand">
          <span className="brand-mark">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 10l9-6 9 6-9 6-9-6z" />
              <path d="M7 12.5V17c2.5 2 7.5 2 10 0v-4.5" />
            </svg>
          </span>
          eduhub<span style={{color: 'var(--lime-deep)'}}>sa</span>
        </a>
        <nav className="nav-links">
          <a className="nav-link" href="#features">Features</a>
          <a className="nav-link" href="#schools">Case Studies</a>
          <a className="nav-link" href="#blog">Blog</a>
          <a className="nav-link" href="#pricing">Pricing</a>
          <a className="nav-link" href="#contact">Need help?</a>
        </nav>
        <a className="btn" href="#cta">
          Start free trial
        </a>
      </div>
    </header>
  );
}

window.Nav = Nav;
