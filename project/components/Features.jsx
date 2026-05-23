// Features section - 6 cards with mini widgets
function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow"><span className="dot" /> What you get</span>
          <h2 className="section-title">One platform, every<br/>messy spreadsheet retired.</h2>
          <p className="section-lede">
            From admissions on day one to graduation. EduHubSA pulls students, fees, timetables,
            attendance and parent comms into one calm dashboard — and yes, it works offline at rural sites too.
          </p>
        </div>

        <div className="features-grid">
          {/* big lime card */}
          <article className="feature big bg-lime">
            <span className="num">01 — STUDENT INFORMATION</span>
            <h3>Every learner's file, one click away.</h3>
            <p>Marks, attendance, fees, medical notes, parent contacts — searchable in 200ms across 12,000 students. Bulk import from your old SIS.</p>
            <div className="visual">
              <div className="roster">
                <div className="row">
                  <div className="av a1">TM</div>
                  <div>
                    <div className="name">Thandi Mokoena</div>
                    <div style={{fontSize: 11, color: 'var(--muted)'}}>Grade 11A · #ED-2024-0481</div>
                  </div>
                  <div className="pill paid">Paid</div>
                </div>
                <div className="row">
                  <div className="av a2">LB</div>
                  <div>
                    <div className="name">Liam Bekker</div>
                    <div style={{fontSize: 11, color: 'var(--muted)'}}>Grade 10C · #ED-2024-0612</div>
                  </div>
                  <div className="pill due">Due</div>
                </div>
                <div className="row">
                  <div className="av a3">AN</div>
                  <div>
                    <div className="name">Aisha Naidoo</div>
                    <div style={{fontSize: 11, color: 'var(--muted)'}}>Grade 12B · #ED-2024-0203</div>
                  </div>
                  <div className="pill paid">Paid</div>
                </div>
                <div className="row">
                  <div className="av a4">SD</div>
                  <div>
                    <div className="name">Sipho Dlamini</div>
                    <div style={{fontSize: 11, color: 'var(--muted)'}}>Grade 9A · #ED-2024-0907</div>
                  </div>
                  <div className="pill late">Late</div>
                </div>
              </div>
            </div>
          </article>

          {/* attendance */}
          <article className="feature bg-mint">
            <span className="num">02 — ATTENDANCE</span>
            <h3>Roll-call in under 30 seconds.</h3>
            <p>Teachers tap once. Parents are notified the moment a child is marked absent.</p>
            <div className="visual">
              <AnimatedBars />
            </div>
          </article>

          {/* timetable */}
          <article className="feature">
            <span className="num">03 — TIMETABLES</span>
            <h3>Auto-built timetables that actually work.</h3>
            <p>The constraint engine resolves room clashes, teacher loads, and matric exam blocks for you.</p>
            <div className="visual">
              <div className="mini-cal">
                <div className="mc-head"><span>Week 6 · Aug</span><span style={{color: 'var(--lime-deep)'}}>● Term 3</span></div>
                <div className="mc-grid">
                  {['M','T','W','T','F','S','S'].map((d, i) => <div key={`d${i}`} className="day" style={{color: 'var(--muted)'}}>{d}</div>)}
                  {Array.from({length: 21}, (_, i) => {
                    const cls = i === 9 ? 'day active' : ([3,11,16].includes(i) ? 'day event' : 'day');
                    return <div key={i} className={cls}>{i + 1}</div>;
                  })}
                </div>
              </div>
            </div>
          </article>

          {/* fees */}
          <article className="feature bg-cream">
            <span className="num">04 — FEES & FINANCE</span>
            <h3>Collect fees without the awkward phone calls.</h3>
            <p>Automated reminders via WhatsApp & SMS in 4 official languages. PayShap & EFT supported.</p>
            <div className="visual">
              <div style={{display:'flex', gap:8, flexWrap:'wrap'}}>
                <div style={{padding:'10px 14px', background:'#fff', border:'1.5px solid var(--ink)', borderRadius:10, fontSize:12, fontWeight:700, boxShadow:'2px 2px 0 var(--ink)'}}>💬 WhatsApp</div>
                <div style={{padding:'10px 14px', background:'#fff', border:'1.5px solid var(--ink)', borderRadius:10, fontSize:12, fontWeight:700, boxShadow:'2px 2px 0 var(--ink)'}}>📲 SMS</div>
                <div style={{padding:'10px 14px', background:'var(--lime)', border:'1.5px solid var(--ink)', borderRadius:10, fontSize:12, fontWeight:700, boxShadow:'2px 2px 0 var(--ink)'}}>⚡ PayShap</div>
                <div style={{padding:'10px 14px', background:'#fff', border:'1.5px solid var(--ink)', borderRadius:10, fontSize:12, fontWeight:700, boxShadow:'2px 2px 0 var(--ink)'}}>🏦 EFT</div>
              </div>
            </div>
          </article>

          {/* parent portal */}
          <article className="feature bg-lilac">
            <span className="num">05 — PARENT PORTAL</span>
            <h3>Parents stop asking. They just know.</h3>
            <p>Live marks, attendance and announcements — on any phone, in their language.</p>
            <div className="visual">
              <div style={{background:'#fff', border:'1.5px solid var(--ink)', borderRadius:14, padding:14, boxShadow:'3px 3px 0 var(--ink)', maxWidth: 220}}>
                <div style={{fontSize:11, color:'var(--muted)', fontWeight:700, textTransform:'uppercase', letterSpacing:'.1em'}}>Today · 14:20</div>
                <div style={{fontSize:13, marginTop:6, fontWeight:600, lineHeight:1.4}}>Thandi got <span style={{background:'var(--lime)', padding:'1px 6px', borderRadius:3}}>82%</span> in Maths Paper 2 🎉</div>
              </div>
            </div>
          </article>

          {/* big feature: offline */}
          <article className="feature big">
            <span className="num">06 — WORKS EVERYWHERE</span>
            <h3>Built for South Africa. Loadshedding-ready.</h3>
            <p>Full offline mode for rural campuses, POPIA-compliant data hosted in JHB & CPT, and a 4MB mobile app that works on a feature phone if needed.</p>
            <div className="visual" style={{display:'flex', alignItems:'center', gap: 24}}>
              <Stat label="Uptime" value="99.98%" />
              <div style={{width:1, height: 56, background: 'var(--hair)'}}/>
              <Stat label="Avg load" value="180ms" />
              <div style={{width:1, height: 56, background: 'var(--hair)'}}/>
              <Stat label="Offline sync" value="Auto" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function Stat({label, value}) {
  return (
    <div>
      <div style={{fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--muted)'}}>{label}</div>
      <div style={{fontSize: 28, fontWeight: 800, letterSpacing: '-.02em', marginTop: 2}}>{value}</div>
    </div>
  );
}

function AnimatedBars() {
  const [vals, setVals] = React.useState([40, 70, 55, 88, 65, 92, 78]);
  React.useEffect(() => {
    const id = setInterval(() => {
      setVals(v => v.map(() => 30 + Math.round(Math.random() * 65)));
    }, 2400);
    return () => clearInterval(id);
  }, []);
  const labels = ['M','T','W','T','F','S','S'];
  const colorOf = (i) => i === 5 ? 'lime' : (i % 3 === 0 ? 'mint' : 'grass');
  return (
    <div>
      <div className="bars">
        {vals.map((v, i) => (
          <div key={i} className={`bar ${colorOf(i)}`} style={{height: `${v}%`}} />
        ))}
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', padding: '6px 16px 0', fontSize: 10, fontWeight: 600, color: 'var(--muted)'}}>
        {labels.map((l, i) => <span key={i}>{l}</span>)}
      </div>
    </div>
  );
}

window.Features = Features;
