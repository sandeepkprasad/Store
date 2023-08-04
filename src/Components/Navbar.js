import React, { useContext, useEffect } from "react";
import storeContext from "../Context/storeContext";
import { Link, useLocation } from "react-router-dom";
import { BsSun } from "react-icons/bs";
import { BiUserCircle, BiHeart, BiShoppingBag } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const { mode, handleMode, showAlert, user, getUser } =
    useContext(storeContext);
  const location = useLocation();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUser();
    }
    // eslint-disable-next-line
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    showAlert("success", "Logged Out Successfully");
  };
  return (
    <div className="mb-5">
      <nav
        className={`navbar navbar-expand-lg navbar-${mode} bg-${mode} shadow-sm fixed-top`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand mx-2 fs-3 text-danger fw-bold" to="/">
            Store
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2 fw-bold">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Hello, <i>{user.name}</i>
                </Link>
              </li>
              <li className="nav-item mx-2 fw-bold d-none d-sm-block">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2 fw-bold">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
            <Link className="text-decoration-none" to="/search">
              <div className="mx-2 text-danger d-none d-sm-block">
                <h5>
                  <FaSearch />
                </h5>
              </div>
            </Link>
            <div
              className={`dropdown mx-2 text-${
                mode === "light" ? "dark" : "light"
              }`}
            >
              <h4 role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <BiUserCircle />
              </h4>
              <ul className={`dropdown-menu bg-${mode}`}>
                <li>
                  {localStorage.getItem("token") ? (
                    <Link
                      className={`dropdown-item text-${
                        mode === "light" ? "dark" : "light"
                      }`}
                      to="/"
                      onClick={handleLogout}
                    >
                      <strong>Logout</strong>
                    </Link>
                  ) : (
                    <Link
                      className={`dropdown-item text-${
                        mode === "light" ? "dark" : "light"
                      }`}
                      to="/login"
                    >
                      <strong>Login</strong>
                    </Link>
                  )}
                </li>
              </ul>
            </div>
            <Link
              to="/wishlist"
              className={`mx-2 text-${
                mode === "light" ? "dark" : "light"
              } d-none d-sm-block`}
            >
              <h4>
                <BiHeart />
              </h4>
            </Link>
            <Link
              to="/cart"
              className={`mx-2 text-${
                mode === "light" ? "dark" : "light"
              } d-none d-sm-block`}
            >
              <h4>
                <BiShoppingBag />
              </h4>
            </Link>
            <div
              className={`mx-2 text-${mode === "light" ? "dark" : "light"}`}
              onClick={handleMode}
            >
              <h4>
                <BsSun />
              </h4>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
