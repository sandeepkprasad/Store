import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import storeContext from "../../Context/storeContext";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

const Search = () => {
  const { getProducts, getSearch, products } = useContext(storeContext);
  let navigate = useNavigate();
  const [search, setSearch] = useState({ search: "" });

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);

  const handleBack = () => {
    navigate("/");
  };

  const handleChange = (e) => {
    setSearch({ search, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    getSearch(search.search);
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
        <div className="row justify-content-center mb-4">
          <div className="col-8 col-md-4">
            <div className="search">
              <form className="d-flex" role="search" onSubmit={handleSubmit}>
                <input
                  className="form-control me-2"
                  type="search"
                  id="search"
                  name="search"
                  value={search.search}
                  placeholder="Search By Name or Category"
                  aria-label="Search"
                  required
                  onChange={handleChange}
                />
                <button className="btn btn-outline-danger" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {products.length === 0 && <p className="fw-bold">No Search Found</p>}
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
                      <h5 className="card-title mt-3">
                        Buy at : ₹ {product.price}
                      </h5>
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

export default Search;
