import React from "react";
import parse from "html-react-parser";

const PortfolioItem = ({ data }) => {
  return (
    // <div
    //   className="portfolio-item p-4 w-full h-[400px]"
    //   style={{
    //     backgroundImage: `url(https://marketifythemes.net/wp/waxon/1/wp-content/uploads/2021/11/6.jpg)`,
    //     backgroundRepeat: "no-repeat",
    //     backgroundPosition: "center",
    //     backgroundSize: "cover",
    //   }}
    // >
    //   PortfolioItem
    // </div>
    <figure class="effect-oscar">
      <img src={data.img} alt="img09" />
      <figcaption>
        <div className="text-left flex">
          <span className="span-box w-[10px] h-[auto] mr-1"></span>
          <h3 className="text-[16px] font-medium">
            <span>{data.title}</span>
          </h3>
        </div>
        <div className="absolute right-3 bottom-4">
          <div className="use-tools">
            {data.tools?.map((tool, index) => (
              <span key={index}>{tool}</span>
            ))}
          </div>
        </div>
        <h2>
          <span>{data.title}</span>
        </h2>
        <p>{parse(data.description)}</p>
        <br />
        <a
          rel="noreferrer"
          target="_blank"
          href={data.link}
          className={`link text-[14px] relartive after:contents-[""] ${
            !data.link ? "hidden" : ""
          }`}
        >
          Visit Site >
        </a>
      </figcaption>
    </figure>
  );
};

export default PortfolioItem;
