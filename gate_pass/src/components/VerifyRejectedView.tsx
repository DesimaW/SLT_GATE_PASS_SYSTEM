import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/verifyrejectedview.css";

const VerifyRejectedView: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container">

      {/* Header */}
      <div className="header">
        <h2>Verify <span className="arrow">➝</span> <span className="status pending">Rejected</span></h2>
        <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
      </div>

      {/* Item Details */}
      <div className="details-container">
        <div className="item-header">
          <span className="item-details-title">Item Details</span>
          <span className="ref-no">Ref.No ~ 3423455</span>
        </div>

        <div className="item-info">
          <div className="info-text">
            <p><strong>• Item Name</strong> ~ Laptop</p>
            <p><strong>• Serial No</strong> ~ 34235</p>
            <p><strong>• Returnable</strong> ~ No</p>
          </div>
          <div className="item-photo">
          <img src="/images/lap.jpg" alt="Laptop" />
            <button className="view-photo">View Photo</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default VerifyRejectedView;
