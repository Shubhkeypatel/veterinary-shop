const {admindb,productdb} = require('../models/adminmodel')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const { Admin } = require('mongodb')
const { CHAR_LEFT_ANGLE_BRACKET } = require('picomatch/lib/constants')
let admindata = (req,res)=>{
    let admin1 = new admindb({
        "seller_name": req.body.seller_name,
        "seller_id": req.body.seller_id,
        "seller_password":req.body.seller_password
    })
    admin1.save().then(()=>{
        res.send({"message":'seller created in'})
    })
    .catch((err)=>{
        console.log(err);
        res.send({"message":'user not created'})
    })
}



//sellerlogin
    let adminlogin = (req,res)=>{
     let seller_password = req.body.seller_password
     admindb.findOne({seller_name :"Rachit"})
     .then((data)=>{
        if(seller_password != data.seller_password){
            res.send({"message":"password is incorrect"})
        }
        else{
            const token = jwt.sign({seller: data.seller_name,role:'seller'},'10')
            res.send({message:"seller logged in",token: token})
        }
        
     }).catch((err)=>{
        console.log(err);
        res.send({"message":"seller not found"})
     })
}


//product insertion
let productdetails = (req,res)=>{
    let product1 = new productdb({
        "Product_Id":req.body.Product_Id,
        "Product_name":req.body.Product_name,
        "Product_Cost":req.body.Product_Cost,
        "Product_Descreption":req.body.Product_Descreption,
        "product_quant":req.body.product_quant,
        "isdeleted":req.body.isdeleted
    })
    product1.save().then(()=>{
        res.send({"message":'product inserted',isdeleted:false})
    })
    .catch((err)=>{
        console.log(err);
        res.send({"message":'product did not inserted'})
    })
}

//getproduct

const getproduct = (req,res)=>{
    productdb.find()
    .then((data)=>{
         res.send({data:data})
    })
    .catch((err)=>{
        console.log(err);
        res.send({err:err})
    })
}
//update_product

let updateOne = (req,res)=>{
    productdb.updateOne({Product_Id:req.query.Product_Id},req.body)
    .then((data)=>{
        console.log('Data',data);
         res.send({data:data})
    })
    .catch((err)=>{
        console.log(err);
        res.send({err:err})
    })
}

//softdelete product

const update_product = (req,res)=>{
    productdb.update_product({Product_Id:req.query.Product_Id},req.body)
    .then((data)=>{
        console.log('data',data);
         res.send({message:'deleted',isdeleted:true})
    })
    .catch((err)=>{
        console.log(err);
        res.send({err:err})
    })
}

//delete
const deleteOne = (req,res)=>{
    productdb.deleteOne({userId:req.query.id},req.body)
    .then(()=>{
         res.send({message:'deleted'})
    })
    .catch((err)=>{
        console.log(err);
        res.send({err:err})
    })
}

//search_prod
const opr = (req,res)=>{
    productdb.find({$and:[{Product_Descreption:'jfejfwd'}]})
    .then((data)=>{
         res.send({data:data})
    })
    .catch((err)=>{
        console.log(err);
        res.send({err:err})
    })
}

//sorting_product
const fil = (req,res)=>{
    productdb.findOne({ "field" : { $gt: value1, $lt: value2 } })
    .then((data)=>{
         res.send({data:data})
    })
    .catch((err)=>{
        console.log(err);
        res.send({err:err})
    })
}


module.exports = {admindata,adminlogin,productdetails,getproduct,updateOne,update_product,deleteOne,opr,fil}






