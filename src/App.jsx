import { useState } from "react";
import "./style.css";
import Sidebar from "./components/sidebar";
import Header from "./components/Header";
import DashboardContent from "./components/DashboardContent";
import DashboardCards from "./components/DashboardCards";
import Footer from "./components/Footer";
import FindDoctor from "./components/Find-Doctor";
import FindMarketPlace from "./components/FindMarketPlace";
import MyDependents from "./components/MyDependents";
import FindClinic from "./pages/FindClinic";
import FindPharmacy from "./pages/FindPharmacy";
import Settings from "./pages/Settings";

const pageNames = {
  dashboard: "Dashboard",
  findDoctor: "Find Doctor",
  findClinic: "Find Clinic",
  marketplace: "Find MarketPlace",
  findPharmacy: "Find Pharmacy",
  myDependents: "My Dependents",
  settings: "Settings",
};

function App() {
  const [page, setPage] = useState("dashboard");
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="dashboard">
      <Sidebar
        setPage={setPage}
        currentPage={page}
        collapsed={sidebarCollapsed}
      />

      <main className="main">
        <Header
          pageName={pageNames[page]}
          onMenuClick={() => setSidebarCollapsed((collapsed) => !collapsed)}
          globalSearch={searchQuery}
          setGlobalSearch={setSearchQuery}
          onOpenSettings={() => setPage("settings")}
        />

        {page === "dashboard" && (
          <section className="content">
            <DashboardContent />
            <DashboardCards onNavigate={setPage} />
          </section>
        )}
        {page === "findDoctor" && (
          <FindDoctor searchQuery={searchQuery} />
        )}
        {page === "findClinic" && <FindClinic globalSearch={searchQuery} />}
        {page === "marketplace" && (
          <FindMarketPlace
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        )}
        {page === "findPharmacy" && (
          <FindPharmacy
            sidebarCollapsed={sidebarCollapsed}
            globalSearch={searchQuery}
            setGlobalSearch={setSearchQuery}
          />
        )}
        {page === "myDependents" && <MyDependents />}
        {page === "settings" && <Settings globalSearch={searchQuery} />}

        <Footer />
      </main>
    </div>
  );
}

export default App;
