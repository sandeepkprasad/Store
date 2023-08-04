import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StoreState from "./Context/StoreState";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Signup from "./Components/Authentication/Signup";
import Login from "./Components/Authentication/Login";
import ShowAlert from "./Components/ShowAlert";
import About from "./Components/About";
import AllProducts from "./Components/Products/AllProducts";
import SingleProduct from "./Components/Products/SingleProduct";
import Wishlist from "./Components/Products/Wishlist";
import Cart from "./Components/Products/Cart";
import Search from "./Components/Products/Search";
import BottomNav from "./Components/BottomNav";

const App = () => {
  return (
    <StoreState>
      <Router>
        <Navbar />
        <BottomNav />
        <ShowAlert />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/allproducts" element={<AllProducts />} />
          <Route exact path="/product/:id" element={<SingleProduct />} />
          <Route exact path="/wishlist" element={<Wishlist />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/search" element={<Search />} />
        </Routes>
      </Router>
    </StoreState>
  );
};

export default App;
