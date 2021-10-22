const mongoose = require('mongoose')
const schema = mongoose.Schema

const dbProduct  = new schema ({
    title: {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true,
    },
    size : Number,
    gender : {
        type : String
    },
    comment : {
        type : String
    },
    img : {
        type : String
    },
})

module.exports = mongoose.model('mahsulot' , dbProduct)