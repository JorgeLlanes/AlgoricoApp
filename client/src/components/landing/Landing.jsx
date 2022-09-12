import React from "react";
import "./landing.css";
import Salad from "../../images/landing-img.png";

function Landing() {
  return (
    <div>
      <section className="landing-page-container" id="home">
        <div className="landing-page-wrapper">
          <div className="landing-titles">
            <h1 className="landing-title1">
              FIND THE BEST RESTAURNTS AROUND TOWN!
            </h1>
            <h2 className="landing-title2">
              BEST PLACES TO GRAB BREAKFAST, LUNCH & DINNER!
            </h2>
          </div>
          <div className="landing-img">
            <img src={Salad} alt="Salad" className="salad-img" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
