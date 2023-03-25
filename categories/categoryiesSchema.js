const mongoose = require('mongoose')

const { Schema } = require('mongoose')

const categoriesSchema = new Schema({
    title: {
        type: String,
        requried: true,
    },
    onHome: {
        type: Boolean,
        required: false,
        default: false
    },
    image: {
        type: String,
        required: false,
        default: ""
    },
    is_active: {
        type: Boolean,
        required: false,
        default: true
    },
    description: {
        type: String,
        required: false,
        default: ""
    },
    mastHead: {
        type: Boolean,
        required: false,
        default: false
    }


}, 
{timestamps: true}
)

const categories = mongoose.model("categories", categoriesSchema)

module.exports = categories