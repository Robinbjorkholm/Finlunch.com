const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const db = require("../startup/database");

//laga en ny lunch
router.post(
  "/",
  body("foodName").isLength({ min: 1 }).exists(),
  body("foodDescription").isLength({ min: 10, max: 255 }),
  (req, res) => {
    const foodName = req.body.foodName;
    const foodType = req.body.foodType;
    const foodDescription = req.body.foodDescription;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
    } else
      db.query(
        "INSERT INTO foods (foodName, foodType, foodDescription) VALUES  (?,?,?)",
        [foodName, foodType, foodDescription],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send("food Created");
          }
        }
      );
  }
);

//update lunch
router.put("/:id", (req, res) => {});

//hämt all lunchre
router.get("/", (req, res) => {
  db.query("SELECT * FROM foods", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
