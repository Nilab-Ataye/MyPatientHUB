import Header from "./Header";
import Footer from "./Footer";
import {useState} from "react";
import "./MyDependents.css";

function MyDependents() {
    const [currentStep, setCurrentStep]=useState(1);
  return (
    <div className="dependents-page">
      <Header pageName="Dependents" />

      <div className="dependents-heading">
        <h1>Build Your Profile</h1>

        <p>
          This Information will let us know more about your family.
        </p>
      </div>

      <div className="dependents-steps">

        <div className={`step ${currentStep
        >= 2 ? "line-active":""}`}>
          <span className={`step-dot ${currentStep === 1 ? "active":
      
           currentStep>= 2 ?  "completed" :""}
          `}></span>
          <p>Dependents Registration</p>
        </div>

    

        <div className={`step ${currentStep
            >= 3 ? "line-active": ""}`}>
          <span className={`step-dot ${currentStep === 2 ?
            "active-black" : currentStep>= 3?
            "completed": ""}`}></span>
          <p>Dependents Health Records</p>
        </div>


        <div className="step">
          <span className={`step-dot ${currentStep === 3?
          "active-black" : ""}`}
          ></span>
          <p>Family Care Plan</p>
        </div>

      </div>
      {currentStep === 1 && (
<div className="dependents-form">
  <h2>Dependents Registration</h2>  <div className="dependents-form-row">
    <div className="form-group">
      <label>First Name</label>
      <input type="text" placeholder="Enter First Name" />
    </div><div className="form-group">
  <label>Last Name</label>
  <input type="text" placeholder="Enter Last Name" />
</div>

  </div>  <div className="dependents-form-row">
    <div className="form-group">
      <label>Birth Date</label>  <div className="birth-date-fields">
    <select defaultValue="">
      <option value="" disabled>Month</option>
      <option>January</option>
      <option>February</option>
      <option>March</option>
      <option>April</option>
      <option>May</option>
      <option>June</option>
      <option>July</option>
      <option>August</option>
      <option>September</option>
      <option>October</option>
      <option>November</option>
      <option>December</option>
    </select>

    <select defaultValue="">
      <option value="" disabled>Day</option>
      {Array.from({ length: 31 }, (_, i) => (
        <option key={i + 1}>{i + 1}</option>
      ))}
    </select>

    <select defaultValue="">
      <option value="" disabled>Year</option>
      {Array.from({ length: 100 }, (_, i) => (
        <option key={i}>{new Date().getFullYear() - i}</option>
      ))}
    </select>
  </div>
</div>

<div className="form-group">
  <label>Relation</label>
  <select defaultValue="">
    <option value="" disabled>Select Relation</option>
    <option>Son</option>
    <option>Daughter</option>
    <option>Spouse</option>
    <option>Father</option>
    <option>Mother</option>
    <option>Brother</option>
    <option>Sister</option>
    <option>Other</option>
  </select>
</div>

  </div>  <div className="form-group">
    <label>I'm</label>
    <select defaultValue="">
      <option value="" disabled>Select an option</option>
      <option>Male</option>
      <option>Female</option>
      <option>Other</option>
    </select>
  </div>  <button type="button" className="dependents-next-btn "
  onClick={()=>
  setCurrentStep(2)}>
    NEXT
  </button>
</div>
      )}
{currentStep === 2 && (
  <div className="dependents-form">
    <h2>Dependents Health Records</h2>

    <div className="dependents-form-row">
      <div className="form-group">
        <label>First Name</label>
        <input type="text" placeholder="Eg. Michael" />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input type="text" placeholder="Eg. Tomson" />
      </div>
    </div>

    <div className="form-group">
      <label>Birth Date</label>
      <div className="birth-date-fields">
        <select defaultValue="">
          <option value="" disabled>Month</option>
          <option>January</option>
          <option>February</option>
          <option>March</option>
          <option>April</option>
          <option>May</option>
          <option>June</option>
          <option>July</option>
          <option>August</option>
          <option>September</option>
          <option>October</option>
          <option>November</option>
          <option>December</option>
        </select>

        <select defaultValue="">
          <option value="" disabled>Day</option>
          {Array.from({ length: 31 }, (_, i) => (
            <option key={i + 1}>{i + 1}</option>
          ))}
        </select>

        <select defaultValue="">
          <option value="" disabled>Year</option>
          {Array.from({ length: 100 }, (_, i) => (
            <option key={i}>{new Date().getFullYear() - i}</option>
          ))}
        </select>
      </div>
    </div>

    <div className="dependents-form-row">
      <div className="form-group">
        <label>Relation</label>
        <input type="text" placeholder="Eg. Brother,Child" />
      </div>
      <div className="form-group">
        <label>I'm</label>
        <select defaultValue="">
          <option value="" disabled>Select an option</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </div>
    </div>

<div 
className="dependents-buttons">
    <button
      type="button"
      className="dependents-back-btn"
      onClick={() => setCurrentStep(1)}
    >
      BACK
    </button>
    <button
    type="button"
    className="dependents-next-btn"
    onClick={()=>
      setCurrentStep(3)
    }>
      NEXT
    </button>
  </div>
  </div>
)}
{currentStep === 3 &&(
  <div className="dependents-form">
    <div className="plans-grid">
      <div className="plan-card">
        <h3>Standard Plan</h3>
        <hr />
        <ul>
          <li><span className="plan-check">✓</span>Detail One</li>
          <li><span className="plan-check"></span>Detail Two</li>
          <li><span className="plan-check">✓</span>Detail Three</li>
        </ul>
      </div>

      <div className="plan-card">
        <h3>Premium Plan</h3>
        <hr />
        <ul>
          <li><span className="plan-check">✓</span>Detail One</li>
          <li><span className="plan-check">✓</span>Detail Two</li>
          <li><span className="plan-check">✓</span>Detail Three</li>
        </ul>
      </div>

      <div className="plan-card">
        <h3>Super Plan</h3>
        <hr />
        <ul>
          <li><span className="plan-check">✓</span>Detail One</li>
          <li><span className="plan-check">✓</span>Detail Two</li>
          <li><span className="plan-check">✓</span>Detail Three</li>
        </ul>
      </div>
    </div>
    <div className="dependents-buttons">
      <button type="button"
      className="dependents-back-btn"
      onClick={()=>
        setCurrentStep(2)}
        >
          BACK
        </button>
        <button type="button"
        className="dependents-next-btn"
        >
          SEND
        </button>
      </div>
    </div>
)}
      <Footer />
    </div>
  );
}

export default MyDependents;