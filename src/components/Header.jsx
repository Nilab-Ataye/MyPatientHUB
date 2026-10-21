import {
  Menu,
  Search,
  Bell,
  Settings,
  UserRound,
} from "lucide-react";
import { useState } from "react";

import "./Header.css";

function Header({
  pageName = "Dashboard",
  onMenuClick,
  globalSearch = "",
  setGlobalSearch,
  onOpenSettings,
  style,
}) {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="patient-header" style={style}>
      <div className="patient-header-brand">
        <h3>MyPatientHUB</h3>
      </div>

      <button
        className="menu-button"
        type="button"
        onClick={onMenuClick}
        aria-label="Toggle sidebar"
        title="Toggle sidebar"
      >
        <Menu size={25} />
      </button>

      <div className="patient-header-page">{pageName}</div>

      <div className="patient-header-actions">
        <div         className="patient-header-search">
          <Search size={17} />

          <input
            type="text"
            placeholder="Type here..."
            value={globalSearch}
            onChange={(e)=>
setGlobalSearch(e.target.value)
            }
            aria-label="Search"
          />
        </div>

        <button
          className="header-action"
          type="button"
          aria-label="Notifications"
          title="Notifications"
          aria-expanded={showNotifications}
          onClick={() => setShowNotifications((shown) => !shown)}
        >
          <Bell size={19} />
        </button>

        <button
          className="header-action"
          type="button"
          aria-label="Settings"
          title="Settings"
          onClick={onOpenSettings}
        >
          <Settings size={19} />
        </button>

        <button
          className="header-action"
          type="button"
          aria-label="My account"
          title="My account"
          onClick={onOpenSettings}
        >
          <UserRound size={19} />
        </button>
      </div>
      {showNotifications && (
        <div className="header-notification" role="status">
          You are all caught up.
        </div>
      )}
    </header>
  );
}

export default Header;