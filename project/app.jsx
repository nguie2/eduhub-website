// Main app entry — composes all sections and adds scroll-reveal observer
function App() {
  // Set up scroll-reveal observer for .fade-up elements outside the hero
  React.useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px 0px 0px' });

    const revealVisible = () => {
      document.querySelectorAll('.fade-up:not(.in)').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
          el.classList.add('in');
        }
      });
    };

    // Auto-decorate: all section-eyebrow, .section-title, .section-lede, .feature, .t-card, .plan, .kpi, .dash-panel get fade-up
    const selectors = [
      '.section-eyebrow', '.section-title', '.section-lede',
      '.feature', '.t-card', '.plan', '.kpi', '.dash-panel',
      '.dash-wrap', '.stat', '.cta-band', '.foot-grid',
    ];
    document.querySelectorAll(selectors.join(',')).forEach((el, i) => {
      if (!el.classList.contains('fade-up')) el.classList.add('fade-up');
      // tiny stagger inside grids
      const idx = [...(el.parentElement?.children || [])].indexOf(el);
      if (idx >= 0 && idx <= 4) el.classList.add(`d${idx}`);
      io.observe(el);
    });

    revealVisible();
    window.addEventListener('scroll', revealVisible, { passive: true });
    window.addEventListener('resize', revealVisible, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener('scroll', revealVisible);
      window.removeEventListener('resize', revealVisible);
    };
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Logos />
        <Features />
        <Dashboard />
        <Stats />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
