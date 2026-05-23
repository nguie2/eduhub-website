// Big black stats band
function Stats() {
  return (
    <section className="stats-band">
      <div className="container">
        <div className="stats-grid">
          <StatItem big="120+" label="Institutions running EduHubSA" />
          <StatItem big="280K" label="Learner records managed daily" />
          <StatItem big="14hrs" label="Admin saved per week, per school" />
          <StatItem big="R 0" label="Setup cost — pay only per learner" />
        </div>
      </div>
    </section>
  );
}

function StatItem({big, label}) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setShown(true); }, {threshold: .4});
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <div className="stat" ref={ref}>
      <div className="num">{shown ? <Counter target={big} /> : big.replace(/[0-9]/g, '0')}</div>
      <div className="lbl">{label}</div>
    </div>
  );
}

// counts up the numeric portion of a string like "120+", "280K", "R 0", "14hrs"
function Counter({target}) {
  const match = target.match(/^([^\d]*)(\d+)(.*)$/);
  if (!match) return <>{target}</>;
  const [, pre, numStr, post] = match;
  const final = parseInt(numStr, 10);
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    const start = performance.now();
    const dur = 1400;
    let raf;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(final * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [final]);
  return <>{pre}{val}{post}</>;
}

window.Stats = Stats;
