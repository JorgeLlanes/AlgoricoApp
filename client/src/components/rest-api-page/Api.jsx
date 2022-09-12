import React from "react";
import "./api.css";
import { Link } from "react-router-dom";
import { FiArrowDownLeft } from "react-icons/fi";
import tri from "../../images/rest-tri-circ.png";

function Api() {
  return (
    <div>
      <section className="rest-api-container" id="API">
        <div className="rest-api-wrapper">
          <div className="rest-api-img">
            <img src={tri} alt="tri" className="tri-img" />
          </div>
          <div className="rest-api-titles">
            <h1 className="rest-api-title1">API</h1>
            <p className="rest-api-para">SOON</p>
            <div className="arrow-link-wrapper">
              <FiArrowDownLeft className="arrow-link" />
              <Link className="reserve-link" to="/">
                Search
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Api;
