const express = require("express");
const app = express();
const mysql = require("mysql");
require("dotenv").config();
app.use(express.json());

const db = mysql.createConnection({
  user: process.env.ROOT,
  host: process.env.HOSTNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

app.post("/createfoodtype", (req, res) => {
  db.query("INSERT INTO finlunchtype (finlunchtypename) VALUES (?)", ["kebabrullo"], (err, res) => {
    if (err) {
      console.log(err);
    } else {
      res.send("creatfoodtype sent");
    }
  });
});
app.get("/sql", (req, res) => {
  res.send("hello world");
});

app.listen(process.env.PORT || 3001, () => {
  console.log(`server running on port 3001`);
});
