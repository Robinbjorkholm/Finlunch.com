const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const db = require("../startup/database");

//laga en ny lunch
router.post(
  "/",
  body("foodName").isLength({ min: 1 }).exists(),
  body("foodDescritpion").isLength({ min: 10, max: 255 }),
  (req, res) => {
    const foodName = req.body.foodName;
    const foodType = req.body.foodType;
    const foodDescription = req.body.foodDescription;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return;
    } else {
      db.query(
        "SELECT COUNT(*) AS cnt FROM foods WHERE foodName = ? ",
        req.body.foodName,
        function (err, data) {
          if (err) {
            console.log(err);
          } else {
            if (data[0].cnt > 0) {
              // food already exist
            } else {
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
          }
        }
      );
    }
  }
);

//update lunch
router.put("/:id", (req, res) => {});

//hämt all lunchre
router.get("/", (req, res) => {
  res.send("hello world");
});

module.exports = router;
