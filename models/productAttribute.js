const mongoose = require("mongoose");
const productAttributeSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId
    },
    attributeName: {
        type: String
    },
    attributeValue: {
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

module.exports = mongoose.model('productAttribute', productAttributeSchema)