import React from "react";

const Home = () => {
  return (
    <div className="flex w-full hero" id="home">
      <div className="background-hero h-[100vh] w-full flex absolute top-0 left-0">
        <div className="left w-[33%] hidden md:block"></div>
        <div className="right md:w-[66%] w-full bg-gray-100"></div>
      </div>
      <div className="container wrapper relative z-1 h-[100vh] flex items-center">
        <div className="hello">
          <h1
            className="text-outline md:text-[140px] text-6xl text-center md:text-left"
            style={{ lineHeight: 0.5 }}
          >
            ARNEL
          </h1>
          <h1 className="md:text-[140px] text-6xl text-dark main-font font-bold text-center md:text-left">
            DE ASIS
          </h1>
          <i className="mt-4 text-center md:text-left block md:mt-0">
            Front End Web Developer
          </i>
          <div className="my-6 md:max-w-[550px]">
            <p>I am a dedicated and goal-driven developer.</p>

            <p>
              I create user-friendly and high quality web applications aligned
              with the trends in the industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
