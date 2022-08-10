import React from "react";

const ServiceItem = ({ title, desc, img }) => {
  return (
    <div className="lg:flex  lg:mt-[10px]">
      <div className="lg:w-[50px] pt-3">
        <img src={img} className="block mx-auto w-[70px]" alt="" />
      </div>
      <div className="lg:w-[calc(100%-50px)] p-4 text-center lg:text-left">
        <h4 className="text-[20px] font-semibold mb-4">{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
