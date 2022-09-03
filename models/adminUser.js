const {model,Schema} = require('mongoose')

const addAdminUser = new Schema({
    adminlogin:{
        type:String,
        required:true,
        unique:true,
    },
    adminpassword:{
        type:String,
        required:true
    }
})

module.exports = model('AdminUser',addAdminUser)