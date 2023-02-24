const express = require("express");
const app = express();
const mysql = require("mysql2");
const db = require("./startup/database");

app.use(express.json());
app.set("view engine", "ejs");
require("dotenv").config();
require("./startup/cors")(app);
require("./startup/routes")(app);

const port = process.env.PORT;
app.listen(port || 3001, () => {
  console.log(`server running on port 3001`);
});
