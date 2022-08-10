import React from "react";
import PortfolioList from "./ui/portfolio/PortfolioList";

const PortFolio = () => {
  return (
    <section className="sec-wrapper bg-gray" id="portfolio">
      <div className="container">
        <div className="overflow-x-clip">
          <h1 className=" header-title">
            Some of my works
            <span>Portfolio </span>
          </h1>
          <i className="mt-10 block">Checkout some of my recent projects.</i>
        </div>
        <div>
          <PortfolioList />
        </div>
      </div>
    </section>
  );
};

export default PortFolio;
