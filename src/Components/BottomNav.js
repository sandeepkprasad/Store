import React from "react";
import { Link } from "react-router-dom";
import { BiHomeHeart, BiSearch, BiHeart, BiCart } from "react-icons/bi";

const BottomNav = () => {
  return (
    <section className="fixed-bottom d-block d-sm-none bg-light pt-1 pb-3">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-3 text-center">
            <Link className="text-dark fs-1 fw-bold" to="/">
              <BiHomeHeart />
            </Link>
          </div>
          <div className="col-3 text-center">
            <Link className="text-dark fs-1 fw-bold" to="/search">
              <BiSearch />
            </Link>
          </div>
          <div className="col-3 text-center">
            <Link className="text-dark fs-1 fw-bold" to="/wishlist">
              <BiHeart />
            </Link>
          </div>
          <div className="col-3 text-center">
            <Link className="text-dark fs-1 fw-bold" to="/cart">
              <BiCart />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomNav;
