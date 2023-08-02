const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./config/db.config.js");
const config = require("./config/config.js");
const PORT = config.port;
const createDBStructures = require("./models/fibonacci.db.model.js");



app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// create database and  tables for the system 
createDBStructures();

//test route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my test application" });
});

//set port, listen for requests
app.listen(PORT, () => {
  console.log(`Sever isrunning on port : ${PORT}`);
});
