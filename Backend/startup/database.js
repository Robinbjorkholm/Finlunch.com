const mysql = require("mysql");
require("dotenv").config();

const db = mysql.createConnection({
  user: process.env.ROOT,
  host: process.env.HOSTNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});
module.exports = db;
