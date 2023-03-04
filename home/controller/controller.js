const getHome = async(req, res, home) => {
    try{
        const {categories_home, categories_masthead} = req
        if(categories_home, categories_masthead){
            return res.status(201).json({
                categories_home : categories_home,
                categories_masthead :categories_masthead,
                status : 201
            })
        }
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