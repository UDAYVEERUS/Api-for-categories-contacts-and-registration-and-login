const getHome = async(req, res, next) => {
    try{
        const {categories_home, categories_masthead, products_home} = req
        // console.log(req.products_home,"here")
        if(categories_home, categories_masthead, products_home){
            return res.status(201).json({
                categories_home : categories_home,
                categories_masthead :categories_masthead,
                products_home : products_home,
                // products_home : products_home,
                status : 201
            })
        }
        //products home pr show nai ho rhe hai request  unable to process bata rhi hai
        return res.status(402).json({
            message : "unable to process",
            status : 402
        })
    }
    catch(err){
        return res.status(500).json({
            message : "somthing went wrong",
            status : 500
        })
    }
}

module.exports = getHome