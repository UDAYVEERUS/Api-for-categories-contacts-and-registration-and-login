const mongoose = require('mongoose')
const contact = require('../contactSchema')

const postMessage = async(req, res, next) => {
    try{
    const contact_response = await contact.create(req.body)
    if (contact_response) {
        return res.status(201).json({
            message: "message sent successfully",
            data: contact_response,
            status: 201
        })
    }
    return res.status(402).json({
        message: "please fill all required details",
        status: 402
    })
}
catch(Err){
    return res.status(500).json({
        message: "something went wrong",
        data :Err,
        status: 500
    })
}
}

module.exports = postMessage