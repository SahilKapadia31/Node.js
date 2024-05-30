const express = require("express")
const router = require("./routers/user.router")
const db = require("./config/database")

const app = express()


app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))

app.use(router)

app.listen(8005, (err) => {
    db();
    if (err) {
        console.log("server is not working in port.");
    }
    else {
        console.log("server is start in port :- 8005");
    }
})