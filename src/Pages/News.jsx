import React from "react";
import { Link, Outlet } from "react-router-dom";

function News() {
  return (
    <>
      <div className="newsContainer">
        <h1>News</h1>
        <div className="newsContent">
          <div className="newsCard">
            <h2>Hydrogen VS Electric Cars</h2>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>
          <div className="newsCard">
            <h2>The Downsides of AI Artistry</h2>
            <p>
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <div className="newsCard">
            <h2>Is VC Funding Drying Up?</h2>
            <p>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
      </div>
      <Link to="trending">Trending</Link>
      <Outlet />
    </>
  );
}

export default News;
