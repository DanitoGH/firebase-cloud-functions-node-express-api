const mongoose = require('mongoose')
const DB_CONNECTION_STRING = "mongodb+srv://test_database:xtonlBKyzPLeJhJs@cluster0.2gvqsrd.mongodb.net/test?retryWrites=true&w=majority"

const connectDB = async () => {
  try{
    const conn = await mongoose.connect(DB_CONNECTION_STRING, { useUnifiedTopology: true }, { useNewUrlParser: true })
    console.log("Database connected...")
  } catch(error) {
    console.log(error)
  }
}

module.exports = connectDB