const products = require('../productsSchema')

const productsUpdate = async (req, res, next) => {
    try {
        const productId = req.params.id
        const products_response = await products.findByIdAndUpdate(productId, req.body)
        if (products_response) {
            return res.status(201).json({
                message: "products updated successfully",
                data: products_response,
                status: 201
            })
        }
        return res.status(402).json({
            message: "unable to update products",
            status: 402
        })
    }
    catch (err) {
        return res.status(500).json({
            message: "something went wrong",
            data: err,
            status: 500
        })
    }
}
module.exports = productsUpdate