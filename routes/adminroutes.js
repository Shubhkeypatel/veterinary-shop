let express = require('express')
let {admindata,adminlogin,productdetails,getproduct,updateOne,update_product,deleteOne,opr,fil} = require('../controller/admincontroller')
let jwt = require('jsonwebtoken')
let router = express.Router()
const jwt_middleware = async(req,res,next)=>{
    try{
        let token = req.query.admintoken
        let auth = jwt.verify(token,'10')
        if(!auth){
            res.send({
                message:"invalid authorization",
            })
        }
            if(auth){
                if(auth.role == "seller"){
                    next();
                }else{
                    res.send("you are not authorized")
                }
            
        }
    }
  catch(err){
        res.send({message:"you are not authorized",error:err})
    }
}
router.post('/createadmin',admindata)
router.get('/adminlogin',adminlogin)
router.post('/createproduct',jwt_middleware,productdetails)
router.get('/getproduct',getproduct)
router.put('/updateOne',jwt_middleware,updateOne)
router.put('/update_product',jwt_middleware,update_product)
router.put('/deleteOne',jwt_middleware,deleteOne)
router.get('/opr',opr)
router.get('/fil',fil)
module.exports = router

