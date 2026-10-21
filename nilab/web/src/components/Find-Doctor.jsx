import { useState } from "react";
import "../Find-Doctor.css";

const services = [
  {
    icon: "fa-heart-pulse",
    title: "Primary card and internal MD",
    description:
      "our doctors partner with you to help you to reach your wellness",
  },
  {
    icon: "fa-user-doctor",
    title: "Emergency Care",
    description: "we provide emergency care for adults and children",
  },
  {
    icon: "fa-heart-pulse",
    title: "Imaging Services",
    description: "From Xray to MR scan we offer...",
  },
  {
    icon: "fa-plus",
    title: "Urgent Care",
    description: "we offer urgent care for none...",
  },
];

const specialties = [
  "Anesthesiology",
  "Dermatology",
  "Emergency Medicine",
  "Neurology",
  "Consultation",
  "Ophthalmology",
];

function FindDoctor({ globalSearch = "" }) {
  const [doctorSearch, setDoctorSearch] = useState("");
  const query = `${globalSearch} ${doctorSearch}`
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);
  const matchesQuery = (text) =>
    query.every((term) => text.toLowerCase().includes(term));
  const visibleServices = services.filter((service) =>
    matchesQuery(`${service.title} ${service.description}`)
  );
  const visibleSpecialties = specialties.filter((specialty) =>
    matchesQuery(specialty)
  );

  return (
    <div className="find-doctor-page">
      <header className="doctor-header">
        <div className="doctor-intro">
          <h1>Find a Doctor</h1>

          <p>
            Search Doctors and schedule an appointment
          </p>
        </div>

        <div className="search-box">

          <input
            type="text"
            placeholder="Search a doctor by name,specialty"
            value={doctorSearch}
            onChange={(event) => setDoctorSearch(event.target.value)}
          />

          <input
            type="text"
            placeholder="Zip Code or Neighborhood"
          />

        </div>

      </header>

      <section className="search-buttons">
        <button type="button">CURRENT</button>
        <button type="button">SEARCH</button>
      </section>

      <section className="special-services">

        <h2>Special Services</h2>

        {visibleServices.map((service) => (
          <div className="service-card" key={service.title}>
            <div className="service-icon">
              <i className={`fa-solid ${service.icon}`}></i>
            </div>

            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>

            <span className="arrow">
              <i className="fa-solid fa-chevron-down"></i>
            </span>
          </div>
        ))}

      </section>

      <section className="specialty-section">

        <h2>Find Doctors By Specialty</h2>

        <p>
          Select a Specialty to View all Doctors
          and schedule an Appointment
        </p>

        <div className="specialty-list">
          {visibleSpecialties.map((specialty) => (
            <div className="specialty-item" key={specialty}>
              <span>{specialty}</span>
              <span>
                <i className="fa-solid fa-chevron-down"></i>
              </span>
            </div>
          ))}
        </div>

      </section>

    </div>
  );
}

export default FindDoctor;