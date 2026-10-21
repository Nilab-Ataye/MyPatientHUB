const menuItems = [
  { page: "dashboard", label: "Dashboard", icon: "fa-table-columns" },
  { page: "findDoctor", label: "Find Doctor", icon: "fa-user-doctor" },
  { page: "findClinic", label: "Find Clinic", icon: "fa-hospital" },
  { page: "marketplace", label: "Find MarketPlace", icon: "fa-store" },
  {
    page: "findPharmacy",
    label: "Find Pharmacy",
    icon: "fa-prescription-bottle-medical",
  },
  { page: "myDependents", label: "My Dependents", icon: "fa-users" },
  { page: "settings", label: "Settings", icon: "fa-gear" },
];

function Sidebar({ setPage, currentPage, collapsed }) {
  return (
    <aside className={`sidebar${collapsed ? " hide" : ""}`} id="sidebar">
      <div className="logo">
        <div className="logo-icon">
          <i className="fa-solid fa-heart-pulse"></i>
        </div>
        <div className="logo-text">
          <span className="my">MyPatient</span>
          <span className="hub">HUB</span>
        </div>
      </div>

      <nav className="menu" aria-label="Main navigation">
        {menuItems.map(({ page, label, icon }) => (
          <a
            key={page}
            href={`#${page}`}
            onClick={(event) => {
              event.preventDefault();
              setPage(page);
            }}
            className={currentPage === page ? "active" : ""}
            aria-current={currentPage === page ? "page" : undefined}
            title={collapsed ? label : undefined}
          >
            <i className={`fa-solid ${icon}`} aria-hidden="true"></i>
            <span>{label}</span>
          </a>
        ))}
      </nav>

      <div className="help-box">
        <div className="help-icon">
          <i className="fa-solid fa-question"></i>
        </div>
        <div>
          <strong>Need Help?</strong>
          <small>Contact Support</small>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
