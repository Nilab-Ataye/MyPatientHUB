function Sidebar({setPage}) {
  return (
    <aside className="sidebar" id="sidebar">

      <div className="logo">
        <div className="logo-icon">
          <i className="fa-solid fa-heart-pulse"></i>
        </div>

        <div className="logo-text">
          <span className="my">MyPatient</span>
          <span className="hub">HUB</span>
        </div>
      </div>
     
      <nav className="menu">

        <a href="#"
        onClick={(e)=>{
          e.preventDefault();
          setPage("dashboard");
         
        }}
         style={{cursor:"pointer"}}
         className="active">
          <i className="fa-solid fa-table-columns"></i>
          <span>Dashboard</span>
        </a>

      <a
  href="#"
  onClick={(e) => {
    e.preventDefault();
    setPage("findDoctor");
  }}
  style={{ cursor: "pointer" }}
>
  <i className="fa-solid fa-user-doctor"></i>
  <span>Find Doctor</span>
</a>

        <a href="#">
          <i className="fa-solid fa-hospital"></i>
          <span>Find Clinic</span>
        </a>


<a
href="#"
       onClick={(e)=>{
        e. preventDefault();
        setPage("marketplace");
       }}
      style={{cursor: "pointer"}}>
        <i className="fa-solid fa-store"></i>
        <span> Find MarketPlace</span>
      </a>
    

        <a href="#">
          <i className="fa-solid fa-prescription-bottle-medical"></i>
          <span>Find Pharmacy</span>
        </a>

        <a href="#"
        onClick={(e)=>{
          e.preventDefault();
          setPage("myDependents");
        }}
        >
          <i className="fa-solid fa-users"></i>
          <span>My Dependents</span>
        </a>

        <a href="#">
          <i className="fa-solid fa-gear"></i>
          <span>Settings</span>
        </a>

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