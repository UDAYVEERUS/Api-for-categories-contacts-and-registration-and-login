const express = require("express")
const router = express.Router()

const fileupload = require("express-fileupload")
const uploadImage = require("./controller")
const cloudinary = require("cloudinary").v2
const compression = require("compression")
router.use(compression())
cloudinary.config({
    cloud_name: 'dp8trmvci',
    api_key: '117143947831187',
    api_secret: 'NddM_fnk8jSrh8bi8u0QDdoV2Mk',
    secure: true
}) 
router.use(fileupload({
    useTempFiles: true
}))
router.post(
    "/image",
    uploadImage
    )


module.exports = router