const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    hobby: {
        type: Array,
        require: true
    },
    mobile: {
        type: Number,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

const userDB = mongoose.model("userTBL", userSchema);

module.exports = userDB