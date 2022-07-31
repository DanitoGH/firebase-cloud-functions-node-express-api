const Product = require('../models/Product.model')
const { productSchema } = require('../helpers/validation_schema')

module.exports = {
    getProducts: async (req, res, next) => {
        try {
            const fetchAll = await Product.find().sort({ createdAt: -1 }); // Sorting by descending order
            if(fetchAll.length < 1){
               return res.status(200).send({
                  message: 'Sorry, no product was found'
              })
            }
            
            return res.status(200).json({
                data: fetchAll
            })
        }catch(error) {
            next(error)
        }
    },
    addProduct: async (req, res, next) => {
        try {
            const result = await productSchema.validateAsync(req.body)
           // check for conflict || existing product in the database
            const exist = await Product.findOne({ name: result.name }).exec()
            if(exist){
                res.status(409) // Conflict
                throw new Error("This product already exist in the database")
            }
            // save product
            const product = new Product(result)
            await product.save()
            
            return res.status(200).send({
                message: 'Product successfully added'
            })
        }catch(error) {
            next(error)
        }
    },
    deleteProduct: async (req, res, next) => {
        try {
            const { id } = req.params
            // check if product exist in the database
            const exist = await Product.findById(id).exec()
            if(!exist){
                res.status(404) // Not found
                throw new Error("Sorry, no product was found")
            }
            // delete product
            await Product.findByIdAndDelete(id)

             res.status(200).send({
                message: 'Success'
             })
        }catch(error) {
            next(error)
        }
    }
}