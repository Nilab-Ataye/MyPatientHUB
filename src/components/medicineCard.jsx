
import React from "react";
import "/MedicineCard.css";

function MedicineCard({ medicine }) {
  return (
    <div className="pharmacy-card">
      {/* بخش تصویر */}
      <div className="card-image">
        <img src={medicine.image} alt={medicine.name} />
      </div>

      {/* بخش جزئیات */}
      <div className="card-details">
        <div className="card-top">
          <span className="medicine-name">{medicine.name}</span>
          <span className="medicine-price">{medicine.price} RM</span>
        </div>

        <div className="pharmacy-info">
          {/* لوگوی داروخانه */}
          <img 
            src={medicine.pharmacyLogo} 
            alt={medicine.pharmacyName} 
            className="pharmacy-logo-img" 
          />
          <h4>{medicine.pharmacyName}</h4>
        </div>

        <p className="card-description">{medicine.description}</p>

        <button className="buy-now-btn">BUY NOW</button>
      </div>
    </div>
  );
}

export default MedicineCard;