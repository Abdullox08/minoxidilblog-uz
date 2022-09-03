const {model,Schema} = require('mongoose')

const productModel = new Schema({
    productName:{
        type:String,
        required:true,
    },
    descr:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    },
    information:{
        type:String,
        required:true
    }
})
module.exports = model('Product',productModel)