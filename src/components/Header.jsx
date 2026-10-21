import {
  Menu,
  Search,
  Bell,
  Settings,
  UserRound,
} from "lucide-react";

import "./Header.css";

function Header({
   onMenuClick,
  globalSearch, 
setGlobalSearch}) {
  return (
    <header className="patient-header">
      <div className="header-left">
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

      <div className="header-right">
        <div className="header-search">
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
        >
          <Bell size={19} />
        </button>

        <button
          className="header-action"
          type="button"
          aria-label="Settings"
          title="Settings"
        >
          <Settings size={19} />
        </button>

        <button
          className="header-action"
          type="button"
          aria-label="Profile"
          title="Profile"
        >
          <UserRound size={19} />
        </button>
      </div>
    </header>
  );
}

export default Header;