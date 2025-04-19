import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#000", width: "100%" }}>
      <footer className="text-white pt-5 pb-4">
        <div className="container">
          <div className="row text-center text-md-left">
            <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Owaisi Tech
              </h5>
              <p>
                We offer the best tech products that enhance your life. Quality,
                performance, and satisfaction are our priorities.
              </p>
            </div>

            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Quick Links
              </h5>
              <p>
                <a href="/" className="text-white text-decoration-none">
                  Home
                </a>
              </p>
              <p>
                <a href="/product" className="text-white text-decoration-none">
                  Products
                </a>
              </p>
              <p>
                <a href="/about" className="text-white text-decoration-none">
                  About Us
                </a>
              </p>
              <p>
                <a href="/contact" className="text-white text-decoration-none">
                  Contact
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Follow Us
              </h5>
              <div className="row justify-content-center">
                <div className="col-2 text-center">
                  <a
                    href="https://github.com/Owaisi123"
                    className="text-white fs-4"
                  >
                    <FaGithub />
                  </a>
                </div>
                <div className="col-2 text-center">
                  <a
                    href="https://x.com/M_Owaisi18"
                    className="text-white fs-4"
                  >
                    <FaTwitter />
                  </a>
                </div>
                <div className="col-2 text-center">
                  <a
                    href="https://www.linkedin.com/in/muhammad-owais-902976322/"
                    className="text-white fs-4"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-4 text-white" />

          <div className="row align-items-center">
            <div className="col-md-12 text-center">
              <p className="mb-0">
                &copy; {new Date().getFullYear()} Owaisi Tech. All Rights
                Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
