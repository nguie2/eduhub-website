// Big dashboard preview section
function Dashboard() {
  return (
    <section className="section" id="dashboard" style={{paddingTop: 60}}>
      <div className="container">
        <div className="section-head center">
          <span className="section-eyebrow"><span className="dot" /> The Dashboard</span>
          <h2 className="section-title">Your whole institution<br/>on one screen.</h2>
          <p className="section-lede">
            Principals, deans, and admin teams get a single dashboard with real-time KPIs.
            No more emailing department heads for numbers — just glance.
          </p>
        </div>

        <DashPreview />
      </div>
    </section>
  );
}

function DashPreview() {
  return (
    <div className="dash-wrap fade-up">
      <div className="dash-top">
        <span className="dot" style={{background:'#FF6B6B'}}/>
        <span className="dot" style={{background:'#FFD86E'}}/>
        <span className="dot" style={{background:'#8FE388'}}/>
        <span className="url">🔒 app.eduhubsa.co.za/principal</span>
      </div>
      <div className="dash-body">
        <aside className="dash-side">
          <div className="side-brand">
            <span className="mk">E</span>
            EduHubSA
          </div>
          <div className="side-section">Overview</div>
          <SideItem icon="home" label="Dashboard" active />
          <SideItem icon="bar" label="Reports" />
          <div className="side-section">Manage</div>
          <SideItem icon="user" label="Students" badge="12,481" />
          <SideItem icon="grad" label="Staff" />
          <SideItem icon="cal" label="Timetables" />
          <SideItem icon="check" label="Attendance" />
          <SideItem icon="card" label="Fees & Finance" />
          <div className="side-section">Comms</div>
          <SideItem icon="bell" label="Announcements" />
          <SideItem icon="msg" label="Parent Portal" />
        </aside>

        <main className="dash-main">
          <div className="dash-title-row">
            <h2 className="dash-h">Good morning, Principal Khumalo <small>· Term 3, Week 6</small></h2>
            <span className="dash-pill">● All systems green</span>
          </div>

          <div className="kpi-row">
            <Kpi label="Active learners" value="12,481" delta="+128 this term" />
            <Kpi label="Attendance today" value="94.2%" delta="+1.8% vs avg" lime />
            <Kpi label="Fees collected" value="R 4.2M" delta="92% of target" />
            <Kpi label="Open incidents" value="3" delta="−2 since yesterday" />
          </div>

          <div className="dash-cards-row">
            <div className="dash-panel">
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: 4}}>
                <h4>Attendance · last 14 days</h4>
                <span style={{fontSize: 11, color:'var(--muted)', fontWeight:700, textTransform:'uppercase', letterSpacing:'.1em'}}>Live</span>
              </div>
              <DashChart />
            </div>

            <div className="dash-panel">
              <h4>Recent activity</h4>
              <Activity who="Mr. Botha" what="marked Maths 10C attendance" when="2m" ico="📋" />
              <Activity who="System" what="sent 42 fee reminders" when="14m" ico="💬" />
              <Activity who="Mrs. Nkosi" what="published Grade 12 marks" when="1h" ico="📊" />
              <Activity who="Admissions" what="received 3 new applications" when="2h" ico="📝" />
              <Activity who="System" what="generated Term 3 timetable" when="3h" ico="🗓" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function SideItem({icon, label, active, badge}) {
  const icons = {
    home: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>,
    bar: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>,
    user: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="7" r="4"/><path d="M5 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2"/></svg>,
    grad: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/></svg>,
    cal: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
    check: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
    card: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>,
    bell: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>,
    msg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z"/></svg>,
  };
  return (
    <div className={`side-item ${active ? 'active' : ''}`}>
      <span className="ico">{icons[icon]}</span>
      <span style={{flex: 1}}>{label}</span>
      {badge && <span style={{fontSize: 10, fontWeight: 700, opacity: .7}}>{badge}</span>}
    </div>
  );
}

function Kpi({label, value, delta, lime}) {
  return (
    <div className={`kpi ${lime ? 'lime' : ''}`}>
      <div className="label">{label}</div>
      <div className="value">{value}</div>
      <div className="delta">↗ {delta}</div>
      <svg className="spark" width="50" height="20" viewBox="0 0 50 20">
        <polyline points="0,15 8,12 16,14 24,8 32,10 40,5 50,7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

function Activity({who, what, when, ico}) {
  return (
    <div className="activity-row">
      <span className="ic-circle">{ico}</span>
      <span><span className="who">{who}</span> {what}</span>
      <span className="when">{when} ago</span>
    </div>
  );
}

function DashChart() {
  const days = 14;
  const data = React.useMemo(() => Array.from({length: days}, (_, i) => 78 + Math.round(Math.sin(i * 0.7) * 8) + Math.round(Math.random() * 6)), []);
  const max = Math.max(...data);
  const min = Math.min(...data);
  const w = 600, h = 140, pad = 12;
  const xs = (i) => pad + (i / (days - 1)) * (w - pad * 2);
  const ys = (v) => pad + (1 - (v - (min - 5)) / ((max + 5) - (min - 5))) * (h - pad * 2);
  const path = data.map((v, i) => `${i === 0 ? 'M' : 'L'} ${xs(i)} ${ys(v)}`).join(' ');
  const area = path + ` L ${xs(days-1)} ${h - pad} L ${xs(0)} ${h - pad} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="chart" preserveAspectRatio="none" style={{width:'100%'}}>
      <path d={area} fill="rgba(200,242,58,0.4)" />
      <path d={path} fill="none" stroke="var(--ink)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {data.map((v, i) => (
        <circle key={i} cx={xs(i)} cy={ys(v)} r={i === days-1 ? 5 : 3} fill={i === days-1 ? 'var(--lime)' : 'var(--ink)'} stroke="var(--ink)" strokeWidth="1.5" />
      ))}
    </svg>
  );
}

window.Dashboard = Dashboard;
