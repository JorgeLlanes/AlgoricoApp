import React from "react";
import "./friends.css";
// import { Link } from "react-router-dom";
import { FiArrowDownLeft } from "react-icons/fi";
import friendImg from "../../images/friends-img.png";
// import Api from "./Api";
// import RestFooter from "./RestFooter";
import { HashLink as Link } from "react-router-hash-link";
import Adding from "./Adding";
import Listed from "./Listed";

function Friends() {
  return (
    <div>
      <section className="friends-tab-container">
        <div className="friends-tab-wrapper">
          <div className="friends-tab-img">
            <img src={friendImg} alt="hex" className="hex-img" />
          </div>
          <div className="friends-tab-titles">
            <h1 className="friends-tab-title1">Friends</h1>
            <p className="friends-tab-para">Connect with friends</p>
            <div className="arrow-link-wrapper">
              <FiArrowDownLeft className="arrow-link" />
              <Link
                className="AddFriends-link"
                to="#adding"
                spy="true"
                smooth={true}
                offset={50}
                duration={500}>
                Add Friends
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Adding />
      <Listed />
    </div>
  );
}

export default Friends;
