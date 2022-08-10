import React from "react";
import ServiceItem from "./ServiceItem";

const Service = () => {
  return (
    <div className="md:flex md:space-x-6 mt-[100px] lg:mt-[10px]">
      <div className="md:w-1/3">
        <ServiceItem
          img="./images/service/dev.png"
          title="Development"
          desc="Convert UI/UX design into functional and working website. Integrate REST API from backend."
        />
      </div>
      <div className="md:w-1/3">
        <ServiceItem
          img="./images/service/res.png"
          title="Responsive Design"
          desc="Build website from different devices, browsers, and cross platforms using media queries and other tools. "
        />
      </div>
      <div className="md:w-1/3">
        <ServiceItem
          img="./images/service/opti.png"
          title="Optimization"
          desc="Provide solution and fix common problems that affect website's performance and user's experience."
        />
      </div>
    </div>
  );
};

export default Service;
