const express = require("express");
const app = express();

// req /user , /user/xyz, /user/1
app.get("/user",(req,res)=>{
    console.log(req.query)
    res.send({firstName:"Koushik", lastName:"Bajpayee"})
});


app.listen(3000, () => {
  console.log("Server successfully running on Port 3000");
});
