import React from "react";
import "../core/Private.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {createGlobalStyle} from "styled-components";

// ------------------------------------------------------------------------------------------------>
const PrivateStyle = createGlobalStyle`

  .carousel-caption {
    color: var(--bs-black);
    bottom: 3rem;
    z-index: 10;
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    filter: invert(1) grayscale(1) brightness(10);
  }

  .carousel-indicators .active {
    filter: invert(1) grayscale(1) brightness(10);
  }

  .carousel-item {
    height: 32rem;
    transition: -webkit-transform 0.3s ease;
    overflow: hidden;
    opacity: 0.5;
  }

  .carousel-item.active {
    opacity: 1;
  }

  .bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }
`;

// ------------------------------------------------------------------------------------------------>
const CarouselFirst = () => {
  return (
    <div className="carousel-item active">
      <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
        <rect width="100%" height="100%" fill="#eeeeee" />
      </svg>
      <div className="container">
        <div className="carousel-caption text-start">
          <h1>Example headline.</h1>
          <p>Some representative placeholder content for the first slide of the carousel.</p>
          <p>
            <a className="btn btn-lg btn-primary" href="#">
              Sign up today
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

// ------------------------------------------------------------------------------------------------>
const CarouselSecond = () => {
  return (
    <div className="carousel-item">
      <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
        <rect width="100%" height="100%" fill="#eeeeee" />
      </svg>

      <div className="container">
        <div className="carousel-caption">
          <h1>Another example headline.</h1>
          <p>Some representative placeholder content for the second slide of the carousel.</p>
          <p>
            <a className="btn btn-lg btn-primary" href="#">
              Learn more
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

// ------------------------------------------------------------------------------------------------>
const CarouselThird = () => {
  return (
    <div className="carousel-item">
      <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
        <rect width="100%" height="100%" fill="#eeeeee" />
      </svg>

      <div className="container">
        <div className="carousel-caption text-end">
          <h1>One more for good measure.</h1>
          <p>Some representative placeholder content for the third slide of this carousel.</p>
          <p>
            <a className="btn btn-lg btn-primary" href="#">
              Browse gallery
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

// ------------------------------------------------------------------------------------------------>
const Private = () => {

  return (
    <div>
    <Header />
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <PrivateStyle />
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <CarouselFirst />
          <CarouselSecond />
          <CarouselThird />
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    <Footer />
    </div>
  );
};

export default Private;
