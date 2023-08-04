import React, { useContext, useEffect } from "react";
import storeContext from "../Context/storeContext";
import Carousel from "./Carousel";
import Category from "./Category";
import HomeProducts from "./Products/HomeProducts";
import Footer from "./Footer";
import BottomNav from "./BottomNav";

const Home = () => {
  const { getUser } = useContext(storeContext);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUser();
    }
    // eslint-disable-next-line
  });
  return (
    <div className="pt-3">
      <Carousel />
      <Category />
      <HomeProducts />
      <Footer />
      <BottomNav />
    </div>
  );
};

export default Home;
