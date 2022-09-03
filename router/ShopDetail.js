const {Router} =require('express')
const router = Router()
const {getShopDetailPage} = require('../controllers/shopDetailsControlle')
 router.get('/detail',getShopDetailPage)

module.exports = router