import React from "react";
import ToolsList from "./ui/tools/ToolsList";

const Tools = () => {
  return (
    <div className="container">
      <div className="overflow-x-clip">
        <h1 className=" header-title">
          Tools
          <span>TECHNOLOGIES </span>
        </h1>
        <i className="mt-10 block">Techonologies and tools that I use.</i>
      </div>
      <div className="mb-12">
        <ToolsList />
      </div>
    </div>
  );
};

export default Tools;
