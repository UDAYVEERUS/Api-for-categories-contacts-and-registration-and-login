const jwt = require('jsonwebtoken')
const SECRET_JWT = "itsasecret@1234"

const verifyJwt = async(req, res, next) => {
    const token = req.header('Authorization')
    if(!token){
        return res.status(402).json({
            message : "No jwt provided",
            status : 402
        })
    }
    try{
    const validate = await jwt.verify(token, SECRET_JWT)
    if(validate){
        req.Jwt_Data = validate
        return next()
    }
    return res.status(402).json({
        message : "invalid jwt",
        status : 402
    })

    }
    catch(err){
        return res.status(500).json({
            message : "something went wrong",
            data : err,
            status: 500
        })
    }

}

module.exports   = verifyJwt