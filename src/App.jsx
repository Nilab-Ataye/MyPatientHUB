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
import { useEffect, useState } from "react";

import PatientHubLogin from "./pages/PatientHubLogin";
import SignUp from "./pages/SignUp";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import FindClinic from "./pages/FindClinic";
import Settings from "./pages/Settings";
import FindPharmacy from "./pages/FindPharmacy";
import FindDoctor from "../nilab/web/src/components/Find-Doctor";
import FindMarketPlace from "../nilab/web/src/components/FindMarketPlace";
import MyDependents from "../nilab/web/src/components/MyDependents";

import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("Login");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [globalSearch, setGlobalSearch] = useState("");
  const [isNarrowScreen, setIsNarrowScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 650px)");
    const updateScreenSize = () => setIsNarrowScreen(mediaQuery.matches);

    updateScreenSize();
    mediaQuery.addEventListener("change", updateScreenSize);

    return () => mediaQuery.removeEventListener("change", updateScreenSize);
  }, []);

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

      <Header
        onMenuClick={() =>
          setSidebarCollapsed((collapsed) => !collapsed)
        }
        globalSearch={globalSearch}
        setGlobalSearch={setGlobalSearch}
        onSignOut={handleSignOut}
        onOpenSettings={() => setCurrentPage("Settings")}
        style={{
          left: isNarrowScreen
            ? sidebarCollapsed
              ? "70px"
              : "220px"
            : sidebarCollapsed
              ? "78px"
              : "250px",
        }}
      />

      <main
        className={`main-content ${
          currentPage === "Dashboard" ||
          currentPage === "Settings" ||
          currentPage === "FindClinic" ||
          currentPage === "FindDoctor" ||
          currentPage === "FindMarketPlace" ||
          currentPage === "MyDependents"
            ? "sidebar-offset"
            : ""
        } ${
          sidebarCollapsed ? "sidebar-collapsed" : ""
        }`}
      >
        {currentPage === "Dashboard" ? (
          <Dashboard globalSearch={globalSearch} />
        ) : currentPage === "FindPharmacy" ? (
          <FindPharmacy
            sidebarCollapsed={sidebarCollapsed}
            globalSearch={globalSearch}
            setGlobalSearch={setGlobalSearch}
          />
        ) : currentPage === "FindClinic" ? (
          <div style={{ paddingTop: "83px" }}>
            <FindClinic globalSearch={globalSearch} />
          </div>
        ) : currentPage === "FindDoctor" ? (
          <div style={{ paddingTop: "75px" }}>
            <FindDoctor globalSearch={globalSearch} />
          </div>
        ) : currentPage === "FindMarketPlace" ? (
          <div style={{ paddingTop: "75px" }}>
            <FindMarketPlace globalSearch={globalSearch} />
          </div>
        ) : currentPage === "MyDependents" ? (
          <MyDependents />
        ) : currentPage === "Settings" ? (
          <Settings globalSearch={globalSearch} />
        ) : (
          <div>
            <h2>{currentPage}</h2>
          </div>
        )}
        <Footer
          style={{
            marginLeft:
              currentPage === "FindPharmacy"
                ? sidebarCollapsed
                  ? "78px"
                  : "250px"
                : undefined,
          }}
        />
      </main>
    </div>
  );
}

export default App;