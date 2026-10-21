import '../style.css';

const cards = [
  {
    title: 'Promotion by Clinics',
    chart: 'clinic-chart',
    items: [['healthcare we provide', '16%'], ['clinic expenses', '4%'], ['satisfied patients', '30%'], ['successful procedures', '50%'], ['Klinik Mediviron', '2%']],
  },
  {
    title: 'Promotion by Pharmacies',
    chart: 'pharmacy-chart',
    items: [['pharmacy', '15%'], ['medicine available', '12%'], ['pharmacy quality', '5%'], ['various medicines', '5%'], ['Healthy medicine', '30%']],
  },
  {
    title: 'Smart Market Usage by app',
    chart: 'market-chart',
    items: [['Food Panda', '25%'], ['Grab Food', '3%'], ['Other Apps', '10%']],
  },
];

function Dashboard({ globalSearch = "" }) {
  const query = globalSearch.trim().toLowerCase();
  const terms = query.split(/\s+/).filter(Boolean);
  const visibleCards = cards
    .map((card) => ({
      ...card,
      items: card.items.filter(([label, value]) =>
        terms.every((term) =>
          `${label} ${value}`.toLowerCase().includes(term)
        )
      ),
    }))
    .filter(
      (card) =>
        !query ||
        terms.every((term) => card.title.toLowerCase().includes(term)) ||
        card.items.length > 0
    );
  const showHealthIndex = terms.every((term) =>
    "health index 70% 3%".includes(term)
  );

  return (
    <div className="dashboard-page">
      <main className="main">
        <section className="content">
          <h1>Welcome To MyPatientHUB!</h1>
          <div className="cards">
            {visibleCards.map((card) => (
              <article className="card" key={card.title}>
                <h3>{card.title}</h3>
                <div className="card-content">
                  <div className={`donut ${card.chart}`} aria-hidden="true" />
                  <div className="card-list">
                    {card.items.map(([label, value]) => <div key={label}><span>{label}</span><b>{value}</b></div>)}
                  </div>
                </div>
                {card.chart !== 'market-chart' && <button className="details" type="button">MORE DETAILS</button>}
              </article>
            ))}
            {showHealthIndex && <article className="card health-card">
              <h3>Health Index</h3>
              <div className="health-number">70% <span>+3%</span></div>
              <div className="graph" aria-label="Health index trend">
                <div className="grid-line one" />
                <div className="grid-line two" />
                <div className="grid-line three" />
                <div className="health-line" />
              </div>
            </article>}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;