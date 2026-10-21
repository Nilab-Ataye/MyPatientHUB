import { useState } from "react";
import "./FindClinic.css";

const clinics = [
  {
    id: 1,
    name: "City Medical Clinic",
    specialty: "Primary Care",
    location: "Kabul, Afghanistan",
  },
  {
    id: 2,
    name: "Family Health Center",
    specialty: "Pediatrics",
    location: "Kabul, Afghanistan",
  },
  {
    id: 3,
    name: "Advanced Care Clinic",
    specialty: "Surgery",
    location: "Kabul, Afghanistan",
  },
];

function FindClinic({ globalSearch = "" }) {
  const [view, setView] = useState("map");
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [selectedClinic, setSelectedClinic] = useState(null);
  const [filters, setFilters] = useState({
    specialty: "",
    gender: "",
    condition: "",
    languages: "",
  });
  const [checks, setChecks] = useState({
    ages: [],
    online: false,
    primary: false,
  });
  const [message, setMessage] = useState("");

  const filteredClinics = clinics.filter((clinic) => {
    const terms = `${search} ${globalSearch}`
      .trim()
      .toLowerCase()
      .split(/\s+/)
      .filter(Boolean);
    const searchableText =
      `${clinic.name} ${clinic.specialty} ${clinic.location}`.toLowerCase();
    const matchesSearch =
      terms.every((term) => searchableText.includes(term));

    const matchesLocation =
      !location ||
      clinic.location.toLowerCase().includes(location.toLowerCase());

    const matchesSpecialty =
      !filters.specialty ||
      clinic.specialty === filters.specialty;

    return (
      matchesSearch &&
      matchesLocation &&
      matchesSpecialty
    );
  });

  function updateFilter(name, value) {
    setFilters((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function toggleAge(age) {
    setChecks((previous) => ({
      ...previous,
      ages: previous.ages.includes(age)
        ? previous.ages.filter((item) => item !== age)
        : [...previous.ages, age],
    }));
  }

  function searchCurrentLocation() {
    setLocation("Kabul, Afghanistan");
    setMessage("Showing clinics around Kabul, Afghanistan.");
  }

  function openGoogleMaps() {
    const query = encodeURIComponent(
      `${search.trim() || "Clinics"} in ${location.trim() || "Kabul, Afghanistan"}`
    );

    window.open(
      `https://www.google.com/maps/search/${query}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <div className="clinic-app">
      <div className="clinic-main">
        <main className="clinic-content">
          <section className="clinic-hero">
            <div className="clinic-hero-breadcrumb">
              ⌂ &nbsp;/&nbsp; Findhospital
            </div>

            <h1>Find a Clinic</h1>
            <p>
              Search Clinics and schedule an appointment
              with doctors through Clinic
            </p>

            <form
              className="clinic-search-form"
              onSubmit={(event) => {
                event.preventDefault();
                openGoogleMaps();
              }}
            >
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search"
                aria-label="Search clinics"
              />

              <input
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                placeholder="Zip Code or Neighborhood"
                aria-label="Zip code or neighborhood"
              />

              <button
                type="button"
                onClick={searchCurrentLocation}
              >
                CURRENT
              </button>

              <button type="submit">SEARCH</button>
            </form>
          </section>

          <div className="clinic-view-tabs">
            <button
              className={view === "map" ? "selected" : ""}
              onClick={() => setView("map")}
            >
              ◉ &nbsp; Map
            </button>
            <button
              className={view === "list" ? "selected" : ""}
              onClick={() => setView("list")}
            >
              ▤ &nbsp; List
            </button>
          </div>

          {message && (
            <div className="clinic-message">
              <span>{message}</span>
              <button onClick={() => setMessage("")}>×</button>
            </div>
          )}

          <div className="clinic-workspace">
            <aside className="clinic-filters">
              <div className="clinic-filter-top">
                <input
                  placeholder="Primary Care"
                  aria-label="Care type"
                  value={filters.specialty}
                  onChange={(event) =>
                    updateFilter("specialty", event.target.value)
                  }
                />

                <input
                  placeholder="Zip code or Neighborhood"
                  aria-label="Filter location"
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                />
              </div>

              <div className="clinic-filter-section">
                <h3>Filter By</h3>

                <label>
                  <span className="clinic-sr-only">Specialty</span>
                  <select
                    value={filters.specialty}
                    onChange={(event) =>
                      updateFilter("specialty", event.target.value)
                    }
                  >
                    <option value="">Specialty</option>
                    <option value="Primary Care">Primary Care</option>
                    <option value="Pediatrics">Pediatrics</option>
                    <option value="Surgery">Surgery</option>
                  </select>
                </label>

                <label>
                  <span className="clinic-sr-only">Gender</span>
                  <select
                    value={filters.gender}
                    onChange={(event) =>
                      updateFilter("gender", event.target.value)
                    }
                  >
                    <option value="">Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </label>

                <label>
                  <span className="clinic-sr-only">Condition</span>
                  <select
                    value={filters.condition}
                    onChange={(event) =>
                      updateFilter("condition", event.target.value)
                    }
                  >
                    <option value="">Condition</option>
                    <option value="General">General health</option>
                    <option value="Chronic">Chronic condition</option>
                  </select>
                </label>

                <label>
                  <span className="clinic-sr-only">Languages</span>
                  <select
                    value={filters.languages}
                    onChange={(event) =>
                      updateFilter("languages", event.target.value)
                    }
                  >
                    <option value="">Languages</option>
                    <option value="English">English</option>
                    <option value="Malay">Malay</option>
                    <option value="Urdu">Urdu</option>
                  </select>
                </label>
              </div>

              <div className="clinic-filter-section">
                <h3>Providers Who Treat</h3>

                {["All Ages", "Children", "Adults"].map((age) => (
                  <label className="clinic-checkbox" key={age}>
                    <input
                      type="checkbox"
                      checked={checks.ages.includes(age)}
                      onChange={() => toggleAge(age)}
                    />
                    <span>{age}</span>
                  </label>
                ))}
              </div>

              <div className="clinic-filter-section">
                <h3>View Only</h3>

                <label className="clinic-checkbox">
                  <input
                    type="checkbox"
                    checked={checks.online}
                    onChange={(event) =>
                      setChecks((previous) => ({
                        ...previous,
                        online: event.target.checked,
                      }))
                    }
                  />
                  <span>Online Scheduling</span>
                </label>

                <label className="clinic-checkbox">
                  <input
                    type="checkbox"
                    checked={checks.primary}
                    onChange={(event) =>
                      setChecks((previous) => ({
                        ...previous,
                        primary: event.target.checked,
                      }))
                    }
                  />
                  <span>Primary Care</span>
                </label>

                <button
                  className="clinic-clear-filters"
                  onClick={() => {
                    setFilters({
                      specialty: "",
                      gender: "",
                      condition: "",
                      languages: "",
                    });
                    setChecks({
                      ages: [],
                      online: false,
                      primary: false,
                    });
                    setSearch("");
                    setLocation("");
                    setMessage("Filters cleared.");
                  }}
                >
                  Clear filters
                </button>
              </div>
            </aside>

            <section className="clinic-results">
              {view === "map" ? (
                <>
                  <div className="clinic-map-toolbar">
                    <span>Clinic locations</span>
                    <button onClick={openGoogleMaps}>
                      ↗ Open Google Maps
                    </button>
                  </div>

                  <iframe
                    className="clinic-google-map"
                    title="Google Maps clinic locations in Kabul, Afghanistan"
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(
                      location || "Kabul, Afghanistan"
                    )}&z=10&output=embed`}
                    loading="lazy"
                    allowFullScreen
                  />

                  <p className="clinic-map-note">
                    For actual clinic addresses, select a clinic
                    from the list below or open Google Maps.
                  </p>

                  <div className="clinic-map-clinic-list">
                    {filteredClinics.map((clinic) => (
                      <button
                        className="clinic-map-clinic"
                        key={clinic.id}
                        onClick={() => setSelectedClinic(clinic)}
                      >
                        <span className="clinic-pin">●</span>
                        <span>
                          <strong>{clinic.name}</strong>
                          <small>
                            {clinic.specialty} · {clinic.location}
                          </small>
                        </span>
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <div className="clinic-list-results">
                  <h2>Clinics</h2>

                  {filteredClinics.length ? (
                    filteredClinics.map((clinic) => (
                      <article
                        className="clinic-result-card"
                        key={clinic.id}
                      >
                        <div>
                          <h3>{clinic.name}</h3>
                          <p>{clinic.specialty}</p>
                          <small>{clinic.location}</small>
                        </div>

                        <button
                          onClick={() => setSelectedClinic(clinic)}
                        >
                          View details
                        </button>
                      </article>
                    ))
                  ) : (
                    <p>No matching demo clinics found.</p>
                  )}
                </div>
              )}

              {selectedClinic && (
                <div className="clinic-detail">
                  <button
                    className="clinic-detail-close"
                    onClick={() => setSelectedClinic(null)}
                    aria-label="Close clinic details"
                  >
                    ×
                  </button>

                  <h2>{selectedClinic.name}</h2>
                  <p>Specialty: {selectedClinic.specialty}</p>
                  <p>Location: {selectedClinic.location}</p>

                  <button onClick={openGoogleMaps}>
                    Find on Google Maps
                  </button>
                </div>
              )}
            </section>
          </div>

        </main>
      </div>
    </div>
  );
}

export default FindClinic;