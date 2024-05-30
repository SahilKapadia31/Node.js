const mongoose = require("mongoose");

// mongoose.connect("mongodb+srv://sahil_kapadia:1q2w3e4r5t@cluster0.gtbjf30.mongodb.net/user");

// const db = mongoose.connection;

// db.on("connected", (err) => {
//     err ? console.log("database is not connected.") : console.log("database is connected successfully")
// })

const db = async () => {
    await mongoose.connect("mongodb+srv://sahil_kapadia:1q2w3e4r5t@cluster0.gtbjf30.mongodb.net/user");
    console.log("database connected!");
}

module.exports = db
