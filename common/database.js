const mongoose = require('mongoose')

const MONGOURL = 'mongodb+srv://udayveerus:8808613773@cluster0.i72qy8n.mongodb.net/test'

const connectToMongo = () => {
    mongoose.connect(MONGOURL).then(console.log("connected successfully"))
}

mongoose.set("strictQuery", true)
module.exports = connectToMongo