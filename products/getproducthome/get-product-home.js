const products = require("../productsSchema")

const getProductHome = async (req, res, next) => {
    try {
        const product_response = await products.find({}).where('onHome').equals(true)
        if (product_response) {
            req.products_home=product_response
            return next()
        }
        return res.status(500).json({
            message: "Some error occured"
        })
    }
    catch (err) {
        return res.status(500).json({
            message: "Some error occured"
        })
    }
}

module.exports=getProductHome