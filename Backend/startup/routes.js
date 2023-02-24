const express = require("express");
const food = require("../routes/food");

//samlar all api endpoints / routs jär 

module.exports = function (app) {
  app.use(express.json());
  //för all routers som böri me /createfood så använd food routern
  app.use("/api/createfood", food);
};
