const express = require("express");
const router = express.Router;
const app = express();


app.get("/"), ( req,res) => {
    console.log("app.get food.js")
}
