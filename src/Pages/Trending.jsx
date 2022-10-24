import React from "react";
import Retro from "../assets/images/image-retro-pcs.jpg";
import Laptops from "../assets/images/image-top-laptops.jpg";
import GamePad from "../assets/images/image-gaming-growth.jpg";

function Trending() {
  return (
    <div className="trendingContainer">
      <div className="trendCard">
        <img src={Retro} alt="retro pcs" />
        <div>
          <h2>01</h2>
          <h3>Reviving Retro PCs</h3>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>
      <div className="trendCard">
        <img src={Laptops} alt="laptop" />
        <div>
          <h2>02</h2>
          <h3>Top 10 Laptops of 2022</h3>
          <p>Our best picks for various needs and budgets.</p>
        </div>
      </div>
      <div className="trendCard">
        <img src={GamePad} alt="gaming pad" />
        <div>
          <h2>03</h2>
          <h3>The Growth of Gaming</h3>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </div>
      </div>
    </div>
  );
}

export default Trending;
