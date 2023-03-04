const categories = require('../categoryiesSchema')

const categoryPost = async (req, res, next) => {
    try {
        const category_response = await categories.create(req.body)
        if (category_response) {
            return res.status(201).json({
                data: category_response,
                message: "category added successfully",
                status: 201
            })
        }
        return res.status(402).json({
            message: "unable to add category",
            status: 402
        })
    }
    catch (err) {
        return res.status(500).json({
            data: err,
            message: "err"
        })
    }
}

const categoriesGet = async (req, res, next) => {
    try {
        const category_response = await categories.find({})
        if (category_response) {
            return res.status(201).json({
                data: category_response,
                message: "categories fetched successfully",
                status: 201
            })
        }
        return res.status(402).json({
            message: "unable to fecth categories",
            status: 402
        })
    }
    catch (err) {
        return res.status(500).json({
            data: err,
            message: "err"
        })
    }
}

const categoryPatch = async (req, res, next) => {
    try {
        const  categoryId  = req.params.id
        const category_response = await categories.findByIdAndUpdate(categoryId, req.body)
        if (category_response) {
            return res.status(201).json({
                data: category_response,
                message: "category updated successfully",
                status: 201
            })
        }
        return res.status(402).json({
            message: "unable to update category",
            status: 402
        })
    }
    catch (err) {
        return res.status(500).json({
            data: err,
            message: "err"
        })
    }
}


const categoryDelete = async (req, res, next) => {
    try {
        const  categoryId  = req.params.id
        const category_response = await categories.findByIdAndDelete(categoryId)
        if (category_response) {
            return res.status(201).json({
                success : "deleted",
                data: category_response,
                message: "category deleted successfully",
                status: 201
            })
        }
        return res.status(402).json({
            message: "unable to delete category",
            status: 402
        })
    }
    catch (err) {
        return res.status(500).json({
            data: err,
            message: "err"
        })
    }
}

const getCategoryIsActive = async (req, res, next) => {
    try {
        const category_response = await categories.find({}).where("is_active").equals(true)
        if (category_response) {
            return res.status(201).json({
                success : "fetched",
                data: category_response,
                status: 201
            })
        }
        return res.status(402).json({
            message: "category not found",
            status: 402
        })
    }
    catch (err) {
        return res.status(500).json({
            data: err,
            message: "err"
        })
    }
}

module.exports = { categoryPost, categoriesGet , categoryPatch, categoryDelete, getCategoryIsActive }