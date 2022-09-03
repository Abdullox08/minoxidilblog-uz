const Product = require('../models/posterModels')
const getShopPage =async (req,res)=>{
    try {
        const posterAll = await Product.find().lean()
       return res.render('shoping/shop',{
            title:"shoping shop",
            posterAll,
            user:req.session.user,
            islogged:req.session.islogged,
            url:process.env.URL
        })
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getShopPage,
}