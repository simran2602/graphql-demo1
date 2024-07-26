const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    address:{
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

module.exports = mongoose.model("user", userSchema);