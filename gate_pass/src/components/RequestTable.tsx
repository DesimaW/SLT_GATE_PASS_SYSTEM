import React from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/RequestTable.css";
import "./../styles/navbar.css"

const requests = [
  { refNo: "2023070619531195", date: "2023-07-06 19:53:11", status: "Pending" },
  { refNo: "20230713192352084", date: "2023-07-13 19:23:52", status: "Pending" },
  { refNo: "2023071412082471", date: "2023-07-14 12:08:24", status: "Pending" },
  { refNo: "2023061610307536", date: "2023-06-16 10:30:37", status: "Pending" },
  { refNo: "2023061610307536", date: "2023-06-16 10:30:37", status: "Pending" },
  { refNo: "2023061610307536", date: "2023-06-16 10:30:37", status: "Pending" },
  { refNo: "2023061610307536", date: "2023-06-16 10:30:37", status: "Pending" },
  { refNo: "2023061610307536", date: "2023-06-16 10:30:37", status: "Pending" },
  { refNo: "2023070619531195", date: "2023-07-06 19:53:11", status: "Pending" },
  { refNo: "20230713192352084", date: "2023-07-13 19:23:52", status: "Pending" },
];

const RequestTable: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="request-container">
      <h2>My Request</h2>
      <table>
        <thead>
          <tr>
            <th>RefNo</th>
            <th>Created Date Time</th>
            <th>Approval</th>
            <th>Full details</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request, index) => (
            <tr key={index}>
              <td>{request.refNo}</td>
              <td>{request.date}</td>
              <td className="pending-status">{request.status}</td>
              <td>
                <button 
                  className="details-button"
                  onClick={() => navigate(`/request`)}
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestTable;
