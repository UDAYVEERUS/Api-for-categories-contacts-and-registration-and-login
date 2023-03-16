const express = require('express')
const app = express()
app.use(express.json())

const compression = require("compression")
app.use(compression())

const connectToMongo = require('./common/database')
connectToMongo()

const cors = require("cors")
app.use(cors())

app.use("/user", require('./user/route'))
app.use("/message", require('./contact/route'))
app.use("/category", require('./categories/route'))
app.use("/home", require("./home/route"))
app.use("/products", require("./products/route"))

app.use("/upload",require("./upload/rotues"))

const port = 3000
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`)
})