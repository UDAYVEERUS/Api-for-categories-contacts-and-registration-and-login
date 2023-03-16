const express = require('express')
const getProductsByUser = require('./product-get-by-user')
const productsGet = require('./get/get')
const productsUpdate = require('./patch/patch')
const productsAdd = require('./post/post')
const getProductHome = require('./getproducthome/get-product-home')

const router = express.Router()

router.post("/add",productsAdd)
router.get("/get",productsGet)
router.get("/:id", getProductsByUser)
router.patch("/:id", productsUpdate)


// router.get("/product", getProductHome)


module.exports = router
