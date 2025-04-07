import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../AuthContext";
import "../Login/login.css";


const Login: React.FC = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("SLT"); // Default to SLT
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate authentication
    const user = await authenticateUser(userId, password, userType);
    if (user) {
      login(user.role);
      redirectUser(user.role); // Redirect based on role
    } else {
      setError("Invalid credentials");
    }
  };

  const authenticateUser = async (userId: string, password: string, userType: string) => {
    // Simulate an API call to your backend
    const users = [
      // SLT Users
      { serviceNumber: "123", password: "123", role: "User", userType: "SLT" },
      { serviceNumber: "456", password: "456", role: "Admin", userType: "SLT" },
      { serviceNumber: "789", password: "789", role: "Executive Officer", userType: "SLT" },
      { serviceNumber: "101", password: "101", role: "Duty Officer", userType: "SLT" },
      //{ serviceNumber: "102", password: "102", role: "Security Officer", userType: "SLT" },
      // Non-SLT Users
      { serviceNumber: "201", password: "201", role: "Security Officer", userType: "Non-SLT" },
    ];

    const user = users.find(
      (u) =>
        u.serviceNumber === userId &&
        u.password === password &&
        u.userType === userType
    );

    return user ? { role: user.role } : null;
  };

  const redirectUser = (role: string) => {
    switch (role) {
      case "Admin":
        navigate("/admin");
        break;
      case "User":
        navigate("/gate-pass");
        break;
      case "Executive Officer":
        navigate("/ex");
        break;
      case "Duty Officer":
        navigate("/verifypage");
        break;
      case "Security Officer":
        navigate("/dispatch");
        break;
      default:
        navigate("/unauthorized");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="title">SLT GATE PASS</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">User Type</label>
            <select
              id="userType"
              className="form-input"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="SLT">SLT</option>
              <option value="Non-SLT">Non-SLT</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="userId" className="form-label">User ID</label>
            <input
              type="text"
              id="userId"
              className="form-input"
              placeholder="Enter User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-input"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;