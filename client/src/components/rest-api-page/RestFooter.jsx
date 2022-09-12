import React from "react";
import "./restFooter.css";
import { Link } from "react-router-dom";
// import { HashLink as Link } from "react-router-hash-link";
import { FiArrowDownRight } from "react-icons/fi";
import Algorico2 from "../../images/algorico-img-rest.png";
import Poly from "../../images/poly-rest.png";
import circDish from "../../images/circ-dish.png";

function RestFooter() {
  return (
    <div>
      <footer className="rest-footer-container">
        <section className="rest-footer-wrapper-top">
          <div className="rf-wrapper">
            <img src={Poly} alt="logo" className="dish-img1" />
            <div>
              <h2 className="add-friends-heading">CONNECT WITH FRIENDS</h2>
              <div className="arrow-link-wrapper">
                <Link className="connect-link" to="/friends">
                  Add Friends
                </Link>
                <FiArrowDownRight className="arrow-link" />
              </div>
            </div>
            <img src={circDish} alt="logo" className="dish-img2" />
          </div>
        </section>
        <img src={Algorico2} alt="logo" className="logo-img" />
        <p className="copyright-footer">
          © 2022. ALGO RICO. ALL RIGHTS RESERVED
        </p>
      </footer>
    </div>
  );
}

export default RestFooter;
