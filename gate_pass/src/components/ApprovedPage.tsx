import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "../styles/approved.css";

const ApprovedPage: React.FC = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handlePendingClick = () => {
    navigate("/ex"); // Navigate to the 'ExecutiveApprove' page
  };

  const handleApprovedClick = () => {
    navigate("/approved"); // Navigate to the 'approved' page
  };

  const handleRejectedClick = () => {
    navigate("/rejected"); // Navigate to the 'Rejected' page
  };

  return (
    <div className="request-container">
      <h2>Executive Approve</h2>

      <div className="tabs">
        <button className="tab" onClick={handlePendingClick}>Pending</button>
        <button className="tab active" onClick={handleApprovedClick}>Approved</button>
        <button className="tab" onClick={handleRejectedClick}>Rejected</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Ref.No</th>
            <th>Name</th>
            <th>In Location</th>
            <th>Out Location</th>
            <th>Created Date Time</th>
            <th>Full details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>20230616013307536</td>
            <td>Hansi Nathasha</td>
            <td>Colombo</td>
            <td>Kandy</td>
            <td>2023-06-16 01:33:07</td>
            <td>
              <button className="details-button" onClick={() => navigate(`/exapprove`)}>View</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ApprovedPage;
