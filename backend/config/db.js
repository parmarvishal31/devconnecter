const mongoose = require('mongoose')
const config = require('config')
// const db = config.get("mongoURI")
const dotenv = require('dotenv')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('MongoDb Connected....')
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

module.exports = connectDB 