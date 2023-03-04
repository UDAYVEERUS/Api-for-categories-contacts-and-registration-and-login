const mongoose = require('mongoose')

const {Schema} = require('mongoose')

const userSChema = new Schema({
    name : {
        type : String,
        required : true

    },
    email : {
        type : String,
        required : true,
        unique :true
    },
    mobile : {
        type : Number,
        required :true,
        unique :true
    },
    password : {
        type : String,
        required : true
    }
},
    {
        timestamps: true
    }
)

const user = mongoose.model("users",userSChema)

module.exports = user