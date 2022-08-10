import React from "react";
import ToolItems from "./ToolItems";
import { ToolData } from "./toolsData";

const ToolsList = () => {
  return (
    <div className="mb-5 tools flex items-center justify-center flex-wrap   mt-[50px] lg:max-w-[1000px] mx-auto">
      {ToolData ? (
        ToolData.map((tool, index) => (
          <ToolItems img={tool.img} name={tool.name} key={index} />
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default ToolsList;
