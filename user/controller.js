const { passwordGenerate } = require('../common/password')
const user = require('./userSchema')

const postUser = async (req, res, next) => {
    try {

        const { name, email, mobile, password } = req.body
        const passwordHash = await passwordGenerate(password)
        const user_response = await user.create({
            name,
            email,
            mobile,
            password: passwordHash
        })
        console.log(user_response,"herere")
        if (user_response) {
            return res.status(201).json({
                message: "successfully registred",
                data: user_response,
                status: 201
            })
        }
        return res.status(402).json({
            message: "please fill all required details",
            status: 402
        })
    }
    catch (err) {
        console.log(err)
        return res.status(500).json({
            message: "something went worng",
            data: err,
            status: 500
        })
    }
}

const getUser = async (req, res, next) => {
    try {


        const user_response = await user.find({})
        if (user_response) {
            return res.status(201).json({
                message: "users fetched successfully",
                data: user_response,
                status: 201
            })
        }
        return res.status(402).json({
            message: "unable to fetch users",
            status: 402
        })
    }
    catch (err) {
        return res.status(500).json({
            message: "something went worng",
            data: err,
            status: 500
        })
    }
}
const userGetById = async (req, res, next) => {
    try {

        const user_response = await user.findById(req.Jwt_Data.user.id)
        if (user_response) {
            return res.status(201).json({
                message: "users fetched successfully",
                data: user_response,
                status: 201
            })
        }
        return res.status(402).json({
            message: "unable to fetch users",
            status: 402
        })
    }
    catch (err) {
        return res.status(500).json({
            message: "something went worng",
            data: err,
            status: 500
        })
    }
}

module.exports = { postUser, getUser, userGetById }