const express = require('express')
const getCategoryHome = require('../categories/controller/category-get-home')
const getCategoryMasthead = require('../categories/controller/category-get-masthead')
const getHome = require('./controller/controller')

const router = express.Router()


router.get("/",
        getCategoryHome,
        getCategoryMasthead,
        getHome
)


module.exports = router