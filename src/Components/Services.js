import React from "react";
import deliveryImg from "../Assets/delivery.jpg";
import supportImg from "../Assets/customer.avif";
import returnsImg from "../Assets/re-img.jpg";
import shippingImg from "../Assets/shipping.avif";
import promoImg from "../Assets/discount.jpg";
import payments from "../Assets/payment1.webp";
import { Link } from "react-router-dom";

const Servise = () => {
  const services = [
    {
      icon: "bi-box-seam",
      title: "Product Delivery",
      desc: "Fast, secure, and trackable delivery services across Pakistan.",
      color: "primary",
      img: deliveryImg,
    },
    {
      icon: "bi-headset",
      title: "Customer Support",
      desc: "24/7 support to help you with orders, returns, and product info.",
      color: "success",
      img: supportImg,
    },
    {
      icon: "bi-credit-card-2-front",
      title: "Secure Payments",
      desc: "Multiple payment options with end-to-end encryption.",
      color: "warning",
      img: payments,
    },
    {
      icon: "bi-arrow-clockwise",
      title: "Easy Returns",
      desc: "7-day return policy with no questions asked.",
      color: "danger",
      img: returnsImg,
    },
    {
      icon: "bi-globe",
      title: "Nationwide Shipping",
      desc: "We deliver in every city — from Karachi to Kashmir.",
      color: "info",
      img: shippingImg,
    },
    {
      icon: "bi-tags",
      title: "Promotions & Discounts",
      desc: "Exciting weekly deals and seasonal sales to save big.",
      color: "secondary",
      img: promoImg,
    },
  ];

  return (
    <div>
      <section
        className="text-light text-center py-5"
        style={{ background: "linear-gradient(120deg, #4f4f4f, #2c2c2c)" }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">Our Services</h1>
          <p className="lead opacity-75">
            We offer everything you need to shop with ease and confidence.
          </p>
        </div>
      </section>

      <section className="py-5" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="container">
          <div className="row g-4">
            {services.map((service, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div
                  className="card border-0 shadow-sm h-100 rounded-4 overflow-hidden service-card"
                  style={{
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                >
                  <div className="overflow-hidden" style={{ height: "250px" }}>
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-100 h-100 object-fit-cover"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </div>
                  <div className="card-body text-center">
                    <i
                      className={`bi ${service.icon} fs-1 text-${service.color}`}
                    ></i>
                    <h5 className="mt-3 fw-semibold">{service.title}</h5>
                    <p className="text-muted">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark text-light text-center py-5">
        <div className="container">
          <h2 className="fw-bold mb-3">Experience Premium Services</h2>
          <p className="lead opacity-75 mb-4">
            Shop with confidence — smooth, safe, and reliable service at your
            fingertips.
          </p>
          <Link
            to={"/product"}
            className="btn btn-warning btn-lg px-5 py-3 rounded-pill shadow"
          >
            Explore Products
          </Link>
        </div>
      </section>

      <style jsx>{`
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        }
        .service-card:hover img {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default Servise;
