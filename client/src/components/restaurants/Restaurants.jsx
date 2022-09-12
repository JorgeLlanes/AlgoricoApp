import React from 'react'
import "./restaurants.css";
import { Link } from "react-router-dom";
import { FiArrowDownLeft } from "react-icons/fi";
import Rest from "../../images/rest-img.png";

function Restaurants() {
  return (
    <div>
      <section className="rest-page-container">
        <div className="rest-page-wrapper">
          <div className="rest-img">
            <img src={Rest} alt="social" className="rest-img" />
          </div>
          <div className="rest-titles">
            <h1 className="rest-title1">FIND GREAT REVIEWS &</h1>
            <h2 className="rest-title2">ENJOY SOCIAL GATHERINGS!</h2>
            <div className="arrow-link-wrapper">
              <FiArrowDownLeft className="arrow-link" />
              <Link className="rest-link" to="/rest">
                Reserve
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Restaurants
