import React from "react";
import { ExperienceData } from "./experienceData";
import ExperienceItem from "./ExperienceItem";

const ExperienceList = () => {
  return (
    <div className="mt-[6rem]">
      <div className="md:flex flex-wrap lg:space-x-10 justify-between">
        {ExperienceData ? (
          ExperienceData.map((exp, index) => (
            <div className="lg:w-[30%] md:w-[47%] mb-12 space-y-10 w-full">
              <ExperienceItem data={exp} key={index} />
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ExperienceList;
