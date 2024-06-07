const express = require('express')
const path = require('path');
const db = require('./config/Database');
const router = require('./routers/blog.router');
const cookieParser = require('cookie-parser')

const app = express();


app.use(cookieParser())
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '/public')))
app.use("/uploads/img", express.static(path.join(__dirname, "/uploads/img")))
app.use(router);

app.listen(8000, (err) => {
    db();
    err ? console.log("Some thing went wrong") : console.log("sever started on http://localhost:8000")
})