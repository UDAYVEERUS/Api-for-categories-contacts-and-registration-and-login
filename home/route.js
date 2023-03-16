const express = require('express')
const getCategoryHome = require('../categories/controller/category-get-home')
const getCategoryMasthead = require('../categories/controller/category-get-masthead')
const getProductHome = require('../products/getproducthome/get-product-home')
const getHome = require('./controller/controller')

const router = express.Router()


router.get("/",
        getCategoryHome,
        getCategoryMasthead,
        getProductHome,
        getHome
)


module.exports = router