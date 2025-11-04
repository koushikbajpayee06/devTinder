const express = require("express");
const app = express();

app.use("/user",[(req, res, next)=>{
  console.log("Handling the route user-1");
  next();
},
(req, res, next)=>{
  console.log("Handling the route user-2");
  //res.send("Response-II");
  next();
},
(req, res, next)=>{
  console.log("Handling the route user-3");
  //res.send("Response-III");
  next();
},
(req, res, next)=>{
  console.log("Handling the route user-4");
  // res.send("Response-IV");
  next()
},
(req, res, next)=>{
  console.log("Handling the route user-5");
  res.send("Response-V");
}]);



app.listen(3000, () => {
  console.log("Server successfully running on Port 3000");
});
