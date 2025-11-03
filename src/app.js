const express = require("express");
const app = express();
// This will only handle GET call to /user

app.use("/user",(req,res)=>{
    res.send("HAHAHHAHHAHA");
})
app.get("/user",(req,res)=>{
    res.send({firstName:"Koushik", lastName:"Bajpayee"})
});

app.post("/user",(req,res)=>{
    //saving data to db
    res.send("data Successfully saved to database!");
});
app.delete("/user",(req,res)=>{
    //saving data to db
    res.send("Deleated successfully");
});

// This will match all the HTTP method API calls to /test
app.use("/test", (req, res) => {
  res.send("Hello from the server");
});

app.listen(3000, () => {
  console.log("Server successfully running on Port 3000");
});
