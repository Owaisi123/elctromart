import React from "react";
import { useLocation } from "react-router-dom";

const Product = () => {
  const location = useLocation();
  const { name, price, image } = location.state || {};

  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">Product Details</h1>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow p-4">
            {image && (
              <img
                src={image}
                alt={name}
                className="card-img-top mb-4"
                style={{ maxHeight: "300px", objectFit: "contain" }}
              />
            )}
            <div className="card-body text-center">
              <h2 className="card-title">{name}</h2>
              <p className="card-text text-muted fs-4">{price}</p>

              <div className="d-flex justify-content-center gap-3 my-3">
                <button className="btn btn-warning">Add to Cart</button>
                <button className="btn btn-success">Buy Now</button>
              </div>

              <hr />

              <div className="text-start mt-4">
                <h5>About this product</h5>
                <p>
                  This {name?.toLowerCase()} offers top-notch quality with an
                  elegant design, making it the perfect choice for your
                  lifestyle. Enjoy immersive performance and reliable
                  durability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
