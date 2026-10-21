// import { useState } from "react";
// import PatientHubLogin from "./components/PatientHubLogin";
// import Sidebar from "./components/Sidebar";
// import Settings from "./pages/Settings";
// import FindPharmacy from "./pages/FindPharmacy";
// import "./App.css";

// function App() {
//   const [currentPage, setCurrentPage] = useState("FindPharmacy");
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

//   return (
    
//     <div className="app-layout">
//       <Sidebar
//         collapsed={sidebarCollapsed}
//         onNavigate={setCurrentPage}
//         currentPage={currentPage}
//       />

//       <main
//         className={`main-content ${
//           sidebarCollapsed ? "sidebar-collapsed" : ""
//         }`}
//       >
//         {currentPage === "Settings" ? (
//           <Settings />
//         ) : currentPage === "FindPharmacy" ? (
//           <FindPharmacy
//             onNavigate={setCurrentPage}
//             currentPage={currentPage}
//           />
//         ) : (
//           <div>
//             <h2>{currentPage}</h2>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }

// export default App;
import { useState } from "react";

import PatientHubLogin from "./pages/PatientHubLogin";
import SignUp from "./pages/SignUp";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import FindClinic from "./pages/FindClinic";
import Settings from "./pages/Settings";
import FindPharmacy from "./pages/FindPharmacy";

import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("Login");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleSignIn = () => {
    setCurrentPage("Dashboard");
  };

  const handleSignOut = () => {
    setSidebarCollapsed(false);
    setCurrentPage("Login");
  };

  const handleSignUp = () => {
    setCurrentPage("SignUp");
  };

  if (currentPage === "Login") {
    return (
      <PatientHubLogin
        onSignIn={handleSignIn}
        onSignUp={handleSignUp}
      />
    );
  }

  if (currentPage === "SignUp") {
    return (
      <SignUp
        onSignUp={handleSignIn}
        onBackToLogin={() => setCurrentPage("Login")}
      />
    );
  }

  return (
    <div className="app-layout">
      <Sidebar
        collapsed={sidebarCollapsed}
        onNavigate={setCurrentPage}
        currentPage={currentPage}
      />

      <main
        className={`main-content ${
          currentPage === "Dashboard" ||
          currentPage === "Settings" ||
          currentPage === "FindClinic"
            ? "sidebar-offset"
            : ""
        } ${
          sidebarCollapsed ? "sidebar-collapsed" : ""
        }`}
      >
        {currentPage === "Dashboard" ? (
          <Dashboard
            onSignOut={handleSignOut}
            onToggleSidebar={() =>
              setSidebarCollapsed((collapsed) => !collapsed)
            }
          />
        ) : currentPage === "FindPharmacy" ? (
          <FindPharmacy
            sidebarCollapsed={sidebarCollapsed}
            onSignOut={handleSignOut}
            onToggleSidebar={() =>
              setSidebarCollapsed((collapsed) => !collapsed)
            }
          />
        ) : currentPage === "FindClinic" ? (
          <FindClinic
            sidebarCollapsed={sidebarCollapsed}
            onToggleSidebar={() =>
              setSidebarCollapsed((collapsed) => !collapsed)
            }
            onSignOut={handleSignOut}
          />
        ) : currentPage === "Settings" ? (
          <Settings
            sidebarCollapsed={sidebarCollapsed}
            onToggleSidebar={() =>
              setSidebarCollapsed((collapsed) => !collapsed)
            }
          />
        ) : (
          <div>
            <h2>{currentPage}</h2>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;