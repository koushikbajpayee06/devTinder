const express = require("express");
const connectDB = require('./config/database');
const app = express();
const User = require("./models/user");
const { validateSignupData }= require('./utils/validations');
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const {userAuth} = require("./middlewares/auth");

app.use(express.json());
app.use(cookieParser());

app.post("/signup",async (req,res)=>{
  try{
    // Validation of Data
      validateSignupData(req);
      
      const { firstName, lastName,emailId,password } = req.body;
      // Encrypt the Password
      const passwordHash = await bcrypt.hash(password, 10);
      // console.log(passwordHash);
          // Store hash in your password DB.
     

      // Creating a new instance of the user Model
      const user = new User({
          firstName,
          lastName, 
          emailId,
          password:passwordHash
      });

    
      await user.save();
      res.send("User added successfully");
    }catch(err){
      res.status(404).send("ERROR: " +err.message)
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

app.post("/login", async(req,res)=>{
  try{
    const {emailId, password} = req.body;

    const user = await User.findOne({emailId:emailId});
    if(!user){
      throw new Error("Invalid Crediantials");
    }

    const isPasswordValid = await user.validatePassword(password)

    if(isPasswordValid){
      const token = await user.getJWT();

      res.cookie("token", token,{
        expires: new Date(Date.now()+8*3600000),
      });
      res.send("Login Successfull!!!");
    }else {
      throw new Error("Invalid Crediantials");
    }

  }
  catch(err){
    res.status(400).send("ERROR: " + err.message)
  }
});

app.get('/profile', userAuth, async(req,res)=>{
  try
  {  
   const user = req.user;
    res.send(user);
  }
    catch(err){
      res.status(400).send("ERROR: " + err.message)
    }
  });

app.post("/sendConnectionRequest",userAuth, async(req,res)=>{
  const user = req.user;
  console.log("Sending a connection request");
  res.send(user.firstName + " sent the connect request!");
})

connectDB()
    .then(()=>{
        console.log("Database connection established...")
        app.listen(3000, () => {
          console.log("Server successfully running on Port 3000");
        });
    }).catch(err=>{
        console.log("Database cant be connected...");
    });


