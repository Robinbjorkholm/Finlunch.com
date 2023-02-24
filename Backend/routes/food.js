const express = require("express");
const router = express.Router();
const db = require("../startup/database");

router.post("/", (req, res) => {
  const foodName = req.body.foodName;
  const foodType = req.body.foodType;
  const foodDescription = req.body.foodDescription;

  res.send("/api/creatfood funkar");
  db.query(
    "INSERT INTO foods ('foodName, foodType, foodDescription') VALUES  (?,?,?)",
    [foodName, foodType, foodDescription],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("food Created");
      }
    }
  );
});

module.exports = router;
