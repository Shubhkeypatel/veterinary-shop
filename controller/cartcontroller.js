const cart = require('../models/cartmodel')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
let cartdata = (req,res)=>{
    let cart1 = new cart({
        // "user_Id":req.body.user_Id,
        "product_id":req.body.product_id,
        "product_quant":req.body.product_quant
    })
    cart1.save().then(()=>{
        res.send({"message":'item has been added to the cart'})
    })
    .catch((err)=>{
        console.log(err);
        res.send({"message":'item has not been added to the cart'})
    })
}

//delete
const deleteOne = (req,res)=>{
    cart.deleteOne({userId:req.query.id},req.body)
    .then(()=>{
         res.send({message:'deleted'})
    })
    .catch((err)=>{
        console.log(err);
        res.send({err:err})
    })
}

//get

const getcartproduct = (req,res)=>{
    cart.find()
    .then((data)=>{
         res.send({data:data})
    })
    .catch((err)=>{
        console.log(err);
        res.send({err:err})
    })
}

module.exports = {cartdata,deleteOne,getcartproduct}