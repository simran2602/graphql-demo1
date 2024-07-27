const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    price:{
        type:String
    },
    brandId:{
        type:mongoose.Schema.Types.ObjectId
    },
    categoryId:{
        type:mongoose.Schema.Types.ObjectId
    },
    imageUrls:{
        type:[String]
    },   
    stockQuantity:{
        type:Number
    },   
    rating:{
        type:Number
    }, 
    status: {
        type: Boolean,
        default: true,
    },
    createdOn: {
        type: Date,
    },
    updatedOn:{
        type:Date
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model("product", productSchema);