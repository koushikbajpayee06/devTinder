const express = require("express");
const app = express();

const  {adminAuth, userAuth}  = require('./middlewares/auth');


app.get("/getUserData", (req,res)=>{
  // Logic of DB call and get data
  throw  new Error("jhghdrdh");
  res.send("User Data Send");
});

app.use('/', (err,req,res,next)=>{
  if(err){
    res.status(500).send("something went wrong");
  }
})


app.listen(3000, () => {
  console.log("Server successfully running on Port 3000");
});
