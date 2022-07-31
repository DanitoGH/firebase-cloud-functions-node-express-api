const mongoose  = require('mongoose')
const Schema = mongoose.Schema

const paymentSchema = new Schema({
    product_name: {
        type: String,
        required: true,
    },
    amount: {
        type: String,
        required: true
    },
 }, { 
    timestamps: true
 })

const Payment = mongoose.model('payments', paymentSchema)
module.exports = Payment