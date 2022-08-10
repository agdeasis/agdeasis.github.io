import React from "react";

const Contact = () => {
  return (
    <section className="sec-wrapper bg-gray" id="contact">
      <div className="container">
        <div className="overflow-x-clip">
          <h1 className=" header-title">
            Notify Me
            <span>Contact </span>
          </h1>
          <i className="mt-10 block">Let's work on something cool together.</i>
        </div>
        <div className="md:flex mt-[6rem]">
          <div className="md:w-1/2">
            <div className="mt-4">
              <p>
                Got something you'd like to discuss? New project or opportunity?
              </p>
              <p>
                Let's collaborate and create the application you have in mind.
              </p>
              <p>
                You may reach me at: <br /> <br />
                <span className="font-bold main-font underline">
                  arnelgdeasis@gmail.com <br />
                  arneldeeasis@gmail.com
                  <br /> +639462221486
                </span>
              </p>

              <div className="medias my-5">
                <a
                  rel="noopener noreferrer"
                  href="https://github.com/agdeasis"
                  target="_blank"
                >
                  <img src="./images/contact/git.svg" alt="" />
                </a>
                <a
                  rel="noopener noreferrer"
                  href="https://ph.linkedin.com/in/arnel-de-asis-a70183248?trk=public_profile_samename-profile"
                  target="_blank"
                >
                  <img src="./images/contact/li.svg" alt="" />
                </a>
                <a
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/arnelgdeasis"
                  target="_blank"
                >
                  <img src="./images/contact/fb.svg" alt="" />
                </a>
                <a
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/arneldeeasis/"
                  target="_blank"
                >
                  <img src="./images/contact/ins.svg" alt="" />
                </a>
                <address className="ml-3">
                  <a href="mailto:arnelgdeasis@gmail.com">
                    <img src="./images/contact/email.svg" alt="" />
                  </a>
                </address>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <form action="">
              <div className="md:flex md:space-x-5">
                <div className="form-group md:w-1/2">
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group  md:w-1/2">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>
              <div className="form-group">
                <textarea
                  name=""
                  id=""
                  className="form-control"
                  placeholder="Message"
                  rows="5"
                ></textarea>
              </div>
              <div className="form-group">
                <button className="btn btn-dark">Submit Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
