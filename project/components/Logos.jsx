// Trusted-by logos marquee
function Logos() {
  const items = [
    'Cape High', 'Stellenbosch Prep', 'UCT Faculty', 'Pretoria College',
    'Durban Academy', 'Khanya Institute', 'Northcliff High', 'Gauteng University',
    'Bloemfontein College', 'Western Cape Tech',
  ];
  const Item = ({name, i}) => (
    <div key={i}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 10l9-6 9 6-9 6-9-6z"/>
        <path d="M7 12.5V17c2.5 2 7.5 2 10 0v-4.5"/>
      </svg>
      {name}
    </div>
  );
  return (
    <section className="logos">
      <div className="container logos-inner">
        <div className="logos-label">Loved by schools & unis →</div>
        <div className="logos-track">
          <div className="logos-marquee">
            {[...items, ...items].map((n, i) => <Item key={i} name={n} i={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

window.Logos = Logos;
