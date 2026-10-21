function DashboardCards() {
  return (
    <div className="cards">

      {/* Card 1 */}
      <div className="card">
        <h3>Promotion by Clinics</h3>

        <div className="card-content">
          <div className="donut clinic-chart"></div>

          <div className="card-list">
            <div>
              <span>healthcare we provide</span>
              <b>16%</b>
            </div>

            <div>
              <span>clinic expenses</span>
              <b>4%</b>
            </div>

            <div>
              <span>satisfied patients</span>
              <b>30%</b>
            </div>

            <div>
              <span>successful procedures</span>
              <b>50%</b>
            </div>

            <div>
              <span>Klinik Mediviron</span>
              <b>2%</b>
            </div>
          </div>
        </div>

        <button className="details">MORE DETAILS</button>
      </div>


      {/* Card 2 */}
      <div className="card">
        <h3>Promotion by Pharmacies</h3>

        <div className="card-content">
          <div className="donut pharmacy-chart"></div>

          <div className="card-list">
            <div>
              <span>pharmacy</span>
              <b>15%</b>
            </div>

            <div>
              <span>medicine available</span>
              <b>12%</b>
            </div>

            <div>
              <span>pharmacy quality</span>
              <b>5%</b>
            </div>

            <div>
              <span>various medicines</span>
              <b>5%</b>
            </div>

            <div>
              <span>Healthy medicine</span>
              <b>30%</b>
            </div>
          </div>
        </div>

        <button className="details">MORE DETAILS</button>
      </div>


      {/* Card 3 */}
      <div className="card">
        <h3>Smart Market Usage by app</h3>

        <div className="card-content">
          <div className="donut market-chart"></div>

          <div className="card-list">
            <div>
              <span>Food Panda</span>
              <b>25%</b>
            </div>

            <div>
              <span>Grab Food</span>
              <b>3%</b>
            </div>

            <div>
              <span>Other Apps</span>
              <b>10%</b>
            </div>
          </div>
        </div>
      </div>


      {/* Card 4 */}
      <div className="card health-card">
        <h3>Health Index</h3>

        <div className="health-number">
          70%
          <span>+3%</span>
        </div>

        <div className="graph">
          <div className="grid-line one"></div>
          <div className="grid-line two"></div>
          <div className="grid-line three"></div>
          <div className="health-line"></div>
        </div>
      </div>

    </div>
  );
}

export default DashboardCards;