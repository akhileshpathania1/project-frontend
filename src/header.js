import React from "react";

const Header = () => {
  return (
    <React.Fragment>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">ORDER FOOD NOW</h1>
            <p className="lead fw-normal text-white-50 mb-0">UPTO 20% OFF</p>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
