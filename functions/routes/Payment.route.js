const express = require('express')
const router = express.Router()
const { savePayment } = require('../controllers/Payment.Controller')

router.route('/').post(savePayment)
module.exports = router