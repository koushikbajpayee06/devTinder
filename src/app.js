const express = require("express");
const connectDB = require('./config/database');
const app = express();
const User = require("./models/user");
const { validateSignupData }= require('./utils/validations');
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

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

    const isPasswordValid = await bcrypt.compare(password,user.password);

    if(isPasswordValid){

      // Create a JWT Token
      const token = await jwt.sign({_id:user._id}, "DEV@Tinder$790");
      console.log(token);
      // Add the Token to cookie and send the response back to the user
      res.cookie("token", token)


      res.send("Login Successfull!!!")
    }
    else{
      throw new Error("Invalid Crediantials");
    }

  }
  catch(err){
    res.status(400).send("ERROR: " + err.message)
  }
})

app.get('/profile',async(req,res)=>{
  const cookies = req.cookies;
  const {token} = cookies;
  // validating my token
  const decodedMessage = await jwt.verify(token,"DEV@Tinder$790")
  console.log(decodedMessage);
  const{_id} = decodedMessage;
  console.log("Logged In user is:" + _id);
  // console.log(cookies);
  res.send("Reading Cookies");
})
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
app.patch("/user/:userId",async(req,res)=>{
  const userId = req.params?.userId;
  const data = req.body;

  try{
    const ALLOWED_UPDATES =[
      "userId",
      "photoUrl",
      "about","gender",
      "age",
      "skills"
    ];

  const isUpdateAllowed = Object.keys(data).every((k)=>
    ALLOWED_UPDATES.includes(k)
  );

  if(!isUpdateAllowed){
    throw new Error("Update not allowed");
  }
  if(data?.skills.length >10){
    throw new Error("Skills can't be more than 10")
  }
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


