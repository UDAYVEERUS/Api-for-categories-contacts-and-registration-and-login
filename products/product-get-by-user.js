const products = require('./productsSchema')

const getProductsByUser = async(req, res, next) => {
    try{
    const productId = req.params.id
    const products_response = await products.findById(productId)
    if(products_response){
        return res.status(201).json({
            message : "products fetched",
            data : products_response,
            status : 201
        })
    }
    return res.status(402).json({
        message : "unable to fetch",
        status : 402
    })
}
catch(err){
    return res.status(500).json({
        message : "something went wrong",
        data : err,
        status : 500
    })
}
}

module.exports = getProductsByUser