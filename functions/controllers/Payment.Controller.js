const Payment = require('../models/Payment.model')
const { paymentSchema } = require('../helpers/validation_schema')

module.exports = {
    savePayment: async (req, res, next) => {
        try {
            // validate request body with Joi
            const result = await paymentSchema.validateAsync(req.body)
            const payment = new Payment(result)
           
            await payment.save()
            return res.status(200).json({
                message: "Product successfully paid"
            })
        }catch(error) {
            next(error)
        }
    },
}