const contact = require('../models/contactmodel')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

//contactus
let contactdata = (req,res)=>{
    let contact1 = new contact({
        "Name":req.body.Name,
        "Email":req.body.Email,
        "inqyiry":req.body.inqyiry,
        "City":req.body.City,
        "State":req.body.State,
        "Zip":req.body.Zip
    })
    contact1.save().then(()=>{
        res.send({"message":'Data has been recorded'})
    })
    .catch((err)=>{
        console.log(err);
        res.send({"message":'data not sent'})
    })
} 
module.exports = {contactdata}  