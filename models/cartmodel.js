const mongoose = require('mongoose')
const user = require('../models/usermodel')
let cartSchema = mongoose.Schema({
    // user_Id:{
    //     type:Number,
    //     require:true,
    //    // ref:user
    // },
    product_id:{
        type:Number,
        require:true
    },
    product_quant:{
        type:Number,
        require:true
    }
})
module.exports = mongoose.model('cart',cartSchema)