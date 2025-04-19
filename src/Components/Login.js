import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import Swal from "sweetalert2";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    localStorage.setItem("name", formData.name);
    localStorage.setItem("email", formData.email);

    await Swal.fire({
      title: "Message Sent!",
      text: "We have received your message and will get back to you shortly.",
      icon: "success",
      confirmButtonText: "Okay",
    });

    setFormData({ name: "", email: "", message: "" });

    navigate("/profile");
  };

  return (
    <div
      className="container min-vh-100 d-flex align-items-center justify-content-center py-5"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div
        className="card shadow-lg p-4 w-100 w-md-75 w-lg-50"
        style={{ backgroundColor: "#ffffff" }}
      >
        <h1 className="text-center text-dark mb-4">Login Us</h1>

        <div className="row g-4">
          <div className="col-md-6">
            <div
              className="card h-100 text-white p-4 rounded-lg shadow-md"
              style={{ backgroundColor: "#000000" }}
            >
              <h3 className="card-title text-white">Get in Touch</h3>
              <p className="text-white">
                If you have any questions, feel free to reach out to us!
              </p>
              <ul className="list-unstyled mt-3 text-white">
                <li>
                  <strong>Email:</strong> support@mysite.com
                </li>
                <li>
                  <strong>Phone:</strong> +1 234 567 890
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card p-4 bg-light rounded-lg shadow-md">
              <h3 className="card-title mb-4 text-dark">Login Form</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label text-dark">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-dark">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label text-dark">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-dark w-100 py-2">
                  Send Message
                </button>
              </form>

              <div className="d-flex justify-content-center gap-4 mt-4">
                <a
                  href="https://www.linkedin.com/in/muhammad-owais-902976322/"
                  className="text-white text-decoration-none"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className="d-flex justify-content-center align-items-center bg-primary rounded-circle p-3"
                    style={{ width: "50px", height: "50px" }}
                  >
                    <FaLinkedin className="fs-2" />
                  </div>
                </a>
                <a
                  href="https://github.com/Owaisi123"
                  className="text-white text-decoration-none"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className="d-flex justify-content-center align-items-center bg-dark rounded-circle p-3"
                    style={{ width: "50px", height: "50px" }}
                  >
                    <FaGithub className="fs-2" />
                  </div>
                </a>
                <a
                  href="https://x.com/M_Owaisi18"
                  className="text-white text-decoration-none"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className="d-flex justify-content-center align-items-center bg-info rounded-circle p-3"
                    style={{ width: "50px", height: "50px" }}
                  >
                    <FaTwitter className="fs-2" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
