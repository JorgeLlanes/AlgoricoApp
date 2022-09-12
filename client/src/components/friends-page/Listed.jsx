import React, { useEffect, useState } from "react";
import "./listed.css";
import Axios from "axios";
import Algorico3 from "../../images/algorico-friends-logo.png";
import { FaUserAlt } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";

function Listed() {
  const [friendList, setFriendList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setFriendList(response.data);
    });
  }, []);
  return (
    <div>
      <footer className="listed-container" id="friendlist">
        <section className="listed-wrapper-top">
          <h1>FRIENDS LIST</h1>
          <div>
            <section className="scroll-container">
              <section className="scroll-wrapper">
                {friendList.map((val) => {
                  return (
                    <div className="api-list-wrapper">
                      <h2>
                        <FaUserAlt />
                      </h2>
                      <h3>{val.friendname}</h3>
                      <p>{val.friendage}</p>
                      <p>{val.friendfood}</p>
                      <p>
                        <HiLocationMarker />
                        {val.friendcity} ,{val.friendstate}
                      </p>
                      <div className="api-mess-mail-icons">
                        <AiFillMessage className="mess-icon" />
                        <AiOutlineMail className="mail-icon" />
                      </div>
                    </div>
                  );
                })}
              </section>
            </section>
          </div>
        </section>
        <img src={Algorico3} alt="logo" className="logo-img" />
        <p className="copyright-footer">
          © 2022. ALGO RICO. ALL RIGHTS RESERVED
        </p>
      </footer>
    </div>
  );
}

export default Listed;
