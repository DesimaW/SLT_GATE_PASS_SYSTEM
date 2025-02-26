import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./../styles/myreceipt.css";
import "./../styles/navbar.css";

const requests = [
  { refNo: "619531195", name: "Desima Weerasinghe", mobile: "0719260495", in: "Colombo", out: "Kandy", date: "2023-07-06 19:53:11" },
  { refNo: "713192352", name: "Akesha Chandrasekara", mobile: "0789260495", in: "Colombo", out: "Ratnapura", date: "2023-07-13 19:23:52" },
  { refNo: "319235208", name: "Ravindu Imalshan", mobile: "0789260495", in: "Colombo", out: "Galle", date: "2023-07-13 19:23:52" },
  
];

const ItemTrackerPage: React.FC = () => {

  const navigate = useNavigate(); // Initialize navigate function

  return (
    <div className="request-container">
      <h2>Item Tracker</h2>
      <table>
        <thead>
          <tr>
            <th>RefNo</th>
            <th>Name</th>
            <th>Mobile No</th>
            <th>In Location</th>
            <th>Out Location</th>
            <th>Created Date Time</th>
            <th>Full details</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request, index) => (
            <tr key={index}>
              <td>{request.refNo}</td>
              <td>{request.name}</td>
              <td>{request.mobile}</td>
              <td>{request.in}</td>
              <td>{request.out}</td>
              <td>{request.date}</td>
              <td>
                <button className="details-button"  onClick={() => navigate(`/itemtrackerdetails`)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemTrackerPage;
