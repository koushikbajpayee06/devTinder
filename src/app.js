const express = require("express");
const connectDB = require('./config/database');
const app = express();
const User = require("./models/user")

app.post("/signup",async (req,res)=>{
// Creating a new instance of the user Model
  const user = new User({
    firstName: "jayeeta",
    lastName: "Barman",
    emailId:"jayeeta@gmail.com",
    password:"Jayeeta@1234"
  });

  try{
    await user.save();
    res.send("User added successfully");
  }catch(err){
    res.status(404).send("Error saving the user: " +err.message)
  }


});

connectDB()
    .then(()=>{
        console.log("Database connection established...")
        app.listen(3000, () => {
          console.log("Server successfully running on Port 3000");
        });
    }).catch(err=>{
        console.log("Database cant be connected...")
    });


