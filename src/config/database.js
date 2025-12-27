const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:string
    }
});

const User = mongoose.model("User",userSchema)