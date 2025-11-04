const express = require("express");
const app = express();



app.use("/user",(req,res, next)=>{
  console.log("Handling the route user-2");
  res.send("2nd Route Response")
});

app.use("/user",(req, res, next)=>{
  console.log("Handling the route user-1");
  next();
});




app.listen(3000, () => {
  console.log("Server successfully running on Port 3000");
});
