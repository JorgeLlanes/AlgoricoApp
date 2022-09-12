import React from "react";
import "./rest.css";
// import { Link } from "react-router-dom";
import { FiArrowDownLeft } from "react-icons/fi";
import tri from "../../images/rest-tri-circ.png";
import Api from "./Api";
import RestFooter from "./RestFooter";
import { HashLink as Link } from "react-router-hash-link";

function Rest() {
  return (
    <div>
      <section className="rest-tab-container">
        <div className="rest-tab-wrapper">
          <div className="rest-tab-img">
            <img src={tri} alt="tri" className="tri-img" />
          </div>
          <div className="rest-tab-titles">
            <h1 className="rest-tab-title1">Restaurants</h1>
            <p className="rest-tab-para">
              Search over 1000 restaurants near you!
            </p>
            <div className="arrow-link-wrapper">
              <FiArrowDownLeft className="arrow-link" />
              <Link
                className="reserve-link"
                to="#API"
                spy="true"
                smooth={true}
                offset={50}
                duration={500}>
                Soon
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Api />
      <RestFooter />
    </div>
  );
}

export default Rest;
