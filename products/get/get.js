const products = require('../productsSchema')

const productsGet = async(req, res, next) => {
    try{
    const products_response = await products.find({})
    if(products_response){
        return res.status(201).json({
            message : "products fetched successfully",
            data : products_response,
            status : 201
        })
    }
    return res.status(402).json({
        message : "unable to fetch products",
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
module.exports = productsGet