const mongoose = require('mongoose')
const DB_CONNECTION_STRING = ""

const connectDB = async () => {
  try{
    const conn = await mongoose.connect(DB_CONNECTION_STRING, { useUnifiedTopology: true }, { useNewUrlParser: true })
  } catch(error) {
    console.log(error)
  }
}

module.exports = connectDB