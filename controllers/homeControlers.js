const Product = require('../models/posterModels')
const getHomePage = async (req,res)=>{
    try {
        const product = await Product.find().lean()
        const productId = await Product.findById(req.params.id).lean()
            res.render('home',{
                title:'home page',
                user:req.session.user,
                islogged:req.session.islogged,
                product,
                url:process.env.URL
            })
    
    } catch (err) {
        console.log(err);
    }
}
module.exports ={
    getHomePage
}