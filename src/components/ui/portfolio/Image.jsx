import React from "react";
import parse from "html-react-parser";

const Image = (img, title, link) => {
  return (
    <div className="grid">
      <figure className="effect-layla">
        <img src={img.src} alt="img06" />
        <figcaption>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div>
              <h3 className="text-accent mb-3">{img.title}</h3>
              <div className="portfolio-description mb-4">
                {parse(img.description)}
              </div>
              <a
                href={img.link}
                rel="noreferrer"
                className="btn btn-l-r portfolio-link align-self-center"
                target="_blank"
              >
                View Site
              </a>
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default Image;
