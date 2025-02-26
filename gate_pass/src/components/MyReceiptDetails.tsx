import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/myreceiptdetails.css";

const MyReceiptDetails: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container">

      {/* Header */}
      <div className="header">
        <h2>My Receipt Details</h2>
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

      {/* Comment Section */}
      <div className="comment-section">
        <label>Comment</label>
        <textarea placeholder="Enter Comment Here"></textarea>
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button className="approve">Approve</button>
        <button className="reject">Reject</button>
      </div>
    </div>
  );
};

export default MyReceiptDetails;
