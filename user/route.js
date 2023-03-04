const express = require('express')
const postUser = require('./controller')
const loginPost = require('./login/login')

const router = express.Router()

router.post("/registration", postUser)

router.post('/login',loginPost)

module.exports = router