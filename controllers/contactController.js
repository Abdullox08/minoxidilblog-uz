const getContactPage =async (req,res)=>{
    try {
       return res.render('shoping/contact',{
            title:"shoping contact",
            url:process.env.URL,
            user:req.session.user,
            islogged:req.session.islogged,
        })
    } catch (err) {
        console.log(err);
    }
}
module.exports = {
    getContactPage
}