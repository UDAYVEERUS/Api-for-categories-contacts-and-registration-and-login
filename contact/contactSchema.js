const mongoose = require('mongoose')

const {Schema} = require('mongoose')

const contactSChema = new Schema({
    name : {
        type : String,
        required : true

    },
    email : {
        type : String,
        required : true,
    },
    mobile : {
        type : Number,
        required :true,
    },
    subject : {
        type : String,
        required : true
    },
    message : {
        type : String,
        required : true
    }
},
    {
        timestamps: true
    }
)

const contact = mongoose.model("contcat",contactSChema)

module.exports = contact