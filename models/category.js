const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    parentId: {
        type: mongoose.Schema.Types.ObjectId,
        default: null
    },
    status: {
        type: Boolean,
        default: true,
    },
    // slug: {
    //     type: String,
    //     required: true,
    //     unique: true
    // },
    
    // meta: {
    //     title: {
    //         type: String
    //     },
    //     description: {
    //         type: String
    //     },
    //     keywords: [{
    //         type: String
    //     }]
    // },
    createdOn: {
        type: Date,
        default: Date.now
    },
    updatedOn: {
        type: Date,
        default: Date.now
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Category', categorySchema);
