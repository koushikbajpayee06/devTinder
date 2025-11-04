const express = require("express");
const app = express();

const  {adminAuth, userAuth}  = require('./middlewares/auth');

app.use("/admin", adminAuth);

app.post("./user/login", (req,res)=>{
  res.send("User loggen in successfully")
})


app.get("/user", userAuth, (req,res)=>{
  res.send("User Data Send");
});

app.get('/admin/getAllData',(req,res)=>{
    res.send("All Data Send");
});

app.get('/admin/deleteUser',(req,res)=>{
  res.send("Deleted a user");
});

app.listen(3000, () => {
  console.log("Server successfully running on Port 3000");
});
