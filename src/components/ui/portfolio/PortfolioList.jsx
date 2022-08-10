import React from "react";
import PortFolioData from "./portfolioData";
import PortfolioItem from "./PortfolioItem";

const PortfolioList = () => {
  return (
    <div className="flex mt-[6rem]  w-full flex-wrap grid-osmar justify-between">
      {PortFolioData ? (
        PortFolioData.map((port, index) => (
          <div className="lg:w-[31%] md:w-[47%] mb-12 space-y-10 w-full">
            <PortfolioItem data={port} />
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default PortfolioList;
