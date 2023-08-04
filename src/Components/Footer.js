import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <section className="bg-danger rounded-top mt-5 d-none d-sm-block">
        <div className="row justify-content-center py-3">
          <div className="col-md-3 col-4 text-light">
            <h3 className="fw-bold">About</h3>
            <p>
              It is a MERN Stack Store application, developed by Sandeep Kumar.
            </p>
          </div>
          <div className="col-md-3 col-4 text-light">
            <h4 className="fw-bold">Pages</h4>
            <Link className="text-decoration-none text-light" to="/">
              <p>Home</p>
            </Link>
            <Link className="text-decoration-none text-light" to="/">
              <p>All Products</p>
            </Link>
            <Link className="text-decoration-none text-light" to="/about">
              <p>About</p>
            </Link>
          </div>
          <div className="col-md-3 col-4 text-light">
            <h3 className="fw-bold">Contacts</h3>
            <p>Email : example@email.com</p>
            <p>Mobile : +91 12345 67890</p>
          </div>
        </div>
      </section>
      <section className="bg-danger rounded-top mt-5 d-block d-sm-none">
        <div className="row justify-content-center pt-3 pb-5">
          <div className="col-8 fw-bold text-light text-center">
            <h3>StoreWala</h3>
            <p className="text-muted">by Sandeep Kumar</p>
            <p className="text-muted">2023</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
