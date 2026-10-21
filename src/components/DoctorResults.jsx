
import { useState } from "react";
import "./DoctorResults.css";

function DoctorResults({ specialty = "Dermatology", onBack,
  searchQuery=""
 }) {
  const [view, setView] = useState("map");
  const [sortBy, setSortBy] = useState("distance");
const [mapType, setMapType]=useState("m");
const doctors = [
  {
    id: 1,
    name: "Prof. Dr. Muhammad Shamsir Bin Mohd Aris",
    specialty: "Dermatology",
    title: "Visiting Consultant",
    address:
      "Lot 193,194 Jalan Nilai Square 6, Bandar Baru Nilai, 71800 Nilai, Negeri Sembilan Malaysia",
    website: "https://klinikpakar.usim.edu.my",
    phone: "+60126504921",
    languages: "English, Malay",
    nextLabel: "Tuesday, March 22",
    photo: "/images/doctor1.jpg",
    distance: "2 km",
    availability: "Available Today",
  },
  {
    id: 2,
    name: "PROF DR. MADYA DR. Khairullah",
    specialty: "Neurology",
    title: "Visiting Consultant",
    address:
      "Lot 193,194 Jalan Nilai Square 6, Bandar Baru Nilai, 71800 Nilai, Negeri Sembilan Malaysia",
    website: "https://klinikpakar.usim.edu.my",
    phone: "+60126504921",
    languages: "English, Malay",
    nextLabel: "Tuesday, March 22",
    photo: "/images/doctor2.jpg",
    distance: "4 km",
    availability: "Available Tomorrow",
  },
];
const query = searchQuery.trim().toLowerCase();

const filteredDoctors = doctors.filter((doctor) => {
  const matchesSearch =
    !query ||
    doctor.name.toLowerCase().includes(query) ||
    doctor.specialty.toLowerCase().includes(query) ||
    doctor.title.toLowerCase().includes(query);

  const matchesSpecialty =
    !specialty || doctor.specialty === specialty;

  return matchesSearch && matchesSpecialty;
});


  const sortedDoctors = [...filteredDoctors].sort((a, b) => {
    if (sortBy === "distance") {
      return parseFloat(a.distance) - parseFloat(b.distance);
    }

    return a.availability.localeCompare(b.availability);
  });

  return (
   
    <section className="doctor-results">

  <div className="view-tabs">
    <button
      type="button"
      className={view === "map" ? "active" : ""}
      onClick={() => setView("map")}
    >
      <i className="fa-solid fa-magnifying-glass-location"></i>
      Map
    </button>

    <button
      type="button"
      className={view === "list" ? "active" : ""}
      onClick={() => setView("list")}
    >
      <i className="fa-solid fa-rectangle-list"></i>
      List
    </button>

    <button type="button" className="back-link" onClick={onBack}>
      <i className="fa-solid fa-arrow-left"></i>
      All specialties
    </button>
  </div>

      <div className="results-layout">

<aside className="doctor-sidebar">

  <div className="side-card">
    <input
      className="side-field"
      type="text"
      placeholder="Primary Care"
    />
    <input
      className="side-field"
      type="text"
      placeholder="Zip code or Neighborhood"
    />
  </div>

  <div className="side-card">

    <h3>Filter By</h3>

    <select className="side-field select-field" defaultValue="" required>
      <option value="" disabled>Specialty</option>
      <option>Anesthesiology</option>
      <option>Dermatology</option>
      <option>Emergency Medicine</option>
      <option>Neurology</option>
    </select>

    <select className="side-field select-field" defaultValue="" required>
      <option value="" disabled>Gender</option>
      <option>Male</option>
      <option>Female</option>
    </select>

    <select className="side-field select-field" defaultValue="" required>
      <option value="" disabled>Condition</option>
      <option>Diabetes</option>
      <option>Hypertension</option>
      <option>Asthma</option>
    </select>

    <select className="side-field select-field" defaultValue="" required>
      <option value="" disabled>languages</option>
      <option>English</option>
      <option>Dari</option>
      <option>Pashto</option>
    </select>

    <h3 className="group-title">Providers Who Treat</h3>

    <label className="check-option">
      <input type="checkbox" />
      <span>All Ages</span>
    </label>

    <label className="check-option">
      <input type="checkbox" />
      <span>Children</span>
    </label>

    <label className="check-option">
      <input type="checkbox" />
      <span>Adults</span>
    </label>

    <div className="side-divider"></div>

    <h3 className="group-title">View Only</h3>

    <label className="check-option">
      <input type="checkbox" />
      <span>Online Scheduling</span>
    </label>

    <label className="check-option">
      <input type="checkbox" />
      <span>Primary Care</span>
    </label>

  </div>

</aside>


        <div className="results-content">
<div className="sort-bar">
  <span>Sort By</span>

  <button
    type="button"
    className="sort-button"
    onClick={() => setSortBy("availability")}
  >
    Next Available
  </button>

  <button
    type="button"
    className="sort-button"
    onClick={() => setSortBy("distance")}
  >
    Distance
  </button>
</div>
          {view === "map" ? (

            <div className="map-card">

  <iframe
    title="Doctors map"
    src={`https://maps.google.com/maps?q=Kuala%20Lumpur&t=${mapType}&z=10&output=embed`}
    loading="lazy"
  ></iframe>

  <div className="map-type-toggle">
    <button
      type="button"
      className={mapType === "m" ? "active" : ""}
      onClick={() => setMapType("m")}
    >
      Map
    </button>

    <button
      type="button"
      className={mapType === "k" ? "active" : ""}
      onClick={() => setMapType("k")}
    >
      Satellite
    </button>
  </div>
            </div>

          ) : (

           <div className="doctor-list">

  {sortedDoctors.length === 0 ? (
    <p className="no-doctors">
      No doctors found. Try another name or specialty.
    </p>
  ) : (
    sortedDoctors.map((doctor) => (
      <article className="doctor-card" key={doctor.id}>

        <div className="doctor-photo">
          <i className="fa-solid fa-user-doctor"></i>

          <img
            src={doctor.photo}
            alt={doctor.name}
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        </div>

        <div className="doctor-info">
          <h4>{doctor.name}</h4>
          <p>{doctor.specialty}</p>
          <p>{doctor.title}</p>
          <p>{doctor.address}</p>
          <p>{doctor.website}</p>
          <p>{doctor.phone}</p>
          <p>{doctor.languages}</p>

          <button type="button" className="next-available">
            Next available: {doctor.nextLabel}
          </button>
        </div>

      </article>
    ))
  )}

</div>

          )}

        </div>

      </div>

    </section>
  );
}

export default DoctorResults;