
const guestAdmin = async (req,res,next) =>{
if(!req.session.isAdminLogged){
res.redirect('/')
}
next()
}

module.exports = {
    guestAdmin,
}