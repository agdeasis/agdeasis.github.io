import React from "react";

const ExperienceItem = ({ data }) => {
  return (
    <div className="box-exp bg-white">
      <div className="px-10 py-[50px]  bg-gray-50">
        <img
          src={"./images/work/" + data.img}
          alt=""
          className="mx-auto block max-w-full h-[80px]"
        />
      </div>
      <div className="content p-10">
        <h4 className="mb-7 font-medium">{data.name}</h4>
        <div>
          <span className="flex">
            <img src="./images/user.svg" className="mr-4" width="20" alt="" />
            {data.position}
          </span>
          <span className="flex mt-4">
            <img src="./images/cal.svg" className="mr-4" width="20" alt="" />
            {data.date}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
