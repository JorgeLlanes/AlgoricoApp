import React from "react";
import "./connect.css";
import { Link } from "react-router-dom";
import { FiArrowDownRight } from "react-icons/fi";
import ConnectImg from "../../images/connect-img.png";

function Connect() {
  return (
    <div>
      <section className="connect-page-container">
        <div className="connect-page-wrapper">
          <div className="connect-titles">
            <h1 className="connect-title1">CONNECT WITH FRIENDS!</h1>
            <h2 className="connect-title2">EXPLORE TOGETHER!</h2>
            <div className="arrow-link-wrapper">
              <Link className="connect-link" to="/friends">
                Add Friends
              </Link>
              <FiArrowDownRight className="arrow-link" />
            </div>
          </div>
          <div className="connect-img">
            <img src={ConnectImg} alt="social" className="connect-img" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Connect;
