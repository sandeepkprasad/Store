import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import storeContext from "../../Context/storeContext";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaRegWindowClose } from "react-icons/fa";

const Cart = () => {
  const { getCart, carts, deleteCart } = useContext(storeContext);
  let navigate = useNavigate();

  useEffect(() => {
    getCart();
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
              <h3>Cart</h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {carts.length === 0 && <p className="fw-bold">Empty Cart</p>}
          {carts.map((cart) => {
            return (
              <div
                className="col-10 col-md-8 border border-danger-subtle rounded mb-3"
                key={cart._id}
              >
                <div className="close text-danger mt-1">
                  <FaRegWindowClose onClick={() => deleteCart(cart._id)} />
                </div>
                <div className="cart-items d-md-flex justify-content-between">
                  <div className="image py-2">
                    <img
                      width={150}
                      height={100}
                      src={cart.image}
                      alt="..."
                      className="rounded"
                    />
                  </div>
                  <div className="text my-4">
                    <h4 className="fw-bold">{cart.title}</h4>
                    <span
                      className={`badge text-bg-${
                        cart.available ? "success" : "danger"
                      }`}
                    >
                      {cart.available ? "Available" : "Not Available"}
                    </span>
                  </div>
                  <div className="quantity d-flex h-25 pt-md-5">
                    <h5>
                      <button type="button" className="btn btn-outline-dark">
                        <AiOutlineMinus />
                      </button>
                    </h5>
                    <h3 className="mx-3">1</h3>
                    <h5>
                      <button type="button" className="btn btn-outline-dark">
                        <AiOutlinePlus />
                      </button>
                    </h5>
                  </div>
                  <div className="price py-2">
                    <p className="fw-bold">Price :</p>
                    <h4 className="fw-bold mt-3">₹{cart.price}</h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="row justify-content-center">
          <div className="col-8 col-md-8 border border-danger-subtle rounded py-3 mb-5">
            <div className="order d-flex justify-content-around">
              <h3 className="mx-3">Total : {carts.reduce((total, item)=>total+(item.price),0)}</h3>
              <button type="button" className="btn btn-outline-success">
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
