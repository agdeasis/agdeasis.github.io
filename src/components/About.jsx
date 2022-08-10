import React from "react";
import Service from "./ui/Service";

const About = () => {
  return (
    <section className="section-about sec-wrapper overflow-x-hidden" id="about">
      <div className="container">
        <div className="lg:flex">
          <div className="lg:w-[40%] w-full">
            <div className="div-img my-5 pb-[40px]">
              <img
                src="./images/about.jpg"
                className="img-fluid mx-auto d-block"
                alt=""
              />
            </div>
          </div>

          <div className="lg:w-[60%] w-full mt-4">
            <div className="md:pl-[60px]">
              <div className="mb-[30px]">
                <h1 className=" header-title">
                  Arnel De Asis
                  <span>About</span>
                </h1>
                <i className="mt-10 block">Front End Web Developer</i>
              </div>

              <hr />

              <div className="mt-10 about-description">
                <p>I have been in the industry for five years.</p>
                <p>
                  My work experience a company and freelance developer helped me
                  to gain proficient understanding of various tools used in
                  creating web applications.
                </p>
                <p>
                  I make sure to collaborate with the entire team involved in
                  the development process.{" "}
                </p>

                <div className="my-10 pt-9 text-center md:text-left">
                  <a
                    href="/agdeasis.pdf"
                    target="_blank"
                    className="btn btn-dark"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Service />
        </div>
      </div>
    </section>
  );
};

export default About;
