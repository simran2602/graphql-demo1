const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    logo:{
        type:String
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

module.exports = mongoose.model("brand", brandSchema);