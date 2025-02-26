import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./../styles/rejected.css";

const RejectedPage: React.FC = () => {
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
    <div className="rejected-container">
      <h2>Executive Approve</h2>

      <div className="rejected-tabs">
        <button className="rejected-tab" onClick={handlePendingClick}>Pending</button>
        <button className="rejected-tab" onClick={handleApprovedClick}>Approved</button>
        <button className="rejected-tab active" onClick={handleRejectedClick}>Rejected</button>
      </div>

      <table className="rejected-table">
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
            <td>3478455</td>
            <td>Hiruni Chamathka</td>
            <td>Colombo</td>
            <td>Galle</td>
            <td>2023-06-16 01:33:07</td>
            <td>
              <button className="rejected-details-button" onClick={() => navigate(`/exrejected`)}>View</button>
            </td>
          </tr>

          <tr>
            <td>9023455</td>
            <td>Chamara De silva</td>
            <td>Colombo</td>
            <td>Kandy</td>
            <td>2023-06-16 01:33:07</td>
            <td>
              <button className="rejected-details-button" onClick={() => navigate(`/exrejected`)}>View</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RejectedPage;
