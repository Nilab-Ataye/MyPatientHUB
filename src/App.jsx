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
function App() {
  const [page, setPage] = useState("dashboard");
  const [searchQuery, setSearchQuery]= useState("");

  return (
    <div className="dashboard">

      <Sidebar setPage={setPage} />

      <main className="main">

        {page === "dashboard" && (
          <>
            <Header 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery} />

            <section className="content">
              <DashboardContent />
              <DashboardCards />
            </section>

            <Footer />
          </>
        )}

        {page === "findDoctor" && (
          <FindDoctor 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          />
        )}
        {page === "marketplace"&&(
          <FindMarketPlace 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          />
        )}
        {page==="myDependents"&&
        <MyDependents/>}

      </main>

    </div>
  );
}

export default App;