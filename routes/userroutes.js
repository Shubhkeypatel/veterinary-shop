let express = require('express')
let {userdata,userlogin}= require('../controller/usercontroller')

let router = express.Router()

const jwt_middleware = async(req,res,next)=>{
    try{
        let token = req.query.usertoken
        let auth = jwt.verify(token,'10')
        if(!auth){
            res.send({
                message:"invalid authorization",
            })
        }
            if(auth){
                if(auth.role == "user"){
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

router.post('/createuser',userdata)
router.post('/userlogin',userlogin)

module.exports = router