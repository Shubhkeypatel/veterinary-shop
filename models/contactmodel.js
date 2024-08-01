const mongoose = require('mongoose')
let contactSchema = mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    inqyiry:{
        type:String,
        required:true
    },
    City:{
        type:String,
        required:true
    },
    State:{
        type:String,
        required:true
    },
    Zip:{
        type:Number,
        required:true
    }
})
module.exports = mongoose.model('contact',contactSchema)