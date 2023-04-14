const express = require('express')
const { postUser, getUser, userGetById } = require('./controller')
const verifyJwt = require("../common/jwt")
const loginPost = require('./login/login')
const router = express.Router()

router.post("/registration", postUser)
router.post('/login', loginPost)
router.get("/get", getUser)
router.get(
    "/get/byid",
    verifyJwt,
    userGetById
)

module.exports = router