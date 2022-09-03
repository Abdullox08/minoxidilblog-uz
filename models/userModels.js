const {model,Schema} = require('mongoose')

const userModels = new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
        trim:true
    },
    password1:{
        type:String,
        required:true,
        minLenght:6
    },

})
module.exports = model("User",userModels)