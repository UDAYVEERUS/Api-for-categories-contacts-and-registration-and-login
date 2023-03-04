const express = require('express')
const {categoryPost, categoriesGet, categoryPatch, categoryDelete, getCategoryIsActive} = require('./controller/controller')


const router = express.Router()

router.post("/add", categoryPost)
router.get("/get",categoriesGet)
router.patch("/:id",categoryPatch)
router.delete("/:id",categoryDelete)
router.get("/isactive", getCategoryIsActive)


module.exports = router