const mongoose = require('mongoose')

const {Schema} = require('mongoose')

const productsSChema = new Schema({
    title : {
        type : String,
        required : true

    },
    description : {
        type : String,
        required : true,
    },
    price : {
        type : Number,
        required :true,
        unique :true
    },
    onHome : {
        type : Boolean,
        default : false,
        required : true
    },
    is_active : {
        type : Boolean,
        default : true,
        required : true
    },
    stock : {
        type : Number,
        default : 0,
        required : true
    },
    sku : {
        type : String,
        required : true,
        unique: true
    },
    image : {
        type : String,
        default : "https://images.unsplash.com/photo-1618403088890-3d9ff6f4c8b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=408&q=80",
        required : false
    }
},
    {
        timestamps: true
    }
)

const products = mongoose.model("products",productsSChema)

module.exports = products