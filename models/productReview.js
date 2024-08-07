const mongoose = require("mongoose");
const productReviewSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId
    },
    comment: {
        type: String
    },
    rating: {
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

module.exports = mongoose.model('productReview', productReviewSchema)