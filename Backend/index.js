const express = require("express");
const app = express();
const mysql = require("mysql2");

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "finlunch.com",
});

app.post("/createfoodtype", (req, res) => {
  db.query(
    "INSERT INTO finlunchtype (finlunchtypename) VALUES (?)",
    ["kebabrullo"],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("creatfoodtype sent");
      }
    }
  );
});
app.get("/sql", (Req, res) => {
  res.send("hello world");
});

app.listen(process.env.PORT || 3001, () => {
  console.log(`server running on port 3001`);
});
