const mongoose = require('mongoose')
let userSchema = mongoose.Schema({
    user_id:{
        type:Number
    },
    user_name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    gender:{
        type:String,
    },
    age:{
        type:Number,
        required:true
    },
    street_address1:{
        type:String,
        required:true
    },
    street_address2:{
        type:String
    },
    city:{
        type:String,
        required:true
    },
    postal_code:{
        type:Number,
        required:true
    },
    Mobile_Number:{
        type:Number,
        requried:true
    },
    Email_ID:{
        type:String,
        required:true
    } 
})


//contact us

//const contactdb = mongoose.model('contact',contactSchema)
module.exports= mongoose.model('user',userSchema) 


