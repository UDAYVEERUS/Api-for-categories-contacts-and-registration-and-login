const express = require('express')
const {postUser,getUser} = require('./controller')
const loginPost = require('./login/login')


const router = express.Router()

router.post("/registration", postUser)

router.post('/login',loginPost)

router.get("/get",getUser)
module.exports = router