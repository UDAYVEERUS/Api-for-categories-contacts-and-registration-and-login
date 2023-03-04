const categories = require('../categoryiesSchema')
const getCategoryMasthead = async (req, res, next) => {
    try {
        const category_response = await categories.find({}).where("mastHead").equals(true).where('onHome').equals(false)
        if (category_response) {
            req.categories_masthead = category_response
            return next()
        }
        return res.status(402).json({
            message: "unable to add category on masthead",
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
module.exports = getCategoryMasthead