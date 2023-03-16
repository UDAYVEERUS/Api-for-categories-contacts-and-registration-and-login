const products = require('../productsSchema')

const productsAdd = async(req, res, next) => {
    try{
    const products_response = await products.create(req.body)
    if(products_response){
        return res.status(201).json({
            message : "products Added successfully",
            data : products_response,
            status : 201
        })
    }
    return res.status(402).json({
        message : "unable to add products",
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
module.exports = productsAdd