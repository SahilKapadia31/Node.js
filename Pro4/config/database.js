const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/BookStore");

const db = mongoose.connection;

db.on("connected", (err) => {
    err ? console.log("database is not connected.") : console.log("database is connected successfully")
})
