import React from "react";
import "./api.css";
// import { Link } from "react-router-dom";

function Api() {
  return (
    <div>
      <section className="rest-api-container" id="API">
        <div className="rest-api-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d110257.8277914156!2d-97.82724144152245!3d30.27819764809203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1srestaurants%20near%20Austin%2C%20TX!5e0!3m2!1sen!2sus!4v1663011439163!5m2!1sen!2sus"
            width="1700"
            height="850"
            style={{ border: "0" }}
            allowfullscreen=""
            className="map"
            title="myFrame"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
    </div>
  );
}

export default Api;
