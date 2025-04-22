import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
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

  const handleLogin = (event) => {
    event.preventDefault();
    if (userName && userEmail) {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("name", userName);
      localStorage.setItem("email", userEmail);

      Swal.fire({
        title: "Success!",
        text: "You have logged in successfully!",
        icon: "success",
        confirmButtonText: "OK",
        timer: 1500,
        timerProgressBar: true,
      }).then(() => {
        navigate("/profile", { state: { name: userName, email: userEmail } });
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Please fill in both name and email.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 mx-auto" style={{ maxWidth: "400px" }}>
        <h3 className="text-center">Login</h3>
        <form>
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
          <button
            type="button"
            onClick={handleLogin}
            className="btn btn-primary w-100"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
