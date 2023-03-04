const mongoose = require('mongoose')

const MONGOURL = 'mongodb://localhost:27017'

const connectToMongo = () => {
    mongoose.connect(MONGOURL).then(console.log("connected successfully"))
}

mongoose.set("strictQuery", true)
module.exports = connectToMongo