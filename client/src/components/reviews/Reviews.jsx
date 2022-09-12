import React from "react";
import "./reviews.css";
import { Link } from "react-router-dom";
import { FiArrowDownLeft } from "react-icons/fi";
import Social from "../../images/social-img.png";

function Reviews() {
  return (
    <div>
      <section className="reviews-page-container">
        <div className="reviews-page-wrapper">
          <div className="reviews-img">
            <img src={Social} alt="social" className="social-img" />
          </div>
          <div className="reviews-titles">
            <h1 className="reviews-title1">FIND GREAT REVIEWS &</h1>
            <h2 className="reviews-title2">ENJOY SOCIAL GATHERINGS!</h2>
            <div className="arrow-link-wrapper">
              <FiArrowDownLeft className="arrow-link" />
              <Link className="reserve-link" to="/rest">
                Reserve
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Reviews;
