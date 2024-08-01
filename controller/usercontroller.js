const user = require('../models/usermodel')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
let userdata = (req,res)=>{
    let user1 = new user({
    "user_name":req.body.user_name,
    "password":req.body.password,
    "gender":req.body.gender,
    "age":req.body.age,
    "street_address1":req.body.street_address1,
    "street_address2":req.body.street_address2,
    "city":req.body.city,
    "postal_code":req.body.postal_code,
    "Mobile_Number":req.body.Mobile_Number,
    "Email_ID":req.body.Email_ID
    })
    user1.save().then(()=>{
        res.send({"message":'your account has been created'})
    })
    .catch((err)=>{
        console.log(err);
        res.send({"message":'user has not been created'})
    })
}

///////////////////////

let userlogin = (req,res)=>{
    let password = req.body.password
    user.findOne({user_name:req.body.user_name})
    .then((data)=>{
       if(password != data.password){
           res.send({"message":"password is incorrect"})
       }
       else{
            const token = jwt.sign({user:data.user_name,role:'user'},'10')
           res.send({"message":"user logged in",token:token})
       }
    }).catch((err)=>{
       console.log(err);
       res.send({"message":"user not found"})
    })

}


module.exports = {userdata,userlogin}
