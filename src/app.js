const express = require("express");
const app = express();

app.use("/test", (req, res) => {
  res.send("Hello from the server");
});

app.use("/hello", (req, res) => {
  res.send("Hello! Hello ! Hello Baju");
});

app.use("/", (req, res) => {
  res.send("Namaste Koushik Bajpayee ji");
});

app.listen(3000, () => {
  console.log("Server successfully running on Port 3000");
});
