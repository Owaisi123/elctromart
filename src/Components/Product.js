import React from "react";
import { Link } from "react-router-dom";
import headphones from "../Assets/headphones.jpg";
import bluetooth from "../Assets/bluetooth speaker.webp";
import tsw from "../Assets/tws.webp";
import ftw from "../Assets/FTW.webp";
import projector from "../Assets/projecter-pic.jpg";
import bulb from "../Assets/Smart Light Bulbs.jpg";
import headset from "../Assets/headset.jpg";
import mouse from "../Assets/mouse.jpg";
import portable from "../Assets/Portable Power Station.jpg";
import doorbell from "../Assets/Smart Doorbell.jpg";
import mobile from "../Assets/Foldable Smartphone.webp";
import laptop from "../Assets/Gaming Laptop.jpg";

const ProductList = () => {
  const products = [
    { id: 1, name: "Headphones", price: "$149", image: headphones },
    { id: 2, name: "Bluetooth Speaker", price: "$99", image: bluetooth },
    { id: 3, name: "True Wireless Earbuds (TWS)", price: "$99", image: tsw },
    { id: 4, name: "Smart Fitness Tracker", price: "$99", image: ftw },
    { id: 5, name: "Portable Projector", price: "$99", image: projector },
    { id: 6, name: "Smart Light Bulbs", price: "$99", image: bulb },
    { id: 7, name: "VR Headset", price: "$99", image: headset },
    {
      id: 8,
      name: "Gaming Mouse with RGB Lighting",
      price: "$99",
      image: mouse,
    },
    { id: 9, name: "Portable Power Station", price: "$99", image: portable },
    { id: 10, name: "Smart Doorbell", price: "$99", image: doorbell },
    { id: 11, name: "Foldable Smartphone", price: "$99", image: mobile },
    { id: 12, name: "Gaming Laptop", price: "$99", image: laptop },
  ];

  return (
    <div className="container py-4">
      <h2 className="text-center mb-5 fw-bold">Explore Our Tech Collection</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                style={{ height: "200px", objectFit: "contain", width: "100%" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price}</p>
                <Link
                  to={`/product/${product.id}`}
                  state={{
                    name: product.name,
                    price: product.price,
                    image: product.image,
                  }}
                  className="btn btn-primary mt-auto"
                >
                  View Product
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
