const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true,
        // minlength: 5,
        // maxlength: 20
    },
    password: {
        type: String,
        required: true,
        // minlength: 6
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // minlength: 5,
        // maxlength: 30
    },
    roll: {
        type: Number,
        required: true,
        unique: true,
        // length: 9
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
        // length: 10
    }
},{timestamps: true});

module.exports = mongoose.model('User',userSchema);