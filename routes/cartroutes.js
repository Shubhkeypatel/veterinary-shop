let express = require('express')
const jwt_token = require('jsonwebtoken')
let {cartdata,deleteOne,getcartproduct} = require('../controller/cartcontroller')
let router = express.Router()

/*const jwt_middleware = async(req,res,next)=>{
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
}*/

router.post('/createcart',cartdata)
router.delete('/deleteOne',deleteOne)
router.get('/getcartproduct',getcartproduct)
module.exports = router
