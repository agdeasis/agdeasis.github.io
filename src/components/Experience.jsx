import React from "react";
import ExperienceList from "./ui/experience/ExperienceList";

const Experience = () => {
  return (
    <section className="sec-wrapper" id="experience">
      <div className="container">
        <div className="overflow-x-clip">
          <h1 className=" header-title">
            Work
            <span>Experience </span>
          </h1>
          <i className="mt-10 block">Companies I work with.</i>
        </div>
        <div className="">
          <ExperienceList />
        </div>
      </div>
    </section>
  );
};

export default Experience;
