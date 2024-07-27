const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String
    },
    price:{
        type:String
    },
    description:{
        type:String
    },
    stock:{
        type:String
    },    
    status: {
        type: Boolean,
        default: true,
    },
    createdOn: {
        type: Date,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model("product", productSchema);