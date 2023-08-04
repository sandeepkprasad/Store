import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div>
      <div className="container pb-5">
        <div className="row justify-content-center">
          <div className="col-md-3 col-6">
            <div className="border border-danger-subtle text-center py-5 shadow-sm m-2 bg-danger-subtle rounded">
              <Link className="text-decoration-none" to="/">
                <h3 className="text-danger">Category 1</h3>
              </Link>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="border border-warning-subtle text-center py-5 shadow-sm m-2 bg-warning-subtle rounded">
              <Link className="text-decoration-none" to="/">
                <h3 className="text-warning">Category 2</h3>
              </Link>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="border border-success-subtle text-center py-5 shadow-sm m-2 bg-success-subtle rounded">
              <Link className="text-decoration-none" to="/">
                <h3 className="text-success">Category 3</h3>
              </Link>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="border border-info-subtle text-center py-5 shadow-sm m-2 bg-info-subtle rounded">
              <Link className="text-decoration-none" to="/allproducts">
                <h3 className="text-info">All Products</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
