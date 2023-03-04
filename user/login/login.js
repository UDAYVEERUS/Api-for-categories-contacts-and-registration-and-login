const { passwordValidate } = require('../../common/password')
const user = require('../userSchema')

const jwt = require('jsonwebtoken')
const SECRET_JWT = "itsasecret@1234"


const loginPost = async (req, res, next) => {
    try {

        const {  email, password } = req.body
        const user_response = await user.findOne({
            email:email
        })
        const passwordComapre = await passwordValidate(password, user_response.password)
        if(!passwordComapre){
            return res.status(402).json({
                message: "Invalid email or password",
                status: 420
            })
        }
        const data = {
            user : {
                id :user_response._id
            }
        }
        const authToken = await jwt.sign(data,SECRET_JWT)
        return res.status(201).json({success:"login success",token:`${authToken}`})
    }
    catch (err) {
        return res.status(500).json({
            message: "something went worng",
            data: err,
            status: 500
        })
    }
}

module.exports = loginPost