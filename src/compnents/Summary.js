import React from "react";
import { Link, useLocation } from "react-router-dom";

const Summary = () => {
  const location = useLocation();
  const { name, genres, imgsrc, premiered, runtime, summary, ratings } =
    location.state;

  const removeHtmlTags = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };
  return (
    <>

      <div
        className="bgimg"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${imgsrc})`,
        }}
      >
        <div className="details">
          <h1>{name}</h1>
          <div className="details-in">
            <h4>
              {" "}
              <span class="fa fa-star checked"> {ratings}</span>
            </h4>
            <ul>
              <li>
                <h4>{runtime + " min "}</h4>
              </li>
              <li>
                <h4>{genres.join(", ")}</h4>
              </li>
              <li>
                <h4>{premiered}</h4>
              </li>
            </ul>
          </div>
          <p className="summ">{removeHtmlTags(summary)}</p>
          <div>
            <Link to="/form" state={name}><button class="button"> BOOK NOW</button></Link>
            <button class="button"> TRAILER</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
