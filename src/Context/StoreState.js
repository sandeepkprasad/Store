import { useState } from "react";
import storeContext from "./storeContext";

const StoreState = (props) => {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState({ type: "", message: "" });
  const [user, setUser] = useState([]);
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  const [wishs, setWishs] = useState([]);

  const getUser = async () => {
    let url = "https://storebackend-l0fx.onrender.com/user/getuser";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authtoken: localStorage.getItem("token"),
      },
    });

    const userData = await response.json();
    setUser(userData);
  };

  const getProducts = async () => {
    let url = "https://storebackend-l0fx.onrender.com/products/allproducts";
    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const json = await response.json();
    setProducts(json);
  };

  const getSingle = (id) => {
    const found = products.filter((ele) => {
      return ele._id === id;
    });

    setProducts(found);
  };

  const addCart = async (
    admin,
    image,
    title,
    description,
    price,
    category,
    available
  ) => {
    let url = "https://storebackend-l0fx.onrender.com/cart/addcart";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authtoken: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        admin,
        image,
        title,
        description,
        price,
        category,
        available,
      }),
    });

    const cart = await response.json();

    setCarts(carts.concat(cart));
    showAlert("success", "Added To Cart");
  };

  const getCart = async () => {
    let url = "https://storebackend-l0fx.onrender.com/cart/getcart";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authtoken: localStorage.getItem("token"),
      },
    });

    const cart = await response.json();
    setCarts(cart);
  };

  const deleteCart = async (id) => {
    let url = `https://storebackend-l0fx.onrender.com/cart/deletecart/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authtoken: localStorage.getItem("token"),
      },
    });

    const json = await response.json();
    console.log(json);

    const newCarts = carts.filter((cart) => {
      return cart._id !== id;
    });
    setCarts(newCarts);
    showAlert("danger", "Product Removed");
  };

  const addWishlist = async (
    admin,
    image,
    title,
    description,
    price,
    category,
    available
  ) => {
    let url = "https://storebackend-l0fx.onrender.com/wishlist/addwishlist";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authtoken: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        admin,
        image,
        title,
        description,
        price,
        category,
        available,
      }),
    });

    const wish = await response.json();
    setWishs(wishs.concat(wish));
    showAlert("success", "Added To Wishlist");
  };

  const getWishlist = async () => {
    let url = "https://storebackend-l0fx.onrender.com/wishlist/getwishlist";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authtoken: localStorage.getItem("token"),
      },
    });

    const json = await response.json();
    setWishs(json);
  };

  const deleteWishs = async (id) => {
    let url = `https://storebackend-l0fx.onrender.com/wishlist/deletewishlist/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authtoken: localStorage.getItem("token"),
      },
    });

    const json = await response.json();
    console.log(json);

    const newWishs = wishs.filter((wish) => {
      return wish._id !== id;
    });
    setWishs(newWishs);
    showAlert("danger", "Product Removed");
  };

  const handleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  const showAlert = (type, message) => {
    setAlert({ type: type, message: message });

    setTimeout(() => {
      showAlert();
    }, 3000);
  };

  const getSearch = (search) => {
    const found = products.filter((ele) => {
      return ele.title === search || ele.category === search;
    });

    if (found.length !== 0) {
      setProducts(found);
      showAlert("success", "Search Found");
    } else {
      showAlert("danger", "Search Not Found");
    }
  };

  return (
    <storeContext.Provider
      value={{
        mode,
        handleMode,
        alert,
        showAlert,
        getUser,
        user,
        getProducts,
        products,
        getSingle,
        addCart,
        carts,
        getCart,
        addWishlist,
        wishs,
        getWishlist,
        deleteWishs,
        getSearch,
        deleteCart,
      }}
    >
      {props.children}
    </storeContext.Provider>
  );
};

export default StoreState;
