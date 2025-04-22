import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setUserEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userName && userEmail) {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("name", userName);
      localStorage.setItem("email", userEmail);

      navigate("/profile", { state: { name: userName, email: userEmail } });
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 mx-auto" style={{ maxWidth: "400px" }}>
        <h3 className="text-center">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              value={userName}
              onChange={handleNameChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              value={userEmail}
              onChange={handleEmailChange}
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
