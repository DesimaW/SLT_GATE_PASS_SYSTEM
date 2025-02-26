import React from "react";
import "./../styles/dispatch.css";
import "./../styles/navbar.css";

const requests = [
  { refNo: "619531195", name: "Desima Weerasinghe", mobile: "0719260495", in: "Colombo", out: "Kandy", date: "2023-07-06 19:53:11" },
  { refNo: "713192352", name: "Akesha Chandrasekara", mobile: "0789260495", in: "Colombo", out: "Ratnapura", date: "2023-07-13 19:23:52" },
  { refNo: "319235208", name: "Ravindu Imalshan", mobile: "0789260495", in: "Colombo", out: "Galle", date: "2023-07-13 19:23:52" },
  
];

const ItemTrackerPage: React.FC = () => {
  return (
    <div className="request-container">
      <h2>Dispatch</h2>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search" className="search-input" />
        <button className="search-button">🔍</button>
        <input type="date" className="date-picker" />
      </div>


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
                <button className="details-button">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemTrackerPage;
