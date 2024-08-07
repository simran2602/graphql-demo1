const mongoose = require("mongoose");
const productImageSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId
    },
    attributeId:{
        type:mongoose.Schema.Types.ObjectId
    },
    imageUrl: {
        type: String
    },
    imageText: {
        type: Number
    },
    status: {
        type: Boolean,
        default: true,
    },
    createdOn: {
        type: Date,
    },
    updatedOn: {
        type: Date
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model('productImage', productImageSchema)