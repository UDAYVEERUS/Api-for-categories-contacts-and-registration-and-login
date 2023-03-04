const express = require('express')
const getMessages = require('./get/get')
const postMessage = require('./post/post')

const router = express.Router()

router.post("/send", postMessage)

router.get('/get',getMessages)

module.exports = router