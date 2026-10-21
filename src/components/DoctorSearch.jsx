import '../../../Find-Doctor.css';

function DoctorSearch() {
  const specialties = [
    'Anesthesiology',
    'Dermatology',
    'Emergency Medicine',
    'Neurology',
    'Consultation',
    'Ophthalmology',
  ];

  return (
    <div className="doctor-page">
      <header className="doctor-header">
        <div className="breadcrumb">
          <span>🏠</span>
          <span>/</span>
          <span>Searchdoctor</span>
        </div>

        <h2>Searchdoctor</h2>

        <div className="top-search">
          <input type="text" placeholder="Type here..." />
        </div>

        <div className="header-icons">
          <button type="button">Login 👤</button>
          <span>☰</span>
          <span>⚙️</span>
        </div>

        <div className="doctor-intro">
          <h1>Find a Doctor</h1>
          <p>Search Doctors and schedule an appointment</p>
        </div>

        <div className="search-box">
          <input type="text" placeholder="Search a doctor by name, specialty" />
          <input type="text" placeholder="Zip Code or Neighborhood" />
        </div>
      </header>

      <section className="search-buttons">
        <button type="button">CURRENT</button>
        <button type="button">SEARCH</button>
      </section>

      <section className="special-services">
        <h2>Special Services</h2>

        <div className="service-card">
          <div className="service-icon">❤️</div>
          <div className="service-content">
            <h3>Primary card and internal MD</h3>
            <p>Our doctors partner with you to help you reach your wellness goals.</p>
          </div>
          <span className="arrow">⌄</span>
        </div>

        <div className="service-card">
          <div className="service-icon">👨‍⚕️</div>
          <div className="service-content">
            <h3>Emergency Care</h3>
            <p>We provide emergency care for adults and children.</p>
          </div>
          <span className="arrow">⌄</span>
        </div>

        <div className="service-card">
          <div className="service-icon">🩺</div>
          <div className="service-content">
            <h3>Imaging Services</h3>
            <p>From X-ray to MRI, we offer comprehensive imaging services.</p>
          </div>
          <span className="arrow">⌄</span>
        </div>

        <div className="service-card">
          <div className="service-icon">➕</div>
          <div className="service-content">
            <h3>Urgent Care</h3>
            <p>We offer urgent care for non-emergency health needs.</p>
          </div>
          <span className="arrow">⌄</span>
        </div>
      </section>

      <section className="specialty-section">
        <h2>Find Doctors By Specialty</h2>
        <p>Select a Specialty to View all Doctors and schedule an Appointment</p>

        <div className="specialty-list">
          {specialties.map((specialty) => (
            <div key={specialty} className="specialty-item">
              <span>{specialty}</span>
              <span>⌄</span>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>2026, made with by MYPIHUB</p>
        <p>for better web</p>
        <div className="footer-links">
          <a href="#">MYPIHUB</a>
          <a href="#">About us</a>
          <a href="#">Blog</a>
        </div>
      </footer>
    </div>
  );
}

export default DoctorSearch;
