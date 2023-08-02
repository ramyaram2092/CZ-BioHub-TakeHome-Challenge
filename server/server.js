const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//test route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my test application" });
});

//set port, listen for requests
app.listen(PORT, () => {
  console.log(`Sever isrunning on port : ${PORT}`);
});
