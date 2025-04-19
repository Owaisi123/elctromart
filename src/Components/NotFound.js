import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaExclamationCircle } from "react-icons/fa";

const NotFound = () => {
  return (
    <div
      className="vh-100 h-100 d-flex flex-column justify-content-center align-items-center text-center px-3 px-md-4 pt-5"
      style={{
        background: "#ffffff",
        overflow: "hidden",
      }}
    >
      <FaExclamationCircle className="display-2 text-black mb-2" />

      <h1 className="display-5 fw-semibold text-black mb-2 text-center">
        404 - Oops! This Page is Lost in the Aisles.
      </h1>

      <p className="fs-6 text-black mb-2 text-center">
        We couldn’t find the page you were looking for. But don’t worry! You can
        always go back to shopping.
      </p>

      <FaShoppingCart className="fs-3 text-black mb-3" />

      <Link
        to="/"
        className="btn btn-light text-black px-3 py-1 rounded shadow border border-gray-200"
      >
        Go Back to Shopping
      </Link>
    </div>
  );
};

export default NotFound;
