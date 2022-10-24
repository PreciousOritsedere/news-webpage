import React from "react";
import Legos from "../assets/images/image-web-3-desktop.jpg";

function Home() {
  return (
    <>
      <div className="legos">
        <img src={Legos} alt="web 3" />
      </div>
      <div className="home-content">
        <h1>
          The Bright<br></br>Future of <br></br>Web 3.0?
        </h1>
        <div>
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button>READ MORE</button>
        </div>
      </div>
    </>
  );
}

export default Home;
