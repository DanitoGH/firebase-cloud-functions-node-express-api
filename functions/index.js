const functions = require("firebase-functions");
const express = require('express')
const cors = require('cors')
const connectDB = require('./helpers/db')
const { errorHandler } = require('./middleware/errorMiddleware')
const app = express()

// init database
connectDB()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

// //routes handler
app.use('/api/product', require('./routes/Product.route'))
app.use('/api/payment', require('./routes/Payment.route'))

// error handler
app.use(errorHandler)

exports.expressApi = functions.https.onRequest(app)
