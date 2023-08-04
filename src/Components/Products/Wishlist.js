import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import storeContext from "../../Context/storeContext";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

const Wishlist = () => {
  const { getWishlist, wishs, deleteWishs, addCart } = useContext(storeContext);
  let navigate = useNavigate();

  useEffect(() => {
    getWishlist();
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
              <h3>Wishlist</h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {wishs.length === 0 && <p className="fw-bold">Empty Wishlist</p>}
          {wishs &&
            wishs.map((wish) => (
              <div className="col-6 col-md-2 my-2" key={wish.title}>
                <div className="card">
                  <img src={wish.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h6 className="card-title">{wish.title.slice(0, 16)}...</h6>
                    <p className="card-text">
                      {wish.description.slice(0, 55)}...
                    </p>
                    <span
                      className={`badge rounded-pill text-bg-${
                        wish.available ? "success" : "danger"
                      }`}
                    >
                      {wish.available ? "In Stock" : "Out Stock"}
                    </span>
                    <h5 className="card-title mt-3">Buy at : ₹ {wish.price}</h5>
                    <div className="botton d-flex justify-content-around">
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm me-1"
                        onClick={() => {
                          deleteWishs(wish._id);
                        }}
                      >
                        Remove
                      </button>
                      <button
                        type="button"
                        disabled={!wish.available}
                        className="btn btn-success btn-sm ms-1"
                        onClick={() =>
                          addCart(
                            wish.admin,
                            wish.image,
                            wish.title,
                            wish.description,
                            wish.price,
                            wish.category,
                            wish.available
                          )
                        }
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
