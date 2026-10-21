import {
  Activity,
  CalendarDays,
  CircleHelp,
  Hospital,
  LayoutDashboard,
  MessageCircle,
  Pill,
  Settings,
  Stethoscope,
  Store,
  UserRound,
  Users,
} from "lucide-react";

import "./Sidebar.css";

const menuItems = [
  { label: "Dashboard", page: "Dashboard", icon: LayoutDashboard },
  { label: "Appointments", icon: CalendarDays },
  { label: "Find Doctor", page: "FindDoctor", icon: Stethoscope },
  { label: "Find Clinic", page: "FindClinic", icon: Hospital },
  { label: "Chat", icon: MessageCircle },
  { label: "Find MarketPlace", page: "FindMarketPlace", icon: Store },
  { label: "Find Pharmacy", page: "FindPharmacy", icon: Pill },
  { label: "My Dependents", page: "MyDependents", icon: Users },
  { label: "My Account", page: "Settings", icon: UserRound },
  { label: "Settings", page: "Settings", icon: Settings },
];

function Sidebar({ collapsed, currentPage, onNavigate }) {
  return (
    <aside
      className={`nilab-sidebar${collapsed ? " nilab-sidebar-collapsed" : ""}`}
      aria-label="Main navigation"
    >
      <div className="nilab-sidebar-logo">
        <div className="nilab-sidebar-logo-icon">
          <Activity size={21} aria-hidden="true" />
        </div>

        {!collapsed && (
          <div className="nilab-sidebar-logo-text">
            <span className="nilab-sidebar-my">MyPatient</span>hub
            <span className="nilab-sidebar-hub">HUB</span>
          </div>
        )}
      </div>

      <nav className="nilab-sidebar-menu">
        {menuItems.map(({ label, page, icon: Icon }) => {
          const isActive = page === currentPage;

          return (
            <button
              className={`nilab-sidebar-item${isActive ? " active" : ""}`}
              type="button"
              key={label}
              onClick={page ? () => onNavigate(page) : undefined}
              aria-current={isActive ? "page" : undefined}
              aria-label={collapsed ? label : undefined}
              title={collapsed ? label : undefined}
            >
              <Icon size={20} aria-hidden="true" />
              {!collapsed && <span>{label}</span>}
            </button>
          );
        })}
      </nav>

      {!collapsed && (
        <div className="nilab-sidebar-help">
          <span className="nilab-sidebar-help-icon">
            <CircleHelp size={19} aria-hidden="true" />
          </span>
          <div>
            <strong>Need Help?</strong>
            <small>Contact Support</small>
          </div>
        </div>
      )}
    </aside>
  );
}

export default Sidebar;
