import React from "react";
import hero from "../Assets/hero-img.webp";
import shipping from "../Assets/shipping.avif";
import payment from "../Assets/payment.jpg";
import batch from "../Assets/re-img.jpg";
import offer from "../Assets/offer.avif";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const btn = () => {
    navigate("/product");
  };

  return (
    <div>
      <section
        className="text-light text-center p-5 p-lg-5 position-relative"
        style={{
          backgroundImage: `url(${hero})`,
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        ></div>

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${hero})`,
            filter: "blur(10px)",
            zIndex: 0,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="container position-relative" style={{ zIndex: 2 }}>
          <h1 className="display-3 fw-bold">Shop the Latest Trends</h1>
          <p className="lead mt-3">
            Discover top-quality electronics & mobiles at unbeatable prices.
          </p>
          <Link to="/product" className="btn btn-warning btn-lg mt-4 px-4 py-2">
            🛒 Start Shopping
          </Link>
        </div>
      </section>

      <section id="shop" className="py-5 bg-light text-center">
        <div className="container-fluid">
          <h2 className="mb-4 fw-bold text-dark">Why Shop With ElectroMart?</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 border rounded-4 shadow-sm h-100 bg-white">
                <img
                  src={shipping}
                  alt="Free Shipping"
                  className="mb-3"
                  style={{ height: "80px" }}
                />
                <h4 className="mt-2">Free Shipping</h4>
                <p className="text-muted">
                  No delivery charges on orders over Rs. 1000.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 border rounded-4 shadow-sm h-100 bg-white">
                <img
                  src={payment}
                  alt="Secure Payment"
                  className="mb-3"
                  style={{ height: "80px" }}
                />
                <h4 className="mt-2">Secure Payments</h4>
                <p className="text-muted">
                  Encrypted transactions. 100% safe. COD available.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 border rounded-4 shadow-sm h-100 bg-white">
                <img
                  src={batch}
                  alt="Easy Returns"
                  className="mb-3"
                  style={{ height: "80px" }}
                />
                <h4 className="mt-2">Easy Returns</h4>
                <p className="text-muted">
                  7-day return policy. Hassle-free refund & exchanges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-warning text-dark text-center p-5">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="fw-bold display-5">Don't Miss Out!</h2>
              <p className="lead mt-2">
                Check out our latest arrivals and exclusive limited-time offers.
              </p>
              <button
                onClick={btn}
                className="btn btn-dark btn-lg mt-3 px-4 py-2"
              >
                🔍 Browse Products
              </button>
            </div>
            <div className="col-md-6">
              <img
                src={offer}
                alt="Offer Banner"
                className="img-fluid rounded-4 shadow"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
