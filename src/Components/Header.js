import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg sticky-top py-4">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold fs-3 text-warning" to="/">
          ElectroMart
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex justify-content-center">
            <li className="nav-item mx-3">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/product">
                Products
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>
          </ul>

          <div className="d-flex ms-auto align-items-center">
            <Link to="/login" className="btn btn-outline-light py-2 px-4">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
