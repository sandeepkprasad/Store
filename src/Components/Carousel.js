import React from "react";
import image1 from "../Assests/image1.jpg";
import image2 from "../Assests/image2.jpg";
import image3 from "../Assests/image3.jpg";

const Carousel = () => {
  return (
    <div className="py-5">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img
              height="350"
              width="100"
              src={image1}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              height="350"
              width="100"
              src={image2}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              height="350"
              width="100"
              src={image3}
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
