
const mongoose = require("mongoose");

const connectDB = async()=> {
    await mongoose.connect(
        "mongodb+srv://namastedev:fsmtGY1IfU6h4Ypp@namastenode.uwpmhgp.mongodb.net/devTinder"
    );
};

connectDB()
    .then(()=>{
        console.log("Database connection established...")
    }).catch(err=>{
        console.log("Database cant be connected...")
    });
