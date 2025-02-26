import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./../styles/excecutive-approve.css";
import "./../styles/navbar.css"

const ExecutiveApprove: React.FC = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleApprovedClick = () => {
    navigate("/approved"); // Navigate to Approved Page
  };

  const handleRejectedClick = () => {
    navigate("/rejected"); // Navigate to Rejected Page
  };

  return (
    <div className="exec-container">
      <h2>Executive Approve</h2>

      <div className="exec-tabs">
        <button className="exec-tab active">Pending</button>
        <button className="exec-tab" onClick={handleApprovedClick}>
          Approved
        </button>
        <button className="exec-tab" onClick={handleRejectedClick}>
          Rejected
        </button>
      </div>

      <table className="exec-table">
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
            <td>James</td>
            <td>Colombo</td>
            <td>Kandy</td>
            <td>2023-06-16 01:33:07</td>
            <td>
              <button className="exec-details-button" onClick={() => navigate(`/expending`)}>
                View
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExecutiveApprove;
