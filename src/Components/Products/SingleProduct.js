import React, { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import storeContext from "../../Context/storeContext";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

const SingleProduct = () => {
  const { id } = useParams();
  const { getSingle, products, addCart, addWishlist } =
    useContext(storeContext);
  let navigate = useNavigate();

  useEffect(() => {
    getSingle(id);
    // eslint-disable-next-line
  }, []);

  const handleBack = () => {
    navigate("/allproducts");
  };

  return (
    <section>
      <div className="container py-5">
        <div className="row justify-content-start mb-5">
          <div className="col-3 col-md-3">
            <div className="back">
              <h3 className="text-danger" onClick={handleBack}>
                <BsFillArrowLeftSquareFill />
              </h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-12 col-md-8">
            {products &&
              products.map((product) => {
                return (
                  <div className="card" key={product._id}>
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h3 className="card-title">{product.title}</h3>
                      <p className="card-text">{product.description}</p>
                      <h3 className="card-title">Price : ₹ {product.price}</h3>
                      <div className="my-5">
                        <button
                          type="button"
                          className="btn btn-outline-danger me-2"
                          onClick={() =>
                            addWishlist(
                              product.admin,
                              product.image,
                              product.title,
                              product.description,
                              product.price,
                              product.category,
                              product.available
                            )
                          }
                        >
                          Wishlist
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-success ms-2"
                          onClick={() =>
                            addCart(
                              product.admin,
                              product.image,
                              product.title,
                              product.description,
                              product.price,
                              product.category,
                              product.available
                            )
                          }
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
