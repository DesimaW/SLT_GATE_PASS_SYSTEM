import React from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/myreceipt.css";

const requests = [
  { refNo: "2023070619531195", name: "Desima Weerasinghe", date: "2023-07-06 19:53:11" },
  { refNo: "20230713192352084", name: "Akesha Chandrasekara", date: "2023-07-13 19:23:52" },
  
];

const RequestTable: React.FC = () => {

  const navigate = useNavigate(); // Initialize navigate function
  return (
    <div className="request-container">
      <h2>My Receipts</h2>
      <table>
        <thead>
          <tr>
            <th>RefNo</th>
            <th>Name</th>
            <th>Created Date Time</th>
            <th>Full details</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request, index) => (
            <tr key={index}>
              <td>{request.refNo}</td>
              <td>{request.name}</td>
              <td>{request.date}</td>
              <td>
                <button className="details-button"  onClick={() => navigate(`/myreceiptdetails`)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestTable;
