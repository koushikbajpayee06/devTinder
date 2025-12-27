const mongoose = require('mongoose')

const users = mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:string
    }
})