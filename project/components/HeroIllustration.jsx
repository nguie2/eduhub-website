// Before/after hero illustration — paper roster (before) vs dashboard stack (after)
function HeroIllustration() {
  return (
    <div className="illo">
      {/* Labels */}
      <div className="label before">
        Before
        <span className="swoosh" />
      </div>
      <div className="label after">
        After
        <span className="swoosh" />
      </div>

      {/* BEFORE — chaotic paper roster */}
      <div className="before-card">
        <h4>Class roster<br/>— Term 3</h4>
        <div className="scribble s1" />
        <div className="scribble s2" />
        <div className="scribble s3" />
        <div className="scribble s1" />
        <div className="scribble s2" />
        <div className="chaos">
          <em>fees?</em><br/>
          missing 4 ✗<br/>
          call parents!
        </div>
        <div className="stamp">
          <span>📋</span>
          <span style={{fontSize: 18, transform: 'rotate(-8deg)'}}>3:42pm</span>
        </div>
      </div>

      {/* AFTER — dashboard window with stacked modules */}
      <div className="after-stack">
        <div className="browser">
          <div className="browser-bar">
            <span className="dot r" /><span className="dot y" /><span className="dot g" />
            <span className="url">app.eduhubsa.co.za/dashboard</span>
          </div>
          <div className="browser-body">
            {/* Lime header card */}
            <div className="dash-card lime">
              <span>RHODES HIGH · TERM 3</span>
              <div className="pills">
                <span>STUDENTS</span><span>FEES</span><span>CLASSES</span><span>STAFF</span>
              </div>
            </div>
            {/* Image-style stats card */}
            <div className="dash-card image">
              <svg width="100%" height="100%" viewBox="0 0 200 60" preserveAspectRatio="none" style={{position:'absolute', inset:0}}>
                <polyline points="0,45 25,38 50,42 75,28 100,32 125,18 150,22 175,10 200,14" fill="none" stroke="#0E0E0C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="0,45 25,38 50,42 75,28 100,32 125,18 150,22 175,10 200,14 200,60 0,60" fill="rgba(200,242,58,0.6)" stroke="none"/>
              </svg>
              <span style={{position:'relative', fontWeight:800, fontSize:11, letterSpacing:'.1em', background:'#fff', padding:'4px 8px', border:'1.2px solid #0E0E0C', borderRadius:4}}>+18% ATTENDANCE</span>
            </div>
            {/* Mint promo card with tag */}
            <div className="dash-card green">
              <h5>Fee reminder ready</h5>
              <p>42 parents will receive a friendly SMS at 4pm — auto-generated.</p>
              <span className="tag">SEND →</span>
            </div>
            {/* Lilac student cards */}
            <div className="dash-card lilac">
              <div className="header">★ TOP PERFORMERS — GRADE 11 ★</div>
              <div className="row">
                <div>
                  <div className="thumb">👩🏽‍🎓</div>
                  <div className="label">A+ 92%</div>
                </div>
                <div>
                  <div className="thumb">🧑🏾‍🎓</div>
                  <div className="label">A 88%</div>
                </div>
                <div>
                  <div className="thumb">👨🏻‍🎓</div>
                  <div className="label">A 86%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Doodle SVG overlay — arrows + sparkles */}
      <div className="doodles">
        <svg viewBox="0 0 600 600" preserveAspectRatio="none">
          {/* curving arrow from before -> after */}
          <path className="doodle-path dash-svg" d="M 230 200 C 280 140, 340 130, 380 170" />
          <path className="doodle-path dash-svg" d="M 380 170 l -12 -4 m 12 4 l -4 -12" strokeWidth="2.4" />
          {/* small arrow under before */}
          <path className="doodle-path dash-svg" d="M 130 470 C 160 510, 220 510, 260 480" />
          <path className="doodle-path dash-svg" d="M 260 480 l -10 1 m 10 -1 l 0 -10" strokeWidth="2.4" />
          {/* circle around something on after */}
          <path className="doodle-path dash-svg" d="M 460 290 C 510 280, 540 320, 520 360 C 500 400, 440 390, 430 350 C 425 320, 430 296, 460 290 Z" />
          {/* doodle envelope */}
          <g transform="translate(290 320) rotate(-12)">
            <rect className="doodle-path dash-svg" x="0" y="0" width="44" height="32" rx="3" />
            <path className="doodle-path dash-svg" d="M 0 0 L 22 18 L 44 0" />
          </g>
          {/* triangle */}
          <path className="doodle-path dash-svg" d="M 180 540 L 200 510 L 220 540 Z" />
          {/* squiggle */}
          <path className="doodle-path dash-svg" d="M 350 540 q 8 -10 16 0 t 16 0 t 16 0" />
        </svg>
      </div>

      {/* Sparkles */}
      <div className="sparkle s1">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" /></svg>
      </div>
      <div className="sparkle s2">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" /></svg>
      </div>
      <div className="sparkle s3">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" /></svg>
      </div>

      {/* Floating tiny icons */}
      <div className="floating-icon ic-1" title="image">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/></svg>
      </div>
      <div className="floating-icon ic-2" title="check">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <div className="floating-icon ic-3" title="bell">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
      </div>
    </div>
  );
}

window.HeroIllustration = HeroIllustration;
