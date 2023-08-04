import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import storeContext from "../../Context/storeContext";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

const AllProducts = () => {
  const { getProducts, products } = useContext(storeContext);
  let navigate = useNavigate();

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);

  const handleBack = () => {
    navigate("/");
  };

  return (
    <section>
      <div className="container-fluid pt-5">
        <div className="row justify-content-start mb-3">
          <div className="col-3 col-md-3">
            <div className="back">
              <h3 className="text-danger" onClick={handleBack}>
                <BsFillArrowLeftSquareFill />
              </h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-start my-3">
          <div className="col-md-12">
            <div className="products-title">
              <h3>All Products</h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {products.length === 0 && <p className="fw-bold">No Product Found</p>}
          {products &&
            products.map((product) => (
              <div className="col-6 col-md-2 my-2" key={product.title}>
                <Link
                  className="text-decoration-none"
                  to={`/product/${product._id}`}
                >
                  <div className="card">
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h6 className="card-title">
                        {product.title.slice(0, 16)}...
                      </h6>
                      <p className="card-text">
                        {product.description.slice(0, 55)}...
                      </p>
                      <span
                        className={`badge rounded-pill text-bg-${
                          product.available ? "success" : "danger"
                        }`}
                      >
                        {product.available ? "In Stock" : "Out Stock"}
                      </span>
                      <h5 className="card-title mt-3">Buy at : ₹ {product.price}</h5>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
