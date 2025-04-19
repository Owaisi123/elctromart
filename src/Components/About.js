import React from "react";
import { Link } from "react-router-dom";
import mission from "../Assets/missions.jpg";
import founder1 from "../Assets/founder1.jpg";
import founder2 from "../Assets/founder2.jpg";
import founder3 from "../Assets/founder3.jpg";
import heroImage from "../Assets/hero.avif";

const About = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      {/* Hero Section */}
      <section className="position-relative">
        <img
          src={heroImage}
          alt="About Banner"
          className="img-fluid w-100 hero-banner"
          style={{
            maxHeight: "500px",
            objectFit: "cover",
            filter: "brightness(75%)",
          }}
        />
        <div
          className="position-absolute top-50 start-50 translate-middle text-white text-center px-3"
          style={{ zIndex: 1 }}
        >
          <h1 className="display-4 display-md-3 fw-bold">About ShopEase</h1>
          <p className="lead">Driven by passion. Guided by purpose.</p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <img
                src={mission}
                alt="Our mission"
                className="img-fluid rounded-4 shadow-sm"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="fw-bold mb-3">Our Mission</h2>
              <p className="text-muted">
                At ShopEase, our mission is to provide high-quality, affordable
                products that make life better. We're committed to delivering
                happiness at your doorstep — quickly, safely, and with a smile.
              </p>
              <h3 className="fw-semibold mt-4">Our Vision</h3>
              <p className="text-muted">
                To become one of the most trusted and loved online shopping
                platforms in the region by putting our customers first in
                everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-5 bg-white text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Meet the Team</h2>
          <p className="text-muted mb-5 px-md-5">
            ShopEase began as a dream shared by a group of friends who believed
            in making online shopping more efficient, trustworthy, and personal.
            Today, we proudly serve thousands with commitment and care.
          </p>

          <div className="row g-4 justify-content-center">
            {[
              { img: founder1, name: "Sarah Khan", role: "Founder & CEO" },
              { img: founder2, name: "Ali Raza", role: "Operations Manager" },
              { img: founder3, name: "Ayesha Noor", role: "Lead Designer" },
            ].map((person, i) => (
              <div className="col-md-4" key={i}>
                <div className="p-4 border rounded-4 shadow-sm h-100">
                  <img
                    src={person.img}
                    alt={person.name}
                    className="rounded-circle mb-3 shadow"
                    width="150"
                    height="150"
                  />
                  <h5 className="fw-semibold">{person.name}</h5>
                  <p className="text-muted">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dark text-light text-center py-5">
        <div className="container">
          <h2 className="fw-bold mb-3">Ready to Join Our Journey?</h2>
          <p className="lead mb-4">
            Be a part of the ShopEase community — where shopping meets ease!
          </p>
          <Link
            to="/login"
            className="btn btn-warning btn-lg px-4 py-2 shadow"
          >
            Join Us Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;

