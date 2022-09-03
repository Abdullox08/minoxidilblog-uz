const posterModels = require("../models/posterModels");
const adminUser = require('../models/adminUser')
const bcrypt = require('bcryptjs')
const adminLoginPage = async (req, res) => {
    try {
        res.render('admin/adminlogin')
    } catch (err) {
        console.log(err);
    }
}


const adminHomePage = async (req, res) => {
    try {
            res.render('admin/adminhome',{
                title:'adminhome',
            })
    } catch (err) {
        console.log(err);
    }
}
const adminLogin = async(req,res)=>{
    try {
        const adminExcit = await adminUser.findOne({adminlogin:req.body.adminlogin})
        if(adminExcit){
            const matchAdminPassword = await bcrypt.compare(req.body.adminpassword,adminExcit.adminpassword)
            if(matchAdminPassword){
                req.session.adminusers = adminExcit,
                req.session.isAdminLogged = true
                req.session.save(err =>{
                    if(err) throw err
                    res.redirect('/admin/adminhome')
                })
            }
        }
    } catch (err) {
        console.log(err);
    }
}
const newAddPost = async (req,res) => {
    try {
        const {productName,image,amount,descr,information,} = req.body
        await posterModels.create({
            productName,
            amount,
            image:'/uploads/'+req.file.filename,
            descr,
            information
        })
        res.redirect('/admin/adminhome')
    } catch (err) {
        console.log(err);
    }
}
const adminShop = async (req,res)=>{
    try {
        res.render('admin/adminshop',{
            title:'adminshop'
        }) 
    } catch (error) {
        console.log(error);
    }
  
}
module.exports = {
    adminLoginPage,
    adminHomePage,
    newAddPost,
    adminLogin,
    adminShop
}