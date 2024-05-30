const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    book_title: {
        type: String,
        require: true
    },
    book_price: {
        type: String,
        require: true
    },
    book_img: {
        type: String,
        require: true
    },
    book_discription: {
        type: String,
        require: true
    }
})

const userDB = mongoose.model("Bookstore", userSchema);

module.exports = userDB