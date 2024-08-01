mconst mongoose = require('mongoose')
let adminSchema = mongoose.Schema({
    seller_name:{
        type:String,
        required:true
    },
    seller_id:{
        type:Number,
        required:true
    },
    seller_password:{
        type:String,
        required:true
    }
})


//products

let productSchema = mongoose.Schema({
    Product_Id:{
        type:Number,
        require:true
    },
    Product_name:{
        type:String,
        require:true
    },
    Product_Cost:{
        type:Number,
        require:true
    },
    Product_Descreption:{
        type:String,
        require:true
    },
    isdeleted:{
        type:Boolean,
        require:true
    },
    product_quant:{
        type:Number,
        require:true
    }

})

const admindb=mongoose.model('admin',adminSchema)
const productdb=mongoose.model('product',productSchema)

module.exports= {admindb,productdb}