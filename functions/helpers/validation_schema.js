const Joi = require('joi');

const productSchema = Joi.object({
    name: Joi.string().min(3).max(20).required(),
    price: Joi.string().min(1).required(),
    description: Joi.string().min(5).max(300).required(),
    image: Joi.string().required(),
})

const paymentSchema = Joi.object({
    product_name:  Joi.string().min(3).max(20).required(),
    amount: Joi.string().min(1).required(),
})

module.exports = {
    productSchema,
    paymentSchema
}