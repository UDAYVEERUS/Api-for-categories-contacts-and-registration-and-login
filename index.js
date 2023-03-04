const express = require('express')
const app = express()
app.use(express.json())

const connectToMongo = require('./common/database')
connectToMongo()

const cors = require('cors')
app.use(cors())

//REGISTRAION / LOGIN ROUTES
app.use("/user", require('./user/route'))

// MESSAGE SEND/ GET ROUTES
app.use("/message",require('./contact/route'))

//CATEGORIES ROUTES

app.use("/category",require('./categories/route'))

app.use("/home",require("./home/route"))

const port = 3000
app.listen(port,()=>{
    console.log(`server started at localhost://${port}`)
})