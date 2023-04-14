const express = require('express')
const cors = require("cors")
const app = express()




app.use(cors({"Access-Control-Allow-Origin": "*"}))

app.use(express.json())

const compression = require("compression")
app.use(compression())

const connectToMongo = require('./common/database')
connectToMongo()


app.use("/user", require('./user/route'))
app.use("/message", require('./contact/route'))
app.use("/category", require('./categories/route'))
app.use("/home", require("./home/route"))
app.use("/products", require("./products/route"))

app.use("/upload",require("./upload/rotues"))

const port = 5000
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`)
})