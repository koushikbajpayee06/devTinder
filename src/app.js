const express = require("express");
const connectDB = require('./config/database');
const app = express();
const User = require("./models/user")

app.post("/signup",async (req,res)=>{
// Creating a new instance of the user Model
  const user = new User({
    firstName: "Koushik",
    lastName: "Bajpayee",
    emailId:"koushik@gmail.com",
    password:"Baju@1234"
  });
  
  await user.save();
  res.send("User added successfully")

})

connectDB()
    .then(()=>{
        console.log("Database connection established...")
        app.listen(3000, () => {
          console.log("Server successfully running on Port 3000");
        });
    }).catch(err=>{
        console.log("Database cant be connected...")
    });


