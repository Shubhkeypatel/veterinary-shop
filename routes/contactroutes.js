let express = require('express')
let {contactdata} = require('../controller/contactcontroller')

let router = express.Router()

router.post('/createcontact',contactdata)
module.exports = router