import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-light text-center py-2">
        <div className="container">
          <h1 className="display-4 fw-bold text-white">Contact Us</h1>
          <p className="lead opacity-90 text-white">
            We're here to help. Reach out to us through any of the available
            channels below.
          </p>
        </div>
      </section>

      <section className="py-4 bg-white shadow-md">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 className="fw-bold mb-3 text-primary">
                Our Contact Information
              </h3>
              <p className="text-muted mb-4">
                Whether you're inquiring about a product, service, or have a
                support question, we're always here to assist.
              </p>

              <ul className="list-unstyled text-start">
                <li className="mb-3">
                  <i className="bi bi-telephone text-primary"></i>{" "}
                  <strong>Phone:</strong> +1 234 567 890
                </li>
                <li className="mb-3">
                  <i className="bi bi-envelope text-primary"></i>{" "}
                  <strong>Email:</strong> abc@company.com
                </li>
                <li className="mb-3">
                  <i className="bi bi-geo-alt text-primary"></i>{" "}
                  <strong>Address:</strong> abc, karachi, Pakistan
                </li>
              </ul>
            </div>

            <div className="col-md-6">
              <h3 className="fw-bold mb-3 text-primary">Our Location</h3>
              <div className="card shadow-sm rounded">
                <iframe
                  title="Google Maps Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11652.242229496814!2d74.3587!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b5b9d21d7cf%3A0xa1f8ad05d1b6c902!2sKarachi%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1634709060394!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 text-center text-white">
        <div className="container">
          <h2 className="fw-bold mb-3">Follow Us</h2>
          <p className="lead mb-4">
            Stay updated by following us on social media!
          </p>
          <div className="d-flex justify-content-center gap-4">
            <a
              href="https://www.linkedin.com/in/muhammad-owais-902976322/"
              className="text-white text-decoration-none"
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
      </section>

      <section className="bg-dark text-light text-center py-5">
        <div className="container">
          <h2 className="fw-bold mb-3">Looking for More Info?</h2>
          <p className="lead opacity-75 mb-4">
            Feel free to contact us if you need more information. We are here to
            assist you!
          </p>
          <Link
            to="/login"
            className="btn btn-lg px-5 py-3 rounded-pill shadow-lg text-white bg-gradient-to-r from-gray-700 to-gray-900 hover:bg-gradient-to-l hover:from-gray-800 hover:to-gray-900 border-2 border-gray-700 hover:border-gray-900 transition-all duration-300"
          >
            Join Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Contact;
