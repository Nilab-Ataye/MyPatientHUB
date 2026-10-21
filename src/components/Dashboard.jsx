import '../style.css';
import Footer from "./Footer";

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

function Dashboard({ onToggleSidebar, onSignOut }) {
  return (
    <div className="dashboard-page">
      <main className="main">
        <header className="header">
          <div className="header-left">
            <button className="menu-btn" type="button" onClick={onToggleSidebar} aria-label="Toggle navigation sidebar" title="Toggle navigation sidebar">☰</button>
            <div>
              <p className="breadcrumb"><span aria-hidden="true">⌂</span> / Dashboard</p>
              <h3>Dashboard</h3>
            </div>
          </div>
          <div className="header-right">
            <label className="search">
              <span aria-hidden="true">⌕</span>
              <input type="search" placeholder="Type here..." aria-label="Search dashboard" />
            </label>
            <button className="logout" type="button" onClick={onSignOut}><span aria-hidden="true">◉</span><span>Log out</span></button>
            <button className="header-icon" type="button" aria-label="Settings">⚙</button>
            <button className="header-icon" type="button" aria-label="Notifications">♧</button>
          </div>
        </header>

        <section className="content">
          <h1>Welcome To MyPatientHUB!</h1>
          <div className="cards">
            {cards.map((card) => (
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
            <article className="card health-card">
              <h3>Health Index</h3>
              <div className="health-number">70% <span>+3%</span></div>
              <div className="graph" aria-label="Health index trend">
                <div className="grid-line one" />
                <div className="grid-line two" />
                <div className="grid-line three" />
                <div className="health-line" />
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Dashboard;