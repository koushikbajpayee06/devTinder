const express = require("express");
const connectDB = require('./config/database');
const app = express();
const User = require("./models/user");

app.use(express.json());

app.post("/signup",async (req,res)=>{
  console.log(req.body);

// Creating a new instance of the user Model
  const user = new User(req.body);

  try{
    await user.save();
    res.send("User added successfully");
  }catch(err){
    res.status(404).send("Error saving the user: " +err.message)
  }
});

// Get User By email
app.get("/user",async(req,res)=>{
  const userEmail = req.body.emailId;
  try{
    const user = await User.findOne({emailId: userEmail});
    if(!user){
       res.status(404).send("User not found");
    }else{
      res.send(user);
    }
    // const users = await User.find({emailId: userEmail});
    // if(users.length===0){
    //   res.status(404).send("User not found");
    // }else{
    //   res.send(users);
    // }
  }
  catch(err){
    res.status(400).send("Something Went Wrong")
  }
});
// Feed API - GET/feed - get all the users from the database
app.get("/feed",async(req,res)=>{

  try{
    
    const users = await User.find({});
    res.send(users);
  }
  catch(err){
    res.status(400).send("Something Went Wrong")
  }
});

// Delete a user from database
app.delete('/user',async(req,res)=>{
  const userId = req.body.userId;
  try{
    const user = await User.findByIdAndDelete({_id:userId})
    // const user = await User.findByIdAndDelete(userId);
    res.send("User deleated successfully");
  }
  catch(err){
    res.status(400).send("Something Went Wrong")
  }
});

// Update data of the user
app.patch("/user",async(req,res)=>{
  const userId = req.body.userId;
  const data = req.body;
  console.log(data);
  try{
    const user = await User.findByIdAndUpdate({_id:userId},data,{
      returnDocument:"after",
      runValidators:"true"
    });
    console.log(user);
    res.send("User Updated successfully");
  }
  catch(err){
    res.status(400).send("UPDATE FAILED:"+err.message)
  }
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


