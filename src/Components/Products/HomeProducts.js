import React from "react";
import { Link } from "react-router-dom";
import products from "../../ProductsData";

const HomeProducts = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-start my-3">
        <div className="col-md-12">
          <div className="products-title">
            <h3>Popular Products</h3>
          </div>
        </div>
      </div>
      <div className="row justify-content-end">
        <div className="col-md-1 col-sm-2">
          <div className="view-all text-end">
            <Link
              className="text-decoration-none text-danger"
              to="/allproducts"
            >
              View All
            </Link>
          </div>
        </div>
      </div>
      <div className="row my-3">
        {products &&
          products.map((product) => (
            <div className="col-md-2 col-6 my-2" key={product.title}>
              <Link
                className="text-decoration-none"
                to={`/product/${product.id}`}
              >
                <div className="card">
                  <img src={product.image} className="card-img-top" alt="..." />
                  <div className="card-body py-1">
                    <p className="card-text fw-bold">{product.title}</p>
                    <h5 className="card-title fw-bold">
                      Buy at : ₹ {product.price}
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomeProducts;
