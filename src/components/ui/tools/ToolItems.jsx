import React from "react";

const ToolItems = ({ name, img }) => {
  return (
    <div className="flex flex-col items-center justify-center m-5">
      <img src={"./images/tools/" + img} alt="" className="tool-img w-[80px]" />
      <p className="mt-3 main-font">{name}</p>
    </div>
  );
};

export default ToolItems;
