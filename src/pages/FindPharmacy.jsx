
import { useMemo, useState } from "react";
import PharmacyTable from "../components/PharmacyTable";
import Footer from "../components/Footer";
import "./FindPharmacy.css";

const pharmacyData = [
  {
    id: 1,
    medicine: "Esomeprazole",
    price: 10,
    pharmacy: "Carry Medical",
    description: "Carry Medical Provide Fresh and Excellent Quality Drugs",
    image:
      "/images/12234.jpg",
  },
  {
    id: 2,
    medicine: "Paracetamol",
    price: 9,
    pharmacy: "Pool Medical",
    description: "High Quality is Our Strength we provide good medicines",
    image:
      "/images/12367.jpg",
  },
  {
    id: 3,
    medicine: "Gispirin",
    price: 8,
    pharmacy: "OK Phramacy",
    description: "Different people have different taste and various types of tablet.",
    image:
      "/images/45678.jpg",
  },
  {
    id: 4,
    medicine: "Paracetamol",
    price: 11,
    pharmacy: "Hamza Pharma",
    description: "Different people have different taste and various types of medicine.",
    image:
      "/images/123456.jpg",
  },
  {
    id: 5,
    medicine: "Pandalol",
    price: 7,
    pharmacy: "City Pharmacy",
    description: "Medicines and healthcare products for everyday needs.",
    image:
      "/images/98765.jpg",
  },
  {
    id: 6,
    medicine: "Mucoangin",
    price: 12,
    pharmacy: "Health Medical",
    description: "Healthcare products and medical supplies.",
    image:
      "/images/0909.jpg",
  },
];

export default function Pharmacyplace({
  sidebarCollapsed,
  onToggleSidebar,
  onSignOut,
}) {
  // سرچ عمومی در بالای صفحه
  const [globalSearch, setGlobalSearch] = useState("");

  // سرچ دوا و دواخانه
  const [medicineSearch, setMedicineSearch] = useState("");

  const filteredPharmacies = useMemo(() => {
    const query = `${globalSearch} ${medicineSearch}`
      .trim()
      .toLowerCase();

    if (!query) return pharmacyData;

    const words = query.split(/\s+/).filter(Boolean);

    return pharmacyData.filter((item) => {
      const searchableText = [
        item.medicine,
        item.pharmacy,
        item.description,
        String(item.price),
      ]
        .join(" ")
        .toLowerCase();

      return words.every((word) => searchableText.includes(word));
    });
  }, [globalSearch, medicineSearch]);

  const handleBuyNow = (pharmacy) => {
    alert(
      `You selected ${pharmacy.medicine} at ${pharmacy.pharmacy}.\nPrice: ${pharmacy.price} RM`
    );
  };

  return (
    <div className={`pharmacy-app ${sidebarCollapsed ? "sidebar-small" : ""}`}>
      <main className="pharmacy-main">
        <header className="topbar">
          <div className="page-heading">
            <div className="breadcrumb">
              <span>⌂</span>
              <span>/</span>
              <span>Pharmacyplace</span>
            </div>

            <h2>Pharmacyplace</h2>
          </div>

          <button
            className="menu-toggle"
            type="button"
            onClick={onToggleSidebar}
            aria-label="Toggle sidebar"
            title="Toggle sidebar"
          >
            ☰
          </button>

          <div className="topbar-actions">
            <label className="global-search">
              <span>⌕</span>

              <input
                type="search"
                placeholder="Type here..."
                value={globalSearch}
                onChange={(event) =>
                  setGlobalSearch(event.target.value)
                }
              />

              {globalSearch && (
                <button
                  type="button"
                  onClick={() => setGlobalSearch("")}
                  aria-label="Clear global search"
                >
                  ×
                </button>
              )}
            </label>

            <button
              type="button"
              className="header-button logout-button"
              onClick={onSignOut}
            >
              ◉ Log out
            </button>

            <button
              type="button"
              className="header-button header-icon"
              title="Settings"
              onClick={() => alert("Settings")}
            >
              ⚙
            </button>

            <button
              type="button"
              className="header-button header-icon"
              title="Notifications"
              onClick={() => alert("Notifications")}
            >
              ♟
            </button>
          </div>
        </header>

        <section className="pharmacy-content">
          <div className="section-header">
            <h3>Search Pharmacies for Medicines</h3>

            <label className="medicine-search">
              <span>⌕</span>

              <input
                type="search"
                placeholder="Search medicine or pharmacy..."
                value={medicineSearch}
                onChange={(event) =>
                  setMedicineSearch(event.target.value)
                }
              />

              {(medicineSearch || globalSearch) && (
                <button
                  type="button"
                  onClick={() => {
                    setMedicineSearch("");
                    setGlobalSearch("");
                  }}
                >
                  Clear
                </button>
              )}
            </label>
          </div>

          <div className="results-info">
            {filteredPharmacies.length} result(s) found
          </div>

          {filteredPharmacies.length > 0 ? (
            <div className="pharmacy-grid">
              {filteredPharmacies.map((item) => (
                <article className="pharmacy-card" key={item.id}>
                  <div className="medicine-image">
                    <img
                      src={item.image}
                      alt={item.medicine}
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.style.visibility = "hidden";
                      }}
                    />
                  </div>

                  <div className="medicine-details">
                    <div className="medicine-price">
                      <span>{item.medicine}</span>
                      <strong>{item.price} RM</strong>
                    </div>

                    <div className="pharmacy-name">
                      <span className="pharmacy-avatar">✚</span>
                      <h4>{item.pharmacy}</h4>
                    </div>

                    <p>{item.description}</p>

                    <button
                      className="buy-button"
                      type="button"
                      onClick={() => handleBuyNow(item)}
                    >
                      BUY NOW
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <span>⌕</span>
              <h3>No pharmacies found</h3>
              <p>
                Try another medicine name or pharmacy name.
              </p>

              <button
                type="button"
                onClick={() => {
                  setGlobalSearch("");
                  setMedicineSearch("");
                }}
              >
                Show all pharmacies
              </button>
            </div>
          )}
        </section>
        <PharmacyTable
        globalSearch={globalSearch}/>
        <Footer/>
      </main>
    </div>
  );
}