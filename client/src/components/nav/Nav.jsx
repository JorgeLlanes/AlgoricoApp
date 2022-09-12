import React from "react";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import "./nav.css";

function Nav() {
  return (
    <div>
      <nav className="nav-container">
        <div className="nav-wrapper">
          <div className="nav-links">
            <Link
              className="links"
              to="/#home"
              spy="true"
              smooth={true}
              offset={50}
              duration={500}>
              Home
            </Link>
            <Link className="links link1" to="/rest">
              Restaurants
            </Link>
            <Link className="links" to="/friends">
              Friends
            </Link>
          </div>

          <div className="nav-logo">
            <Link
              className="title-link"
              to="/#home"
              spy="true"
              smooth={true}
              offset={50}
              duration={500}>
              ALGO RICO
            </Link>
          </div>

          <div className="nav-explore-button">
            <Link className="explore" to="/rest">
              EXPLORE
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
