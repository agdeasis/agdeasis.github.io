import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#000]  text-white flex items-center px-4 text-center md:text-left py-[60px] ">
      <div className="container">
        <div className="md:flex font-medium main-font md:space-x-5 items-center space-y-10 md:space-y-0 ">
          <div className="md:w-1/2">
            ARNEL GALANG <br /> DE ASIS
          </div>
          <div className="md:w-1/2">
            Balucuc Apalit <br /> Pampanga, 2016
          </div>
          <div className="md:w-1/2">
            arnelgdeasis@gmail.com <br />
            +639462221486
          </div>
          <div className="md:w-1/2">
            <div className="medias footer justify-center">
              <a
                rel="noopener noreferrer"
                href="https://github.com/agdeasis"
                target="_blank"
              >
                <img src="./images/contact/git-w.svg" alt="" />
              </a>
              <a
                rel="noopener noreferrer"
                href="https://ph.linkedin.com/in/arnel-de-asis-a70183248?trk=public_profile_samename-profile"
                target="_blank"
              >
                <img src="./images/contact/li-w.svg" alt="" />
              </a>
              <a
                rel="noopener noreferrer"
                href="https://www.facebook.com/arnelgdeasis"
                target="_blank"
              >
                <img src="./images/contact/fb-w.svg" alt="" />
              </a>
              <a
                rel="noopener noreferrer"
                href="https://www.instagram.com/arneldeeasis/"
                target="_blank"
              >
                <img src="./images/contact/ins-w.svg" alt="" />
              </a>
              <address className="ml-3">
                <a href="mailto:arnelgdeasis@gmail.com">
                  <img src="./images/contact/email-w.svg" alt="" />
                </a>
              </address>
            </div>
          </div>
        </div>
      </div>
      <span>
        insipired with waxon theme
        <a href="https://marketifythemes.net/wp/waxon/1/">
          https://marketifythemes.net/wp/waxon/1/
        </a>{" "}
      </span>
    </div>
  );
};

export default Footer;
