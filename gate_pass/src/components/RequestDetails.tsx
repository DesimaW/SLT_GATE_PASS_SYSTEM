import React from "react";
import "../styles/requestdetails.css";
import { useNavigate } from "react-router-dom";

const RequestDetails: React.FC = () => {

    const navigate = useNavigate();
  return (
    <div className="container">
      <h2>My Request Details</h2>
      <div className="request-header">
        <span className="ref-no">Ref No -&gt; 7</span>
        <button className="back-button" onClick={() => navigate("/requesttable")}>← Back</button>
      </div>

      {/* Sender Details */}
      <div className="details-section">
        <h3>Sender Details</h3>
        <div className="details-grid">
          <p><strong>Service No</strong> -&gt; 3</p>
          <p><strong>Section</strong> -&gt; TEST</p>
          <p><strong>Name</strong> -&gt; James</p>
          <p><strong>Group</strong> -&gt; TEST GROUP</p>
          <p><strong>Designation</strong> -&gt; TEST EMP DESIGNATION</p>
          <p><strong>Contact No</strong> -&gt; 1</p>
        </div>
      </div>

      {/* Item Details */}
      <div className="details-section">
        <h3>Item Details</h3>
        <table className="item-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Items</th>
            </tr>
          </thead>
          <tbody>
            {/* Add dynamic data here if needed */}
          </tbody>
        </table>
      </div>

      {/* Out/In Location Details */}
      <div className="details-section">
        <h3>Out/In Location Details</h3>
        <div className="details-grid">
          <p><strong>Out Location</strong> -&gt;</p>
          <p>
            <label>Edit Executive Officer:</label>
            <select>
              <option>Mrs. Hiranya</option>
              <option>Mr. John</option>
            </select>
          </p>
          <p><strong>In Location</strong> -&gt;</p>
        </div>
      </div>

      {/* Receiver Details */}
      <div className="details-section">
        <h3>Receiver Details</h3>
        <div className="details-grid">
          <p><strong>Name</strong> -&gt;</p>
          <p><strong>Group</strong> -&gt;</p>
          <p><strong>Service No</strong> -&gt;</p>
          <p><strong>Contact No</strong> -&gt;</p>
        </div>
      </div>
    </div>
  );
};

export default RequestDetails;
