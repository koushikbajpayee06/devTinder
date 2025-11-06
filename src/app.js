const express = require("express");
const connectDB = require('./config/database');
const app = express();
const User = require("./models/user");

app.use(express.json());

app.post("/signup",async (req,res)=>{
  // console.log(req.body);

// Creating a new instance of the user Model
  const user = new User(req.body);

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


