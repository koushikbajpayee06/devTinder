const express = require("express");
const app = express();


app.use('/',(req,res,next)=>{
  next();
})
app.get("/user",
  (req,res, next) => {
  console.log("This is a middleware");
  next();
},(req,res)=>{
  res.send("This is route handler at it sends response")
},
(req,res)=>{
  res.send("This is route handler at it sends response but this will not execute")
});





app.listen(3000, () => {
  console.log("Server successfully running on Port 3000");
});
