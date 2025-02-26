import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "../styles/verifypage.css";

const VerifyPage: React.FC = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handlePendingClick = () => {
    navigate("/verifypage"); // Navigate to the 'ExecutiveApprove' page
  };

  const handleVerifiedClick = () => {
    navigate("/verified"); // Navigate to the 'approved' page
  };

  const handleRejectedClick = () => {
    navigate("/verifyr"); // Navigate to the 'Rejected' page
  };

  return (
    <div className="request-container">
      <h2>Verify</h2>

      <div className="tabs">
        <button className="tab active" onClick={handlePendingClick}>Pending</button>
        <button className="tab" onClick={handleVerifiedClick}>Verified</button>
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
            <td>James</td>
            <td>Colombo</td>
            <td>Kandy</td>
            <td>2023-06-16 01:33:07</td>
            <td>
              <button className="details-button" onClick={() => navigate(`/verifypending`)}>View</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default VerifyPage;
