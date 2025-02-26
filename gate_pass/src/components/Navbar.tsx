import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import "../styles/navbar.css";
import logo from "../assets/logo.png"; // Ensure you have a logo in the assets folder

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login"); // Redirect to the login page after logout
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo on the left */}
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" />
        </Link>
        {/* Mobile menu toggle button */}
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
        {/* Navigation Links on the right */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><Link to="/gate-pass">New Request</Link></li>
          <li><Link to="/requesttable">My Request</Link></li>
          <li><Link to="/ex">Executive Approve</Link></li>
          <li><Link to="/verifypage">Verify</Link></li>
          <li><Link to="/myreceipt">My Receipt</Link></li>
          <li><Link to="/dispatch">Dispatch</Link></li>
          <li><Link to="/itemtracker">Item Tracker</Link></li>
          <li><Link to="/admin">Admin</Link></li>
          <li><button onClick={handleLogout} className="logout">Logout</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;