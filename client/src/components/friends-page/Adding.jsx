import React, { useState } from "react";
import "./adding.css";
// import { Link } from "react-router-dom";
import { FiArrowDownRight } from "react-icons/fi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { HashLink as Link } from "react-router-hash-link";
import Axios from "axios";

function Adding() {
  const [friendName, setFriendName] = useState("");
  const [friendAge, setFriendAge] = useState("");
  const [friendFood, setFriendFood] = useState("");
  const [friendCity, setFriendCity] = useState("");
  const [friendState, setFriendState] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/api/insert", {
      friendName: friendName,
      friendAge: friendAge,
      friendFood: friendFood,
      friendCity: friendCity,
      friendState: friendState,
    }).then(() => {
      alert("Success!");
    });

    // if (friendName && friendAge && friendFood && friendCity && friendState) {
    //   setFriendName("");
    //   setFriendAge("");
    //   setFriendFood("");
    //   setFriendCity("");
    //   setFriendState("");
    // }
    e.target.reset();
  };

  const states = [
    {
      stateName: "--Select State--",
    },
    {
      stateName: "TX",
    },
    {
      stateName: "CTL",
    },
    {
      stateName: "ATL",
    },
    {
      stateName: "RVA",
    },
  ];
  // const handleChange = (event) => {
  //   console.log(event.target.value);
  // };
  return (
    <div>
      <section className="adding-page-container" id="adding">
        <div className="adding-page-wrapper">
          <div className="adding-titles">
            <h1 className="adding-title1">CONNECT WITH FRIENDS!</h1>
            <h3 className="adding-para">
              Add Your friends & explore over a hundred new restaurants around
              the world
            </h3>
            <div className="arrow-link-wrapper">
              <Link
                className="connect-link"
                to="#friendlist"
                spy="true"
                smooth={true}
                offset={50}
                duration={500}>
                View Friends
              </Link>
              <FiArrowDownRight className="arrow-link" />
            </div>
          </div>
          <div className="adding-form-wrapper">
            <form action="post" onSubmit={submitForm}>
              <input
                type="text"
                placeholder="Full Name"
                className="name-input"
                name="friendName"
                onChange={(e) => {
                  setFriendName(e.target.value);
                }}
                required
              />
              <div className="age-food">
                <input
                  type="text"
                  placeholder="Age"
                  name="friendAge"
                  className="age-input"
                  onChange={(e) => {
                    setFriendAge(e.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="Favorite Food"
                  className="food-input"
                  name="friendFood"
                  onChange={(e) => {
                    setFriendFood(e.target.value);
                  }}
                />
              </div>
              <div className="city-state">
                <input
                  type="text"
                  name="friendCity"
                  placeholder="City"
                  className="city-input"
                  onChange={(e) => {
                    setFriendCity(e.target.value);
                  }}
                  required
                />
                <select
                  // onChange={handleChange}
                  name="friendState"
                  onChange={(e) => {
                    setFriendState(e.target.value);
                  }}
                  className="select-input"
                  required>
                  {states.map((option) => (
                    <option key={option.stateName} value={option.stateName}>
                      {option.stateName}
                    </option>
                  ))}
                </select>
              </div>
              <button className="btn-form" type="submit">
                <AiOutlineUserAdd /> Add
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Adding;
