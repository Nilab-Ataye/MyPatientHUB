function FindClinic() {
    const clinics = [
    { name: 'CityCare Medical', distance: '1.2 mi', type: 'Primary Care' },
    { name: 'Northside Wellness', distance: '2.4 mi', type: 'Family Medicine' },
    { name: 'Green Valley Clinic', distance: '3.1 mi', type: 'Urgent Care' },
  ];

  return (
    <section className="find-clinic">
      <div className="section-header">
        <div>
          <p className="eyebrow">Healthcare near you</p>
          <h1>Find Clinic</h1>
        </div>
        <button type="button" className="section-btn">Filter</button>
      </div>

      <div className="clinic-container">
        <div className="map-section">
          <div className="map-grid" aria-hidden="true">
            <span className="marker marker-one">1</span>
            <span className="marker marker-two">2</span>
            <span className="marker marker-three">3</span>
          </div>
        </div>

        <div className="clinic-info">
          <h3>Nearby clinics</h3>
          <ul className="clinic-list">
            {clinics.map((clinic) => (
              <li key={clinic.name} className="clinic-card">
                <div>
                  <strong>{clinic.name}</strong>
                  <p>{clinic.type}</p>
                </div>
                <span>{clinic.distance}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default FindClinic;