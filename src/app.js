const express = require("express");
const app = express();

app.get('/admin/getAllData',(req,res)=>{
  //Logic of Checking if the request authorized
  const token = "xyzc";
  const isAdminAuthorized = token === "xyz";
  if(isAdminAuthorized){
    res.send("All Data Send");
  }else{
    res.status(401).send("Unauthorized request");
  } 
});

app.get('/admin/deleteUser',(req,res)=>{
  //Logic of Checking if the request authorized
    const token = "xyzc";
  const isAdminAuthorized = token === "xyz";
  if(isAdminAuthorized){
  res.send("Deleted a user");
  }else{
    res.status(401).send("Unauthorized request");
  } 
});

app.listen(3000, () => {
  console.log("Server successfully running on Port 3000");
});
