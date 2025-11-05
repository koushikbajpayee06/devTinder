
const mongoose = require("mongoose");

const connectDB = async()=> {
    await mongoose.connect(
        "mongodb+srv://namastedev:fsmtGY1IfU6h4Ypp@namastenode.uwpmhgp.mongodb.net/devTinder"
    );
};

module.exports = connectDB;

