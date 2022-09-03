const Product = require('../models/posterModels')
const getCartPage = async (req,res)=>{
    try {
        const posterId = await Product.findById(req.params.id).lean()
       return res.render('shoping/cart',{
            title:"shoping cart",
            url:process.env.URL,
            user:req.session.user,
            posterId,
            islogged:req.session.islogged,
        })
    } catch (err) {
        console.log(err);
    }
}
const getCartIdPages = async (req,res)=>{

    try {
        res.render('shoping/cart',{
            url:process.env.URL,
            user:req.session.user,
            islogged:req.session.islogged,
            title:'cart page'
        })
    } catch (err) {
        console.log(err);
    }
}
var lib = require("tele-bot-api")
var option = {
  bot_path : "/botapi", 
  port: 7000 
}
var tg = new lib.telegram("5484954727:AAGQGprWjpdunAm905xQWUOMPDExvUU7S6I", option)
async function test(productOne) {
  var data = {
    chat_id: 1106641717,
    text: productOne,
    
  }
  return tg.api.request("sendMessage", data)
}
const sendProductInTgBot = async(req,res)=>{
    try {
      const productOne = await Product.findOne().lean()
      console.log(productOne);
        res.render('shoping/buy',{
          title:'shoping buy ',
          user:req.session.isogged,
          username:req.session.user,
          productOne,
          
        })
        test(productOne)
    } catch (err) {
    }
}
module.exports = {
    getCartPage,
    getCartIdPages,
    sendProductInTgBot
}