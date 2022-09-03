const Product = require('../models/posterModels')

const getShopDetailPage =async (req,res)=>{
    try {
        const productOne = await Product.findOne().lean()
       return res.render('shoping/detail',{
            title:"shoping detail",
            user:req.session.user,
            islogged:req.session.islogged,
            url:process.env.URL,
            productOne,
        })
    } catch (err) {
        console.log(err);
    }
}
module.exports = {
    getShopDetailPage
}