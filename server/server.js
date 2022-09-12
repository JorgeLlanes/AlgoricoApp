const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const db = mysql.createPool({
  host: "127.0.0.1",
  user: "Jnrlns",
  password: "Junior1998Jll!",
  database: "friends",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM friends";

  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.post("/api/insert", (req, res) => {
  const friendName = req.body.friendName;
  const friendAge = req.body.friendAge;
  const friendFood = req.body.friendFood;
  const friendCity = req.body.friendCity;
  const friendState = req.body.friendState;

  const sqlInsert =
    "INSERT INTO friends(friendname, friendage, friendfood, friendcity, friendstate) VALUES (?,?,?,?,?)";

  db.query(
    sqlInsert,
    [friendName, friendAge, friendFood, friendCity, friendState],
    (err, result) => {
      console.log(result);
    }
  );
});

// app.get("/", (req, res) => {
//   const sqlInsert =
//     "INSERT INTO friends(friend_id, friendname, friendage, friendfood, friendcity, friendstate) VALUES (2,'JJ', 24, 'pasta', 'Austin', 'TX')";
//   db.query(sqlInsert, (err, result) => {
//     res.send("Hello Jorge!");
//   });
// });

app.listen(3001, () => {
  console.log("running in port 3001");
});
