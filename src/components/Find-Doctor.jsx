import { useState } from "react";
import"../Find-Doctor.css";
import DoctorResults from "./DoctorResults";


function FindDoctor({
  searchQuery="",
}) {
 const [selectedSpecialty, setSelectedSpecialty] = useState("");
 const [showResults, setShowResults]=useState(false)
 const [doctorSearch, setDoctorSearch] = useState("");
 const [location, setLocation] = useState("");
const [locationMessage, setLocationMessage] = useState("");
return (
  <>
<section className="doctor-banner">
  <div className="doctor-intro">
    <h1>Find a Doctor</h1>

    <p>
      Search Doctors and schedule an appointment
    </p>
  </div>

  <div className="doctor-search-form">
   <input
  type="text"
  placeholder="Search a doctor by name, specialty"
  value={doctorSearch}
  onChange={(event) => setDoctorSearch(event.target.value)}
  onKeyDown={(event) => {
    if (event.key === "Enter") {
      setSelectedSpecialty("");
      setShowResults(true);
    }
  }}
/>

    <input
  type="text"
  placeholder="Zip Code or Neighborhood"
  value={location}
  onChange={(event) => setLocation(event.target.value)}
/>

    <button
  type="button"
  onClick={() => {
    if (!navigator.geolocation) {
      setLocationMessage(
        "Your browser does not support location."
      );
      return;
    }

    setLocationMessage("Getting your current location...");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        setLocation(`${latitude}, ${longitude}`);

        setLocationMessage(
          "Your current location was detected."
        );
      },
      () => {
        setLocationMessage(
          "Unable to get your location. Please allow location access."
        );
      }
    );
  }}
>
  CURRENT
</button>

    <button
  type="button"
  onClick={() => {
    setSelectedSpecialty("");
    setShowResults(true);
  }}
>
  SEARCH
</button>
{locationMessage && (
  <p>{locationMessage}</p>
)}

  </div>
</section>
{!showResults &&(
      <section className="special-services">

        <h2>Special Services</h2>

        <div className="service-card">

          <div className="service-icon">
            <i className="fa-solid fa-heart-pulse"></i>
          </div>

          <div className="service-content">
            <h3>Primary card and internal MD</h3>

            <p>
              our doctors partner with you to help you to reach
              your wellness
            </p>
          </div>

          <span className="arrow">
            <i className="fa-solid fa-chevron-down"></i>
          </span>

        </div>

        <div className="service-card">

          <div className="service-icon">
            <i className="fa-solid fa-user-doctor"></i>
          </div>

          <div className="service-content">
            <h3>Emergency Care</h3>

            <p>
              we provide emergency care for adults and children
            </p>
          </div>

          <span className="arrow">
            <i className="fa-solid fa-chevron-down"></i>
          </span>

        </div>

        <div className="service-card">

          <div className="service-icon">
            <i className="fa-solid fa-heart-pulse"></i>
          </div>

          <div className="service-content">
            <h3>Imaging Services</h3>

            <p>From Xray to MR scan we offer...</p>
          </div>

          <span className="arrow">
            <i className="fa-solid fa-chevron-down"></i>
          </span>

        </div>

        <div className="service-card">

          <div className="service-icon">
            <i className="fa-solid fa-plus"></i>
          </div>

          <div className="service-content">
            <h3>Urgent Care</h3>

            <p>we offer urgent care for none...</p>
          </div>

          <span className="arrow">
            <i className="fa-solid fa-chevron-down"></i>
          </span>

        </div>

      </section>
)}
{!showResults && (
     <section className="specialty-section"> 
       <h2>Find Doctors By Specialty</h2>  <p>
    Select a Specialty to View all Doctors
    and schedule an Appointment
  </p>  <div className="specialty-list">{[
  "Anesthesiology",
  "Dermatology",
  "Emergency Medicine",
  "Neurology",
  "Consultation",
  "Ophthalmology",
].map((specialty) => (

  <div
    className="specialty-item"
    key={specialty}
    onClick={() => {
      setSelectedSpecialty(specialty);
      setShowResults(true);
    }}
    role="button"
    tabIndex={0}
    onKeyDown={(event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        setSelectedSpecialty(specialty);
        setShowResults(true);
      }
    }}
  >

    <span>{specialty}</span>

    <span>
      <i className="fa-solid fa-chevron-down"></i>
    </span>

  </div>

))}

  </div>
  </section>
)}
{showResults && (<DoctorResults
  specialty={selectedSpecialty} onBack={()=>
    setShowResults(false)}
    searchQuery={doctorSearch || searchQuery}
  
  />
)}
    </>
  );
}

export default FindDoctor;